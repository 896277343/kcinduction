from pathlib import Path
import sys
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(r"D:\down23\kclogo2.jpg")
OUTPUT = ROOT / "public" / "images" / "kc" / "logo-color-dark.webp"

with Image.open(SOURCE) as original:
    rgb = original.convert("RGB")
    pixels = []
    for red, green, blue in rgb.getdata():
        minimum = min(red, green, blue)
        maximum = max(red, green, blue)

        # Remove the white JPEG background while retaining smooth anti-aliased edges.
        distance_from_white = 255 - minimum
        alpha = 0 if distance_from_white < 40 else max(0, min(255, (distance_from_white - 30) * 15))

        # The navigation and footer are dark, so change only neutral dark lettering to white.
        if maximum < 175 and maximum - minimum < 34:
            pixels.append((255, 255, 255, alpha))
        else:
            pixels.append((red, green, blue, alpha))

    logo = Image.new("RGBA", rgb.size)
    logo.putdata(pixels)
    bounds = logo.getchannel("A").getbbox()
    if bounds:
        logo = logo.crop(bounds)

    target_height = 96
    target_width = round(logo.width * target_height / logo.height)
    logo = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    logo.save(OUTPUT, "WEBP", quality=92, method=6)

    # Use the colored KC mark from the same artwork for browser and device icons.
    mark_source = original.convert("RGBA").crop((8, 35, 100, 122))
    mark_pixels = []
    for red, green, blue, _ in mark_source.getdata():
        minimum = min(red, green, blue)
        distance_from_white = 255 - minimum
        alpha = 0 if distance_from_white < 40 else max(0, min(255, (distance_from_white - 30) * 15))
        mark_pixels.append((red, green, blue, alpha))
    mark_source.putdata(mark_pixels)
    mark_bounds = mark_source.getchannel("A").getbbox()
    if mark_bounds:
        mark_source = mark_source.crop(mark_bounds)
    mark_source.thumbnail((56, 56), Image.Resampling.LANCZOS)
    icon = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    icon.alpha_composite(mark_source, ((64 - mark_source.width) // 2, (64 - mark_source.height) // 2))
    icon.save(ROOT / "app" / "icon.png", "PNG", optimize=True)
    icon.save(ROOT / "app" / "favicon.ico", "ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    print(f"logo: {logo.width}x{logo.height}; icons: 64x64")
