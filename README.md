# NSBE Upstate Zone — Resource Hub (resource_hub_nsbe)

A centralized website prototype for the NSBE Upstate Zone Board Resource Hub.

Purpose
- Central hub for Upstate chapters to access official documents, forms, calendars, templates, training materials, and zone-wide tools.
- Zone board members can upload/manage resources.
- Prospective chapter leaders can learn expectations and access leadership training.

Repository layout
- `frontend/` — static site placeholder (HTML/CSS/JS)
- `backend/` — minimal Node HTTP server for prototyping API endpoints
- `docs/` — content outlines and upload-ready documents
- `scripts/` — helper scripts (deployment, build, etc.)

Quick start (local)
- Serve frontend: open `frontend/index.html` in your browser.
- Run backend server (no dependencies):

```bash
cd backend
node index.js
# server will listen on http://localhost:3000
```

Development notes
- This scaffold is intentionally minimal. Replace the frontend with a proper React/Next.js project or preferred CMS (WordPress, Wix, Google Sites) when you decide the production platform.
- The `docs/` folder contains the planned page structure and task ownership mapping.

Website plan reference
This project implements the "NSBE Upstate Zone Board Resource Hub" website plan provided by the Zone Chair. See `docs/structure.md` for the full structure and content responsibilities.

Next steps
- Replace `frontend/` with chosen frontend framework.
- Add authentication and permissions for the internal Zone Board portal.
- Integrate Google Drive and Google Forms for document storage and submissions.

Contact
Zone Chair — (place contact info here)
