import Link from "next/link";
import { Separator } from "./separator";

export default function Footer() {
  return (
    <>
      <Separator className="bg-black/10" />
      <footer className={`w-full grid pt-4 grid-cols-2 text-gray-300`}>
        <p>© 2023 Andrea Lopez</p>
        <p>
          Built with ❤ By{" "}
          <Link
            href="https://emmacampbell.dev"
            className="hover:text-blue underline"
          >
            Emma Campbell
          </Link>
        </p>
      </footer>
    </>
  );
}
