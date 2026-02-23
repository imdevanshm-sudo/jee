import { Screen } from '../App';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 py-8 overflow-hidden bg-ivory">
      {/* Fixed Top Left Monogram */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-8 left-8 z-40"
      >
        <div className="flex items-center gap-4">
          <div className="font-display text-2xl font-normal tracking-tight text-ink">
            A & R
          </div>
          <div className="h-6 w-[1px] bg-primary"></div>
          <div className="font-sans text-xs font-medium tracking-[0.15em] text-ink uppercase">
            Dec 12—14
          </div>
        </div>
      </motion.header>

      {/* Center Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[85vw] h-[60vh] md:w-[40vw] md:h-[70vh] rounded-editorial overflow-hidden shadow-sm group"
        >
          <div className="absolute inset-0 border border-primary/20 rounded-editorial pointer-events-none z-20 transition-colors duration-700 group-hover:border-primary/50"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat grayscale contrast-[1.1] brightness-[0.95] transition-transform duration-[10s] ease-linear transform scale-105 group-hover:scale-110" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSo6hyAJF9caGLo7Y_zsAw_B8kRnk-J2TYpELzn0viM0lHcelvBZ_GMvxalj_SEgTIHDkolx9ePzd5vW2f8WNzm9pJphe5RnpbUTnvWwme5lWevB23osukrRzD4bsgb0nDIFTKZz4_7UxTgcsW2cWiL1pWw8xjEjOchQVWtgJc5uq1piShArt3X2zo9YZuJ4YghWrOH4f72RbTiqo8vNLfAu-i650g1t0Lb_NkwzdNv4RzqcBAa-7hRauKR7mDQW3ITFBCgvt1zxNw')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-30 pointer-events-none mix-blend-difference md:mix-blend-normal text-center w-full"
        >
          <h1 className="font-display italic font-normal text-6xl md:text-[120px] leading-[0.9] tracking-tight text-white md:text-ink opacity-90 drop-shadow-sm md:drop-shadow-none">
            The Union
          </h1>
        </motion.div>
      </div>

      {/* Floating Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="bg-cream/90 backdrop-blur-sm border border-border-light rounded-pill px-2 py-2 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          <ul className="flex items-center gap-1">
            <li>
              <button onClick={() => onNavigate('story')} className="block px-6 py-3 rounded-pill font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-ink hover:bg-ivory hover:text-primary transition-colors duration-300">
                The Story
              </button>
            </li>
            <li>
              <span className="block w-[1px] h-3 bg-border-light"></span>
            </li>
            <li>
              <button onClick={() => onNavigate('itinerary')} className="block px-6 py-3 rounded-pill font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-ink hover:bg-ivory hover:text-primary transition-colors duration-300">
                Events
              </button>
            </li>
            <li>
              <span className="block w-[1px] h-3 bg-border-light"></span>
            </li>
            <li>
              <button onClick={() => onNavigate('rsvp')} className="block px-6 py-3 rounded-pill font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-white bg-ink hover:bg-primary transition-colors duration-300">
                RSVP
              </button>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Decorative Floating Elements */}
      <div className="fixed right-8 bottom-8 hidden md:flex flex-col gap-4 z-30 opacity-40 mix-blend-multiply">
        <div className="w-[1px] h-32 bg-primary mx-auto"></div>
        <span className="writing-vertical-rl font-sans text-[10px] tracking-[0.2em] uppercase text-ink rotate-180">Scroll to Explore</span>
      </div>
    </main>
  );
}
