#!/bin/sh

if [ "$APP_TYPE" = "backend" ]; then
  cd /app/backend && node dist/index.js
else
  cd /app/frontend && node server.js
fi
