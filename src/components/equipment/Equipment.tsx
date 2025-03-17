import EquipmentSection from '@/components/equipment/EquipmentSection';
import { getEquipmentSections } from '@/utils/equipmentUtils';

export default function Equipment({ gameKey }: { gameKey: string }) {
    const sections = getEquipmentSections(gameKey);

    return (
        <div className="space-y-6">
            {sections.map((section, index) => (
                <EquipmentSection
                    key={section.category + index}
                    gameKey={gameKey}
                    category={section.category}
                    slots={section.slots}
                    hasBorder={index < sections.length - 1}
                />
            ))}
        </div>
    );
}