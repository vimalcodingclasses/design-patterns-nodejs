import { FileSystemComponent } from "./FileSystemComponent";
import { Folder } from "./Folder";
import { File } from "./File";

function clientCode(component: FileSystemComponent) {
    console.log(`RESULT: Total size is ${component.getSize()} KB\n`);
}

// 1. Create simple Leafs
const file1 = new File("resume.pdf", 200);
const file2 = new File("photo.png", 500);
const file3 = new File("config.json", 10);

// 2. Create a Composite (Folder) and add Leafs
const rootFolder = new Folder("root");
const documents = new Folder("documents");

documents.add(file1);
documents.add(file2);

// 3. Nesting: Add the 'documents' folder and a file to 'root'
rootFolder.add(documents);
rootFolder.add(file3);

// 4. Execution
console.log("--- Leaf Client Code ---");
clientCode(file1); // Works on a single file

console.log("--- Composite Client Code ---");
clientCode(rootFolder); // Works on a recursive tree