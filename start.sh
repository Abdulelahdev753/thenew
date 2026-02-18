#!/bin/sh

# Start backend
cd /app/backend && node dist/index.js &

# Start frontend
cd /app/frontend && node server.js &

# Start nginx in foreground
nginx -g "daemon off;"
