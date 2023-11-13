import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Heading } from "@/components/ui/typography/heading";
import { Body } from "@/components/ui/typography/body";
import type { Metadata } from "next";
import AnimatedMain from "@/components/ui/animation/main";
import { contentVariants, variants } from "@/lib/animations";
import AnimatedDiv from "@/components/ui/animation/div";

export const metadata: Metadata = {
  title: "Posters",
};

export default function Posters() {
  return (
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
          <Heading level={1}>Posters</Heading>
        </AnimatedDiv>
        <AnimatedDiv variants={contentVariants}>
          <Body textSize="md">
            Oops, this is incomplete. Please come back later.
          </Body>
        </AnimatedDiv>
      </section>
      <AnimatedDiv variants={contentVariants}>
        <Footer />
      </AnimatedDiv>
    </AnimatedMain>
  );
}
