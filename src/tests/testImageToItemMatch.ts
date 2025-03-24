// src/tests/testImageToItemMatch.ts
import fs from 'fs';
import path from 'path';
import { EquipmentItem } from '@/data/equipmentItems';
import { DES_EQ_ITEMS } from '@/data/equipment/des_eq';

const PATH = 'public/images/des/eqItems';

function testImagesMatchItems() {
    // Get all equipment items from your dataset
    const allItems: EquipmentItem[] = DES_EQ_ITEMS;
    const allItemIds = new Set(allItems.map(item => item.id));

    const publicDir = path.join(process.cwd(), PATH);
    const unmatchedImagesByCategory: Record<string, string[]> = {};

    // Read all categories in the images directory
    const categories = fs.readdirSync(publicDir)
        .filter(file => fs.statSync(path.join(publicDir, file)).isDirectory());

    // Check images in each category
    categories.forEach(category => {
        const categoryDir = path.join(publicDir, category);
        const imageFiles = fs.readdirSync(categoryDir)
            .filter(file => file.toLowerCase().endsWith('.jpg'))
            .map(file => path.parse(file).name); // Remove .jpg extension

        const unmatchedImages = imageFiles.filter(imageId =>
            !allItemIds.has(imageId)
        );

        if (unmatchedImages.length > 0) {
            unmatchedImagesByCategory[category] = unmatchedImages;
        }
    });

    // Report results
    if (Object.keys(unmatchedImagesByCategory).length === 0) {
        console.log('✅ All images have corresponding items in the dataset.');
        return true;
    } else {
        console.error(`❌ Found ${Object.values(unmatchedImagesByCategory).flat().length} images without matching items:\n`);

        // Print results by category
        Object.entries(unmatchedImagesByCategory).forEach(([category, images]) => {
            console.error(`\n== CATEGORY: ${category.toUpperCase()} (${images.length} unmatched) ==`);

            images.forEach(imageId => {
                console.error(`- Missing item for image: ${imageId}`);
                console.error(`  Image path: ${PATH}/${category}/${imageId}.jpg`);
            });
        });

        // Print a summary
        console.error(`\n== SUMMARY ==`);
        Object.entries(unmatchedImagesByCategory)
            .sort((a, b) => b[1].length - a[1].length) // Sort by number of unmatched images (descending)
            .forEach(([category, images]) => {
                console.error(`- ${category}: ${images.length} unmatched images`);
            });

        return false;
    }
}

// Run the test
const result = testImagesMatchItems();
process.exit(result ? 0 : 1);