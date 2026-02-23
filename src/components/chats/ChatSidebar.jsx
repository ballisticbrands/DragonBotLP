import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const connections = [
  {
    name: 'Amazon Seller Central',
    brands: ['Brand #1', 'Brand #2', 'Brand #3'],
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <path d="M10 2C5.6 2 2 5.6 2 10c0 2.4 1.1 4.5 2.8 6 .2.2.5.1.4-.2-.3-.8-.6-2.2-.3-3.2 0 0 .3-1.2 2.2-3.4C8.8 7.5 9.5 7 10.5 7c.8 0 1.3.5 1.3 1.2 0 1.3-1.5 2.5-1.5 3.5 0 .7.5 1.3 1.3 1.3 2 0 3.4-2.2 3.4-4.2C15 6.5 12.8 5 10.5 5" fill="#FF9900"/>
        <path d="M14.5 14.5c-.2.2-.1.5.2.3C16.3 13.8 18 11.5 18 10c0-1-.3-1.5-.3-1.5" fill="#FF9900" opacity=".7"/>
        <text x="6" y="14" fontSize="10" fontWeight="bold" fill="#232F3E" fontFamily="Arial">a</text>
      </svg>
    ),
  },
  {
    name: 'Amazon Ads',
    brands: ['Brand #1', 'Brand #2', 'Brand #3'],
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <rect x="2" y="2" width="16" height="16" rx="3" fill="#232F3E"/>
        <text x="10" y="14" fontSize="10" fontWeight="bold" fill="#FF9900" fontFamily="Arial" textAnchor="middle">Ad</text>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    brands: ['Brand #1', 'Brand #2', 'Brand #3'],
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <path d="M13.5 3.5s-.2-.1-.4 0c-.1 0-2.4.7-2.4.7s-.5-.5-.8-.7c-.4-.3-.8-.2-1-.1 0 0-.2.1-.5.2-.1-.4-.3-.8-.6-1.1C7.2 1.8 6.4 2 5.9 2.2c-.1 0-.3.1-.4.2C5.3 1.6 4.8 1.2 4.2 1.2c-1.5 0-2.2 1.9-2.5 2.8-.7.2-1.2.4-1.2.4C.2 4.5 0 4.7 0 5v11l9.9 1.7L16 16s-2.4-12.3-2.5-12.5zM9.5 5.5l-1.8.5c.2-.6.5-1.4.9-1.8.2-.2.4-.3.7-.3.2.5.2 1.1.2 1.6zm-2.8.8L4.2 7c.3-1 .8-2 1.8-2 .3 0 .5.1.6.3-.3.4-.5 1-.6 1.6-.1-.1-.2-.1-.3-.1z" fill="#95BF47"/>
        <path d="M13.1 3.6s-.1 0-.4 0c-.1 0-2.4.7-2.4.7s-.5-.5-.8-.7L9.5 17l6.5-1.1S13.5 3.8 13.1 3.6z" fill="#5E8E3E"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    brands: null,
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <rect x="3" y="2" width="14" height="16" rx="2" fill="white" stroke="#333" strokeWidth="1.5"/>
        <path d="M6 6h8M6 9h6M6 12h7" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Google Drive',
    brands: null,
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <path d="M3.5 17L7 11h12l-3.5 6H3.5z" fill="#4285F4"/>
        <path d="M13 11L7 11 10 5.5 16 5.5z" fill="#FBBC04"/>
        <path d="M10 5.5L3.5 17 7 11z" fill="#34A853"/>
      </svg>
    ),
  },
  {
    name: 'Gmail',
    brands: null,
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <rect x="2" y="4" width="16" height="12" rx="2" fill="#F1F1F1" stroke="#D93025" strokeWidth="0.5"/>
        <path d="M2 6l8 5 8-5" fill="none" stroke="#D93025" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Slack',
    brands: null,
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
        <path d="M7 2a1.5 1.5 0 100 3h1.5V3.5A1.5 1.5 0 007 2z" fill="#E01E5A"/>
        <path d="M2 8.5A1.5 1.5 0 103.5 10H5V8.5A1.5 1.5 0 002 8.5z" fill="#36C5F0"/>
        <path d="M8.5 18a1.5 1.5 0 100-3H7v1.5A1.5 1.5 0 008.5 18z" fill="#2EB67D"/>
        <path d="M18 11.5a1.5 1.5 0 10-3 0V13h1.5a1.5 1.5 0 001.5-1.5z" fill="#ECB22E"/>
        <path d="M5 8.5A1.5 1.5 0 008.5 10h3A1.5 1.5 0 0010 7H8.5A1.5 1.5 0 005 8.5z" fill="#36C5F0"/>
        <path d="M8.5 5A1.5 1.5 0 0010 8.5v3A1.5 1.5 0 0011.5 10V8.5A1.5 1.5 0 008.5 5z" fill="#E01E5A"/>
        <path d="M15 11.5A1.5 1.5 0 0011.5 10h-3a1.5 1.5 0 001.5 3h1.5a1.5 1.5 0 003-1.5z" fill="#ECB22E"/>
        <path d="M11.5 15a1.5 1.5 0 00-1.5-3.5v3a1.5 1.5 0 001.5.5z" fill="#2EB67D"/>
      </svg>
    ),
  },
];

function ConnectionItem({ connection, dark }) {
  const [expanded, setExpanded] = useState(false);
  const hasBrands = connection.brands && connection.brands.length > 0;

  return (
    <div>
      <button
        onClick={() => hasBrands && setExpanded(!expanded)}
        className={`w-full flex items-center gap-2.5 px-5 py-2 text-sm font-satoshi transition-colors ${
          dark ? 'text-white/60' : 'text-[#1A1A1A]/70'
        } ${hasBrands ? (dark ? 'hover:bg-white/5 cursor-pointer' : 'hover:bg-gray-50 cursor-pointer') : 'cursor-default'}`}
      >
        {connection.icon}
        <span className="truncate flex-1 text-left">{connection.name}</span>
        {hasBrands && (
          expanded
            ? <ChevronDown size={14} className={`shrink-0 ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`} />
            : <ChevronRight size={14} className={`shrink-0 ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`} />
        )}
      </button>
      {hasBrands && expanded && (
        <div className="pl-12 pr-5 pb-1">
          {connection.brands.map((brand) => (
            <div key={brand} className={`py-1 text-xs font-satoshi ${dark ? 'text-white/40' : 'text-[#1A1A1A]/50'}`}>
              {brand}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatSidebar({ channels, chats, activeSlug, onSelect, dark }) {
  return (
    <aside className={`w-72 border-r flex flex-col shrink-0 h-full ${dark ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-gray-200'}`}>
      {/* Logo header */}
      <div className={`px-5 py-4 border-b flex items-center gap-2.5 shrink-0 ${dark ? 'border-white/10' : 'border-gray-200'}`}>
        <img src="/logos/dragonbot_fire.png" alt="DragonBot" className="h-8" />
        <span className={`font-clash font-bold text-lg ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>DragonBot</span>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Channels */}
        <div className="py-2">
          <h3 className={`px-5 py-2 text-xs font-satoshi font-semibold uppercase tracking-wider ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`}>
            Channels
          </h3>
          <nav>
            {channels.map(({ slug, title }) => (
              <Link
                key={slug}
                to={`/chats/${slug}`}
                onClick={() => onSelect?.(slug)}
                className={`block px-5 py-2.5 text-sm font-satoshi transition-colors ${
                  activeSlug === slug
                    ? dark ? 'bg-[#2F7D4F]/20 text-[#4ADE80] font-medium border-r-2 border-[#4ADE80]' : 'bg-[#2F7D4F]/10 text-[#2F7D4F] font-medium border-r-2 border-[#2F7D4F]'
                    : dark ? 'text-white/60 hover:bg-white/5' : 'text-[#1A1A1A]/70 hover:bg-gray-50'
                }`}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className={`mx-5 border-t ${dark ? 'border-white/10' : 'border-gray-200'}`} />

        {/* Your chats */}
        <div className="py-2">
          <h3 className={`px-5 py-2 text-xs font-satoshi font-semibold uppercase tracking-wider ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`}>
            Your chats
          </h3>
          <nav>
            {chats.map(({ slug, title }) => (
              <Link
                key={slug}
                to={`/chats/${slug}`}
                onClick={() => onSelect?.(slug)}
                className={`block px-5 py-3 text-sm font-satoshi transition-colors ${
                  activeSlug === slug
                    ? dark ? 'bg-[#2F7D4F]/20 text-[#4ADE80] font-medium border-r-2 border-[#4ADE80]' : 'bg-[#2F7D4F]/10 text-[#2F7D4F] font-medium border-r-2 border-[#2F7D4F]'
                    : dark ? 'text-white/60 hover:bg-white/5' : 'text-[#1A1A1A]/70 hover:bg-gray-50'
                }`}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className={`mx-5 border-t ${dark ? 'border-white/10' : 'border-gray-200'}`} />

        {/* Your connections */}
        <div className="py-2">
          <h3 className={`px-5 py-2 text-xs font-satoshi font-semibold uppercase tracking-wider ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`}>
            Your connections
          </h3>
          <div>
            {connections.map((conn) => (
              <ConnectionItem key={conn.name} connection={conn} dark={dark} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`mx-5 border-t ${dark ? 'border-white/10' : 'border-gray-200'}`} />

        {/* Team members */}
        <div className="py-2">
          <h3 className={`px-5 py-2 text-xs font-satoshi font-semibold uppercase tracking-wider ${dark ? 'text-white/30' : 'text-[#1A1A1A]/40'}`}>
            Team members
          </h3>
          <div>
            {[
              { name: 'Gershon', color: 'bg-[#2F7D4F]' },
              { name: 'Maya', color: 'bg-[#6366F1]' },
              { name: 'Daniel', color: 'bg-[#F59E0B]' },
              { name: 'Sofia', color: 'bg-[#EC4899]' },
              { name: 'Liam', color: 'bg-[#3B82F6]' },
            ].map((member) => (
              <div
                key={member.name}
                className={`flex items-center gap-2.5 px-5 py-2 text-sm font-satoshi ${dark ? 'text-white/60' : 'text-[#1A1A1A]/70'}`}
              >
                <div className={`w-5 h-5 rounded-full ${member.color} flex items-center justify-center shrink-0`}>
                  <span className="text-[10px] font-semibold text-white">{member.name[0]}</span>
                </div>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
