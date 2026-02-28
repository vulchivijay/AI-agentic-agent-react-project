# Copilot Instructions for AI-agentic-agent-react-project

## Project Overview

- This repository is a TypeScript-based React application using Vite for fast development and Bootstrap for UI components.
- All reusable Bootstrap components are implemented in `src/components` as `.tsx` files.
- The app features an agentic agent architecture for automating page creation, code review, and testing tasks.

## Key Implementation Details

- **TypeScript**: All source files use `.tsx` or `.ts` extensions. No `.jsx` or `.js` files are present.
- **Bootstrap Components**: All major and advanced Bootstrap components (Alert, Button, Card, Modal, Navbar, Table, Toast, Spinner, ProgressBar, ListGroup, Dropdown, Collapse, Carousel, Offcanvas, Nav, Tab, Popover, Tooltip, CloseButton, Image, Row, Col, Breadcrumb, Accordion, Pagination, Form, Input) are available in `src/components`.
- **Agentic Agent**: The agent logic is implemented in `scripts/agenticAgent.ts` and integrated in the main app page. It supports analysis, code generation, code review, unit testing, and system testing.
- **App Page**: The main UI is centered, modern, and uses Bootstrap classes for layout and style. It allows file upload, analysis, and code generation using the agentic agent.
- **Vite & ESLint**: Project uses `vite.config.ts` and `eslint.config.ts` for configuration. TypeScript linting is enabled.

## Usage

- To add new features, create `.tsx` components in `src/components` and update logic in `scripts/agenticAgent.ts` as needed.
- For agentic automation, use the app UI to upload design screenshots or requirement documents, analyze, and generate code.
- All new code should follow TypeScript and Bootstrap standards.

## Contribution Guidelines

- Use TypeScript for all new files.
- Prefer reusable Bootstrap components from `src/components`.
- Keep agent logic modular in `scripts/agenticAgent.ts`.
- Update documentation and instructions as features evolve.

---
