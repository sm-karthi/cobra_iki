import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BuildingOffice2Icon,
  AcademicCapIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TrainingPage = () => {
  const heroRef = useRef(null);
  const programsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      programsRef.current.forEach((program, i) => {
        gsap.from(program, {
          scrollTrigger: {
            trigger: program,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const corporateAreas = [
    "Blockchain Fundamentals & Enterprise Use Cases",
    "Smart Contracts & Secure Development Practices",
    "Web 3.0 Architecture & Governance",
    "NFT, Digital Assets & Compliance Awareness",
    "Information Security, Risk, and Privacy Foundations",
    "AI Ethics & Responsible AI Implementation",
  ];

  const academicAreas = [
    "Introduction to Blockchain & Web 3.0",
    "NFTs, Metaverse & Digital Economies",
    "Secure Coding & Technology Ethics",
    "AI Fundamentals & Machine Learning",
    "Data Privacy & Cybersecurity Basics",
    "Career-oriented Workshops and Bootcamps",
  ];

  const benefits = [
    {
      icon: CursorArrowRaysIcon,
      title: "Industry-aligned Curriculum",
      description:
        "Content designed by practitioners with real-world experience in emerging technologies.",
    },
    {
      icon: ComputerDesktopIcon,
      title: "Hands-on Learning",
      description:
        "Practical exercises and projects that mirror actual industry challenges and workflows.",
    },
    {
      icon: UserGroupIcon,
      title: "Expert Instructors",
      description:
        "Learn from experienced professionals who have deployed these technologies at scale.",
    },
    {
      icon: ArrowPathIcon,
      title: "Customizable Modules",
      description:
        "Tailored programs based on your organization's specific needs and skill gaps.",
    },
    {
      icon: ChartBarIcon,
      title: "Progress Tracking",
      description:
        "Comprehensive assessments and certifications to measure learning outcomes.",
    },
    {
      icon: "handshake-svg",
      title: "Post-training Support",
      description:
        "Ongoing mentorship and resources to ensure successful technology adoption.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Training & Enablement</span>
            <br />
            <span className="text-white">Building Skills for Tomorrow</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Empower your workforce with practical, industry-relevant skills in
            blockchain, Web 3.0, AI, and emerging technologies through our
            comprehensive training programs.
          </p>
        </div>
      </Section>

      {/* Corporate Training */}
      <Section background="grid">
        <div ref={(el) => (programsRef.current[0] = el)}>
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            <div className="flex-1">
              <BuildingOffice2Icon className="w-16 h-16 text-accent-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Corporate Training Programs
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Upskill your workforce to confidently operate in emerging
                technology environments. Our programs are designed for
                professionals at all levels, from executives to technical teams.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Training Areas
                </h3>
                {corporateAreas.map((area, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <Card variant="gradient" className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Program Highlights
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-accent-400 font-semibold mb-2">
                      ✓ Industry-aligned Curriculum
                    </div>
                    <p className="text-gray-400 text-sm">
                      Content reflecting current market demands and best
                      practices
                    </p>
                  </div>
                  <div>
                    <div className="text-accent-400 font-semibold mb-2">
                      ✓ Practical, Hands-on Learning
                    </div>
                    <p className="text-gray-400 text-sm">
                      Real projects and case studies from actual deployments
                    </p>
                  </div>
                  <div>
                    <div className="text-accent-400 font-semibold mb-2">
                      ✓ Customized Modules
                    </div>
                    <p className="text-gray-400 text-sm">
                      Tailored to your organization's specific needs and goals
                    </p>
                  </div>
                  <div>
                    <div className="text-accent-400 font-semibold mb-2">
                      ✓ Expert Practitioners
                    </div>
                    <p className="text-gray-400 text-sm">
                      Delivered by professionals with field experience
                    </p>
                  </div>
                </div>
                <Link to="/contact-us">
                  <Button className="w-full mt-8">
                    Request Corporate Training
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Academic Training */}
      <Section background="default">
        <div ref={(el) => (programsRef.current[1] = el)}>
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12 mb-12">
            <div className="flex-1">
              <AcademicCapIcon className="w-16 h-16 text-primary-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                College & University Training
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Prepare students for careers in next-generation technologies.
                Our academic programs bridge the gap between theoretical
                knowledge and industry requirements.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Focus Areas
                </h3>
                {academicAreas.map((area, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <Card variant="gradient" className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Student Benefits
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-primary-400 font-semibold mb-2">
                      ✓ Real-world Industry Exposure
                    </div>
                    <p className="text-gray-400 text-sm">
                      Learn from actual industry projects and challenges
                    </p>
                  </div>
                  <div>
                    <div className="text-primary-400 font-semibold mb-2">
                      ✓ Beyond Theory
                    </div>
                    <p className="text-gray-400 text-sm">
                      Practical learning through labs, projects, and simulations
                    </p>
                  </div>
                  <div>
                    <div className="text-primary-400 font-semibold mb-2">
                      ✓ Career Readiness
                    </div>
                    <p className="text-gray-400 text-sm">
                      Skills aligned with market demands and job requirements
                    </p>
                  </div>
                  <div>
                    <div className="text-primary-400 font-semibold mb-2">
                      ✓ Future-focused Skills
                    </div>
                    <p className="text-gray-400 text-sm">
                      Technologies that will define the next decade of
                      innovation
                    </p>
                  </div>
                </div>
                <Link to="/contact-us">
                  <Button className="w-full mt-8">
                    Request Academic Program
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="accent">
        <SectionTitle subtitle="Our Approach" title="Why Our Training Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              ref={(el) => (programsRef.current[index + 2] = el)}
              variant="glass"
              className="group"
            >
              {benefit.icon === "handshake-svg" ? (
                <i className="fa-regular fa-handshake text-5xl mb-4 text-primary-400 group-hover:scale-110 transition-transform duration-300"></i>
              ) : (
                <benefit.icon className="w-14 h-14 mb-4 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              )}

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Training Philosophy
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We believe technology adoption must be supported by strong
                knowledge foundations. Our programs emphasize{" "}
                <span className="text-white font-semibold">
                  clarity over complexity
                </span>
                , ensuring concepts are accessible without sacrificing depth.
              </p>
              <p>
                Every module integrates{" "}
                <span className="text-white font-semibold">
                  ethics, security, and responsibility
                </span>
                , preparing learners not just to use technology, but to deploy
                it thoughtfully and safely.
              </p>
              <p>
                We focus on{" "}
                <span className="text-white font-semibold">
                  practical skills with long-term relevance
                </span>
                , ensuring the knowledge gained today remains valuable as the
                technology landscape evolves.
              </p>
              <p className="text-2xl font-bold text-white pt-6">
                Because the future of technology depends on how well people
                understand and use it today.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="default">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Upskill Your Team?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact us to design a custom training program tailored to your
            organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact-us">
              <Button size="lg">Schedule Consultation</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TrainingPage;
