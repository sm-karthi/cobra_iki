import { forwardRef } from 'react';

const Section = forwardRef(({ 
  children, 
  id,
  className = '',
  containerClassName = '',
  background = 'default',
  ...props 
}, ref) => {
  const backgrounds = {
    default: 'bg-dark-900',
    grid: 'bg-dark-900 bg-grid-pattern',
    gradient: 'bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900',
    accent: 'bg-gradient-to-br from-primary-900/10 to-accent-900/10',
  };
  
  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
