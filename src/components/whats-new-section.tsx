import React from 'react';

interface TimelineItem {
  date: string;
  event: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "Aug '24",
    event: "Joined Microsoft Research India"
  },
  {
    date: "Aug '23", 
    event: "Attended the CMMRS Summer School in Saarbrücken, Germany"
  },
  {
    date: "Jul '23",
    event: "Started my first job at Salesforce"
  },
  {
    date: "May '23",
    event: "Graduated from BITS Pilani"
  }
];

import Link from 'next/link';

export function WhatsNewSection() {
  return (
    <section className="-mt-4">
      <h2 className="font-serif text-xl mb-5 tracking-wide text-zinc-800">
       Highlights
      </h2>
      <div className="space-y-3 mb-12">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-20 text-sm font-medium text-zinc-500 tracking-wide uppercase pt-0.5">
              {item.date}
            </div>
            <div className="flex-grow">
              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}