import { useState } from 'react';
import Home from './screens/Home';
import Story from './screens/Story';
import Itinerary from './screens/Itinerary';
import RSVP from './screens/RSVP';
import { AnimatePresence, motion } from 'motion/react';

export type Screen = 'home' | 'story' | 'itinerary' | 'rsvp';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen bg-ivory text-ink font-body selection:bg-primary/20 selection:text-ink relative overflow-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-50 bg-noise mix-blend-multiply"></div>
      
      <AnimatePresence mode="wait">
        {currentScreen === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Home onNavigate={setCurrentScreen} />
          </motion.div>
        )}
        {currentScreen === 'story' && (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Story onNavigate={setCurrentScreen} />
          </motion.div>
        )}
        {currentScreen === 'itinerary' && (
          <motion.div
            key="itinerary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Itinerary onNavigate={setCurrentScreen} />
          </motion.div>
        )}
        {currentScreen === 'rsvp' && (
          <motion.div
            key="rsvp"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="h-screen"
          >
            <RSVP onNavigate={setCurrentScreen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
