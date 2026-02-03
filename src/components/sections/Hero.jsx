import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const floatingRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power4.out',
      });

      // Buttons animation
      gsap.from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Floating elements animation
      floatingRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: '+=30',
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Floating Elements */}
      <div
        ref={(el) => (floatingRef.current[0] = el)}
        className="absolute top-1/4 left-10 w-20 h-20 border border-primary-500/30 rounded-lg rotate-12"
      />
      <div
        ref={(el) => (floatingRef.current[1] = el)}
        className="absolute top-1/3 right-20 w-16 h-16 border border-accent-500/30 rounded-full"
      />
      <div
        ref={(el) => (floatingRef.current[2] = el)}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg rotate-45"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div ref={titleRef} className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Leading-edge Technology.</span>
            <br />
            <span className="text-white">Purpose-driven Impact.</span>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-12">
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses with AI, Blockchain, and Web 3.0 solutions. 
            From intelligent automation to decentralized platforms, we build technology that's 
            <span className="text-accent-400 font-semibold"> innovative, responsible, and scalable</span>.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg">
            Explore Solutions
          </Button>
          <Button variant="secondary" size="lg">
            Schedule Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '3', label: 'Industries Served' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-morphism p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
