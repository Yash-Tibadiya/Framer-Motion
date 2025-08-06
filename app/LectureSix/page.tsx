"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const LectureSix = () => {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="py-10 bg-gray-100 min-h-screen relative">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 h-full w-full z-10 bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[500px] fixed inset-0 z-20 m-auto w-72 rounded-2xl border border-neutral-200 p-4 bg-white overflow-hidden"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-2xl"
          />

          <div className="flex flex-col justify-between items-start">
            <div className="flex items-start justify-between py-4 w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="text-lg text-black font-bold tracking-tight"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-xs text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="px-2 py-1 rounded-full bg-green-500 text-white text-xs"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="h-50 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200 cursor-pointer hover:bg-neutral-50"
          >
            <div className="flex gap-4 items-center justify-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-16 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start justify-center gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-lg text-black font-bold tracking-tight"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-xs text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 rounded-full bg-green-500 text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LectureSix;

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "lana del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. Her songs often explore
          themes of tragic romance, glamour, and melancholia, drawing
          inspiration from both contemporary and vintage pop culture. With a
          career that has seen numerous critically acclaimed albums, Lana Del
          Rey has established herself as a unique and influential figure in the
          music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    description: "Adele",
    title: "Hello",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mTb0vtBFf2E9w5C0Y2kCUe1vlgRHO3jSGh_SYRhs9z4FeF_tb2PTWcmAM2ONT3jKaww&usqp=CAU",
    ctaText: "Play",
    ctaLink: "/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          "Hello" by Adele is one of her most iconic hits, marking her return
          after a long hiatus. The song is an emotional ballad about longing,
          regret, and reconciliation. Adele's powerful and soulful voice carries
          the deep emotions of the lyrics, making it an unforgettable listening
          experience. It was a massive commercial success, topping the charts
          worldwide and earning multiple awards, including Grammys.
        </p>
      );
    },
  },
  {
    description: "Ed Sheeran",
    title: "Shape of You",
    src: "https://a10.gaanacdn.com/gn_img/albums/qa4WEkqKP1/a4WEdXr53P/size_m.webp",
    ctaText: "Play",
    ctaLink: "/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          "Shape of You" by Ed Sheeran is a catchy and upbeat song that became a
          global phenomenon. With its infectious melody and danceable rhythm,
          the song became one of the best-selling digital singles of all time.
          The lyrics explore themes of love, attraction, and infatuation, and
          Sheeran's heartfelt delivery adds an intimate touch to the otherwise
          lighthearted track.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "Blinding Lights",
    src: "https://http2.mlstatic.com/D_NQ_NP_851054-MLA79460463478_102024-O.webp",
    ctaText: "Play",
    ctaLink: "/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          "Blinding Lights" by The Weeknd is a synth-heavy, retro-inspired track
          that quickly became one of his biggest hits. The song, with its 80s
          influence, blends contemporary pop with nostalgic elements, capturing
          a sense of longing and desire. Its infectious chorus and smooth
          production made it a massive commercial success, dominating the charts
          and gaining critical acclaim.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "Bad Guy",
    src: "https://m.media-amazon.com/images/I/61HGO-p3K8L._SY342_.jpg",
    ctaText: "Play",
    ctaLink: "/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          "Bad Guy" by Billie Eilish is an experimental pop song that blends
          minimalist beats with a catchy and infectious hook. Eilish's breathy
          vocals and playful delivery of the lyrics convey a sense of rebellion
          and self-assurance. The song became a massive hit, reaching the top of
          the charts and earning Eilish several awards, including Grammys for
          Record of the Year and Song of the Year.
        </p>
      );
    },
  },
];
