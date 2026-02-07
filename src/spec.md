# Specification

## Summary
**Goal:** Add an accessible language selection menu in the header for both desktop and mobile layouts, with persisted selection defaulting to English.

**Planned changes:**
- Add a globe icon button to the header: on desktop (md+), place it immediately to the right of the existing “News” navigation link; on mobile (< md), place it next to the hamburger menu button.
- Implement a language selection menu/popup opened by the globe button, listing exactly: English (default), Hindi, Kazakhstan, Chinese, Spanish, Thailand, Russian, Japanese, French, Portugese, Italian, Arabic, Tagalog, Vietnamese, Indonesian.
- Add shared client-side language state (default English) that updates immediately on selection and visually indicates the selected language in the menu.
- Persist the selected language on the client so it is restored on refresh/reopen; fall back to English when no saved value exists.
- Ensure accessibility: globe button has an aria-label and the menu items support keyboard navigation.

**User-visible outcome:** Users can open a globe icon menu in the header (desktop and mobile), choose a language from the provided list, see the current selection indicated, and have their choice remembered across page reloads.
