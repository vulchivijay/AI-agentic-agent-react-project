 To write Jest + React Testing Library tests for this React project, we can create a `test` folder and place our tests inside it. Here's an example of how you could structure your tests:
```lua
// test/Header.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Product Page/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = render(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

```lua
// test/MainContent.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import MainContent from '../components/MainContent';

describe('MainContent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MainContent />);
    expect(getByText(/Product Card Content/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = render(<MainContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

```lua
// test/Sidebar.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText(/List Group Item Content/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = render(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```
These tests use React Testing Library's `render()` function to mount our components and test their rendering behavior. We can also write tests to check the props of our components:
```lua
// test/Header.test.tsx
import { render } from '@testing-library/react';
import Header, { HeaderProps } from '../components/Header';

describe('Header', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Product Page/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = render(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom props', () => {
    const customProps: HeaderProps = { className: 'custom-class' };
    const { getByText } = render(<Header {...customProps} />);
    expect(getByText(/Product Page/i)).toBeInTheDocument();
    expect(getByText(/custom-class/i)).toBeInTheDocument();
  });
});
```
And tests to check the interactions with our components:
```lua
// test/Header.test.tsx
import { render, fireEvent } from '@testing-library/react';
import Header, { HeaderProps } from '../components/Header';

describe('Header', () => {
  // ... previous tests ...

  it('handles navigation menu clicks', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Header onClick={handleClick} />);
    fireEvent.click(getByText(/Home/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```
Finally, to ensure that our code coverage is above 80%, we can use a tool like Jest's built-in coverage reporter:
```lua
// package.json
"scripts": {
  "test": "jest",
  "test:e2e": "jest --coverage"
}
```
This will generate a `coverage` folder with HTML reports that show the code coverage percentage for each file in our project. By running our tests with the `--coverage` flag, we can see which parts of our code are not being covered and work on improving that. 