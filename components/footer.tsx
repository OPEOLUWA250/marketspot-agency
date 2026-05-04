import Image from "next/image";
import { Linkedin } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "SEO Services", href: "/services" },
      { label: "Paid Ads Management", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "Branding & Strategy", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog & Resources", href: "/blog" },
      { label: "Meet the Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
      {
        label: "Contact Us",
        href: "https://calendly.com/folaafolabi/consultation",
      },
    ],
  },
  {
    title: "Learn More",
    links: [
      { label: "SEO Guide", href: "/blog" },
      { label: "Paid Ads Strategy", href: "/blog" },
      { label: "Web Design Tips", href: "/blog" },
      { label: "Digital Marketing Articles", href: "/blog" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(226, 97, 40, 0.1), transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(7, 80, 86, 0.1), transparent)",
          }}
        ></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          {/* Top Section - Unified Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 mb-10 sm:mb-12">
            {/* Brand Column - Spans 4 */}
            <div className="md:col-span-4 space-y-6 sm:space-y-8 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/60 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                      src="/logo.png"
                      alt="Marketspot logo"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-lg object-cover relative"
                    />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-background to-background/80 bg-clip-text">
                    Marketspot
                  </span>
                </div>

                <p className="text-base text-background/75 leading-relaxed font-light max-w-sm">
                  We help small to mid-size businesses grow with{" "}
                  <span className="font-semibold text-background">
                    SEO, paid ads, branding, and web development.
                  </span>
                </p>

                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/company/marketspot.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 hover:bg-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border border-background/10 hover:border-accent/50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-background group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Three Link Sections - Spans 8 */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {footerSections.map((section, idx) => (
                <div
                  key={section.title}
                  className="space-y-4 sm:space-y-5 animate-fade-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <h4 className="font-bold text-xs tracking-widest uppercase text-background/80 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-accent to-accent/40 rounded-full"></span>
                    {section.title}
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors duration-300 font-medium flex items-center gap-1.5 group"
                        >
                          <span className="w-0 h-0.5 bg-accent group-hover:w-2 transition-all duration-300"></span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-background/0 via-background/20 to-background/0 mb-8 sm:mb-12"></div>

          {/* Footer Bottom - Premium Copyright */}
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-sm text-background/60 font-medium">
              &copy; {year} Marketspot Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
