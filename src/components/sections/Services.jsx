import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

import {
  LinkIcon,
  SwatchIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: LinkIcon,
      title: 'Blockchain & Web 3.0',
      description:
        'Smart contracts, digital exchanges, and decentralized platforms designed for real-world adoption with enterprise-grade security.',
      features: ['Gen Z Banking', 'Digital Exchanges', 'Smart Contracts', 'Tokenization'],
    },
    {
      icon: SwatchIcon,
      title: 'NFT & Digital Assets',
      description:
        'End-to-end NFT development, tokenization, and digital merchandising with compliance and sustainability at the core.',
      features: ['NFT Development', 'Asset Tokenization', 'Marketplace Integration', 'IP Protection'],
    },
    {
      icon: GlobeAltIcon,
      title: 'Metaverse Experiences',
      description:
        'Immersive digital environments blending creativity with business value through Ikiverse and interactive platforms.',
      features: ['Ikiverse Development', 'Virtual Land', 'Gaming Platforms', 'Brand Engagement'],
    },
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description:
        'Custom AI models for predictive analytics, automation, and intelligent decision-making across industries.',
      features: ['Predictive Analytics', 'Generative AI', 'Fraud Detection', 'Contract Automation'],
    },
  ];

  return (
    <Section ref={sectionRef} id="services" background="grid">
      <SectionTitle
        subtitle="What We Do"
        title="Comprehensive Technology Solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              variant="glass"
              className="group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-16 h-16 text-white/80 group-hover:text-primary-400 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
