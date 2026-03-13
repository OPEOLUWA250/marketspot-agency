import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      "Marketing and content strategy",
      "Graphics Design",
      "Web development",
    ],
  },
  {
    title: "Company",
    links: ["Team", "Our Work", "Contact"],
  },
  {
    title: "Resources",
    links: ["Digital Presence Audit", "FAQ"],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-5 animate-fade-up">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Marketspot logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-lg font-bold">Marketspot</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              We help small to mid-size businesses attract, nurture and convert
              their right audience through digital strategies most valuable to
              them.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
              ].map((social, i) => {
                const { Icon, label } = social;
                return (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-background" />
                  </button>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 animate-fade-up">
              <h3 className="font-semibold text-sm tracking-wide uppercase text-background/90">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/75 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-background/20">
          <div className="flex gap-3 animate-fade-up">
            <Mail className="w-5 h-5 text-background/80 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-background/60 uppercase tracking-wide">
                Email
              </p>
              <a
                href="mailto:opeoluwadejumos@gmail.com"
                className="text-sm font-medium hover:text-background/85 transition-colors"
              >
                opeoluwadejumos@gmail.com
              </a>
            </div>
          </div>
          <div
            className="flex gap-3 animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            <Phone className="w-5 h-5 text-background/80 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-background/60 uppercase tracking-wide">
                Phone
              </p>
              <a
                href="tel:09015883729"
                className="text-sm font-medium hover:text-background/85 transition-colors"
              >
                09015883729
              </a>
            </div>
          </div>
          <div
            className="flex gap-3 animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            <MapPin className="w-5 h-5 text-background/80 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-background/60 uppercase tracking-wide">
                Location
              </p>
              <p className="text-sm font-medium">Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/65">
          <p>&copy; {year} Marketspot Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
