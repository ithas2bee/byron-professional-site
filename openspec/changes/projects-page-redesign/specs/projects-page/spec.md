# Projects Page Overview Specification

## ADDED Requirements

### Requirement: Featured project presentation
The Projects overview MUST present one selected project as the featured item, including its project name, concise factual summary, relevant tags, project visual, and a working path to its existing detailed case study.

#### Scenario: Visitor views a featured project
- **WHEN** a visitor opens the Projects page
- **THEN** the page shows one active project with its matching title, summary, tags, visual, and View Project destination
- **AND** the destination points to that project's existing case-study section

### Requirement: Browse all portfolio projects
The Projects overview MUST make all six existing projects discoverable: PresiCompare, Huddle Up, ScholarDesk, Kokishin, Little Ask, and AEGIS.

#### Scenario: Visitor browses the project collection
- **WHEN** a visitor uses the project selector or preview collection
- **THEN** each of the six projects can be selected as the featured project
- **AND** the selected project's displayed information and case-study link remain associated with the same project

### Requirement: Category filtering
The Projects overview MUST provide category filters for All, Web Apps, Mobile, and Desktop, consistent with the visual reference.

#### Scenario: Visitor filters projects by category
- **WHEN** a visitor selects a category filter
- **THEN** the active filter is visually and programmatically identifiable
- **AND** the browsable project collection shows projects matching that category
- **AND** selecting All restores the full collection

### Requirement: Carousel navigation
The featured project MUST support previous, next, direct selection, and play/pause controls.

#### Scenario: Visitor navigates featured projects
- **WHEN** a visitor activates previous, next, a project indicator, a project-name selector, or a project preview
- **THEN** the matching project becomes active
- **AND** the active indicator and accessible status are updated
- **AND** navigation behaves consistently at the beginning and end of the project collection

#### Scenario: Visitor pauses automatic rotation
- **WHEN** automatic rotation is playing and the visitor activates Pause
- **THEN** automatic rotation stops until resumed

### Requirement: Accurate project information
The Projects overview MUST use accurate project descriptions and MUST NOT present planned or future functionality as currently available.

#### Scenario: AEGIS MVP and future roadmap are presented
- **WHEN** AEGIS information is displayed
- **THEN** monitoring, incident/error detection, automated ticket creation, severity classification, centralized ticket management, and incident status tracking are described as MVP scope
- **AND** AI-powered analysis, GitHub issue/branch automation, coding-agent integration, proposed code fixes, and pull request workflows are labeled as future V2 direction rather than MVP functionality

### Requirement: Accessible project browsing
The project filters and navigation MUST be usable by keyboard and assistive technology.

#### Scenario: Visitor navigates with a keyboard
- **WHEN** a visitor tabs through project controls
- **THEN** every interactive filter and navigation control has a visible focus state and an accessible name
- **AND** hidden or filtered-out project content does not receive keyboard focus
- **AND** the active project and filter state are available to assistive technology

### Requirement: Responsive and motion-aware layout
The Projects overview MUST remain usable at desktop and mobile viewport sizes and MUST respect the user's reduced-motion preference.

#### Scenario: Visitor uses a narrow viewport or reduced-motion setting
- **WHEN** the Projects page is displayed on a narrow viewport
- **THEN** the featured content and controls adapt without horizontal page overflow or overlapping controls
- **AND WHEN** the visitor has enabled reduced motion
- **THEN** animated transitions and automatic rotation are disabled or reduced to a non-disruptive experience
