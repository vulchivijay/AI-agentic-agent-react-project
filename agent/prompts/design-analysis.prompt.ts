export const designAnalysisPrompt = (imagePath: string) => `
You are a Senior UI Architect.

Analyze the uploaded design image at: ${imagePath}

Return structured JSON:

{
  layout: "",
  sections: [],
  bootstrapMapping: [],
  componentsRequired: [],
  responsiveRules: [],
  accessibilityRequirements: [],
  pageName: "",
  detailedComponentTree: ""
}

Constraints:
- Must map layout to Bootstrap grid
- Must reuse existing components folder
- Must not create custom UI elements
- Be precise
`;