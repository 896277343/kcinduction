from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / "public" / "images" / "kc" / "products" / "first-generation-mainboard.webp"
output = ROOT / "public" / "images" / "kc" / "products" / "first-generation-mainboard-left-90.webp"

with Image.open(source) as image:
    rotated = image.transpose(Image.Transpose.ROTATE_90)
    rotated.save(output, "WEBP", quality=88, method=6)
    print(f"{output.name}: {rotated.width}x{rotated.height}")
