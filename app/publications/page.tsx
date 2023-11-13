import AnimatedDiv from "@/components/ui/animation/div";
import AnimatedMain from "@/components/ui/animation/main";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Body } from "@/components/ui/typography/body";
import { Heading } from "@/components/ui/typography/heading";
import type { Metadata } from "next";
import { variants, contentVariants } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Publications",
};

/**
 * The publications page is responsible for listing all
 * publications from Andrea.
 *
 * We can accomplish this by using some google scholar service.
 */
export default function Publications() {
  return (
    <>
      <AnimatedMain
        className="max-w-xl px-4 md:px-0 m-auto"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedDiv variants={contentVariants}>
          <Header />
        </AnimatedDiv>
        <section className="pb-12">
          <AnimatedDiv variants={contentVariants}>
            <Heading level={1}>Publications</Heading>
          </AnimatedDiv>
          <AnimatedDiv variants={contentVariants}>
            <Body>Oops, this is incomplete. Please come back later.</Body>
          </AnimatedDiv>
        </section>
        <AnimatedDiv variants={contentVariants}>
          <Footer />
        </AnimatedDiv>
      </AnimatedMain>
    </>
  );
}
