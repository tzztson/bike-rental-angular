#
#  Building step. create the dist files to use in the actual image
#

FROM node:16.14-alpine as builder

# Set working directory
WORKDIR /backend

# Copy package*.json file seperately to do `npm ci`
# which will prevent a source file change to not hit cache with npm ci
COPY backend/package*.json /backend/

RUN npm ci

# Copy source code to build
COPY backend /backend

ARG BASE_URL_FRONTEND
# replace urls for project
RUN sed -i "s|frontEndUrl:[[:blank:]]'https://overnights.nl'|frontEndUrl:'http://"${BASE_URL_FRONTEND}"'|g" /backend/src/environments/environment.prod.ts

# Add Generate Production build
RUN npm run build

#
#  End of builder step
#

FROM node:16.14-alpine

RUN apk add curl

HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f http://localhost:80/api || exit 1

WORKDIR /app
COPY --from=builder /backend .
COPY pipeline/server_config/pro/entrypoint.sh entrypoint.sh

# We need the packages also in this container else the api will not run
RUN npm ci

EXPOSE 80

CMD ["/bin/sh", "entrypoint.sh"]
