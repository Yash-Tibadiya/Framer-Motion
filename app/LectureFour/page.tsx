import Header from "./Header";
import { Hero } from "./hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white w-full flex items-center justify-center overflow-hidden relative">
        <Hero />
      </div>
    </>
  );
}
