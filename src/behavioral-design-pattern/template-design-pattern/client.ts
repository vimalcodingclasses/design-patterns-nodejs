import { CsvProcessor } from "./CsvProcessor";
import { DataProcessor } from "./DataProcessor";
import { JsonProcessor } from "./JsonProcessor";

function clientCode(processor: DataProcessor, fileName: string) {
    processor.process(fileName);
}

const jsonProc = new JsonProcessor();
clientCode(jsonProc, "data.json");

const csvProc = new CsvProcessor();
clientCode(csvProc, "data.csv");