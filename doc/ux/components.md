## <ToolCard>
Purpose: Summarize a tool with icon, title, tags, CTA.
Props:
- title (string, required)
- description (string)
- href (string)
- icon (ReactNode | name)
- tags (string[])
Variants: {compact | regular}
States: {hover, focus-visible, loading, disabled}
A11y: Entire card is a <a>; focus-ring visible; icon needs aria-hidden.