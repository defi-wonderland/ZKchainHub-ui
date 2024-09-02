# Use an official Node.js image as a parent image
FROM node:20 AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# # Install pnpm globally
# RUN npm install -g pnpm


# Set the working directory in the container
WORKDIR /app

# Copy pnpm-lock.yaml and package.json files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN CI=1 pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Use a lighter Node.js image for the final stage
FROM node:20-slim AS ui
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production
RUN corepack enable

# Set the working directory in the container
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static


# # Install only production dependencies with pnpm
# RUN CI=1 pnpm install --no-frozen-lockfile

# Expose the port on which the application will run
EXPOSE 5173
ENV PORT=5173

# Specify the command to run the application
CMD ["node", "server.js"]