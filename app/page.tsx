import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center py-40">
      <div className="flex flex-col items-center justify-center gap-5">
        <Link href="/LectureOne">
          <Button>
            <span>Lecture 1</span>
          </Button>
        </Link>
        <Link href="/LectureTwo">
          <Button>
            <span>Lecture 2</span>
          </Button>
        </Link>
        <Link href="/LectureThree">
          <Button>
            <span>Lecture 3</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
