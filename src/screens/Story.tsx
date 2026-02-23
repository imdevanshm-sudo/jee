import { Screen } from '../App';
import Navigation from '../components/Navigation';
import { Quote } from 'lucide-react';

interface StoryProps {
  onNavigate: (screen: Screen) => void;
}

export default function Story({ onNavigate }: StoryProps) {
  return (
    <div className="min-h-screen bg-ivory relative">
      <Navigation currentScreen="story" onNavigate={onNavigate} />
      
      <main className="pt-32 pb-32 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Sticky Sidebar */}
          <aside className="hidden md:block md:col-span-2 lg:col-span-3 relative">
            <div className="sticky top-40 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                <h3 className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-stone">01 — The Story</h3>
              </div>
              <div className="mt-8 flex flex-col gap-2 pl-11 opacity-50">
                <div className="w-1 h-1 bg-primary rounded-full mb-2"></div>
                <div className="w-1 h-1 bg-stone/30 rounded-full"></div>
                <div className="w-1 h-1 bg-stone/30 rounded-full"></div>
              </div>
            </div>
          </aside>

          {/* Mobile Sticky Header */}
          <div className="md:hidden col-span-1 sticky top-20 z-30 bg-ivory py-2 border-b border-primary/20 mb-8">
            <h3 className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-primary">01 — The Story</h3>
          </div>

          {/* Main Content Area */}
          <article className="col-span-1 md:col-span-10 lg:col-span-7 flex flex-col items-center">
            
            {/* Chapter Header */}
            <header className="w-full max-w-[600px] mb-16 md:mb-24 text-center md:text-left">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4 block">Mumbai, 2018</span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.1] mb-6">
                Serendipity in <br/><i className="font-serif italic text-stone/80">Monochrome</i>
              </h1>
            </header>

            {/* First Image */}
            <figure className="w-full mb-20 relative group">
              <div className="overflow-hidden rounded-lg aspect-[16/9] w-full bg-stone/10">
                <img 
                  alt="A black and white candid photograph of a couple laughing intimately at a formal event, soft grain texture" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRuypmYEr1OFkDcPwQdylEsi-vuqT5vkZQAULVttr2fISxx_9N6hwsQ93igh8aWHKZJotLy0K7njUMetvgRjwrjiFSAJe8rGZlb7Rt8j0CPuk7kkKk-cVmwGR-5C9EnQwICfiAL-SaFXFmFacH5a-LkboyAQZDI8RBYhS82PcjpmvvjMboOGY7BhPIxUrOn7ZjKOiPn1HEcuh-kMMuu2tNxDg2XFi51Mf53kSGtqA_8CEvO2F8Tkxhn-1YoPSQPj3XSjX-8EasoA75"
                />
              </div>
              <figcaption className="font-sans text-[10px] uppercase tracking-widest text-stone mt-3 text-right">Figure 1.1 — The First Gala</figcaption>
            </figure>

            {/* Text Block 1 */}
            <div className="max-w-[600px] w-full mx-auto mb-20">
              <p className="font-body text-xl md:text-2xl leading-[1.8] text-stone drop-cap mb-8">
                We met under the strangest of circumstances, amidst the chaotic beauty of a monsoon evening in Mumbai. The gallery opening was overcrowded, the air thick with humidity and the scent of jasmine. I was attempting to hide behind a sculpture to avoid an awkward conversation; Rohan was doing the exact same thing from the other side.
              </p>
              <p className="font-body text-xl md:text-2xl leading-[1.8] text-stone">
                There was a shared glance—a silent acknowledgment of our mutual introversion—followed by a quiet laughter that cut through the noise of the room. We spent the next three hours discussing architecture, not art, completely ignoring the event we were supposed to be attending.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="w-full max-w-[720px] my-20 md:my-32 relative text-center px-4">
              <Quote className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-primary/20 w-16 h-16 fill-current" />
              <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-primary leading-tight relative z-10">
                "It wasn't love at first sight, it was recognition. A sense of returning home."
              </p>
            </blockquote>

            {/* Asymmetrical Image Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 items-start">
              <figure className="flex flex-col gap-2 mt-0 md:mt-12">
                <div className="overflow-hidden rounded-lg aspect-[3/4] w-full bg-stone/10 shadow-sm">
                  <img 
                    alt="Close up detail shot of hands holding gently, wearing gold rings, soft warm lighting" 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB87Ph0bRIwzVsN8RseCLqtravgeqSsoYb7cDH6vPGC8VncntM-b86dCayTIMxcGFZaLCmXy5hy7CANn2p5NAgFHGtrLo3m1YcTNHj0dDU8C8470-qAV3Z4kko5q28CBa1Kt_-rmgV_JoBll1AFK6rzNe1n4v6CMlvQ1aWipIC6c7LUL_dUJYCqFBjitULZ328ifaSc-0OabmrQ4eShl-XK4DyQUKxQZGw9i06MjlkZerU_8_PDwaPsrFNpknEMLMZAhkzE8V1cXztV"
                  />
                </div>
                <figcaption className="font-sans text-[10px] uppercase tracking-widest text-stone">Detail — The Engagement</figcaption>
              </figure>
              
              <figure className="flex flex-col gap-2 mt-0 md:mt-32">
                <div className="overflow-hidden rounded-lg aspect-[3/4] w-full bg-stone/10 shadow-sm">
                  <img 
                    alt="A candid portrait of the couple walking down a Parisian street, laughing, wearing coats" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmUHk6765O94xbhIessfeuUFs4_Z5rYzo2T3sktojHCq43nE1z_aufP_oG9cMGkqG49v8h4DWIeFSeQvPqylgYAhx0x33lpwHN_F422ZgX8JiPFTWR9MUXCN1cmAWz2Uu4TK6I2qXZjeFdBaPKdl_htcCFontsCJVjGxhLUf2SYQnhLR40P1ty1PGUl96PztttRlUohLNGXCHhMlvKyg-ZF8IbEX2e-YIKMK_LiI5XfWD7qzFk-3BD8Mk3kqNXNpgUhMfawQ9dZovB"
                  />
                </div>
                <figcaption className="font-sans text-[10px] uppercase tracking-widest text-stone text-right">Figure 1.3 — Paris</figcaption>
              </figure>
            </div>

            {/* Text Block 2 */}
            <div className="max-w-[600px] w-full mx-auto mb-16">
              <h2 className="font-display text-3xl text-ink mb-6">The Proposal</h2>
              <p className="font-body text-xl md:text-2xl leading-[1.8] text-stone mb-8">
                Three years later, there were no crowds. Just the quiet stillness of a winter morning in Kyoto. We were walking through the bamboo groves of Arashiyama when he stopped. The light was filtering through the tall stalks in shards of gold.
              </p>
              <p className="font-body text-xl md:text-2xl leading-[1.8] text-stone">
                He didn't kneel. He simply took my hand, placed a small, vintage gold band in my palm, and asked if I wanted to keep walking with him. Not just through the grove, but through everything.
              </p>
              <p className="font-body text-xl md:text-2xl leading-[1.8] text-stone">
                The answer was, and always will be, yes.
              </p>
            </div>

            {/* Footer Navigation Link */}
            <div className="mt-12 w-full flex justify-center">
              <button onClick={() => onNavigate('itinerary')} className="group flex flex-col items-center gap-4">
                <div className="h-16 w-[1px] bg-stone/30 group-hover:bg-primary transition-colors duration-500"></div>
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ink group-hover:text-primary transition-colors">Next Chapter</span>
                <span className="font-display italic text-2xl text-stone group-hover:text-ink transition-colors">The Celebration</span>
              </button>
            </div>

          </article>
          
          <div className="hidden lg:block lg:col-span-2"></div>
        </div>
      </main>
    </div>
  );
}
