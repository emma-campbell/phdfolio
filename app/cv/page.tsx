import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Body } from "@/components/ui/typography/body";
import { Heading } from "@/components/ui/typography/heading";
import type { Metadata } from "next";

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

const research = [
  {
    key: "CASD",
    when: {
      start: "07/2021",
      end: "Current",
    },
    title: "Clinical Research Coordinator",
    lab: "Center for Autism Spectrum Disorders (CASD)",
    locations: [
      {
        where: "Children's National Hopsital",
        department: "Department of Neuropsychology",
      },
    ],
    pis: [
      "Lauren Kenworthy, PhD",
      "Allison Ratto, PhD",
      "Cara Pugliese, PhD",
      "Alyssa Verbalis, PhD",
    ],
  },
  {
    key: "URGCH",
    when: {
      start: "05/2020",
      end: "09/2020",
    },
    lab: "Golisano Children's Hospital",
    title: "ASD Diagnostic Practice Research Assistant",
    locations: [
      {
        where: "University of Rochester",
        department: "Developmental and Behavioral Pediatrics",
      },
      {
        where: "Tufts University School of Medicine",
        department: "Institute for Clinical Research and Health Policy Studies",
      },
    ],
    pis: ["Christina Mulé, PhD", "Tara Lavelle, PhD"],
  },
  {
    when: {
      start: "09/2019",
      end: "09/2020",
    },
    title: "Undergraduate Research Assistant",
    lab: "Developmental Nueropsychology Lab (DNL)",
    locations: [
      {
        where: "University of Rochester",
        department: "Department of Neuropsychology",
      },
    ],
    pis: ["Jessica Keith, PhD", "Loisa Bennetto, PhD"],
  },
  {
    key: "URSMH",
    when: {
      start: "01/2019",
      end: "01/2020",
    },
    title: "Research Assistant",
    lab: "Strong Memorial Hospital Emergency Department",
    locations: [
      {
        where: "University of Rochester",
        department: "Strong Memorial Hospital",
      },
    ],
    pis: ["Nancy Wood, MS"],
  },
  {
    key: "URAAML",
    when: {
      start: "09/2018",
      end: "12/2018",
    },
    title: "Research Assistant",
    lab: "Approach-Avoidance Motivation Lab",
    locations: [
      {
        where: "University of Rochester",
        department: "Department of Psychology",
      },
    ],
    pis: ["Andrew Elliot, PhD"],
  },
  {
    key: "BJILAB",
    when: {
      start: "06/2018",
      end: "08/2018",
    },
    title: "Research Intern",
    lab: "Bermans J. Iskandar Lab",
    locations: [
      {
        where: "University of Wisconsin - Madison",
        department: "Department of Nuerological Surgery",
      },
    ],
    pis: ["Bermans Iskandar, PhD"],
  },
];

export default function CV() {
  return (
    <main className="max-h-screen min-h-screen max-w-xl px-4 md:px-0 m-auto">
      <Header />
      <section className="text-black/80">
        <Heading level={1}>Curriculum Vitae</Heading>
        <Body className="text-md pb-6">
          I grew up in Madison, WI and went to college at the University of
          Rochester. After graduating, I moved to Washington D.C. to be a
          Research Coordinator at Children&apos;s National Hopsital.
        </Body>
        <Heading level={2}>Education</Heading>
        <Separator className="bg-black/25" />
        {education.map((e) => {
          return (
            <>
              <div className="grid grid-cols-4 font-sans py-4">
                <Body className="mr-4" textSize="sm">
                  {e.when.start} - {e.when.end}
                </Body>
                <div className="col-span-3">
                  <h6 className="font-semibold text-black text-sm">
                    {e.title}
                  </h6>
                  <p className="text-sm">{e.subtitle}</p>
                </div>
              </div>
            </>
          );
        })}
        <Heading level={2}>Research Experience</Heading>
        <Separator className="bg-black/25" />
        {research.map((r) => {
          return (
            <>
              <div key={r.key} className="grid md:grid-cols-4 font-sans py-4">
                <Body textSize="sm" className="mr-4 w-48">
                  {r.when.start} - {r.when.end}
                </Body>
                <div className="flex-col flex-0 text-sm col-span-3">
                  <b className="text-md">{r.lab ?? r.title}</b>
                  {r.lab ? <Body textSize="sm">{r.title}</Body> : null}
                  {r.locations ? (
                    <div className="py-2">
                      {r.locations.map((l) => {
                        return (
                          <>
                            <Body textSize="xs">
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
                </div>
              </div>
            </>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
