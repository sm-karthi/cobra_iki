import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Import Heroicons
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      infoRef.current.forEach((info, i) => {
        if (!info) return;
        gsap.from(info, {
          scrollTrigger: {
            trigger: info,
            start: 'top bottom-=50',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-10 h-10 text-primary-400" />,
      title: 'Email',
      value: 'info@cobraiki.com',
      link: 'mailto:info@cobraiki.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <PhoneIcon className="w-10 h-10 text-primary-400" />,
      title: 'Phone',
      value: '+91-44-12345678',
      link: 'tel:+914412345678',
      description: 'Mon-Fri from 9am to 6pm IST',
    },
    {
      icon: <MapPinIcon className="w-10 h-10 text-primary-400" />,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: 'https://maps.google.com/?q=Chennai,Tamil+Nadu,India',
      description: 'Visit our office',
    },
    {
      icon: <ClockIcon className="w-10 h-10 text-primary-400" />,
      title: 'Business Hours',
      value: '9:00 AM - 6:00 PM IST',
      link: null,
      description: 'Monday to Friday',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Ready to transform your business? Our team is here to help.
          </p>
        </div>
      </Section>

      {/* Form + Info */}
      <Section background="grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div ref={formRef}>
            <Card variant="glass">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white resize-none"
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">
                    ✓ Message sent successfully!
                  </p>
                )}
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Contact Information
            </h2>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                ref={(el) => (infoRef.current[index] = el)}
                variant="gradient"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {info.title}
                    </h3>

                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 font-semibold block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}

                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactUsPage;
