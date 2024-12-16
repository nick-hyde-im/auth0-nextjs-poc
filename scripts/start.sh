#!/bin/sh

# Default values
ENABLE_PACKAGE_WATCH=true

# Function to display usage
usage() {
  echo "Usage: $0 --service <service-name> [--enable-package-watch <true|false>]"
  exit 1
}

# Parse named arguments
while [ "$1" != "" ]; do
  case $1 in
    --service ) shift
                SERVICE_NAME=$1
                ;;
    --enable-package-watch ) shift
                             ENABLE_PACKAGE_WATCH=$1
                             ;;
    * ) usage
        ;;
  esac
  shift
done

# Check if service name is provided
if [ -z "$SERVICE_NAME" ]; then
  usage
fi

# Watch for changes in the specified service
# npx nodemon --watch services/$SERVICE_NAME --ext js,jsx --ignore node_modules/ --exec "npm run dev:$SERVICE_NAME" &

if [ "$SERVICE_NAME" = "articles" ]; then
  node services/articles/server.js &
else
  npm run dev:$SERVICE_NAME &
fi

# Conditionally watch for changes in packages/service-components
if [ "$ENABLE_PACKAGE_WATCH" != "false" ]; then
  npx nodemon --watch packages/service-components/src --ext js,jsx --exec "cd packages/service-components && npm run build" &
  npx nodemon --watch packages/bff/src --ext js --exec "cd packages/bff && npm run build" &
  npx nodemon --watch packages/auth0-lib/src --ext js,jsx --exec "cd packages/auth0-lib && npm run build" &
fi

# Wait for all background processes to finish
wait