import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Heading } from "@/components/ui/typography/heading";
import { Body } from "@/components/ui/typography/body";

export default function Posters() {
  return (
    <>
      <main className="max-w-xl px-4 md:px-0 m-auto">
        <Header />
        <section className="pb-12">
          <Heading level={1}>Posters</Heading>
          <Body textSize="md">
            Oops, this is incomplete. Please come back later.
          </Body>
        </section>
        <Footer />
      </main>
    </>
  );
}
