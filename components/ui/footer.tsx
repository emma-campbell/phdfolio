import Link from "next/link";
import { Separator } from "./separator";

export default function Footer() {
  return (
    <>
      <Separator className="bg-black/10" />
      <footer className={`w-full grid pt-4 grid-cols-2 text-gray-300`}>
        <p className="text-sm md:text-md">© 2023 Andrea Lopez</p>
        <p className="text-sm md:text-md flex justify-end">
          Built with ❤ By{" "}
          <Link
            href="https://emmacampbell.dev"
            className="hover:text-blue underline pl-1"
          >
            Emma Campbell
          </Link>
        </p>
      </footer>
    </>
  );
}
