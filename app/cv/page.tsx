import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Body } from "@/components/ui/typography/body";
import { Heading } from "@/components/ui/typography/heading";
import type { Metadata } from "next";

import { default as researchData } from "@/data/research.json";
import { default as affiliationData } from "@/data/affiliations.json";
import { default as clinicalData } from "@/data/clinical.json";
import AnimatedDiv from "@/components/ui/animated-div";
import AnimatedLi from "@/components/ui/animated-li";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
};

const education = [
  {
    when: {
      start: "08/2017",
      end: "05/2021",
    },
    range: "2017 - 2021",
    title: "B.A in Psychology, B.S. Brain and Cognitive Sciences",
    subtitle: (
      <>
        <p>
          University of Rochester <i>Cum Laude Honors</i>
        </p>
      </>
    ),
  },
];

type DateRange = {
  start: string;
  end: string;
};

type Location = {
  where: string;
  department?: string;
  lab?: string;
};

type Research = {
  key: string;
  when: DateRange;
  title: string;
  lab: string;
  locations: Location[];
  pis: string[];
};

const research = researchData as Research[];

type ClinicalExperience = {
  key: string;
  title: string;
  location: Location;
  when: DateRange;
  description: string[];
};

const clinical = clinicalData as ClinicalExperience[];

type Affiliation = {
  name: string;
  where?: string;
  role?: string;
};

const affiliations = affiliationData as Affiliation[];

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      stiffness: 100,
      mass: 0.3,
      duration: 1,
    },
  },
};

export default function CV() {
  return (
    <main className="max-h-screen min-h-screen max-w-xl px-4 md:px-0 m-auto">
      <AnimatedDiv variants={variants} initial="hidden" animate="visible">
        <AnimatedDiv variants={contentVariants}>
          <Header />
        </AnimatedDiv>
        <section className="text-black/80">
          <AnimatedDiv variants={contentVariants}>
            <Heading level={1}>Curriculum Vitae</Heading>
            <Body className="text-md pb-6">
              I grew up in Madison, WI and went to college at the University of
              Rochester. After graduating, I moved to Washington D.C. to be a
              Research Coordinator at Children&apos;s National Hopsital.
            </Body>
          </AnimatedDiv>
          <section id="education">
            <AnimatedDiv variants={contentVariants}>
              <Heading level={2}>Education</Heading>
              <Separator className="bg-black/25" />
            </AnimatedDiv>
            {education.map((e) => {
              return (
                <>
                  <div
                    key={e.title}
                    className="grid grid-cols-4 font-sans py-4"
                  >
                    <AnimatedDiv variants={contentVariants}>
                      <Body className="mr-4" textSize="sm">
                        {e.when.start} - {e.when.end}
                      </Body>
                    </AnimatedDiv>
                    <AnimatedDiv
                      className="col-span-3"
                      variants={contentVariants}
                    >
                      <h6 className="font-semibold text-black text-sm">
                        {e.title}
                      </h6>
                      <p className="text-sm">{e.subtitle}</p>
                    </AnimatedDiv>
                  </div>
                </>
              );
            })}
          </section>
          <section id="research">
            <AnimatedDiv variants={contentVariants}>
              <Heading level={2}>Research Experience</Heading>
              <Separator className="bg-black/25" />
            </AnimatedDiv>
            {research.map((r) => {
              return (
                <>
                  <div
                    key={r.key}
                    className="grid md:grid-cols-4 font-sans py-4"
                  >
                    <AnimatedDiv variants={contentVariants}>
                      <Body textSize="sm" className="mr-4 w-48">
                        {r.when.start} - {r.when.end}
                      </Body>
                    </AnimatedDiv>
                    <AnimatedDiv
                      variants={contentVariants}
                      className="flex-col flex-0 text-sm col-span-3"
                    >
                      <b className="text-md">{r.lab ?? r.title}</b>
                      {r.lab ? <Body textSize="sm">{r.title}</Body> : null}
                      {r.locations ? (
                        <div className="py-2">
                          {r.locations.map((l) => {
                            return (
                              <>
                                <Body key={l.where} textSize="xs">
                                  {l?.department}, {l.where}
                                </Body>
                              </>
                            );
                          })}
                        </div>
                      ) : null}
                      {r.pis ? (
                        <p className="text-xs">
                          <b>PIs: </b>
                          {r.pis.join(", ")}
                        </p>
                      ) : null}
                    </AnimatedDiv>
                  </div>
                </>
              );
            })}
          </section>
          <section id="clinical">
            <AnimatedDiv variants={contentVariants}>
              <Heading level={2}>Clinical Experience</Heading>
              <Separator className="bg-black/25" />
            </AnimatedDiv>
            <ul>
              {clinical.map((c) => {
                return (
                  <li key={c.title}>
                    <AnimatedDiv variants={contentVariants}>
                      <Heading level={6}>{c.title}</Heading>
                    </AnimatedDiv>
                  </li>
                );
              })}
            </ul>
          </section>
          <section id="affiliations">
            <AnimatedDiv variants={contentVariants}>
              <Heading level={2}>Professional Affiliations</Heading>
              <Separator className="bg-black/25" />
            </AnimatedDiv>
            <ul className="text-sm space-y-1 pt-2">
              {affiliations.map((a) => {
                return (
                  <AnimatedLi key={a.name}>
                    <span className="flex-col flex-wrap items-baseline">
                      <b>{a.name}</b>
                      <p className="text-xs font-sans">
                        {a.where}
                        {a.where && a.role ? "," : ""}
                        {a.role}
                      </p>
                    </span>
                  </AnimatedLi>
                );
              })}
            </ul>
          </section>
        </section>
        <Footer />
      </AnimatedDiv>
    </main>
  );
}
