import Image from "next/image";
import { Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Fola Afolabi",
    role: "Founder - Growth Lead",
    specialty: "Growth Strategist",
    bio: "Growth-focused strategist with a marketing background who is focused on helping businesses increase their revenue through digital strategies. 8 businesses across 5 countries so far.",
    image: "/afollyHS.jpeg",
    linkedin: "https://www.linkedin.com/in/fola-afolabi-74698426a/",
    instagram: "https://www.instagram.com/folaafolabi_",
  },
  {
    name: "Joseph Oyebamiji",
    role: "Co-founder - Creative Lead",
    specialty: "Branding & Creative Lead",
    bio: "Helping businesses stand out through design and creative strategy. Over 50+ brands built.",
    image: "/jdHS.png",
    linkedin: "https://www.linkedin.com/in/josephoyebamijijd/",
  },
  {
    name: "Adejumo Opeoluwa",
    role: "Co-founder - Tech and Operations Lead",
    specialty: "Tech & Operations",
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
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Meet the Team
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Meet the Founding Team
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-secondary/50 active:border-secondary/70 transition-all duration-300 hover:-translate-y-1 active:shadow-lg sm:hover:shadow-lg sm:hover:-translate-y-1 animate-fade-up card-interactive"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-linear-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300"></div>

              {/* Avatar section */}
              <div className="relative h-48 bg-linear-to-br from-accent/10 via-secondary/10 to-background flex items-center justify-center transition-all duration-300 group-hover:from-accent/15 group-hover:via-secondary/15 active:from-accent/20">
                <div className="relative h-32 w-32 rounded-full border-4 border-background shadow-lg ring-2 ring-accent/20 overflow-hidden transition-transform duration-300 group-hover:scale-105 active:scale-95">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content section */}
              <div className="p-7 transition-colors duration-300 group-hover:bg-muted/30 active:bg-muted/40">
                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-accent active:text-accent">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-1 transition-colors duration-300 group-hover:text-secondary">
                  {member.role}
                </p>
                <p className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition-colors duration-300 group-hover:bg-accent/20">
                  {member.specialty}
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 active:bg-accent/30 text-foreground hover:text-accent active:text-accent transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                  </a>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 active:bg-accent/30 text-foreground hover:text-accent active:text-accent transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                      aria-label={`${member.name} Instagram`}
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
