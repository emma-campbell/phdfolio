import Image from "next/image";
import Headshot from "@/public/headshot.png";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AnimatedDiv from "@/components/ui/animation/div";
import AnimatedMain from "@/components/ui/animation/main";
import { variants, contentVariants } from "@/lib/animations";

export default function Home() {
  return (
    <>
      <AnimatedMain
        className="max-h-screen min-h-screen bg-off-white content-center"
        variants={variants}
        animate="visible"
        initial="hidden"
      >
        <div className="flex-col mx-auto max-w-xl px-4 md:px-0" id="content">
          <AnimatedDiv variants={contentVariants}>
            <Header />
          </AnimatedDiv>
          <section className="flex-col space-y-12 pb-12">
            <div className="flex gap-[5px]">
              <AnimatedDiv variants={contentVariants}>
                <Image
                  src={Headshot}
                  alt="Photo of Andrea Lopez"
                  placeholder="blur"
                  className="rounded-full w-32 md:w-48"
                />
              </AnimatedDiv>
              <AnimatedDiv
                className="flex-col my-auto mx-8"
                variants={contentVariants}
              >
                <h1 className="text-2xl md:text-5xl font-semibold">
                  Andrea Lopez
                </h1>
              </AnimatedDiv>
            </div>
            <AnimatedDiv variants={contentVariants}>
              <p className="font-sans text-gray-300 break-words">
                <b>Andrea Lopez</b> is a clinical research coordinator at
                Children&apos;s National Hospital, specifically in the Centers
                for Autism Spectrum Disorders. Her passions include
                interventions within the Latinx community and other underserved
                populations.
              </p>
            </AnimatedDiv>
          </section>
          <AnimatedDiv variants={contentVariants}>
            <Footer />
          </AnimatedDiv>
        </div>
      </AnimatedMain>
    </>
  );
}
