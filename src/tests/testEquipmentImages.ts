// equipmentImageTest.ts
import fs from 'fs';
import path from 'path';
import { DS2_EQ_ITEMS } from '../data/equipment/ds2_eq';

const EXPECTED_PATH = 'public/images/ds2/eqItems';

function testEquipmentImages() {
    // Get all equipment items from your dataset
    const allItems = DS2_EQ_ITEMS;
    const missingImagesByCategory: Record<string, Array<{ id: string, name: string }>> = {};
    const publicDir = path.join(process.cwd(), EXPECTED_PATH);

    // Make sure the directory exists
    if (!fs.existsSync(publicDir)) {
        console.error(`❌ Directory not found: ${publicDir}`);
        return false;
    }

    // Check each item
    allItems.forEach(item => {
        const category = item.category;
        const itemId = item.id;
        const expectedImagePath = path.join(publicDir, category, `${itemId}.jpg`);

        if (!fs.existsSync(expectedImagePath)) {
            // Initialize the category array if it doesn't exist
            if (!missingImagesByCategory[category]) {
                missingImagesByCategory[category] = [];
            }

            // Add the missing item to its category
            missingImagesByCategory[category].push({
                id: itemId,
                name: item.name
            });
        }
    });

    // Count total missing images
    const totalMissing = Object.values(missingImagesByCategory)
        .reduce((sum, items) => sum + items.length, 0);

    // Report results
    if (totalMissing === 0) {
        console.log('✅ All equipment items have corresponding images.');
        return true;
    } else {
        console.error(`❌ Missing ${totalMissing} images across ${Object.keys(missingImagesByCategory).length} categories:\n`);

        // Print results by category
        Object.entries(missingImagesByCategory).forEach(([category, items]) => {
            console.error(`\n== CATEGORY: ${category.toUpperCase()} (${items.length} missing) ==`);

            items.forEach(item => {
                console.error(`- ${item.name} (ID: ${item.id})`);
                console.error(`  Expected path: ${EXPECTED_PATH}/${category}/${item.id}.jpg`);
            });
        });

        // Print a summary
        console.error(`\n== SUMMARY ==`);
        Object.entries(missingImagesByCategory)
            .sort((a, b) => b[1].length - a[1].length) // Sort by number of missing items (descending)
            .forEach(([category, items]) => {
                console.error(`- ${category}: ${items.length} missing images`);
            });

        return false;
    }
}

// Run the test
const result = testEquipmentImages();
process.exit(result ? 0 : 1); // Exit with error code if images are missing