import Image from "next/image";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Fola Afolabi",
    role: "Founder",
    specialty: "Marketing & Growth Strategist",
    bio: "Growth-focused marketer who helps businesses build audiences that convert. 8 businesses helped across 5 countries so far.",
    image: "/afollyHS.jpeg",
    linkedin: "https://www.linkedin.com/in/fola-afolabi-74698426a/",
  },
  {
    name: "Joseph Oyebamiji",
    role: "Co-founder",
    specialty: "Branding & Creative Lead",
    bio: "Helping businesses stand out through design and creative strategy. Over 50+ brands built.",
    image: "/jdHS.png",
    linkedin: "https://www.linkedin.com/in/josephoyebamijijd/",
  },
  {
    name: "Adejumo Opeoluwa",
    role: "Co-founder",
    specialty: "Tech and Operations Lead",
    bio: "Web developer who helps businesses get noticed on the internet and project manager who turns ideas into reality in time. Over 20 brands worked with.",
    image: "/opeHS .jpg",
    linkedin: "https://www.linkedin.com/in/opeoluwa-adejumo/",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Meet the Team
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Talented minds, bold vision
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-linear-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Avatar section */}
              <div className="relative h-48 bg-linear-to-br from-accent/10 via-secondary/10 to-background flex items-center justify-center">
                <div className="relative h-32 w-32 rounded-full border-4 border-background shadow-lg ring-2 ring-accent/20 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Content section */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {member.specialty}
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 text-foreground hover:text-accent transition-all flex items-center justify-center"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
