# Website 2.0 Migration Briefing

## Project Overview

Migrating labarbara.cc from a mixed architecture (flat + partial component) to a streamlined, component-based structure. Focus on minimizing redundancy, centralizing theme management, and maximizing code reusability.

## Repository Locations

1. Current Website: `/Users/mark/repos/website/`
   - Flat structure in root (*.html files)
   - Partial component structure in src/
   - Active development in root directory
   - Last src/ update: 12/09/2024

2. Target Website: `/Users/mark/repos/website-2.0/`
   - Clean component architecture
   - All development in src/
   - Streamlined build process
   - Minimal dependencies

## Key Files

1. Current Website:
   - HTML: website/*.html
   - Styles: styles/main.css → styles/mainout.css
   - JavaScript: js/ directory
   - Components: src/components/
   - Database: website.db (migration tracking)

2. Website 2.0:
   - Pages: src/pages/*.html
   - Styles: src/styles/main.css → src/styles/out.css
   - Components: src/components/
   - JavaScript: src/js/
   - Assets: src/assets/

## Architecture Goals

1. Centralization:
   - Single theme management system
   - Shared component library
   - Unified color scheme
   - Consistent dark mode implementation
   - Centralized navigation

2. Component Reusability:
   - Shared card components
   - Common layout structures
   - Reusable profile sections
   - Standard content blocks

## Required Tools

1. Memory System:

   ```bash
   # Create entities for tracking structures
   create_entities
   create_relations
   ```

2. Sequential Thinking:

   ```bash
   # Use for step-by-step analysis
   sequentialthinking
   ```

3. Knowledge Graph:
   - Track dependencies
   - Map relationships
   - Monitor changes
   - Validate structure

4. Database:
   - website.db for tracking changes
   - Update as migrations complete

## Build System

1. Development:

   ```bash
   npm run dev
   # Watches src/**/*.{html,js,css}
   # Outputs to src/styles/out.css
   ```

2. Production:

   ```bash
   npm run build
   # Minifies output
   # Optimizes assets
   ```

## Instructions for Claude

1. Initial Analysis:
   - Read both repository structures
   - Analyze current dependencies
   - Map component relationships
   - Identify redundancies

2. Knowledge Building:
   - Create entity graph
   - Map file relationships
   - Track dependencies
   - Monitor migration progress

3. Sequential Approach:
   - Use sequential thinking for each phase
   - Validate changes incrementally
   - Test component integration
   - Verify theme consistency

4. Focus Areas:
   - Minimize code duplication
   - Centralize theme management
   - Create reusable components
   - Maintain consistent patterns

## Migration Goals

1. Technical:
   - Component-based architecture
   - Centralized theme system
   - Efficient build process
   - Clean dependency structure

2. Design:
   - Modern, sleek appearance
   - Consistent user experience
   - Smooth dark mode
   - Responsive design

3. Code Quality:
   - DRY principles
   - Clear documentation
   - Consistent patterns
   - Maintainable structure

## Key Principles

1. Single Source of Truth:
   - One location for theme variables
   - Centralized component library
   - Shared style definitions
   - Common JavaScript utilities

2. Minimal Redundancy:
   - Shared components over duplication
   - Centralized color management
   - Common layout patterns
   - Reusable animations

3. Consistency:
   - Unified design language
   - Standard component usage
   - Consistent file structure
   - Clear naming conventions

4. Documentation:
   - Track all changes to all files using git
   - Every change to a file must be followed by a git commit
   - git push major changes such as adding or removing files
   - git push occasionally throughout the process, perhaps every 5-10 commits
   - Keep a working markdown document tracking changes made and update memory with changes as you make them.

---

Copy this briefing at the start of each new chat session to initialize the migration context. Claude should begin by:

1. Reading both repository structures
2. Create your own, new working md file to track changes in this session and git add git commit git push it
3. Creating knowledge graph relationships
4. Analyzing current vs target architectures
5. Planning next migration steps

The focus should always be on creating a streamlined, maintainable codebase with minimal redundancy and maximum reusability.
