const LectureSix = () => {
  return <div className="py-40 bg-gray-100 min-h-screen">
    <div className="max-w-lg mx-auto flex flex-col gap-10">
      hello
    </div>
  </div>;
};

export default LectureSix;

type Card = {
  description: string;
  title: string;
  src: string;
  catText: string;
  catLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "lana del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    catText: "Play",
    catLink: "/",
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
    catText: "Play",
    catLink: "/",
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
    catText: "Play",
    catLink: "/",
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
    catText: "Play",
    catLink: "/",
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReUTlvWPpB2PFIdQlW_VSOIhJDzldW2G7dVUHmRC7nGp055ZY6zYapEOiy_6Vc5gv_kI&usqp=CAU",
    catText: "Play",
    catLink: "/",
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
