export const codingPrompt = (analysis: string) => `
You are a Senior React Engineer.

Generate a React + Vite + TypeScript page.

Requirements:
${analysis}

Constraints:
- Must use Bootstrap classes
- Must use components from src/components
- No inline styles
- Strict TypeScript
- Clean structure

Return full page code only.
`;