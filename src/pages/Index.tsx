import React from 'react';
import RainEffect from '@/components/RainEffect';
import LoginForm from '@/components/LoginForm';
import SocialLinks from '@/components/SocialLinks';
import backgroundImage from '@/assets/background.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cyber-darker/70 backdrop-blur-sm"></div>
      
      {/* Rain Effect */}
      <RainEffect />
      
      {/* Social Links */}
      <SocialLinks />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <LoginForm />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-glow rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-neon-purple/30 to-neon-pink/30 rounded-full opacity-40 animate-float"></div>
    </div>
  );
};

export default Index;
