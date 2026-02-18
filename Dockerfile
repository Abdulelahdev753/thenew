FROM node:20-alpine AS base

# ---- Frontend dependencies ----
FROM base AS frontend-deps
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci

# ---- Frontend build ----
FROM base AS frontend-builder
WORKDIR /app/frontend
COPY --from=frontend-deps /app/frontend/node_modules ./node_modules
COPY frontend/ .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Backend dependencies ----
FROM base AS backend-deps
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci

# ---- Backend build ----
FROM base AS backend-builder
WORKDIR /app/backend
COPY --from=backend-deps /app/backend/node_modules ./node_modules
COPY backend/ .
RUN npm run build

# ---- Final image ----
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Frontend standalone output
COPY --from=frontend-builder /app/frontend/.next/standalone ./frontend/
COPY --from=frontend-builder /app/frontend/.next/static ./frontend/.next/static
COPY --from=frontend-builder /app/frontend/public ./frontend/public

# Backend build output
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-deps /app/backend/node_modules ./backend/node_modules
COPY --from=backend-builder /app/backend/package.json ./backend/

COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]
