

import Card from "./ui/card";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

const LectureTwo = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-gray-50"
      )}
    >
      <Card />
    </div>
  );
};

export default LectureTwo;
