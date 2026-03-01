export const unitTestPrompt = (componentCode: string) => `
Write Jest + React Testing Library tests for this component:

${componentCode}

Requirements:
- Test rendering
- Test props
- Test user interactions
- Accessibility checks
- Coverage > 80%
`;