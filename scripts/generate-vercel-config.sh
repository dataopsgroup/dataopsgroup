#!/bin/bash

# Generate vercel.json from organized configuration files
# This script should be run before deployment

echo "🔧 Generating vercel.json from organized configuration..."

node scripts/build-vercel-config.cjs

if [ $? -eq 0 ]; then
    echo "✅ vercel.json generated successfully!"
else
    echo "❌ Failed to generate vercel.json"
    exit 1
fi