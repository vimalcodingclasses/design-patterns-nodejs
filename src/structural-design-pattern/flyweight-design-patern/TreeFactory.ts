import { TreeType } from "./TreeType";

export class TreeFactory {
    // This Map acts as our cache
    static treeTypes: Map<string, TreeType> = new Map();

    static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}-${color}-${texture}`;

        let type = this.treeTypes.get(key);

        if (!type) {
            type = new TreeType(name, color, texture);
            this.treeTypes.set(key, type);
            console.log(`-> Factory: Created new TreeType: ${key}`);
        } else {
            console.log(`-> Factory: Reusing existing TreeType: ${key}`);
        }

        return type;
    }
}