import React from 'react';

const Logo = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        
        {/* Main circle background */}
        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
        
        {/* Letter "A" stylized */}
        <path
          d="M35 70 L42 50 L50 30 L58 50 L65 70 M40 58 L60 58"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Flow lines representing abundance/flow */}
        <g opacity="0.8">
          <path
            d="M20 25 Q30 20 40 25 Q50 30 60 25 Q70 20 80 25"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M15 35 Q25 30 35 35 Q45 40 55 35 Q65 30 75 35"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M25 80 Q35 75 45 80 Q55 85 65 80 Q75 75 85 80"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>
        
        {/* Small accent dots */}
        <circle cx="25" cy="45" r="2" fill="white" opacity="0.6" />
        <circle cx="75" cy="55" r="2" fill="white" opacity="0.6" />
        <circle cx="30" cy="65" r="1.5" fill="white" opacity="0.4" />
        <circle cx="70" cy="35" r="1.5" fill="white" opacity="0.4" />
      </svg>
    </div>
  );
};

export default Logo;