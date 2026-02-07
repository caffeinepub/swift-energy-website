# Specification

## Summary
**Goal:** Update the News publishing experience by removing date autofill, clarifying the date format, and adding a PIN-gated Options panel that includes a Remove News workflow.

**Planned changes:**
- Remove the date autofill/calendar control from the News entry form and eliminate any logic that auto-populates Month/Day/Year with today’s date.
- Add visible helper text next to the Month/Day/Year inputs to clarify the expected date format (e.g., “Format: MM / DD / YYYY”).
- After correct PIN entry, show an Options view titled exactly “Option” with two selectable choices: “Add News” and “Remove News”, instead of immediately opening the Add News form.
- Implement a “Remove News” UI titled exactly “Remove a Newspaper” that lets the user select an existing news item and submit a removal action.
- Add backend deletion support for removing a specific news item (using an unambiguous identifier) and expose it to the frontend via a new React Query mutation that updates the Latest News list on success and shows an English error message on failure.

**User-visible outcome:** Users can no longer autofill the date and will see a clear date format hint; after entering the PIN they can choose to add news or remove an existing news item, with removals reflected immediately in the Latest News list.
