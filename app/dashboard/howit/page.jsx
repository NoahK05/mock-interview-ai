import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>How It Works - AI Mock Interview</title>
        <meta
          name="description"
          content="Learn how our AI Mock Interview works."
        />
      </Head>

      <main className="bg-background text-foreground p-8 mt-10 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          How It Works
        </h1>

        <section className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">

            <AccordionItem
              value="item-1"
              className="bg-card border border-border rounded-xl px-6 py-4 shadow-md"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Step 1: Prepare for the Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground">
                  Get ready by selecting the type of interview and providing
                  some details about the job position.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-card border border-border rounded-xl px-6 py-4 shadow-md"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Step 2: Start the AI Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground">
                  Our AI will ask you a series of questions and evaluate your
                  responses in real-time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-card border border-border rounded-xl px-6 py-4 shadow-md"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Step 3: Receive Feedback
                </h2>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground">
                  Get detailed feedback on your performance, including strengths
                  and areas for improvement.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;