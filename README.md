# React Calculator App

A modern calculator application built with React, Vite, and tested with Vitest and Cypress.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal point support
- Clear functionality
- Equals button for completing calculations
- Modern UI with responsive design
- Comprehensive test coverage (Unit and E2E tests)

## Project Structure

```
react-calculator-app-testing/
├── src/
│   ├── components/
│   │   ├── Calculator/
│   │   │   ├── Calculator.jsx
│   │   │   ├── Calculator.css
│   │   │   └── __tests__/
│   │   │       └── Calculator.test.jsx
│   │   ├── Calculator.jsx
│   │   ├── Calculator.css
│   │   └── __tests__/
│   │       └── Calculator.test.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── setupTests.js
├── cypress/
│   ├── e2e/
│   │   └── calculator.cy.js
│   ├── fixtures/
│   └── support/
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aroxed/react-calculator-app-testing
cd react-calculator-app-testing
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests with Vitest
- `npm run test:coverage` - Run unit tests with coverage report
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests in headless mode

## Testing

### Unit Tests
The project uses Vitest and React Testing Library for unit testing. Vitest is a modern testing framework that's built on top of Vite, providing a faster and more efficient testing experience. Tests are located in the `__tests__` directory within each component.

Key features of our testing setup:
- Fast execution with Vite's native ESM support
- Built-in TypeScript support
- Compatible with Jest's API
- Hot Module Replacement (HMR) for tests
- Coverage reporting with @vitest/coverage-v8

### E2E Tests
Cypress is used for end-to-end testing. Tests are located in the `cypress/e2e` directory. The E2E tests verify:
- Basic arithmetic operations
- Decimal number handling
- Clear functionality
- Multiple operations in sequence
- Equals button behavior
- Calculator state management

Test artifacts (screenshots and videos) are automatically generated for failed tests in:
- `cypress/screenshots/` - Screenshots of test failures
- `cypress/videos/` - Videos of test runs

## Development

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Testing**:
  - Unit Tests: Vitest + React Testing Library
  - E2E Tests: Cypress
- **Styling**: Plain CSS
- **Package Manager**: npm
