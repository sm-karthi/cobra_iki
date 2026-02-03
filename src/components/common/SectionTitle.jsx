import { forwardRef } from 'react';

const SectionTitle = forwardRef(({ 
  title,
  subtitle,
  align = 'center',
  className = '',
  ...props 
}, ref) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div ref={ref} className={`mb-16 ${alignments[align]} ${className}`} {...props}>
      {subtitle && (
        <p className="text-accent-400 font-semibold mb-4 uppercase tracking-wider text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
    </div>
  );
});

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
