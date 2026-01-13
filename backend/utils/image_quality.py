import cv2
import numpy as np

def is_blurry(pil_image, threshold=100):
    # PIL → NumPy
    image = np.array(pil_image)

    # RGB → GRAY
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)

    score = cv2.Laplacian(gray, cv2.CV_64F).var()
    return score < threshold, score


def brightness_level(pil_image):
    image = np.array(pil_image)
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    return gray.mean()
