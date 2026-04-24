"use client";

import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "The walnut credenza arrived two weeks early — the joinery is impeccable, and the white-glove team installed it in under an hour.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Rania Khoury",
    role: "Homeowner — Beirut",
  },
  {
    text: "VI's atelier worked with our architect on a custom dining table for sixteen. The result is the centrepiece of the home.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Karim Saad",
    role: "Architect — Byblos",
  },
  {
    text: "After ten years our linen sofa still looks like the day it arrived. The reupholster service is exceptional.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Yasmine Haddad",
    role: "Interior Designer — Tripoli",
  },
  {
    text: "Slow furniture, made properly. The hand-spun rattan lounge has more personality than anything I've imported from Europe.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Ziad Abou-Jaoudé",
    role: "Collector — Beirut",
  },
  {
    text: "Working with the Batroun atelier felt like a real collaboration — they understood the brief from the first sketch.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Layla Bassil",
    role: "Stylist — Saida",
  },
  {
    text: "Quietly the best furniture studio in Lebanon. Restrained, considered, durable — exactly what a home needs.",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Omar Fakhoury",
    role: "Editor — Tripoli",
  },
  {
    text: "The Atelier Edition lighting series is extraordinary. Slumped glass and brass — every fixture feels like a small sculpture.",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Nour Mansour",
    role: "Gallerist — Byblos",
  },
  {
    text: "Ten-year warranty isn't marketing — they actually honour it. Replaced a piece of hardware on a five-year-old chair, no questions.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Fady Geagea",
    role: "Homeowner — Beirut",
  },
  {
    text: "Sustainable wood, ethical sourcing, and craft you can feel. We furnished the entire boutique with VI pieces.",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
    name: "Maya Chamoun",
    role: "Hotelier — Batroun",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-xs uppercase tracking-widest">
              Testimonials
            </div>
          </div>

          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight mt-5 text-center">
            From homes across Lebanon.
          </h2>
          <p className="text-center mt-5 opacity-75">
            What collectors, designers, and homeowners say about living with a
            VI piece.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
