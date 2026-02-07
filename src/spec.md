# Specification

## Summary
**Goal:** Fix the NewsPage “+” PIN-gated add/remove flow so dialogs open in the correct order, and ensure published newspapers keep the user-entered date instead of being overwritten by the current time.

**Planned changes:**
- Update the floating “+” button behavior so it only opens the “Enter PIN” dialog; on correct PIN (93023), open only the Options dialog.
- Ensure the Options dialog does not automatically open Add/Remove dialogs; open “Add Newspaper” or “Remove News/Remove a Newspaper” only after the user selects the corresponding option, and label the add option as “Add a Newspaper”.
- Preserve the Month/Day/Year date entered in the Add Newspaper form by validating it and using it as the stored/displayed date for the new news item.
- Update the backend publish API to accept an optional caller-provided timestamp for the news item time field, and update the frontend publish logic to send the computed timestamp from the form date inputs.

**User-visible outcome:** Clicking “+” first asks for the PIN, then shows Options; Add/Remove screens open only when chosen. When publishing a newspaper, the app keeps and displays the date entered in the form (with English validation errors for invalid dates).
