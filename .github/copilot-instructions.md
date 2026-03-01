# React + Vite + TypeScript Coding Standards

## Tech Stack

- React 18
- Vite
- TypeScript (strict)
- Bootstrap 5
- Functional Components only

## File Naming Standards

- Components: PascalCase.tsx
- Pages: PascalCasePage.tsx
- Hooks: useSomething.ts
- Types: something.types.ts

## Component Standards

- Use existing components from `src/components`
- No inline styles
- Use Bootstrap utility classes
- Avoid custom CSS unless necessary
- No anonymous default exports

## TypeScript Rules

- No `any`
- Use explicit return types
- Props must use interface
- Strict null checks enabled

## Bootstrap Rules

- Use Bootstrap Grid (container, row, col)
- Use Bootstrap components:
  - Card
  - Navbar
  - Button
  - Container
  - Row
  - Col
- No reinventing UI

## Testing

- Jest + RTL
- Test coverage >= 80%
- All interactive components must have event tests
