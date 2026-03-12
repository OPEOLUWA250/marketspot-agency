import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Fola Afolabi",
    role: "Founder",
    specialty: "Digital Marketer",
    bio: "Growth-focused digital marketer who helps brands turn attention into loyal communities, qualified leads, and measurable revenue.",
    image: "/opeHS%20.jpg",
    socials: [
      { icon: Linkedin, label: "LinkedIn" },
      { icon: Mail, label: "Email" },
    ],
  },
  {
    name: "Oyebamiji Joseph",
    role: "Co-founder",
    specialty: "Creative Director",
    bio: "Creative director shaping brand stories into memorable visuals and campaigns that connect quickly and leave lasting impressions.",
    image: "/opeHS%20.jpg",
    socials: [
      { icon: Github, label: "GitHub" },
      { icon: Linkedin, label: "LinkedIn" },
    ],
  },
  {
    name: "Adejumo Opeoluwa",
    role: "Co-Founder",
    specialty: "Head of Operations",
    bio: "Operations lead focused on smooth delivery, clear process ownership, and turning strategy into consistent day-to-day execution.",
    image: "/opeHS%20.jpg",
    socials: [
      { icon: Linkedin, label: "LinkedIn" },
      { icon: Mail, label: "Email" },
    ],
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
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
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  {member.socials.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={i}
                        className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 text-foreground hover:text-accent transition-all flex items-center justify-center"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
