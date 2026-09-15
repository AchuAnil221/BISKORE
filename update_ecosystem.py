import os
import re

filepath = "/Users/achuanil/Documents/Biskore/src/components/ui/EcosystemAnimation.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Remove style animations
content = re.sub(r"<style>\{`.*?`\}</style>", "<style>{`/* Static Scene */`}</style>", content, flags=re.DOTALL)

# 2. Make clouds static
content = content.replace('className="anim-cloud-1" style={{ animationDelay: \'-40s\' }}', 'transform="translate(100, 0)"')
content = content.replace('className="anim-cloud-2" style={{ animationDelay: \'-10s\' }}', 'transform="translate(400, -20)"')
content = content.replace('className="anim-cloud-3" style={{ animationDelay: \'-70s\' }}', 'transform="translate(800, 40)"')

# 3. Port Cranes
cranes_svg = """
        {/* Port Cranes (Gantry) */}
        <g transform="translate(400, 725)">
          <rect x="0" y="0" width="10" height="120" fill="#D4AF37" />
          <rect x="40" y="0" width="10" height="120" fill="#D4AF37" />
          <polygon points="0,20 50,0 50,10 0,30" fill="#B8860B" />
          <polygon points="0,60 50,40 50,50 0,70" fill="#B8860B" />
          <rect x="-30" y="20" width="100" height="10" fill="#1A2523" />
          <rect x="40" y="20" width="140" height="8" fill="#D4AF37" />
          <line x1="40" y1="-20" x2="140" y2="20" stroke="#1A2523" strokeWidth="2" />
          <rect x="120" y="28" width="2" height="80" fill="#333" />
          <rect x="100" y="108" width="40" height="12" fill="#A56A5B" />
        </g>
        <g transform="translate(1400, 725)">
          <rect x="0" y="0" width="10" height="120" fill="#D4AF37" />
          <rect x="40" y="0" width="10" height="120" fill="#D4AF37" />
          <polygon points="0,20 50,0 50,10 0,30" fill="#B8860B" />
          <polygon points="0,60 50,40 50,50 0,70" fill="#B8860B" />
          <rect x="-30" y="20" width="100" height="10" fill="#1A2523" />
          <rect x="40" y="20" width="140" height="8" fill="#D4AF37" />
          <line x1="40" y1="-20" x2="140" y2="20" stroke="#1A2523" strokeWidth="2" />
          <rect x="90" y="28" width="2" height="60" fill="#333" />
          <rect x="70" y="88" width="40" height="12" fill="#738C9B" />
        </g>
"""
content = content.replace('{/* Ocean/Port Water */}', cranes_svg + '\n        {/* Ocean/Port Water */}')

# 4. Make ships static and duplicate
ship_svg_start = content.find('{/* Cargo Ship (Trade) - Detailed Vector */}')
ship_svg_end = content.find('{/* Foreground Highway Embankment (Separating Road from Sea) */}')

original_ship_svg = content[ship_svg_start:ship_svg_end]
static_ship_svg = original_ship_svg.replace('<g className="anim-ship-drift">', '<g transform="translate(1100, 0)">')
static_ship_svg = static_ship_svg.replace('<g className="anim-ship-bob" style={{ transformOrigin: \'center\' }}>', '<g>')
static_ship_svg = static_ship_svg.replace("style={{ animation: 'splash 1.2s infinite ease-out', transformOrigin: 'center', transformBox: 'fill-box' }}", "")
static_ship_svg = static_ship_svg.replace("style={{ animation: 'splash 1.2s infinite ease-out 0.4s', transformOrigin: 'center', transformBox: 'fill-box' }}", "")
static_ship_svg = static_ship_svg.replace("style={{ animation: 'splash 1.2s infinite ease-out 0.8s', transformOrigin: 'center', transformBox: 'fill-box' }}", "")

ship_2 = static_ship_svg.replace('translate(1100, 0)', 'translate(200, -20) scale(0.85)')
ship_2 = ship_2.replace('#A56A5B', '#2C5A4C').replace('#738C9B', '#D2AC63')

content = content[:ship_svg_start] + static_ship_svg + ship_2 + content[ship_svg_end:]

# 5. Add Streetlights to Road
streetlights = """
          {/* Streetlights & Trees */}
          <g>
            {[100, 300, 500, 700, 900, 1100, 1300, 1500, 1700].map(x => (
              <g key={`light-${x}`} transform={`translate(${x}, 935)`}>
                <rect x="0" y="0" width="4" height="40" fill="#555" />
                <path d="M 2 0 Q 2 -20 20 -20 L 30 -20" fill="none" stroke="#555" strokeWidth="3" />
                <rect x="25" y="-22" width="10" height="4" fill="#D9D9D9" />
                <ellipse cx="30" cy="-18" rx="4" ry="2" fill="#FFF2CC" opacity="0.9" />
              </g>
            ))}
            {[50, 250, 450, 850, 1250, 1650, 1850].map(x => (
              <g key={`tree-${x}`} transform={`translate(${x}, 940) scale(0.8)`}>
                <rect x="-2" y="-10" width="4" height="15" fill="#5D4037" />
                <circle cx="0" cy="-15" r="14" fill="#2E7D32" opacity="0.9" />
                <circle cx="-10" cy="-8" r="10" fill="#388E3C" opacity="0.9" />
                <circle cx="10" cy="-8" r="10" fill="#1B5E20" opacity="0.9" />
              </g>
            ))}
          </g>
"""
content = content.replace('{/* Road markings */}', streetlights + '\n          {/* Road markings */}')

# 6. Static Trucks
truck_svg_start = content.find('{/* Realistic Logistics Truck (Biskore Fleet) */}')
truck_svg_end = content.find('</svg>\n    </div>\n  );\n}')

original_truck_svg = content[truck_svg_start:truck_svg_end]
static_truck_svg = original_truck_svg.replace('<g className="anim-truck">', '<g transform="translate(1200, 0)">')
static_truck_svg = static_truck_svg.replace("style={{ animation: 'smoke 1.5s infinite linear' }}", "")
static_truck_svg = static_truck_svg.replace("style={{ animation: 'smoke 1.5s infinite linear 0.4s' }}", "")
static_truck_svg = static_truck_svg.replace("style={{ animation: 'smoke 1.5s infinite linear 0.8s' }}", "")
static_truck_svg = static_truck_svg.replace('<g className="anim-wheel">', '<g>')

truck_2 = static_truck_svg.replace('translate(1200, 0)', 'translate(400, 0)')
truck_3 = static_truck_svg.replace('translate(1200, 0)', 'translate(800, 0) scale(-1, 1) translate(-360, 0)') # Flipped truck driving opposite way

content = content[:truck_svg_start] + static_truck_svg + truck_2 + truck_3 + content[truck_svg_end:]

with open(filepath, "w") as f:
    f.write(content)
print("Updated EcosystemAnimation.tsx")
