import numpy as np

def analyze_leaf(image):
    """
    image: numpy array (RGB)
    returns ratios for color-based nutrient deficiency heuristics
    """

    # Split channels
    r = image[:, :, 0].astype(float)
    g = image[:, :, 1].astype(float)
    b = image[:, :, 2].astype(float)

    total_pixels = image.shape[0] * image.shape[1]

    # Yellow pixels (Nitrogen deficiency heuristic)
    yellow_mask = (r > 150) & (g > 150) & (b < 120)
    yellow_ratio = yellow_mask.sum() / total_pixels

    # Purple pixels (Phosphorus deficiency heuristic)
    purple_mask = (r > 120) & (b > 120) & (g < 100)
    purple_ratio = purple_mask.sum() / total_pixels

    # Brown edges (Potassium deficiency heuristic)
    brown_mask = (r > 100) & (g < 100) & (b < 100)
    brown_edge_ratio = brown_mask.sum() / total_pixels

    return {
        "yellow_ratio": float(yellow_ratio),
        "purple_ratio": float(purple_ratio),
        "brown_edge_ratio": float(brown_edge_ratio),
    }
