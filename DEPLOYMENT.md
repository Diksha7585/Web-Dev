# Deployment Guide

This project is a Next.js application, which can be deployed to various platforms. Below are the recommended methods.

## Option 1: Vercel (Recommended)
The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new).

1. Push your code to a git repository (GitHub, GitLab, BitBucket).
2. Go to [Vercel](https://vercel.com/new) and sign in.
3. Import your repository.
4. Vercel will automatically detect `Next.js` and set the correct build settings.
5. Click **Deploy**.

## Option 2: Netlify
1. Push your code to a git repository.
2. Go to [Netlify](https://www.netlify.com/) and sign in.
3. Click "Add new site" > "Import from Git".
4. Netlify should detect the Next.js framework.
   - **Build Command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **Deploy Site**.

## Option 3: Docker (Self-Hosted)
A `Dockerfile` has been included in the project for containerized deployment.

### 1. Build the image
```bash
docker build -t craftwebsite .
```

### 2. Run the container
```bash
docker run -p 3000:3000 craftwebsite
```

The application will be available at `http://localhost:3000`.

## Option 4: Manual Node.js Hosting
1. Run the build command:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```
   Ensure your hosting environment has Node.js installed and a process manager like `pm2` to keep the app running.
