#!/usr/bin/env python3
"""
Gemini Search Helper for ARC Updates.
Called by Claude Code during automated update runs.
Returns structured search results to stdout.

Usage:
  python3 gemini_search.py --code IRAN-01 --title "Iran war ceasefire" --days 2
"""

import argparse
import os
import sys
from datetime import date, timedelta

try:
    import google.generativeai as genai
except ImportError:
    print("ERROR: pip install google-generativeai", file=sys.stderr)
    sys.exit(1)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("ERROR: GEMINI_API_KEY environment variable not set", file=sys.stderr)
    sys.exit(1)

def search(code: str, title: str, days: int, is_war: bool) -> str:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel("gemini-1.5-flash")

    today = date.today()
    since = today - timedelta(days=days)

    war_sections = """
TOLL UPDATE:
(Updated confirmed dead, wounded, children killed, displaced — with sources and dates. Write NONE if no new verified figures.)

FRONT UPDATE:
(Territorial changes, new active fronts, significant military movements. Write NONE if nothing new.)
""" if is_war else ""

    prompt = f"""You are a research assistant for an intelligence tracker. Today is {today.isoformat()}.

Search for verified news and developments about this topic published between {since.isoformat()} and {today.isoformat()}:

TOPIC: {code} — {title}

Return a structured report with these exact sections:

NEW CONFIRMED FACTS:
(Verified facts only. Include source name and date for each. Be specific — numbers, names, dates matter. Write NONE if nothing new since {since.isoformat()}.)

DEVELOPING THREADS:
(Significant ongoing situations with meaningful uncertainty. Write NONE if nothing notable.)

RESOLVED QUESTIONS:
(Things that were uncertain but now have clear answers. Write NONE if none.)

NEW KEY PLAYERS:
(People who have newly entered this story significantly. Name, role, why relevant. Write NONE if none.)
{war_sections}
SOURCES USED:
(List 2-3 most credible sources with publication dates.)
"""

    try:
        response = model.generate_content(
            prompt,
            tools=[{"google_search": {}}]
        )
        return response.text
    except Exception as e:
        return f"SEARCH_ERROR: {e}"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--code", required=True, help="Story code e.g. IRAN-01")
    parser.add_argument("--title", required=True, help="Search topic description")
    parser.add_argument("--days", type=int, default=2, help="How many days back to search")
    parser.add_argument("--war", action="store_true", help="Include war-specific toll/front sections")
    args = parser.parse_args()

    result = search(args.code, args.title, args.days, args.war)
    print(result)


if __name__ == "__main__":
    main()
