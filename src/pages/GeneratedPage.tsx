 Sure, I can help you create a React + Vite + TypeScript page that meets the requirements provided in your JSON. Here's an example of how you could structure your project:
```typescript
// src/components/Header.tsx
import * as React from 'react';
import { BootstrapGrid, Navbar, Nav } from 'bootstrap-5-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <Navbar className={className}>
    <Navbar.Brand href="/">Product Page</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href="#homeSubmenu">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
```

```typescript
// src/components/MainContent.tsx
import * as React from 'react';
import { BootstrapGrid, Card } from 'bootstrap-5-react';

interface MainContentProps {
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ className }) => (
  <div className={className}>
    <BootstrapGrid columns={2} mdColumns={3}>
      <Card>Product Card Content</Card>
      <Card>Product Card Content</Card>
      {/* Add more product cards here */}
    </BootstrapGrid>
  </div>
);

export default MainContent;
```

```typescript
// src/components/Sidebar.tsx
import * as React from 'react';
import { BootstrapGrid, ListGroup } from 'bootstrap-5-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => (
  <div className={className}>
    <ListGroup>
      {/* Add list group items here */}
    </ListGroup>
  </div>
);

export default Sidebar;
```
In this example, we have created three functional components: Header, MainContent, and Sidebar. Each component uses Bootstrap's React components from the `bootstrap-5-react` package to render its corresponding section of the product page design.

To make our project strictly TypeScript and ensure that no inline styles are used, we can define types for our components' props and use those types throughout our codebase. For example:
```typescript
// src/components/Header.tsx
import * as React from 'react';
import { BootstrapGrid, Navbar, Nav } from 'bootstrap-5-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <Navbar className={className}>
    <Navbar.Brand href="/">Product Page</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href="#homeSubmenu">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
```
In this example, we have defined a `HeaderProps` interface that specifies the shape of the props object that our `Header` component expects. We then use that interface to type our component's `props` parameter. This ensures that only the expected properties are passed to our component and helps catch errors at compile-time instead of runtime.

Similarly, we can define types for our other components' props as well. Finally, by using Bootstrap's React components from the `bootstrap-5-react` package, we ensure that our code adheres to the Bootstrap 5 framework and follows its responsive design principles. 