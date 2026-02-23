import { Heart, Menu } from 'lucide-react';
import { Screen } from '../App';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-border-light px-6 py-4 md:px-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-ink">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Heart className="text-primary w-5 h-5 fill-current" />
            <h2 className="font-display font-bold text-xl tracking-wide">A & R</h2>
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-12 items-center">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('story')}
              className={`font-sans text-xs font-medium tracking-[0.15em] uppercase transition-colors border-b pb-1 ${currentScreen === 'story' ? 'text-primary border-primary' : 'text-stone border-transparent hover:text-primary hover:border-primary'}`}
            >
              The Story
            </button>
            <button 
              onClick={() => onNavigate('itinerary')}
              className={`font-sans text-xs font-medium tracking-[0.15em] uppercase transition-colors border-b pb-1 ${currentScreen === 'itinerary' ? 'text-primary border-primary' : 'text-stone border-transparent hover:text-primary hover:border-primary'}`}
            >
              Events
            </button>
            <button 
              onClick={() => onNavigate('rsvp')}
              className={`font-sans text-xs font-medium tracking-[0.15em] uppercase transition-colors border-b pb-1 ${currentScreen === 'rsvp' ? 'text-primary border-primary' : 'text-stone border-transparent hover:text-primary hover:border-primary'}`}
            >
              RSVP
            </button>
          </div>
          <button 
            onClick={() => onNavigate('rsvp')}
            className="font-sans text-xs font-bold tracking-[0.15em] uppercase bg-primary text-ink px-6 py-3 rounded-full hover:bg-ink hover:text-white transition-all duration-300 shadow-sm"
          >
            RSVP
          </button>
        </div>

        <button className="md:hidden text-ink">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
