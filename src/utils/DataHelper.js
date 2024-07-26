export function getUniqueMaterials(data) {
    const materialsSet = new Set(data.map(item => item.material));
    return Array.from(materialsSet);
}