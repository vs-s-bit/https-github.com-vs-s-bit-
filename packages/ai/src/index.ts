export interface CareerContext {
  student: Record<string, unknown>;
  career?: Record<string, unknown>;
  currentStep?: Record<string, unknown>;
  performance?: Record<string, unknown>;
}

export interface AiProvider {
  explain(context: CareerContext, topic: string): Promise<string>;
  recommend(context: CareerContext): Promise<string[]>;
  generatePractice(context: CareerContext): Promise<unknown>;
  evaluateAnswer(context: CareerContext, answer: string): Promise<unknown>;
}

export class UnconfiguredAiProvider implements AiProvider {
  async explain(_context: CareerContext, topic: string) {
    return `AI provider is not configured. Topic: ${topic}`;
  }
  async recommend(_context: CareerContext) { return []; }
  async generatePractice(_context: CareerContext) { return { questions: [] }; }
  async evaluateAnswer(_context: CareerContext, _answer: string) { return { status: "NOT_CONFIGURED" }; }
}
