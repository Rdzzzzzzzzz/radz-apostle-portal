import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Shield, User, Lock, Wifi } from 'lucide-react';
import logoImage from '@/assets/logo.jpg';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      // Here you would typically handle the Mikrotik authentication
      console.log('Login attempt:', { username, password });
    }, 2000);
  };

  return (
    <div className="animate-slide-in-up">
      <Card className="glass-morphism p-8 w-full max-w-md mx-auto glow-cyan">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-20 h-20 mb-4 animate-float">
            <img 
              src={logoImage} 
              alt="RadzApostle Logo" 
              className="w-full h-full object-cover rounded-full border-2 border-neon-cyan glow-cyan"
            />
            <div className="absolute -top-1 -right-1">
              <Wifi className="w-6 h-6 text-neon-cyan animate-pulse" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2 glow-text">
            Hotspot RadzApostle
          </h1>
          <p className="text-muted-foreground text-sm">Selamat datang di sistem login</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-neon-cyan" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-12 bg-input/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan text-foreground placeholder:text-muted-foreground transition-all duration-300"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-neon-cyan" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 bg-input/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan text-foreground placeholder:text-muted-foreground transition-all duration-300"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-cyan"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Connecting...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Login
              </div>
            )}
          </Button>
        </form>

        {/* Status Info */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></div>
              Status: Online
            </div>
            <div className="text-xs text-muted-foreground">
              Mikrotik Hotspot Gateway
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;