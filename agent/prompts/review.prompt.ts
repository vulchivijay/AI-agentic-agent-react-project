export const reviewPrompt = (code: string) => `
Review the following React code.

Check against:
- copilot-instructions.md
- TypeScript strict mode
- Bootstrap usage
- Clean code
- Accessibility
- Performance

Return:
{
  issues: [],
  suggestions: [],
  refactoredCode: ""
}
`;