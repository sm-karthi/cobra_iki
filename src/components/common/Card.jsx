import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '', 
  ...props 
}, ref) => {
  const baseStyles = 'rounded-2xl p-8 backdrop-blur-xl border';
  
  const variants = {
    default: 'bg-white/5 border-white/10',
    glass: 'bg-gradient-to-br from-white/10 to-white/5 border-white/20',
    gradient: 'bg-gradient-to-br from-primary-900/30 to-accent-900/30 border-primary-500/20',
    dark: 'bg-dark-800/50 border-dark-700/50',
  };
  
  const hoverStyles = hover ? 'card-hover' : '';
  
  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
