import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Button from '../components/ui/Button';
import { Calendar, Ticket } from 'lucide-react';

// Importing ticket icons
import ticket1 from '../assets/ticket-icons/ticket1.png';
import ticket2 from '../assets/ticket-icons/ticket2.png';
import ticket3 from '../assets/ticket-icons/ticket3.png';
import ticket4 from '../assets/ticket-icons/ticket4.png';
import bannerImg1 from '../assets/bookticket-img/img1.png';
import bannerImg2 from '../assets/bookticket-img/img2.png';
import bannerImg3 from '../assets/bookticket-img/img3.png';
import bannerImg4 from '../assets/bookticket-img/img4.png';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

const BookingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Ensure the page starts at the top
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 200); // Fast slideshow/flickering effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-24 font-sans">
      {/* Banner */}
      <div 
        className="w-full relative h-[300px] md:h-[400px] bg-[#bd8b13] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
      >
        {/* Dark overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <span className="sr-only z-20 relative">Goa Moments Live</span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column */}
        <div className="flex-1 space-y-12">
          
          {/* Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 text-white">Goa Moments Sing-A-Long Live</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl text-lg">
              Get ready for the ultimate fashion adventure! Join us for a spectacle like never before at the Goa Moments Live. Experience the runway from 27 November to 29 November 2026.
            </p>
          </div>

          {/* Categories Accordion */}
          <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
            <Accordion type="single" collapsible defaultValue="categories">
              <AccordionItem value="categories" className="border-b-0">
                <AccordionTrigger className="text-xl font-bold uppercase tracking-wider text-[#bd8b13] hover:no-underline">
                  Categories
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-800">
                      <span>Categories</span>
                      <span>Price Inc. VAT</span>
                    </div>
                    {[
                      { name: 'Royal Lounges (Includes 1 meet & greet per ticket)', price: '35,000' },
                      { name: 'VIP', price: '15,000' },
                      { name: 'Diamond', price: '10,000' },
                      { name: 'Platinum', price: '5,000' },
                      { name: 'Gold', price: '3,500' },
                      { name: 'Silver', price: '2,000' },
                    ].map((cat, i) => (
                      <div key={i} className="flex justify-between items-center py-2">
                        <span className="text-gray-200">{cat.name}</span>
                        <span className="font-bold text-[#bd8b13]">₹ {cat.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Event Policies Accordion */}
          <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="policies" className="border-b-0">
                <AccordionTrigger className="text-xl font-bold uppercase tracking-wider text-[#bd8b13] hover:no-underline">
                  Event Policies
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-6 text-gray-400">
                  <div>
                    <h4 className="font-bold text-white mb-2">Age:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>There is no age restriction for this event and all guests require a valid ticket.</li>
                      <li>Children aged eleven months and under can attend without a ticket if they sit on a parent's lap.</li>
                      <li>All Children must be accompanied by 21 years+ adult.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Entry Policies:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Venue doors open 45 minutes before each show.</li>
                      <li>No professional cameras.</li>
                      <li>E-tickets will be scanned at entry. Please make sure tickets are downloaded onto mobile devices.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Your Phone is your Ticket Section */}
          <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
            <Accordion type="single" collapsible defaultValue="phoneTicket">
              <AccordionItem value="phoneTicket" className="border-b-0">
                <AccordionTrigger className="text-xl font-bold uppercase tracking-wider text-[#bd8b13] hover:no-underline">
                  YOUR PHONE IS YOUR TICKET
                </AccordionTrigger>
                <AccordionContent className="pt-8">
                  <div className="text-center mb-10">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-2">HOW TO ACCESS AND USE YOUR DIGITAL TICKETS</h3>
                    <h4 className="text-lg font-semibold uppercase text-[#bd8b13]">YOUR PHONE IS YOUR TICKET</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                      <img src={ticket1} alt="Purchase" className="w-20 h-20 object-contain mb-6" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-4xl text-gray-500 font-light block mb-3">1.</span>
                        <strong className="text-white">Purchase tickets</strong> from Goa Moments website. Click on <strong className="text-white">Get Tickets</strong> and <strong className="text-white">Download the app</strong> from your app store.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                      <img src={ticket2} alt="Log in" className="w-20 h-20 object-contain mb-6" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-4xl text-gray-500 font-light block mb-3">2.</span>
                        <strong className="text-white">Log in to your account</strong>, and your tickets will be ready and waiting in the 'TICKETS' tab.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                      <img src={ticket3} alt="QR Code" className="w-20 h-20 object-contain mb-6" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-4xl text-gray-500 font-light block mb-3">3.</span>
                        <strong className="text-white">Ticket QR Code</strong> will be activated when you arrived at the venue, show your digital tickets at the entrance for easy scanning.
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                      <img src={ticket4} alt="Enjoy" className="w-20 h-20 object-contain mb-6" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-4xl text-gray-500 font-light block mb-3">4.</span>
                        <strong className="text-white">Sit back, relax</strong>, and enjoy the show - it's that simple!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                    <button className="bg-[#bd8b13] text-black hover:bg-[#a67a10] px-8 py-3 font-bold uppercase tracking-wide transition-colors">MORE INFO</button>
                    <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-bold uppercase tracking-wide transition-colors">DOWNLOAD THE APP</button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>

        {/* Right Column / Sticky Sidebar */}
        <div className="lg:w-[450px]">
          <div className="sticky top-32 bg-[#bd8b13] text-white rounded-xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="font-medium text-lg">27-29 November 2026</span>
            </div>
            
            <hr className="border-white/20 mb-6" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="block text-sm font-medium mb-1">Prices from</span>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold">₹</span>
                  <span className="text-5xl font-extrabold tracking-tight">2,000</span>
                </div>
              </div>
              
              <button className="bg-white text-[#bd8b13] hover:bg-gray-100 text-[15px] font-bold h-14 px-6 rounded-lg border-0 shadow-md flex justify-center items-center gap-2 w-full sm:w-auto uppercase tracking-wide transition-colors">
                <Ticket className="w-5 h-5 -rotate-45" strokeWidth={2} />
                SELECT TICKETS
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;
