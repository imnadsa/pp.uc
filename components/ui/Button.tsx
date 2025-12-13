import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center gap-0 font-bold text-base lg:text-lg transition-all duration-300 group relative overflow-hidden";
  
  const variants = {
    primary: `bg-gradient-to-r from-[#3AC3F3] via-[#2bb5e0] to-[#1ca3d1] text-white 
              shadow-[0_8px_24px_rgba(58,195,243,0.35)] 
              hover:shadow-[0_12px_32px_rgba(58,195,243,0.5)] 
              hover:-translate-y-1`,
    secondary: `bg-white text-[#3AC3F3] border-2 border-[#3AC3F3] 
                hover:bg-[#3AC3F3] hover:text-white`
  };

  const content = (
    <>
      {/* Main button part with text */}
      <span className="px-8 lg:px-10 py-4 rounded-l-full rounded-r-none">
        {children}
      </span>
      
      {/* Arrow circle part */}
      <span className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-2xl lg:text-3xl
                      ${variant === 'primary' ? 'bg-[#2bb5e0]' : 'bg-[#3AC3F3] group-hover:bg-white group-hover:text-[#3AC3F3]'} 
                      transition-all duration-300 
                      group-hover:scale-110`}>
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </span>
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
