import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

import {
  LinkIcon,
  SwatchIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const ProductsPage = () => {
  const heroRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      productsRef.current.forEach((product, i) => {
        gsap.from(product, {
          scrollTrigger: {
            trigger: product,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const products = [
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Practical, secure, and scalable blockchain ecosystems for real-world use cases.',
      icon: LinkIcon,
      features: [
        {
          name: 'Gen Z Banking Platforms',
          description: 'Next-generation digital banking solutions designed for the modern user with seamless UX and robust security.',
        },
        {
          name: 'Digital Exchanges',
          description: 'High-performance trading platforms with enterprise-grade security and compliance built-in.',
        },
        {
          name: 'Smart Contract Development',
          description: 'Audited smart contracts optimized for gas efficiency and security across multiple blockchains.',
        },
        {
          name: 'Tokenization Frameworks',
          description: 'Complete asset tokenization solutions with regulatory compliance and interoperability.',
        },
      ],
    },
    {
      id: 'nft',
      title: 'NFT & Digital Asset Platforms',
      description: 'End-to-end NFT solutions with transparency, IP protection, and user trust.',
      icon: SwatchIcon,
      features: [
        {
          name: 'NFT Development & Minting',
          description: 'Custom NFT creation, minting, and management with multi-chain support.',
        },
        {
          name: 'Digital Merchandising',
          description: 'Transform physical products into digital collectibles with provenance tracking.',
        },
        {
          name: 'Asset Tokenization',
          description: 'Convert real-world assets into digital tokens with legal compliance frameworks.',
        },
        {
          name: 'Marketplace Integration',
          description: 'Seamless integration with leading NFT marketplaces and custom marketplace development.',
        },
      ],
    },
    {
      id: 'metaverse',
      title: 'Metaverse & Ikiverse',
      description: 'Immersive digital environments blending creativity with measurable business value.',
      icon: GlobeAltIcon,
      features: [
        {
          name: 'Ikiverse Development',
          description: 'Our proprietary metaverse platform built for scalability and meaningful engagement.',
        },
        {
          name: 'Virtual Land & Experiences',
          description: 'Create, own, and monetize virtual real estate and interactive experiences.',
        },
        {
          name: 'Gaming & Interactive Platforms',
          description: 'Build engaging gaming experiences with play-to-earn mechanics and social features.',
        },
        {
          name: 'Brand-led Metaverse Engagement',
          description: 'Help brands create authentic presence and engagement in the metaverse.',
        },
      ],
    },
    {
      id: 'web3',
      title: 'Web 3.0 Services',
      description: 'Comprehensive support for enterprises at every stage of their Web 3.0 journey.',
      icon: RocketLaunchIcon,
      features: [
        {
          name: 'Strategy & Consulting',
          description: 'Expert guidance on Web 3.0 adoption, roadmap development, and business transformation.',
        },
        {
          name: 'Application Development',
          description: 'Build decentralized applications (dApps) with modern frameworks and best practices.',
        },
        {
          name: 'Integration & Implementation',
          description: 'Seamlessly integrate Web 3.0 technologies with existing enterprise systems.',
        },
        {
          name: 'Ongoing Support & Optimization',
          description: '24/7 monitoring, maintenance, and performance optimization for Web 3.0 solutions.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Products & Platforms</span>
            <br />
            <span className="text-white">Built for the Future</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Enterprise-grade solutions designed to help organizations confidently adopt 
            emerging technologies while maintaining security, compliance, and business clarity.
          </p>
        </div>
      </Section>

      {/* Products Sections */}
      {products.map((product, index) => {
        const Icon = product.icon;

        return (
          <Section
            key={product.id}
            id={product.id}
            background={index % 2 === 0 ? 'default' : 'grid'}
          >
            <div ref={(el) => (productsRef.current[index] = el)}>
              <div className="flex items-center mb-12">
                <div className="mr-6">
                  <Icon className="w-16 h-16 text-white/80" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                    {product.title}
                  </h2>
                  <p className="text-xl text-gray-300">{product.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, i) => (
                  <Card key={i} variant="glass" className="group">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section background="accent">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how our products can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg">Schedule Consultation</Button>
            <Button variant="secondary" size="lg">View Case Studies</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductsPage;
