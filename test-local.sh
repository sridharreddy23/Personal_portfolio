#!/bin/bash

# Simple script to test the portfolio locally
# Usage: ./test-local.sh

echo "🚀 Starting local server for portfolio..."
echo "📂 Serving from: $(pwd)"
echo ""
echo "🌐 Open your browser and go to:"
echo "   http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python or use another method."
    echo ""
    echo "Alternative: Open index.html directly in your browser"
    exit 1
fi

