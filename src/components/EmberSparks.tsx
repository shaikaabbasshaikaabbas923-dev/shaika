import React, { useMemo } from 'react';

interface EmberSparksProps {
  count?: number;
  className?: string;
}

export const EmberSparks: React.FC<EmberSparksProps> = ({ count = 20, className = '' }) => {
  // Generate random static positions and delays for consistent render
  const sparks = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 100) / count + (Math.sin(i * 99) * 4)}%`,
      size: `${Math.floor(2 + (i % 3) * 1.5)}px`,
      duration: `${3.5 + (i % 5) * 0.9}s`,
      delay: `${(i % 7) * 0.6}s`,
      color: i % 3 === 0 ? '#FBBF24' : i % 3 === 1 ? '#F97316' : '#EF4444',
      blur: i % 2 === 0 ? '1px' : '0px',
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-10 ${className}`}
    >
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: spark.left,
            bottom: '5%',
            width: spark.size,
            height: spark.size,
            backgroundColor: spark.color,
            boxShadow: `0 0 8px 2px ${spark.color}`,
            filter: `blur(${spark.blur})`,
            animation: `emberFloat ${spark.duration} ease-in infinite`,
            animationDelay: spark.delay,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};
