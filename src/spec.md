# Specification

## Summary
**Goal:** Add an image beside each innovation card on the Innovations page using the provided uploaded files.

**Planned changes:**
- Update `frontend/src/pages/InnovationsPage.tsx` so each innovation card renders its mapped image alongside the innovation title/description (Artifyer: The Canvas Experience → `Artifyer The Canvas Experience.png`, Oil Spill Catcher (OSC) → `OSC.png`, The GPR → `The GPR.jpg`).
- Adjust the card layout to be responsive: side-by-side on larger screens and stacked cleanly on smaller screens.
- Add the three uploaded image files into the frontend’s public assets directory and reference them via `/assets/...` paths.
- Ensure each image includes alt text matching the innovation title.

**User-visible outcome:** On the Innovations page, each innovation card shows its corresponding image next to the innovation content, and the layout adapts cleanly across screen sizes.
