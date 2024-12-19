# Website 2.0 Development Plan

## Overview

This document outlines the step-by-step process for fixing and improving the existing Website 2.0 implementation, with a focus on theme system and component architecture. Each step includes specific tests and success criteria.

## How to Use This Document

1. Access development plan: `/users/mark/repos/website-2.0/docs/DEVELOPMENT_PLAN.md`
2. Track progress in database: `website-2.0.db`
3. Run tests: `npm test` (after setting up test environment)
4. Update progress: Use provided SQL commands or development tools

## Phase 1: Theme System Refactoring

### 1.1 Theme Configuration Centralization

**Objective**: Move all theme-related configuration to a central location
**Location**: `src/styles/theme.js`

**Tasks**:

1. Create theme configuration file:

```javascript
// src/styles/theme.js
export const theme = {
  colors: {
    primary: '#3B82F6',
    // ... (as defined in theme.yaml)
  },
  // ... other theme properties
};
```

**Test Cases**:

```javascript
// tests/theme.test.js
describe('Theme Configuration', () => {
  test('contains all required color values', () => {
    expect(theme.colors).toHaveProperty('primary');
    expect(theme.colors).toHaveProperty('secondary');
    // ... more assertions
  });
  
  test('dark mode colors are properly defined', () => {
    expect(theme.colors.dark).toBeDefined();
    // ... specific dark mode checks
  });
});
```

**Success Criteria**:

- [ ] All theme tests pass
- [ ] No color definitions in component files
- [ ] Dark mode toggle works with new theme

### 1.2 Component Theme Integration

**Objective**: Update all components to use the centralized theme

**Tasks**:

1. Audit existing components for hardcoded styles
2. Create theme hooks:

```javascript
// src/hooks/useTheme.js
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  // ... theme logic
  return { theme, isDark, toggleTheme };
};
```

**Test Cases**:

```javascript
// tests/components/ThemeIntegration.test.js
describe('Component Theme Integration', () => {
  test('components use theme values', () => {
    const { getByTestId } = render(<TestComponent />);
    const element = getByTestId('themed-element');
    expect(element).toHaveStyle(`color: ${theme.colors.primary}`);
  });
});
```

## Phase 2: Component Architecture Enhancement

### 2.1 Component Structure Reorganization

**Objective**: Implement proper component hierarchy and organization

**Directory Structure**:

```md
src
├── components/
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── hooks/                # Custom hooks
├── utils/                # Utility functions
└── pages/               # Page components
```

**Test Cases**:

```javascript
// tests/architecture.test.js
describe('Component Architecture', () => {
  test('components are properly isolated', () => {
    // Test component isolation
  });
  
  test('shared components are accessible', () => {
    // Test component accessibility
  });
});
```

### 2.2 Component Testing Setup

**Objective**: Implement comprehensive testing infrastructure

**Tasks**:

1. Set up Jest and Testing Library
2. Create test utilities
3. Implement snapshot testing
4. Set up visual regression testing

**Test Structure**:

```javascript
// tests/setup/test-utils.js
export const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};
```

## Database Integration

### Tracking Progress

Use these SQL commands to track development progress:

```sql
-- Add a new component
INSERT INTO components (name, status, description) 
VALUES ('ThemeSystem', 'in_progress', 'Centralized theme management');

-- Track a test result
INSERT INTO test_results (component_id, test_name, test_type, status) 
VALUES (1, 'Theme Configuration Test', 'unit', 'passed');

-- Update milestone status
UPDATE milestones 
SET status = 'completed', completed_date = DATE('now')
WHERE name = 'Theme System Implementation';
```

## Running Tests

1. Install test dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

1. Add test script to package.json:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

1. Run tests:

```bash
npm test
```

## Success Metrics

Each phase must meet these criteria:

1. All unit tests pass
2. Integration tests pass
3. Visual regression tests show no unexpected changes
4. Performance metrics meet targets
5. Code coverage > 80%

## Next Steps

1. Run initial test suite to establish baseline
2. Begin Theme System refactoring
3. Track progress in database
4. Update documentation as changes are made
