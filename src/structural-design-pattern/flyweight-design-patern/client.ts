import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

class Forest {
    private trees: Tree[] = [];

    public plantTree(x: number, y: number, name: string, color: string, texture: string) {
        // We ask the factory for the Type. It will either create it or return an existing one.
        const type = TreeFactory.getTreeType(name, color, texture);

        // We create a lightweight Tree object that holds the coordinates and the reference
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    public draw(canvas: any) {
        for (const tree of this.trees) {
            tree.draw(canvas);
        }
    }
}

// --- Usage ---

const forest = new Forest();

// Plant 3 trees. Two are identical types, one is different.
forest.plantTree(10, 20, 'Oak', 'Green', 'RoughTexture');
forest.plantTree(15, 25, 'Oak', 'Green', 'RoughTexture'); // Reuses 'Oak-Green-RoughTexture'
forest.plantTree(100, 200, 'Pine', 'DarkGreen', 'SmoothTexture'); // Creates new

console.log('\n--- Drawing Forest ---');
forest.draw("MyCanvas");