# Install dependencies only when needed
FROM node:20-alpine3.19 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm ci

# Rebuild the source code only when needed
FROM node:20-alpine3.19 AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

ENV WATCHPACK_POLLING true

CMD [ "npm", "start" ]