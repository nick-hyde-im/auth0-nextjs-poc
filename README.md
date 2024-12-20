# Project Overview

This project is a monorepo containing multiple services and packages, including an authentication service, a backend-for-frontend (BFF) service, and various shared components. The project is built using Next.js and leverages Auth0 for authentication.

## Project Structure

- `packages/`
  - `auth0-lib/`: Library for Auth0 integration.
  - `bff/`: Backend-for-frontend service.
  - `service-components/`: Shared components used across services.
- `services/`
  - `articles/`: Articles service built with Next.js.
  - `auth/`: Authentication service.

## Getting Started with Docker

To start the project using Docker, follow these steps:

1. **Install Docker**: Ensure you have Docker installed on your machine. You can download it from [here](https://www.docker.com/products/docker-desktop).

2. **Clone the Repository**: Clone this repository to your local machine.

    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

3. **Build and Start the Services**: Use Docker Compose to build and start the services.

    ```sh
    docker-compose up --build
    ```

    This command will build the Docker images for each service and start the containers.

4. **Access the Services**:
    - Articles service: Open [http://localhost:3001](http://localhost:3001) in your browser.
    - Auth service: Open [http://localhost:3002](http://localhost:3002) in your browser.

## Additional Information

- **Environment Variables**: Ensure you have the necessary environment variables set up in the `.env` files located in the respective service directories (`services/articles/.env` and [.env](http://_vscodecontentref_/0)).

### Example AUTH0_CONFIG Object

Here is an example of the `AUTH0_CONFIG` object required to setup each Auth0 client:

```json
{
  "<siteKey>": {
    "audience": "<your-audience>",
    "baseURL": "<your-base-url>",
    "clientID": "<your-client-id>",
    "clientSecret": "<your-client-secret>",
    "issuerBaseURL": "<your-issuer-base-url>",
    "secret": "<your-secret>"
  }
}
```

- **Scripts**: The [start.sh](http://_vscodecontentref_/1) script is used to start the services with specific configurations.

- **Nginx**: The project uses Nginx as a reverse proxy. The configuration is defined in the [nginx.conf](http://_vscodecontentref_/2) file.

## Learn More

To learn more about Next.js and Auth0, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Auth0 Documentation](https://auth0.com/docs) - Learn about Auth0 features and API.
