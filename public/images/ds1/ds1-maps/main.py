import os
import json

# Define the output JSON file
output_file = "images.json"
image_directory = "/soulsborne-tracker/images/ds2/"


def generate_image_json():
    image_data = []

    # Get all PNG files in the current directory
    for file in os.listdir():
        if file.endswith(".png"):
            file_name = os.path.splitext(file)[0]  # Remove extension
            parts = file_name.split("_")
            formatted_name = ''
            for part in parts:
                formatted_name += part.capitalize() + " "
            image_path = f"{image_directory}{file}"

            image_data.append({
                "id": file_name,
                "name": formatted_name,
                "imagePath": image_path
            })

    # Save to JSON file
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(image_data, json_file, indent=4)

    print(
        f"JSON file '{output_file}' has been created with {len(image_data)} entries.")


if __name__ == "__main__":
    generate_image_json()
