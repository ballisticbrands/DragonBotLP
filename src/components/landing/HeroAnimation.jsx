import { motion } from 'framer-motion';
import ChatWindow from './ChatWindow';

const heroMessages = [
  { role: 'user', text: 'Automatically respond to customer messages coming from Amazon and Shopify. You can find response templates on our Notion. If you are not sure, ask me how to respond.' },
  { role: 'bot', text: 'On it! 🐉 Updating you here on all customer messages...' },
  { role: 'user', text: 'Do Amazon keyword research for our new product. Use these competitor ASIN\'s for your research - B0C7X9LQ2M, B09Q4T7K8R, B0B2M5N8P3, B08Z6R1V4L, B0C1H8J7K2, B09L3W6X5T' },
  { role: 'bot', text: 'Researching competitors...' },
  { role: 'bot', text: 'Creating sheet...' },
  { role: 'bot', text: 'Done! 🐉 Here\'s your sheet: docs.google.com/spreadsheet/d/... — Complete KW research including suggested PPC setup. Want me to suggest the listing text for your product?' },
  { role: 'user', text: 'Yes please! Check ASIN B09XYZ1234' },
  { role: 'bot', text: 'Analyzing competitor ASIN... They rank for 12 of your top 20. I\'ve highlighted the 8 keyword gaps in yellow — these are your biggest opportunities. 🔥' },
];

// Inline SVG icon paths with original brand colors
const icons = {
  amazon: <path d="M.045 18.02c.072-.116.187-.124.348-.024 2.131 1.3 4.49 1.953 7.077 1.953 1.748 0 3.443-.363 5.084-1.089a26.7 26.7 0 002.14-1.1c.19-.112.336-.063.436.148.106.18.073.33-.09.45-.738.513-1.556.98-2.454 1.4a13.78 13.78 0 01-5.089 1.167c-2.863.07-5.477-.7-7.846-2.313-.13-.09-.17-.2-.107-.34l.5-.252zm7.394-3.384c0-.6.016-1.127.048-1.58.032-.454.1-.862.206-1.224.106-.363.254-.676.445-.94.19-.263.44-.49.748-.678.308-.19.676-.336 1.103-.44.428-.103.928-.155 1.5-.155.972 0 1.852.13 2.64.389v-.443c0-.596-.072-1.052-.216-1.37-.144-.318-.393-.558-.748-.72-.354-.162-.82-.243-1.396-.243-.28 0-.588.025-.924.076-.337.05-.677.122-1.02.216a8.08 8.08 0 00-.864.3c-.076.032-.148.05-.216.05a.39.39 0 01-.264-.096.347.347 0 01-.12-.264c0-.12.076-.252.228-.396.388-.36.916-.66 1.584-.9.668-.24 1.36-.36 2.076-.36 1.24 0 2.152.32 2.736.96.584.64.876 1.588.876 2.844v5.148c0 .296-.132.444-.396.444-.236 0-.396-.148-.48-.444l-.156-.648a6.052 6.052 0 01-1.596 1.02 4.173 4.173 0 01-1.74.384c-.916 0-1.644-.256-2.184-.768-.54-.512-.81-1.236-.81-2.172zm2.088-.24c0 .576.156 1.02.468 1.332.312.312.732.468 1.26.468.36 0 .72-.084 1.08-.252.36-.168.696-.404 1.008-.708v-2.58c-.672-.2-1.356-.3-2.052-.3-.696 0-1.2.152-1.512.456-.312.304-.468.804-.252 1.584z" fill="#FF9900"/>,
  internet: <><circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="1.5" fill="none"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" stroke="#4285F4" strokeWidth="1.5" fill="none"/></>,
  shopify: <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.844-17.673c-.065 0-.224.064-.383.128-.227-.66-.627-1.267-1.332-1.267h-.07C11.36 4.728 10.94 4.5 10.59 4.5c-1.635 0-2.414 2.044-2.66 3.083-.638.198-1.09.338-1.148.358-.358.112-.369.123-.415.46-.035.264-1.005 7.716-1.005 7.716l7.527 1.3 1.604-11.11c-.087.001-.167 0-.254 0zm-2.332-.675c0 .054 0 .118-.005.187-.35.108-.734.227-1.118.346.215-.827.618-1.228.987-1.384.107.22.183.521.136.851zm-.858-1.272c.064 0 .131.022.196.066-.466.22-.97.77-1.18 1.872-.306.094-.605.187-.876.27.244-.843.82-2.208 1.86-2.208zm.276 5.987s-.412-.22-.917-.22c-.744 0-.78.467-.78.585 0 .643.838.89.838 2.396 0 1.186-.752 1.95-1.766 1.95-1.217 0-1.838-.757-1.838-.757l.326-1.076s.639.548 1.178.548c.352 0 .495-.277.495-.48 0-.84-.688-1.218-.688-2.31 0-1.188.852-2.338 2.573-2.338.665 0 .993.19.993.19l-.414 1.512z" fill="#95BF47"/>,
  notion: <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.56 2.42c-.42-.326-.98-.7-2.055-.607L3.43 2.788c-.466.046-.56.28-.374.466l1.403.954zm.793 2.846v13.91c0 .746.373 1.026 1.213.98l14.523-.84c.84-.047.933-.56.933-1.167V6.054c0-.607-.233-.933-.747-.887l-15.177.887c-.56.047-.745.327-.745.887v.113zm14.337.56c.093.42 0 .84-.42.887l-.7.14v10.264c-.607.327-1.167.514-1.634.514-.746 0-.933-.234-1.493-.934l-4.577-7.186v6.953l1.447.327s0 .84-1.167.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.372 9.76c-.093-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.213-.14c-.094-.514.28-.887.746-.933l3.267-.187.394.08zm-17.1-5.74L16.436.326C17.886.14 18.28.187 19.166.84l3.546 2.473c.7.513.933.654.933 1.213v16.71c0 .98-.373 1.54-1.634 1.633l-15.457.934c-.933.047-1.353-.093-1.82-.7L1.49 18.89c-.513-.7-.747-1.213-.747-1.82V4.094c0-.747.374-1.4 1.247-1.54l-.001-.68z" fill="#000000"/>,
  googledrive: <><path d="M7.71 3.5L1.15 15l3.44 5.96h6.87" fill="#0066DA"/><path d="M8.3 21.46L4.83 15.5 12.5 3.5h5.21L8.3 21.46z" fill="#00AC47"/><path d="M17.71 3.5L8.3 21.46h8.41L22.85 15l-5.14-11.5z" fill="#EA4335"/><path d="M7.71 3.5L1.15 15l3.44 5.96h6.87L17.71 3.5H7.71z" fill="#0066DA" opacity="0.6"/></>,
  moreTools: <><circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="1.5" fill="none"/><text x="12" y="13" textAnchor="middle" dominantBaseline="middle" fontSize="7" fontWeight="700" fontFamily="Satoshi, sans-serif" fill="#6b7280">266+</text></>,
};

const toolsAbove = [
  { name: 'Amazon', icon: 'amazon' },
  { name: 'Internet', icon: 'internet' },
  { name: 'Shopify', icon: 'shopify' },
  { name: 'Notion', icon: 'notion' },
  { name: 'Google Drive', icon: 'googledrive' },
  { name: '266+ tools', icon: 'moreTools' },
];

export default function HeroAnimation() {
  const svgWidth = 560;
  const svgHeight = 130;
  const centerX = svgWidth / 2;
  const iconSize = 24;
  const iconInner = 20;
  const lineW = 2.25;

  const dragonR = iconSize + 4; // 28

  // Layout: tools at top → bus → trunk → dragon → connector line down to chatbox
  const aboveIconY = 8;
  const aboveBoxBottom = aboveIconY + iconSize * 1.5;
  const aboveBusY = aboveBoxBottom + 8;
  const dragonCY = 90;
  const dragonTop = dragonCY - dragonR;
  const dragonBottom = dragonCY + dragonR;

  const getAboveX = (i) => {
    const margin = 50;
    const totalWidth = svgWidth - margin * 2;
    const step = totalWidth / (toolsAbove.length - 1);
    return margin + i * step;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-[560px]"
        fill="none"
        overflow="visible"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === UPPER LINES: tools → bus → trunk → dragon === */}
        {toolsAbove.map((_, i) => (
          <line key={`av-${i}`} x1={getAboveX(i)} y1={aboveBoxBottom} x2={getAboveX(i)} y2={aboveBusY} stroke="#1A1A1A" strokeWidth={lineW} />
        ))}
        <line x1={getAboveX(0)} y1={aboveBusY} x2={getAboveX(toolsAbove.length - 1)} y2={aboveBusY} stroke="#1A1A1A" strokeWidth={lineW} />
        <line x1={centerX} y1={aboveBusY} x2={centerX} y2={dragonTop} stroke="#1A1A1A" strokeWidth={lineW} />

        {/* === CONNECTOR LINE: dragon → chatbox === */}
        <line x1={centerX} y1={dragonBottom} x2={centerX} y2={svgHeight} stroke="#1A1A1A" strokeWidth={lineW} />

        {/* === ENERGY PULSES (tools) === */}
        {toolsAbove.map((_, i) => {
          const tx = getAboveX(i);
          const pathId = `pa-${i}`;
          return (
            <g key={`pulse-a-${i}`}>
              <path id={pathId} d={`M${centerX},${dragonTop} L${centerX},${aboveBusY} L${tx},${aboveBusY} L${tx},${aboveBoxBottom}`} fill="none" stroke="none" />
              <motion.circle
                r="5" fill="#D63C3C" filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.4, delay: i * 0.45, repeat: Infinity, ease: 'linear' }}
              >
                <animateMotion dur="2.4s" begin={`${i * 0.45}s`} repeatCount="indefinite" fill="freeze">
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            </g>
          );
        })}

        {/* === ENERGY PULSE (dragon → chatbox) === */}
        <path id="pc" d={`M${centerX},${dragonBottom} L${centerX},${svgHeight}`} fill="none" stroke="none" />
        <motion.circle
          r="5" fill="#D63C3C" filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, delay: 0.3, repeat: Infinity, ease: 'linear' }}
        >
          <animateMotion dur="1.6s" begin="0.3s" repeatCount="indefinite" fill="freeze">
            <mpath href="#pc" />
          </animateMotion>
        </motion.circle>

        {/* === TOOL ICONS === */}
        {toolsAbove.map((tool, i) => {
          const x = getAboveX(i);
          const y = aboveIconY;
          return (
            <g key={`ta-${i}`}>
              <rect x={x - iconSize} y={y - iconSize / 2} width={iconSize * 2} height={iconSize * 2} rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <g transform={`translate(${x - iconInner / 2}, ${y - iconInner / 2 + iconSize / 2})`}>
                <svg viewBox="0 0 24 24" width={iconInner} height={iconInner}>{icons[tool.icon]}</svg>
              </g>
              <text x={x} y={y + iconSize + 11} textAnchor="middle" fontSize="8" fontFamily="Satoshi, sans-serif" fontWeight="500" fill="#6b7280">
                {tool.name}
              </text>
            </g>
          );
        })}

        {/* === CENTER DRAGON === */}
        <circle cx={centerX} cy={dragonCY} r={dragonR} fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <image
          href="/logos/dragonbot_fire.png"
          x={centerX - iconSize} y={dragonCY - iconSize}
          width={iconSize * 2} height={iconSize * 2}
        />
      </svg>

      {/* Chatbox animation — fills remaining height */}
      <div className="w-full max-w-[560px] flex-1 min-h-0">
        <ChatWindow messages={heroMessages} className="h-full [&>div:nth-child(2)]:min-h-0 [&>div:nth-child(2)]:max-h-none [&>div:nth-child(2)]:flex-1" />
      </div>
    </div>
  );
}