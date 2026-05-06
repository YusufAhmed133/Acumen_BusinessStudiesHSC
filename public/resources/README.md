# Student Resources

Drop any resource files here. Accepted formats: PDF, DOCX, XLSX, PNG.

## Naming convention

```
[topic]-[description].pdf
```

Examples:
- `finance-ratio-cheatsheet.pdf`
- `operations-key-terms.pdf`
- `hr-legislation-summary.pdf`
- `marketing-7ps-notes.pdf`

## How locked cards are generated

Each file placed here gets a corresponding locked card in the Resources section of the site (`src/components/sections/ResourcesTeaser.tsx`). In the next session, tell Claude Code to "sync resources" and it will read this folder and update the card list automatically.

Cards are locked by default — students see the title and topic tag but the content is blurred. Google Drive gating (student email → access link) can be wired up on request.
