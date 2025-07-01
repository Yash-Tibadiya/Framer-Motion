import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center py-40">
      <div className="flex flex-col items-center justify-center gap-5">
        <Link href="/LectureOne">
          <Button>
            <span>Lecture One</span>
          </Button>
        </Link>
        <Link href="/LectureTwo">
          <Button>
            <span>Lecture Two</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
