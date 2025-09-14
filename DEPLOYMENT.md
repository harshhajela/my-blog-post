# Deployment Guide

## Environment Variables

Before deploying, ensure the following environment variables are set:

### GitHub Secrets (for CI/CD)
- `CONTENTFUL_SPACE_ID`: Your Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN`: Your Contentful delivery API access token
- `CONTENTFUL_PREVIEW_KEY`: Your Contentful preview API key

### AWS Deployment (if using S3/CloudFront)
- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `AWS_REGION`: AWS region
- `S3_BUCKET_NAME`: S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution ID

## Local Production Build

To test the production build locally:

```bash
# Set environment variables
export CONTENTFUL_SPACE_ID="your-space-id"
export CONTENTFUL_ACCESS_TOKEN="your-access-token"
export CONTENTFUL_PREVIEW_KEY="your-preview-key"

# Build for production
npm run build:prod

# Serve locally (requires http-server)
npx http-server dist/my-blog-space -p 8080
```

## Deployment Options

### 1. GitHub Actions with AWS S3/CloudFront (Current Setup)
The repository is configured to automatically deploy to AWS S3 with CloudFront invalidation when you push to the `main` branch.

### 2. Docker Deployment
```bash
# Build Docker image
docker build \
  --build-arg CONTENTFUL_SPACE_ID="your-space-id" \
  --build-arg CONTENTFUL_ACCESS_TOKEN="your-access-token" \
  --build-arg CONTENTFUL_PREVIEW_KEY="your-preview-key" \
  -t my-blog-space .

# Run container
docker run -p 80:80 my-blog-space
```

### 3. Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Set build command to: `npm run build:prod`
4. Set publish directory to: `dist/my-blog-space`

### 4. Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Set environment variables: `vercel env add`
3. Deploy: `vercel --prod`

## Bundle Analysis

To analyze the bundle size:

```bash
npm run analyze
```

This will generate a bundle analysis report showing the size of each module.

## Performance Optimizations

The production build includes:
- **Tree shaking**: Removes unused code
- **Minification**: Compresses JavaScript and CSS
- **Gzip compression**: Enabled in nginx configuration
- **Caching**: Static assets cached for 1 year
- **Code splitting**: Vendor and app code separated
- **AOT compilation**: Ahead-of-time template compilation

## Security Headers

The nginx configuration includes security headers:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Content-Security-Policy
- Referrer-Policy

## Monitoring

Consider adding monitoring and analytics:
- Google Analytics
- Sentry for error tracking
- Core Web Vitals monitoring