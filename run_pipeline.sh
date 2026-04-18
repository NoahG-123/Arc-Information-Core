#!/bin/bash
# Add your daily stories here. Format is "STORY-CODE|Search Title"
declare -a DAILY_STORIES=(
    "IRAN-01|Operation Epic Fury Iran Conflict"
    "ECON-01|Global Economy Oil Shock"
    "CANADA-01|Canada Trade Housing Economy"
)

echo "Starting ARC Daily Pipeline Update..."

for story in "${DAILY_STORIES[@]}"; do
    CODE="${story%%|*}"
    TITLE="${story##*|}"
    echo "----------------------------------------"
    echo "Processing $CODE: $TITLE"
    python3 arc_pipeline.py --code "$CODE" --title "$TITLE" --mode full
    sleep 10
done

echo "----------------------------------------"
echo "All stories formatted. Running Tier 3 Synthesis..."
python3 arc_pipeline.py --mode synthesize
echo "ARC Pipeline Complete!"

echo "----------------------------------------"
echo "Pushing updates to GitHub (triggers Vercel deploy)..."
git add tracker.js arc-run-changes.json
git commit -m "Auto-update: pipeline run $(date +'%b %d %Y')"
git push origin main
echo "Push complete."