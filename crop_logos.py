from PIL import Image, ImageChops
import os

for i in range(1, 9):
    path = f"public/images/koblaq/logo_page_{i}.png"
    if os.path.exists(path):
        img = Image.open(path)
        bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
        diff = ImageChops.difference(img, bg)
        diff = ImageChops.add(diff, diff, 2.0, -100)
        bbox = diff.getbbox()
        if bbox:
            # add 20px padding
            bbox = (max(0, bbox[0]-20), max(0, bbox[1]-20), min(img.width, bbox[2]+20), min(img.height, bbox[3]+20))
            cropped = img.crop(bbox)
            cropped.save(f"public/images/koblaq/logo_cropped_{i}.png")
            print(f"Cropped page {i}")
