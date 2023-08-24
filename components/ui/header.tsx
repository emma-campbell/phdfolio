import Link from "next/link";
import { Separator } from "./separator";

const links = [
  {
    text: "CV",
    url: "/cv",
  },
  {
    text: "Publications",
    url: "/publications",
  },
  {
    text: "Posters",
    url: "/posters",
  },
];

export default function Header() {
  return (
    <nav className={`w-full flex-col pb-8`}>
      <div className="flex justify-between my-auto items-baseline pb-2">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Andrea Lopez</h1>
        </Link>
        <div className="flex space-x-2 font-sans text-gray-200 text-end h-fit">
          {links.map((l) => {
            return (
              <span key={l.text} className="align-baseline h-fit">
                <Link className="hover:text-black align-baseline" href={l.url}>
                  {l.text}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      <Separator className="bg-black/10" />
    </nav>
  );
}
