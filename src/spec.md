# Specification

## Summary
**Goal:** Fix the NewsPage floating “+” management flow so it reliably follows PIN → Options → Add/Remove without auto-opening the Add form or triggering actions from keyboard events.

**Planned changes:**
- Rebuild the floating “+” button interaction so clicking it opens only the PIN dialog and never opens the “Fill in your Newspaper” (Add a Newspaper) form directly.
- Adjust PIN submit behavior so a correct PIN opens only the Options UI (Add a Newspaper / Remove a Newspaper) and does not auto-trigger either option (including via Enter key behavior).
- Implement a single, explicit state-driven dialog flow ensuring only one dialog is open at a time (PIN, Options, Add, or Remove) and that closing any dialog resets to a predictable clean state (cleared PIN/errors, no leftover dialogs).

**User-visible outcome:** Clicking “+” always prompts for the PIN first; after entering the correct PIN, users see an Options dialog and can choose Add or Remove explicitly—no dialogs auto-open, and closing any dialog cleanly returns to the News page.
