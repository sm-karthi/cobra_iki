import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      featuresRef.current.forEach((feature, i) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Purpose-led Innovation",
      description:
        "Technology that creates long-term value, not short-term hype. Every solution is built with sustainability and impact in mind.",
      stats: "99.9% Client Satisfaction",
    },
    {
      title: "Enterprise-grade Trust",
      description:
        "Built with security, compliance, and governance at the core. We ensure your data and operations are protected at every level.",
      stats: "Zero Security Incidents",
    },
    {
      title: "Global Experience",
      description:
        "Leadership with decades of experience serving Fortune 500 companies and innovative startups worldwide.",
      stats: "50+ Projects Delivered",
    },
    {
      title: "Privacy-First Approach",
      description:
        "Integrated privacy-by-design principles in every deployment, ensuring compliance with GDPR, CCPA, and EU AI Act.",
      stats: "100% Compliance Rate",
    },
  ];

  return (
    <Section ref={sectionRef} id="features" background="accent">
      <SectionTitle
        subtitle="Why Choose Us"
        title="Built on Trust & Excellence"
      />

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (featuresRef.current[index] = el)}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <div className="glass-morphism p-8 md:p-12 rounded-2xl">
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl">
                  <span className="text-primary-400 font-semibold">
                    {feature.stats}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-[550px] max-h-[550px]">
              <div className="relative w-full h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center rounded-2xl overflow-hidden">
                  <div className="text-8xl opacity-20">
                    <img
                      src={
                        index === 0
                          ? "/src/images/innovation.png"
                          : index === 1
                            ? "/src/images/enterprise.png"
                            : index === 2
                              ? "/src/images/global.png"
                              : "/src/images/privacy.png"
                      }
                      alt="feature icon"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/30 rounded-full blur-2xl animate-pulse-slow" />
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500/30 rounded-full blur-2xl animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
