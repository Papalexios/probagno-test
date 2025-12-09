import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const sizes = {
    sm: { 
      container: 'gap-2.5', 
      mark: 'w-10 h-10', 
      text: 'text-lg', 
      tagline: 'text-[8px]',
      letterSize: 'text-lg',
      frameStroke: 1,
      innerPadding: 6
    },
    md: { 
      container: 'gap-3', 
      mark: 'w-12 h-12', 
      text: 'text-xl', 
      tagline: 'text-[9px]',
      letterSize: 'text-xl',
      frameStroke: 1.5,
      innerPadding: 7
    },
    lg: { 
      container: 'gap-4', 
      mark: 'w-16 h-16', 
      text: 'text-3xl', 
      tagline: 'text-[11px]',
      letterSize: 'text-2xl',
      frameStroke: 2,
      innerPadding: 9
    },
  };

  const s = sizes[size];

  return (
    <Link to="/" className={`flex items-center ${s.container} group ${className}`}>
      {/* Premium Logo Mark - Geometric Mirror Frame */}
      <motion.div 
        className={`${s.mark} relative flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Ambient glow on hover */}
        <motion.div 
          className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
        
        {/* SVG Logo Mark */}
        <svg 
          viewBox="0 0 48 48" 
          className="w-full h-full"
          fill="none"
        >
          {/* Outer Frame - Elegant Rectangle */}
          <motion.rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="2"
            stroke="url(#frameGradient)"
            strokeWidth={s.frameStroke}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          {/* Inner Frame - Double Line Effect */}
          <motion.rect
            x="7"
            y="7"
            width="34"
            height="34"
            rx="1"
            stroke="url(#innerFrameGradient)"
            strokeWidth={s.frameStroke * 0.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
          
          {/* Corner Accents - Top Left */}
          <motion.path
            d="M3 12 L3 3 L12 3"
            stroke="url(#accentGradient)"
            strokeWidth={s.frameStroke * 1.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          
          {/* Corner Accents - Bottom Right */}
          <motion.path
            d="M45 36 L45 45 L36 45"
            stroke="url(#accentGradient)"
            strokeWidth={s.frameStroke * 1.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
          
          {/* Letter P - Custom Serif Design */}
          <motion.text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-serif font-semibold"
            style={{
              fontSize: '22px',
              fill: 'url(#letterGradient)',
              letterSpacing: '0.02em',
            }}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            P
          </motion.text>
          
          {/* Gradient Definitions */}
          <defs>
            {/* Main Frame Gradient - Warm Stone */}
            <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78716c" />
              <stop offset="50%" stopColor="#a8a29e" />
              <stop offset="100%" stopColor="#78716c" />
            </linearGradient>
            
            {/* Inner Frame - Subtle */}
            <linearGradient id="innerFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d6d3d1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a8a29e" stopOpacity="0.3" />
            </linearGradient>
            
            {/* Accent Gradient - Premium Gold */}
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#f5d67b" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            
            {/* Letter Gradient - Rich Dark */}
            <linearGradient id="letterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#44403c" className="dark:stop-color-[#fafaf9]" />
              <stop offset="100%" stopColor="#1c1917" className="dark:stop-color-[#e7e5e4]" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Shimmer Effect on Hover */}
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm"
          initial={false}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.12) 45%, rgba(212, 175, 55, 0.2) 50%, rgba(212, 175, 55, 0.12) 55%, transparent 60%)',
              transform: 'translateX(-100%)',
            }}
            whileHover={{
              transform: 'translateX(100%)',
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Brand Typography */}
      <div className="flex flex-col">
        {/* Main Brand Name */}
        <motion.div 
          className="relative overflow-hidden"
          initial={false}
        >
          <motion.span 
            className={`font-serif ${s.text} font-medium tracking-[0.2em] text-stone-800 dark:text-stone-100 block`}
            style={{
              fontFeatureSettings: '"kern" 1, "liga" 1',
            }}
          >
            PROBAGNO
          </motion.span>
          
          {/* Elegant Underline */}
          <motion.div 
            className="absolute -bottom-0.5 left-0 right-0 h-[1px] origin-left"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #d4af37 20%, #f5d67b 50%, #d4af37 80%, transparent 100%)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Tagline */}
        {showTagline && (
          <motion.div 
            className="flex items-center gap-2 mt-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Decorative Line */}
            <div className="w-4 h-[0.5px] bg-gradient-to-r from-transparent via-stone-400 to-stone-400 dark:via-stone-500 dark:to-stone-500" />
            
            <span 
              className={`${s.tagline} tracking-[0.35em] text-stone-500 dark:text-stone-400 uppercase font-light`}
              style={{ fontFeatureSettings: '"smcp" 1' }}
            >
              Since 1974
            </span>
            
            {/* Decorative Line */}
            <div className="w-4 h-[0.5px] bg-gradient-to-l from-transparent via-stone-400 to-stone-400 dark:via-stone-500 dark:to-stone-500" />
          </motion.div>
        )}
      </div>
    </Link>
  );
}

export default Logo;
