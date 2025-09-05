import React from 'react';
import { Youtube, Music2 } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 space-y-3 animate-fade-in z-10">
      <div className="flex flex-col space-y-3">
        {/* TikTok */}
        <a
          href="https://tiktok.com/@radsevenstar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 glass-morphism px-4 py-2 rounded-lg hover:glow-purple transition-all duration-300 transform hover:scale-105"
        >
          <Music2 className="w-5 h-5 text-neon-purple group-hover:text-white" />
          <span className="text-sm text-foreground group-hover:text-white font-medium">
            @radsevenstar
          </span>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@RadzApostle"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 glass-morphism px-4 py-2 rounded-lg hover:glow-cyan transition-all duration-300 transform hover:scale-105"
        >
          <Youtube className="w-5 h-5 text-neon-cyan group-hover:text-white" />
          <span className="text-sm text-foreground group-hover:text-white font-medium">
            RadzApostle
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;