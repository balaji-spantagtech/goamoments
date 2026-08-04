import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Timeline } from './ui/timeline';
import TextScrollAnimation from './ui/TextScrollAnimation';

const schedule = [
  {
    date: "27",
    month: "Nov 2026",
    title: "Opening Gala & Miss Goa Moments",
    time: "18:00 - 23:00",
    venue: "Main Beachfront Arena"
  },
  {
    date: "28",
    month: "Nov 2026",
    title: "International Fashion Showcase",
    time: "16:00 - 22:00",
    venue: "Luxury Resort Pavilion"
  },
  {
    date: "29",
    month: "Nov 2026",
    title: "Grand Finale & Afterparty",
    time: "19:00 - 02:00",
    venue: "Exclusive Seaside Club"
  }
];

const UpcomingShows = () => {
  const data = schedule.map(event => ({
    title: (
      <div className="flex flex-col text-white items-start">
        <span className="text-5xl md:text-6xl font-heading text-white font-bold">{event.date}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-primary mt-1">{event.month}</span>
      </div>
    ),
    content: (
      <div className="glass-card p-6 md:p-8 group hover:border-primary/50 transition-colors">
        <h3 className="text-xl md:text-2xl font-heading text-white uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-xs md:text-sm text-text-secondary tracking-widest uppercase mb-8">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">Time:</span> {event.time}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">Venue:</span> {event.venue}
          </div>
        </div>
        <Button variant="outline" className="group-hover:bg-primary group-hover:text-background border-border hover:border-primary">Reserve Seat</Button>
      </div>
    )
  }));

  return (
    <Section id="shows" className="bg-background pt-24 pb-0">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase font-heading">
          <TextScrollAnimation text="Event Schedule" />
        </h2>
        <p className="text-primary mt-4 tracking-widest uppercase text-sm">The 3-Day Spectacle</p>
        <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
      </div>

      <Timeline data={data} />
    </Section>
  );
};

export default UpcomingShows;
