# Reference-led redesign notes

This package updates the actual Astro source for the existing multi-page site. It is based on the supplied multi-page reference collage, not a replacement image.

## Changes
- Shared compact black navigation, silver monogram, active-route treatment, dark footer, consistent typography, and responsive widths.
- Homepage keeps the split profile hero, local workspace visual, identity panel, black credential strip, and sectioned experience/projects/academia layout.
- About, résumé, academia, teaching, projects, and contact pages receive distinct visual treatments while retaining their existing route and approved content.
- Reuses the local `public/images/engineering-workspace.png` asset; no mockup collage is used as a page background.
- Existing role descriptions and teaching content are retained from the source project.

## Verification
A production build was attempted in the working environment, but dependency installation did not complete before the environment timed out. Please run `npm run build` in the existing local project after copying the files. This package should not be described as build-verified.
