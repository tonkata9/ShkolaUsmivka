#!/bin/bash

echo "🚀 Deploying to Netlify..."

# Build the project
echo "📦 Building project..."
npm run build

echo "✅ Build complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://app.netlify.com"
echo "2. Drag and drop the 'dist' folder"
echo "3. Your site will be live instantly!"
echo ""
echo "Or use Netlify CLI:"
echo "npx netlify deploy --prod --dir=dist"
