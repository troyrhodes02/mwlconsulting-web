#!/bin/bash

# Create necessary directories
mkdir -p public/icons

# Generate favicon.ico (multi-size)
convert public/mwl-logo.png -resize 256x256 -define icon:auto-resize=16,32,48,64 public/favicon.ico

# Generate PNG favicons
convert public/mwl-logo.png -resize 16x16 public/favicon-16x16.png
convert public/mwl-logo.png -resize 32x32 public/favicon-32x32.png
convert public/mwl-logo.png -resize 180x180 public/apple-touch-icon.png
convert public/mwl-logo.png -resize 192x192 public/icon-192x192.png
convert public/mwl-logo.png -resize 512x512 public/icon-512x512.png

# Generate Safari Pinned Tab SVG
convert public/mwl-logo.png -resize 512x512 -threshold 50% -define icon:auto-resize=16,32,48,64 public/safari-pinned-tab.svg

# Generate OpenGraph Image
convert public/mwl-logo.png -resize 1200x630^ -gravity center -extent 1200x630 public/og-image.png

echo "Favicon generation complete!" 