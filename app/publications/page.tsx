import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Body } from "@/components/ui/typography/body";
import { Heading } from "@/components/ui/typography/heading";
import type { Metadata } from "next";

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
      <main className="max-w-xl px-4 md:px-0 m-auto">
        <Header />
        <section className="pb-12">
          <Heading level={1}>Publications</Heading>
          <Body>Oops, this is incomplete. Please come back later.</Body>
        </section>
        <Footer />
      </main>
    </>
  );
}
