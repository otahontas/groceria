# Groceria
Plain and simple self-hostable groceries web app, built with react and typescript. This is one those apps, where I couldn't find self-hostable alternative suited for my spesific use-case, so I decided to write my own. (Also, shouldn't everyone have some sort of todo-app in their portfolio?).

## Goals
- SPA with literally only one page, no separate lists, just one list for groceries
- Saves entries to JSON
- No separate users
- Optional password protection 
- Easy deployment to VPS with Docker

## Development
- Install packages with `yarn install`
- Run backend-server with `yarn run dev:server`
- Linting (runs prettier, eslint + some other checks): `yarn lint`, fix errors with `yarn lint:fix`

## TODO:
- Swipe to delete
- ErrorBoundary check to app root, don't let program crash
- Autocomplete based on previous entries (deleted too, so history is needed)
- undo-redo
- password protection

## Licence
MIT
