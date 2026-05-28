import React from "react";
import {
  Globe2,
  Code2,
  Database,
  Search,
  Smartphone,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code2,
  },
  {
    title: "CRM Solutions",
    icon: Database,
  },
  {
    title: "SEO Optimization",
    icon: Search,
  },
  {
    title: "App Development",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
  },
  {
    title: "Global Services",
    icon: Globe2,
  },
];

export default function FooterServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050038] to-[#293163] py-10 border-t border-white/10">


      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px]" />

      <div className="relative">


        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#050816] to-transparent z-10" />


        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#050816] to-transparent z-10" />


        <div className="marquee-wrapper">

          <div className="marquee-track">

            {[...services, ...services].map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 px-7 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition">

                      <Icon
                        size={24}
                        className="text-yellow-400 group-hover:text-black"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-black whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>


      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll 22s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}