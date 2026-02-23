import { Screen } from '../App';
import Navigation from '../components/Navigation';
import { ArrowUpRight, Heart } from 'lucide-react';

interface ItineraryProps {
  onNavigate: (screen: Screen) => void;
}

export default function Itinerary({ onNavigate }: ItineraryProps) {
  return (
    <div className="min-h-screen bg-ivory relative flex flex-col">
      <Navigation currentScreen="itinerary" onNavigate={onNavigate} />
      
      <main className="flex-1 px-6 pb-20 pt-32 md:px-12 lg:px-20">
        {/* Hero Title */}
        <div className="mb-24 max-w-[960px]">
          <span className="mb-4 block font-sans text-xs font-bold tracking-[0.2em] text-primary uppercase">Three Days of Celebration</span>
          <h1 className="font-newsreader text-6xl font-light leading-[0.95] tracking-tight text-ink md:text-8xl lg:text-[7rem]">
            The Itinerary
          </h1>
          <p className="mt-8 max-w-xl font-newsreader text-2xl font-light italic text-stone">
            Join us in Udaipur for a curated journey through tradition, love, and togetherness.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-[1400px]">
          
          {/* DAY 01 */}
          <div className="group/day relative flex flex-col gap-8 border-t border-border-light py-16 lg:flex-row lg:gap-24">
            <div className="lg:w-1/4 lg:sticky lg:top-32 lg:h-fit">
              <div className="flex items-baseline gap-4">
                <span className="font-newsreader text-5xl font-regular text-ink">Dec 12</span>
                <span className="font-noto text-sm font-medium uppercase tracking-widest text-stone">Thursday</span>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col gap-0 w-full">
              <EventItem 
                time="12:30 PM"
                title="Welcome Lunch"
                location="The Lake Terrace"
                attire="Casual Chic"
              />
              <EventItem 
                time="07:00 PM"
                title="The Sangeet"
                location="Zenana Mahal"
                attire="Traditional Glamour"
              />
            </div>
          </div>

          {/* DAY 02 */}
          <div className="group/day relative flex flex-col gap-8 border-t border-border-light py-16 lg:flex-row lg:gap-24">
            <div className="lg:w-1/4 lg:sticky lg:top-32 lg:h-fit">
              <div className="flex items-baseline gap-4">
                <span className="font-newsreader text-5xl font-regular text-ink">Dec 13</span>
                <span className="font-noto text-sm font-medium uppercase tracking-widest text-stone">Friday</span>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col gap-0 w-full">
              <EventItem 
                time="10:00 AM"
                title="The Haldi"
                location="Poolside Pavilion"
                attire="Shades of Yellow"
              />
              <EventItem 
                time="04:30 PM"
                title="The Ceremony"
                location="Jagmandir Island Palace"
                attire="Formal Indian"
              />
              <EventItem 
                time="06:30 PM"
                title="Sunset High Tea"
                location="Darbar Hall Terrace"
                attire="As Ceremony"
              />
            </div>
          </div>

          {/* DAY 03 */}
          <div className="group/day relative flex flex-col gap-8 border-t border-border-light py-16 lg:flex-row lg:gap-24">
            <div className="lg:w-1/4 lg:sticky lg:top-32 lg:h-fit">
              <div className="flex items-baseline gap-4">
                <span className="font-newsreader text-5xl font-regular text-ink">Dec 14</span>
                <span className="font-noto text-sm font-medium uppercase tracking-widest text-stone">Saturday</span>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col gap-0 w-full">
              <EventItem 
                time="08:00 PM"
                title="Reception Gala"
                location="Manek Chowk"
                attire="Black Tie"
              />
              <EventItem 
                time="11:00 PM"
                title="After Party"
                location="The Bar"
                attire="Whatever"
              />
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="font-newsreader text-xl italic text-stone/60">
            We kindly request no boxed gifts.
          </p>
          <div className="mt-8 flex justify-center">
            <Heart className="text-primary/40 w-6 h-6 fill-current" />
          </div>
        </div>
      </main>
    </div>
  );
}

function EventItem({ time, title, location, attire }: { time: string, title: string, location: string, attire: string }) {
  return (
    <div className="group/event relative flex flex-col gap-6 border-b border-border-light p-6 transition-all duration-500 hover:bg-cream hover:pl-10 md:flex-row md:items-center md:justify-between md:gap-12">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-12">
        <span className="min-w-[80px] font-noto text-xs font-medium tracking-wide text-stone uppercase">{time}</span>
        <div className="flex flex-col">
          <h3 className="font-newsreader text-3xl md:text-4xl text-ink font-light group-hover/event:text-primary transition-colors">{title}</h3>
          <span className="font-newsreader text-lg italic text-stone mt-1">{location}</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 md:justify-end">
        <span className="rounded-full border border-primary/40 px-4 py-1.5 font-noto text-[10px] font-bold uppercase tracking-widest text-stone bg-transparent">
          Attire: {attire}
        </span>
        <div className="flex size-10 items-center justify-center rounded-full bg-primary/0 text-primary opacity-0 transition-all duration-300 group-hover/event:bg-primary/10 group-hover/event:opacity-100">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
