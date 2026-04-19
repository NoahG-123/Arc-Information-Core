#!/bin/bash
echo "Starting ARC Daily Pipeline Update..."

QUEUE=$(python arc_pipeline.py --mode queue)

if [ -z "$QUEUE" ]; then
  echo "No stories queued for today. Exiting."
  exit 0
fi

while IFS='|' read -r CODE TITLE DAYS WAR; do
    echo "----------------------------------------"
    echo "Processing $CODE: $TITLE"
    WAR_FLAG=""
    [ "$WAR" = "1" ] && WAR_FLAG="--war"
    python arc_pipeline.py --code "$CODE" --title "$TITLE" --days "$DAYS" --mode full $WAR_FLAG
    sleep 25
done <<< "$QUEUE"

echo "----------------------------------------"
echo "All stories processed. Running Tier 3 Synthesis..."
python arc_pipeline.py --mode synthesize
echo "ARC Pipeline Complete!"

if [ -z "$CI" ]; then
  echo "Pushing updates to GitHub (triggers Vercel deploy)..."
  git add tracker.js arc-run-changes.json arc-pending-stories.md arc-metadata.json
  git commit -m "Auto-update: pipeline run $(date +'%b %d %Y')"
  git push origin main
  echo "Push complete."
fi
