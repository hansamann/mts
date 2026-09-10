import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h3 className="text-base font-bold uppercase tracking-[0.08em] text-neutral-900">{title}</h3>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-700">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export function CodeOfConductDialog() {
  return (
    <Dialog>
      <DialogTrigger className="btn-base btn-outline-heat inline-flex px-5 py-2 text-xs">
        Code of Conduct
      </DialogTrigger>
      <DialogContent className="max-h-[85svh] max-w-2xl overflow-y-auto border-neutral-200 bg-white text-neutral-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold uppercase tracking-tight text-neutral-900">
            Code of Conduct
          </DialogTitle>
          <DialogDescription className="sr-only">
            Rules and expectations for Munich Tech Sauna participants.
          </DialogDescription>
        </DialogHeader>

        <Section title="Introduction">
          <p>
            All participants of Munich Tech Sauna are expected to abide by our Code of Conduct, both
            online and during in-person events that are hosted and/or associated with Munich Tech
            Sauna.
          </p>
          <p>
            Munich Tech Sauna meetups are not co-organized with the public saunas that we go to. For
            enforcement of this Code of Conduct, we only have official authority of the online
            spaces we are using for communication and the activities we organise. With everything
            else, we will try to work on enforcement with the sauna staff and local authorities. The
            saunas we go to are spaces used by non-participants as well, please don't assume that
            everyone has read or will follow this Code of Conduct.
          </p>
        </Section>

        <Section title="Attribution">
          <p>
            This Code of Conduct is adapted from dev.to. We also got inspired and adapted a lot from
            codefreeze.fi and SoCraTes. Thx all!
          </p>
        </Section>

        <Section title="Why we have a Code of Conduct">
          <p>
            Our goal is to organize casual gatherings where everyone can engage in learning,
            teaching, sharing, networking, and enjoying themselves. Achieving this requires
            inclusivity for all participants and the establishment of a welcoming and secure
            environment. We appreciate open discussions and even disagreements, acknowledging that
            they may become intense. To maintain a positive atmosphere, we have established rules
            and set clear boundaries, outlined in this Code of Conduct.
          </p>
        </Section>

        <Section title="General (German) Sauna Rules">
          <List
            items={[
              "No sweat on wood: Bring a large towel and if you like to cover your body bring a second towel so your feet do not touch the bench.",
              "Respect quiet infusions: During the infusions, it's advised to stay calm and refrain from conversations. You can talk again once we exit the sauna and hang out in the community areas.",
              "No gadgets: The sauna rules in many places prohibit the use of electronic devices with cameras - let's respect this for the privacy of all of us.",
            ]}
          />
        </Section>

        <Section title="The Pledge">
          <p>
            In the interest of fostering an open and welcoming environment, we pledge to make
            participation in our meetups, activities and our community a harassment-free experience
            for everyone, regardless of age, body size, disability, ethnicity, gender identity and
            expression, level of experience, nationality, personal appearance, race, religion, or
            sexual identity and orientation.
          </p>
        </Section>

        <Section title="A Safe Environment">
          <p>We aim to create a safe environment by:</p>
          <List
            items={[
              "Using welcoming and inclusive language",
              "Being respectful of differing viewpoints and experiences",
              "Gracefully accepting constructive criticism",
              "Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain",
              "Admit when you do not know something. Encourage others to admit when they do not know something—and never joke about it. We are all here to learn.",
              'Be careful with jokes. We do not tolerate any CoC violations, even if "it was just a joke".',
            ]}
          />
          <p>Examples of unacceptable behaviour include:</p>
          <List
            items={[
              "Trolling, insulting/derogatory comments, public or private harassment",
              "Publishing others' private information, such as a physical or electronic address, without explicit permission",
              "Not being respectful to reasonable communication boundaries, such as 'please leave me alone,' 'please go away,' or 'I'm sorry, I'm not discussing this with you.'",
              "The usage of sexualised language or imagery and unwelcome sexual attention or advances",
              "Swearing, usage of strong or disturbing language",
              "Demonstrating the graphics or any other content you know may be considered disturbing",
              "Initiating or endorsing political conversations that deviate from our inclusive or democratic principles.",
              "Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual identity and orientation",
              "Attacking personal tastes",
              "Other conduct which you know could reasonably be considered inappropriate in a professional setting.",
            ]}
          />
        </Section>

        <Section title="Enforcement & Violations">
          <p>
            If you think someone has violated our code of conduct—even if you were not directly
            involved, like you just overheard a conversation—please:
          </p>
          <List
            items={[
              "Let the person know that what they did is not appropriate and ask them to stop.",
              "Contact the organiser of Munich Tech Sauna (see contact details below).",
            ]}
          />
          <p>
            But please give people the benefit of doubt. If there is even a slight chance that this
            was a misunderstanding (e.g. the person did not speak in their native language, and did
            not find the right words), try to sort it out in a friendly, constructive way.
          </p>
          <p>
            Violations of the Code of Conduct may be reported by sending an email to the organiser
            Sven Haiges (he/him) or our member Lena Bauer (she/her). All reports will be reviewed
            and investigated. We will hear both sides and then take action we deem appropriate such
            as:
          </p>
          <List
            items={[
              "Give a warning",
              "Have a longer talk about our values",
              "Exclude the perpetrator from the current and/or future meetups",
              "Remove / block the perpetrator from our online communities",
              "Call the authorities",
            ]}
          />
          <p>
            We hold the right and responsibility to remove comments or other contributions that are
            not aligned to this Code of Conduct, or to ban temporarily or permanently any members
            for other behaviours that they deem inappropriate, threatening, offensive, or harmful.
          </p>
        </Section>
      </DialogContent>
    </Dialog>
  );
}
