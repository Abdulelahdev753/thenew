#!/bin/sh

# Start backend on port 5000 (override Cranl's PORT)
cd /app/backend && PORT=5000 node dist/index.js &

# Start frontend on port 3000
cd /app/frontend && PORT=3000 node server.js &

# Start nginx in foreground
nginx -g "daemon off;"
