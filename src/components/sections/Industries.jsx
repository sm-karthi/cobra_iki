import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

import {
  ScaleIcon,
  BuildingLibraryIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'back.out(1.7)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: ScaleIcon,
      name: 'Legal Sector',
      description:
        'AI-powered e-discovery reducing review time by 70% with privacy controls ensuring attorney-client privilege.',
      impact: '70% Time Reduction',
      solutions: ['Contract Review Automation', 'Precedent Analysis', 'E-discovery Tools', 'Compliance Management'],
    },
    {
      icon: BuildingLibraryIcon,
      name: 'Banking Sector',
      description:
        'Secure AI for real-time transaction monitoring with anonymized data training preventing breaches.',
      impact: '25% More Threat Detection',
      solutions: ['Fraud Detection', 'Risk Modeling', 'Transaction Monitoring', 'Data Security'],
    },
    {
      icon: BeakerIcon,
      name: 'Pharmaceutical',
      description:
        'Secure analytics for clinical trials using pseudonymization enabling AI-driven insights without consent violations.',
      impact: '45% Faster Insights',
      solutions: ['Clinical Trial Analytics', 'Drug Discovery', 'Patient Stratification', 'Health Data Security'],
    },
  ];

  return (
    <Section ref={sectionRef} id="industries" background="gradient">
      <SectionTitle
        subtitle="Industry Focus"
        title="Specialized Solutions for High-Stakes Sectors"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              variant="gradient"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-16 h-16 text-white/80" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {industry.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6 p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl">
                  <div className="text-primary-400 font-bold text-lg">
                    {industry.impact}
                  </div>
                </div>

                <div className="space-y-2">
                  {industry.solutions.map((solution, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3" />
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Industries;
