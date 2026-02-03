import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// ✅ Heroicons
import { ComputerDesktopIcon, ChartBarIcon, LockClosedIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const AIServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      servicesRef.current.forEach((service, i) => {
        gsap.from(service, {
          scrollTrigger: {
            trigger: service,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      statsRef.current.forEach((stat, i) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          },
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 'ai',
      icon: ComputerDesktopIcon,
      title: 'Artificial Intelligence Solutions',
      description: 'Transform your business with cutting-edge AI that balances innovation with ethical governance.',
      offerings: [
        {
          name: 'Predictive Analytics',
          details: 'Custom AI models for contract review automation, fraud detection, and intelligent forecasting.',
        },
        {
          name: 'Generative AI',
          details: 'Adapted tools for pharmaceutical R&D and content generation with bias mitigation frameworks.',
        },
        {
          name: 'High-risk AI Compliance',
          details: 'Risk assessments and human oversight as mandated by EU AI Act and global regulations.',
        },
        {
          name: 'AI Governance',
          details: 'Comprehensive policies and frameworks ensuring responsible AI deployment across your organization.',
        },
      ],
    },
    {
      id: 'analytics',
      icon: ChartBarIcon,
      title: 'Data Analytics Platforms',
      description: 'Turn your data into actionable insights with real-time dashboards and advanced ML pipelines.',
      offerings: [
        {
          name: 'Real-time Dashboards',
          details: 'Banking risk modeling and pharmaceutical trial optimization with live data visualization.',
        },
        {
          name: 'Machine Learning Pipelines',
          details: 'Seamlessly integrate with existing infrastructure, delivering 30-50% efficiency gains.',
        },
        {
          name: 'Scalable Analytics',
          details: 'Handle terabytes of regulated data with built-in security and compliance controls.',
        },
        {
          name: 'Advanced Reporting',
          details: 'Automated insights generation with customizable reports for stakeholders at all levels.',
        },
      ],
    },
    {
      id: 'security',
      icon: LockClosedIcon,
      title: 'Data Privacy & Security',
      description: 'Protect sensitive information with privacy-enhancing technologies and comprehensive security audits.',
      offerings: [
        {
          name: 'Privacy-Enhancing Technologies',
          details: 'Data masking, pseudonymization, and encryption for AI training datasets and production systems.',
        },
        {
          name: 'Compliance Audits',
          details: 'Comprehensive GDPR, CCPA, and EU AI Act audits including cross-border data transfer strategies.',
        },
        {
          name: 'Incident Response',
          details: 'Continuous monitoring to counter AI-specific threats like model poisoning and data breaches.',
        },
        {
          name: 'Security Architecture',
          details: 'Design and implement defense-in-depth strategies tailored to your industry requirements.',
        },
      ],
    },
  ];

  const stats = [
    { value: '70%', label: 'Faster Compliance Audits' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '50+', label: 'Zero-incident Projects' },
    { value: '99.9%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      industry: 'Legal',
      title: 'Contract Analytics Transformation',
      description: 'Top Chennai-based firm used our AI for contract analytics, cutting review costs by 60% while passing EU AI Act audits.',
      impact: '60% Cost Reduction',
    },
    {
      industry: 'Banking',
      title: 'Advanced Fraud Prevention',
      description: 'Implemented pseudonymized data pipelines for a major bank, detecting 25% more threats without compromising privacy.',
      impact: '25% More Threats Detected',
    },
    {
      industry: 'Pharmaceutical',
      title: 'Clinical Trial Acceleration',
      description: 'Enabled secure analytics for drug trials, anonymizing datasets to comply with health data laws.',
      impact: '45% Faster Insights',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AI & Data Solutions</span>
            <br />
            <span className="text-white">For Critical Industries</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Cutting-edge artificial intelligence, data analytics, and privacy solutions 
            tailored for legal, banking, and pharmaceutical sectors.
          </p>
        </div>
      </Section>

      {/* Services */}
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <Section
            key={service.id}
            id={service.id}
            background={index % 2 === 0 ? 'grid' : 'default'}
          >
            <div
              ref={(el) => (servicesRef.current[index] = el)}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="mb-6">
                  <Icon className="w-20 h-20 text-white/80" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="grid gap-4">
                  {service.offerings.map((offering, i) => (
                    <Card key={i} variant="glass" className="group">
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
                        {offering.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {offering.details}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Stats Section */}
      <Section background="accent">
        <SectionTitle
          subtitle="Proven Results"
          title="Impact That Matters"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="glass-morphism p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="default">
        <SectionTitle
          subtitle="Success Stories"
          title="Real-World Transformations"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} variant="gradient" className="group">
              <div className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-lg mb-4">
                <span className="text-primary-400 font-semibold text-sm">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {study.description}
              </p>
              <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl">
                <div className="text-accent-400 font-bold">{study.impact}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Secure Your Data Advantage?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get started with a free AI readiness assessment and discover how we can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg">Get Free Assessment</Button>
            <Button variant="secondary" size="lg">Contact Sales</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AIServicesPage;
