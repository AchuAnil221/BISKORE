'use client';

import { motion } from 'framer-motion';

export default function IndiaLogisticsMap() {
  const hubs = [
    { id: 'delhi', name: 'Delhi NCR', cx: 120, cy: 120, textAnchor: 'start', dx: 10, dy: 4 },
    { id: 'mumbai', name: 'Mumbai', cx: 65, cy: 250, textAnchor: 'end', dx: -12, dy: 4 },
    { id: 'bangalore', name: 'Bangalore', cx: 120, cy: 350, textAnchor: 'end', dx: -10, dy: 4 },
    { id: 'chennai', name: 'Chennai', cx: 160, cy: 330, textAnchor: 'start', dx: 10, dy: 4 },
    { id: 'kolkata', name: 'Kolkata', cx: 280, cy: 200, textAnchor: 'start', dx: 10, dy: 4 },
    { id: 'biskore-hub', name: 'Kerala Hub', cx: 125, cy: 405, isCentral: true, textAnchor: 'start', dx: 18, dy: 6 },
  ];

  const routes = [
    { from: 'biskore-hub', to: 'delhi', path: 'M 125 405 Q 110 260 120 120' },
    { from: 'biskore-hub', to: 'mumbai', path: 'M 125 405 Q 80 330 65 250' },
    { from: 'biskore-hub', to: 'bangalore', path: 'M 125 405 Q 120 380 120 350' },
    { from: 'biskore-hub', to: 'chennai', path: 'M 125 405 Q 150 370 160 330' },
    { from: 'biskore-hub', to: 'kolkata', path: 'M 125 405 Q 210 310 280 200' },
    { from: 'mumbai', to: 'bangalore', path: 'M 65 250 Q 80 300 120 350', isSecondary: true },
    { from: 'delhi', to: 'kolkata', path: 'M 120 120 Q 200 150 280 200', isSecondary: true },
  ];

  const truckIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="14" height="12" rx="2" fill="#93C5FD" />
      <path d="M16 8h3.5a2 2 0 0 1 1.95 1.56l.5 2.22A2 2 0 0 1 22 12.2V18h-6V8z" fill="#93C5FD" opacity="0.8" />
      <circle cx="6" cy="18" r="2" fill="#FFFFFF" />
      <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
      <path d="M6 10h4M6 14h6" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '4rem',
      width: '100%', 
      maxWidth: '1000px', 
      margin: '0 auto' 
    }}>
      
      {/* Fleet Specs Callout Box */}
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(147, 197, 253, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          zIndex: 10,
          flex: '1 1 300px',
          maxWidth: '400px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            FLEET CAPABILITIES
          </h4>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#DBEAFE', fontSize: '1rem', lineHeight: 2.2 }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#93C5FD', fontWeight: 'bold' }}>✓</span> All India Permit
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#93C5FD', fontWeight: 'bold' }}>✓</span> Multi-axle & Light Commercial Fleet
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#93C5FD', fontWeight: 'bold' }}>✓</span> Fresh Produce Capable (Reefer)
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#93C5FD', fontWeight: 'bold' }}>✓</span> Live GPS Telemetry
          </li>
        </ul>
      </div>

      {/* SVG Map Section */}
      <div style={{ flex: '1 1 400px', maxWidth: '500px', position: 'relative' }}>
        <svg width="100%" height="auto" viewBox="-20 -20 440 490" style={{ background: 'transparent' }}>
          
          {/* Realistic India Path */}
          <g opacity="0.15">
            <path 
              d="M399.015,136.283L400,142.164L395.22,144.992L396.354,154.489L386.548,151.703L368.859,162.303L369.254,171.036L361.715,183.776L361.025,191.132L354.915,203.507L344.223,200.085L343.681,215.552L340.576,220.606L342.055,226.899L335.304,230.401L328.061,206.848L324.316,206.898L322.05,216.408L314.56,208.693L318.798,200.186L324.908,199.323L331.215,186.589L323.331,184.006L310.668,184.211L297.61,182.137L296.428,171.603L289.874,170.83L279.034,164.245L274.205,174.59L284.06,182.624L275.536,188.249L272.481,193.731L280.907,197.774L278.591,206.797L283.321,217.992L285.44,230.176L283.518,235.568L274.205,235.393L257.305,238.433L258.093,249.484L250.801,258.113L231.091,267.913L215.767,284.93L205.469,294.015L191.87,303.407L191.821,309.965L185.021,313.491L172.653,318.604L166.297,319.35L162.158,330.169L165.016,348.569L165.755,360.239L159.941,373.553L159.892,397.264L152.796,397.947L146.588,408.53L150.727,413.109L138.261,417.05L133.678,426.445L128.16,430.423L115.201,417.496L108.894,398.065L103.622,384.009L98.842,377.412L91.55,363.947L88.15,346.35L85.785,337.528L73.319,318.049L67.652,290.317L63.562,271.841L63.612,254.211L60.951,240.499L41.045,249.261L31.387,247.526L13.55,229.701L20.103,224.344L16.063,218.52L0,205.887L9.116,195.868L39.271,195.919L36.511,182.982L28.825,175.284L27.297,163.546L18.33,156.673L33.407,140.512L49.322,141.692L63.612,125.358L72.185,109.419L85.489,93.479L85.292,82.061L96.92,72.72L85.883,64.698L81.153,53.636L76.275,39.21L83.025,32.039L103.769,36.093L119.044,33.617L132.249,19.577L146.933,39.125L145.553,52.581L151.022,60.974L150.579,69.264L140.724,67.093L144.568,84.889L158.019,95.018L177.039,106.126L168.367,113.292L163.045,127.977L176.3,133.888L189.209,141.482L207.046,150.164L225.819,152.146L233.703,159.97L244.297,161.422L260.754,164.995L272.136,164.736L273.713,158.673L271.939,148.912L272.974,142.242L281.35,138.99L282.483,151.155L282.779,154.255L295.196,160.074L303.819,157.686L315.349,158.699L326.534,158.258L327.519,148.808L321.951,143.866L332.988,141.928L345.405,130.381L361.222,120.426L372.703,124.272L382.459,117.661L388.864,127.395L384.233,133.94Z" 
              fill="#93C5FD" 
              stroke="#93C5FD" 
              strokeWidth="1.5" 
              strokeLinejoin="round" 
            />
          </g>

          {/* Routes */}
          {routes.map((route, idx) => (
            <g key={`route-${idx}`}>
              {/* Background path line */}
              <path 
                d={route.path} 
                fill="none" 
                stroke={route.isSecondary ? 'rgba(147, 197, 253, 0.2)' : 'rgba(147, 197, 253, 0.4)'} 
                strokeWidth={route.isSecondary ? 1 : 2} 
                strokeDasharray={route.isSecondary ? '4 4' : 'none'}
              />
              
              {/* Animated drawing path */}
              {!route.isSecondary && (
                <motion.path
                  d={route.path}
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              )}

              {/* Animated Truck on main routes */}
              {!route.isSecondary && (
                <motion.g
                  initial={{ offsetDistance: '0%', opacity: 0 }}
                  animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
                  transition={{ 
                    duration: 4 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: 'linear',
                    delay: Math.random() * 2
                  }}
                  style={{ 
                    offsetPath: `path('${route.path}')`,
                  }}
                >
                  <g transform="translate(-10, -10)">
                    {truckIcon}
                  </g>
                </motion.g>
              )}
            </g>
          ))}

          {/* Hubs */}
          {hubs.map((hub) => (
            <g key={hub.id} transform={`translate(${hub.cx}, ${hub.cy})`}>
              {/* Pulse effect */}
              <motion.circle
                r={hub.isCentral ? 12 : 6}
                fill="none"
                stroke={hub.isCentral ? '#93C5FD' : '#93C5FD'}
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* Core dot */}
              <circle 
                r={hub.isCentral ? 6 : 4} 
                fill={hub.isCentral ? '#FFFFFF' : '#1E3A8A'} 
                stroke={hub.isCentral ? '#1E3A8A' : '#93C5FD'}
                strokeWidth="1.5"
              />
              {/* Label */}
              <text 
                x={hub.dx || (hub.isCentral ? 12 : 8)} 
                y={hub.dy || 4} 
                textAnchor={(hub.textAnchor as "start" | "end" | "middle" | "inherit") || 'start'}
                fill={hub.isCentral ? '#93C5FD' : '#DBEAFE'} 
                fontSize={hub.isCentral ? '12' : '10'} 
                fontWeight={hub.isCentral ? '700' : '500'}
                opacity={hub.isCentral ? 1 : 0.8}
              >
                {hub.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
