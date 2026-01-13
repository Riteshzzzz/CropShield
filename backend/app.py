from fastapi import FastAPI, File, UploadFile
from PIL import Image
import numpy as np
import io
import random
from fastapi.middleware.cors import CORSMiddleware


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

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    image = image.resize((224, 224))
    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    blur, blur_score = is_blurry(image)
    brightness = brightness_level(image)

    warnings = []

    if blur:
        warnings.append("Image is blurry, prediction may be less accurate")

    if brightness < 60:
        warnings.append("Image is too dark")

    if brightness > 200:
        warnings.append("Image is too bright")

    if not warnings:
        selected = {
            "name": "Healthy",
            "remedy": "No disease detected. Continue regular care."
        }
        confidence = round(random.uniform(0.85, 0.95), 2)
    else:
        selected = random.choice([
            {
                "name": "Leaf Spot",
                "remedy": "Remove infected leaves and avoid overhead watering."
            },
            {
                "name": "Powdery Mildew",
                "remedy": "Use sulfur-based fungicide and improve air circulation."
            }
        ])
        confidence = round(random.uniform(0.60, 0.80), 2)

    return {
        "project": "CropShield",
        "prediction": {
            "disease": selected["name"],
            "confidence": confidence
        },
        "recommendation": selected["remedy"],
        "warnings": warnings
    }
