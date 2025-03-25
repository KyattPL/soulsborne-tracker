from PIL import Image
import os

# Set the folder path
folder_path = r"F:\WWW-dev\soulsborne-tracker\public\images\ds3\eqItems\armor"
output_folder = os.path.join(folder_path, "converted_jpgs")

# Create output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Loop through files in the folder
for filename in os.listdir(folder_path):
    if filename.lower().endswith(".webp"):
        webp_path = os.path.join(folder_path, filename)
        jpg_path = os.path.join(
            output_folder, filename.rsplit(".", 1)[0] + ".jpg")

        # Open and convert
        with Image.open(webp_path) as img:
            img = img.convert("RGB")  # Ensure proper conversion
            img.save(jpg_path, "JPEG", quality=95)

        print(f"Converted: {filename} -> {jpg_path}")

print("Conversion complete!")
