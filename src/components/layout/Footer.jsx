import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/#about' },
      { name: 'Our Services', path: '/ai-services' },
      { name: 'Case Studies', path: '/#case-studies' },
      { name: 'Contact', path: '/#contact' },
    ],
    products: [
      { name: 'Blockchain Solutions', path: '/products#blockchain' },
      { name: 'NFT Platforms', path: '/products#nft' },
      { name: 'Metaverse', path: '/products#metaverse' },
      { name: 'Web 3.0', path: '/products#web3' },
    ],
    services: [
      { name: 'AI Solutions', path: '/ai-services#ai' },
      { name: 'Data Analytics', path: '/ai-services#analytics' },
      { name: 'Privacy & Security', path: '/ai-services#security' },
      { name: 'Training Programs', path: '/training' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                Cobra IKI
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading-edge Technology. Purpose-driven Impact. Empowering businesses with AI, Blockchain, and Web 3.0 solutions.
            </p>
            <div className="flex space-x-4">
  {/* Twitter */}
  <a
    href="#twitter"
    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="Twitter"
  >
    <svg
      className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.14 9.14 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.13A12.84 12.84 0 0 1 1.64 1.15a4.5 4.5 0 0 0 1.39 6.04 4.41 4.41 0 0 1-2.05-.56v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.13A9.06 9.06 0 0 1 1 19.54a12.76 12.76 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.01-.63A9.2 9.2 0 0 0 23 3z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="#linkedin"
    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="LinkedIn"
  >
    <svg
      className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.6v1.71h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.5 4.48 5.74V21h-4v-5.25c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76V21h-4V9z" />
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="#github"
    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="GitHub"
  >
    <svg
      className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.25.8-.55v-2c-3.3.7-4-1.6-4-1.6-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.77 1.3 3.45.99.1-.77.42-1.3.76-1.6-2.64-.3-5.42-1.33-5.42-5.93 0-1.3.47-2.37 1.23-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.23a11.3 11.3 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.9.12 3.2.76.83 1.23 1.9 1.23 3.2 0 4.6-2.8 5.6-5.46 5.9.42.36.8 1.08.8 2.18v3.22c0 .3.2.66.8.55A12 12 0 0 0 12 .5z" />
    </svg>
  </a>
</div>

          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cobra IKI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
