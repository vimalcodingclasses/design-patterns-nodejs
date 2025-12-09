// Observer 2: A class method (more traditional Observer approach)
export class AnalyzerObserver {
    constructor(private name: string) {
        this.name = name;
    }

    // The 'update' method
    analyze(data: any) {
        if (data > 50) {
            console.log(`[${this.name}] ALERT: Data threshold exceeded! Value: ${data}`);
        } else {
            console.log(`[${this.name}] Data within range.`);
        }
    }
}