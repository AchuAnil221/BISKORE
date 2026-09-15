import urllib.request
import json
import re

# Fetching a topojson or geojson of India, or just a simple SVG path.
# Let's search for a public simple India map SVG or path.
url = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        print("Success fetching TopoJSON. We shouldn't parse this manually in bash, let's just find a raw SVG.")
except Exception as e:
    print(e)
