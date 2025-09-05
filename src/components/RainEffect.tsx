import React, { useEffect, useState } from 'react';

interface Raindrop {
  id: number;
  left: number;
  animationDuration: number;
  height: number;
  delay: number;
}

const RainEffect: React.FC = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    const drops: Raindrop[] = [];
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2, // 2-5 seconds
        height: Math.random() * 20 + 10, // 10-30px
        delay: Math.random() * 5, // 0-5 seconds delay
      });
    }

    setRaindrops(drops);
  }, []);

  return (
    <div className="rain-container">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.left}%`,
            height: `${drop.height}px`,
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;