import Image from "next/image";
import Headshot from "@/public/headshot.png";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Heading } from "@/components/ui/typography/heading";

export default function Home() {
  return (
    <>
      <main className="max-h-screen min-h-screen bg-off-white content-center">
        <div className="flex-col mx-auto max-w-xl px-4 md:px-0" id="content">
          <Header />
          <section className="flex-col space-y-12 pb-12">
            <div className="flex">
              <Image
                src={Headshot}
                alt="Photo of Andrea Lopez"
                className="rounded-full w-32 md:w-48"
              />
              <div className="flex-col my-auto mx-8">
                <h1 className="text-2xl md:text-5xl font-semibold">
                  Andrea Lopez
                </h1>
                <div className="flex space-x-2 font-sans text-gray-200">
                  <Link href="/cv">
                    <p className="hover:text-black">CV</p>
                  </Link>
                  <p className="hover:text-black">Publications</p>
                  <p className="hover:text-black">Posters</p>
                </div>
              </div>
            </div>
            <p className="font-sans text-gray-300 break-words">
              <b>Andrea Lopez</b> is a clinical research coordinator at
              Children&apos;s National Hospital, specifically in the Centers for
              Autism Spectrum Disorders. Her passions include interventions
              within the Latinx community and other underserved populations.
            </p>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
