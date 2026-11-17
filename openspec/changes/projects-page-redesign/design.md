# Design: Projects Page Redesign

## Visual Direction
Use the supplied Projects-page screenshot as the reference for a clean, light editorial layout with a centered content width and clear spacing:

- A compact page eyebrow and a large Projects heading at the top.
- A category-filter control aligned with the heading area on wide screens.
- A wide, rounded featured-project panel with a large visual on the left and project summary on the right.
- Featured-project controls below the panel, including previous/next, position indicators, play/pause, and the active project name.
- A horizontal project-name selector below the carousel controls.
- A browsable row/grid of additional project previews below the featured area.
- Responsive stacking and usable controls on narrow viewports.

## Project Content
The project set contains PresiCompare, Huddle Up, ScholarDesk, Kokishin, Little Ask, and AEGIS. Use existing project titles, summaries, tags, status, and detail anchors. AEGIS should continue to represent its MVP ticket automation scope; any AI-assisted incident analysis or code remediation must remain labeled as future V2 direction.

## Interaction Expectations
- Category filters update the visible/browsable project collection and communicate which filter is active.
- Selecting a project name, preview, or indicator displays that project as the featured item.
- Previous and next controls navigate through projects consistently, including at the collection boundaries.
- Play/pause controls autoplay where appropriate; pause rotation while a visitor interacts or when the page is hidden.
- Respect `prefers-reduced-motion` and provide an understandable non-animated state.
- A project's View Project action navigates to its corresponding existing case study.

## Accessibility and Responsive Behavior
- Use semantic buttons/links with accessible names and visible keyboard focus.
- Expose the active project and filter state to assistive technology.
- Prevent keyboard focus from entering hidden or filtered-out project content.
- Keep controls reachable and non-overlapping at mobile widths; adapt the featured panel and preview collection to a vertical layout as needed.
- Preserve readable text, image alternatives, sufficient contrast, and reduced-motion behavior.

## Constraints and Notes
- The screenshot's AEGIS artwork is illustrative. Use the existing `public/images/aeigis.jpg` unless a replacement asset is explicitly supplied; do not imply mock dashboard elements are implemented product features.
- Keep existing detailed case studies available below the overview unless a future approved requirement changes that structure.
- The current carousel and page styling live in `src/pages/projects/index.astro`; shared card styles may come from `src/layouts/BaseLayout.astro`.
