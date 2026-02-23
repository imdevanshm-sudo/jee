import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface RSVPProps {
  onNavigate: (screen: Screen) => void;
}

export default function RSVP({ onNavigate }: RSVPProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full w-full relative bg-ivory">
      {/* Left Side: Form */}
      <div className="w-full lg:w-[55%] h-full relative flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32 py-12 overflow-y-auto">
        <div className={`relative z-10 w-full max-w-xl mx-auto form-container ${submitted ? 'submitted' : ''}`}>
          
          {/* Success Message */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-center z-20 transition-opacity duration-800 ${submitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="font-newsreader text-6xl md:text-8xl italic text-ink mb-4">Merci</h2>
            <p className="font-noto text-xs uppercase tracking-[0.2em] text-stone">We look forward to celebrating with you</p>
            <button 
              onClick={() => onNavigate('home')}
              className="mt-12 font-noto text-[10px] uppercase tracking-widest text-stone hover:text-primary transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Return Home
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className={`transition-opacity duration-500 ${submitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="mb-16">
              <span className="font-noto text-[11px] uppercase tracking-[0.15em] text-stone block mb-4">The Response</span>
              <h1 className="font-newsreader text-5xl md:text-6xl font-light tracking-tight text-ink">
                R S V P
              </h1>
            </div>

            <div className="mb-12 input-group">
              <label className="text-[10px] uppercase tracking-[0.1em] font-noto text-stone mb-2 block" htmlFor="name">Guest Name</label>
              <div className="input-underline">
                <input required autoComplete="off" className="custom-input" id="name" name="name" placeholder="Ananya Sharma" type="text" />
              </div>
            </div>

            <div className="mb-12 input-group">
              <label className="text-[10px] uppercase tracking-[0.1em] font-noto text-stone mb-2 block" htmlFor="email">Email Address</label>
              <div className="input-underline">
                <input required autoComplete="off" className="custom-input" id="email" name="email" placeholder="ananya@example.com" type="email" />
              </div>
            </div>

            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.1em] font-noto text-stone mb-4 block">Will you be joining us?</span>
              <div className="flex gap-4 radio-group mt-2">
                <div className="relative">
                  <input defaultChecked id="attend-yes" name="attendance" type="radio" value="yes" />
                  <label htmlFor="attend-yes">Joyfully Accepts</label>
                </div>
                <div className="relative">
                  <input id="attend-no" name="attendance" type="radio" value="no" />
                  <label htmlFor="attend-no">Regretfully Declines</label>
                </div>
              </div>
            </div>

            <div className="mb-16 input-group">
              <label className="text-[10px] uppercase tracking-[0.1em] font-noto text-stone mb-2 block" htmlFor="dietary">Dietary Restrictions (Optional)</label>
              <div className="input-underline">
                <input className="custom-input" id="dietary" name="dietary" placeholder="e.g. Vegetarian, Gluten-free" type="text" />
              </div>
            </div>

            <button type="submit" className="group relative w-full sm:w-auto min-w-[240px] h-14 bg-ink hover:bg-primary text-white transition-colors duration-500 flex items-center justify-center gap-3">
              <span className="font-noto text-xs font-bold uppercase tracking-[0.2em]">Confirm Attendance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <div className="mt-12 flex gap-8 border-t border-border-light pt-8">
              <div>
                <p className="font-noto text-[10px] uppercase tracking-widest text-stone mb-1">Date</p>
                <p className="font-newsreader text-lg text-ink">Dec 12—14</p>
              </div>
              <div>
                <p className="font-noto text-[10px] uppercase tracking-widest text-stone mb-1">Location</p>
                <p className="font-newsreader text-lg text-ink">Udaipur, India</p>
              </div>
            </div>
          </form>
        </div>

        {/* Navigation hint */}
        <div className="absolute bottom-8 left-8 sm:left-12 opacity-40 hover:opacity-100 transition-opacity hidden sm:block">
          <button onClick={() => onNavigate('itinerary')} className="flex items-center gap-2 text-ink">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-noto text-[10px] uppercase tracking-widest">Back to Itinerary</span>
          </button>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="hidden lg:flex w-[45%] h-full bg-[#E5DCC5] relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
        
        <div className="relative z-10 w-[60%] h-[70%] rounded-[200px] overflow-hidden shadow-2xl border border-white/20">
          <img 
            alt="Abstract architectural detail of warm stone arches and shadows in golden hour light" 
            className="w-full h-full object-cover opacity-90 sepia-[0.2]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5k7h9WN1tPqLzpP-FSdsNwr_mzo2ylhOIKxHKXkBOpBbUFUbhmdLnUevi_yvnlG1o4lUnWPnsI57lW0hArnA9hBjjRIJkQlC_qiZ42hoY1uf6r5zm8zm_tjvulLQYa2uXDRLH6FjEy9vPZFnNseYjPX5MYnjW39EW6XLsvUi7GG9xRrZ9QCiPkslYaNbzxAJchn_oqFxArgrTXAzCXY9q6Sm8e9Tl9kyAcSp6h3QokaDhJwEyd6Fh0IGKQpCLVNXBlqkLS7bVN6gl"
          />
          <div className="absolute bottom-12 left-0 right-0 text-center">
            <p className="font-newsreader italic text-white text-3xl opacity-90 drop-shadow-md">
              "The pleasure of your company"
            </p>
          </div>
        </div>

        <div className="absolute top-12 right-12 text-ink/20 mix-blend-overlay">
          <h2 className="font-newsreader text-9xl font-bold leading-none select-none">A&R</h2>
        </div>
      </div>
    </div>
  );
}
