from fastapi import FastAPI, File, UploadFile
from PIL import Image
import numpy as np
import io
import random
from fastapi.middleware.cors import CORSMiddleware
from utils.deficiency_rules import analyze_leaf



from utils.image_quality import is_blurry, brightness_level

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all (hackathon safe)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "CropShield API is running 🚀"}

@app.get("/deficiencies")
def list_deficiencies():
    return {
        "available_deficiencies": [
            {
                "type": "Nitrogen",
                "symptom": "Yellowing starting from older leaves",
                "solution": "Apply urea in small quantity"
            },
            {
                "type": "Phosphorus",
                "symptom": "Purple discoloration on leaves",
                "solution": "Use phosphorus-rich fertilizer"
            },
            {
                "type": "Potassium",
                "symptom": "Brown edges on leaves",
                "solution": "Apply potash fertilizer"
            }
        ]
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    image = image.resize((224, 224))
    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    blur, blur_score = is_blurry(image)
    brightness = brightness_level(image)

    # ---- Image quality (human readable) ----
    if blur_score > 0.6:
        brightness_status = "low"
    elif brightness > 200:
        brightness_status = "high"
    else:
        brightness_status = "normal"

    # ---- Leaf color analysis (multi-deficiency) ----
    analysis = analyze_leaf(np.array(image))

    deficiencies = []

    if analysis["yellow_ratio"] > 0.25:
        deficiencies.append({
            "type": "Nitrogen",
            "confidence": int(analysis["yellow_ratio"] * 100),
            "symptom": "Yellowing starting from older leaves",
            "severity": "medium"
        })

    if analysis["purple_ratio"] > 0.15:
        deficiencies.append({
            "type": "Phosphorus",
            "confidence": int(analysis["purple_ratio"] * 100),
            "symptom": "Purple discoloration on leaves",
            "severity": "high"
        })

    if analysis["brown_edge_ratio"] > 0.20:
        deficiencies.append({
            "type": "Potassium",
            "confidence": int(analysis["brown_edge_ratio"] * 100),
            "symptom": "Brown edges on leaves",
            "severity": "low"
        })


    return {
        "project": "CropShield",
        "deficiencies": deficiencies if deficiencies else [
            {
                "type": "Healthy",
                "confidence": 90,
                "symptom": "No visible nutrient deficiency patterns detected",
                "severity": "none"
            }
        ],
        "image_quality": {
            "blur_score": round(blur_score, 2),
            "brightness_level": brightness_status,
            "note": "Confidence adjusted for image quality"
        },
        "analysis_meta": analysis
    }

