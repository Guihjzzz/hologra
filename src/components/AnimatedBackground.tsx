
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base dark gradient background with blue tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      
      {/* Enhanced starfield effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)',
            }}
          />
        ))}
      </div>
      
      {/* Blue energy rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 border-2 border-blue-400/30 rounded-full pulse-glow"></div>
        <div className="absolute top-8 left-8 w-80 h-80 border-2 border-blue-300/40 rounded-full pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 left-16 w-64 h-64 border-2 border-blue-200/50 rounded-full pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-24 left-24 w-48 h-48 border border-blue-100/30 rounded-full pulse-glow" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Floating blue particles */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blue-particle opacity-80 drift"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg blue-particle opacity-70 drift" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute bottom-32 left-40 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg blue-particle opacity-60 drift" style={{ animationDelay: '-6s' }}></div>
      <div className="absolute top-60 right-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blue-particle opacity-90 drift" style={{ animationDelay: '-9s' }}></div>
      <div className="absolute bottom-20 right-40 w-7 h-7 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blue-particle opacity-75 drift" style={{ animationDelay: '-12s' }}></div>
      <div className="absolute top-80 left-60 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blue-particle opacity-80 drift" style={{ animationDelay: '-15s' }}></div>
      
      {/* Blue energy wisps */}
      <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-radial from-blue-400/25 to-transparent rounded-full blur-xl drift"></div>
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-xl drift" style={{ animationDelay: '-8s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-gradient-radial from-blue-300/30 to-transparent rounded-full blur-xl drift" style={{ animationDelay: '-16s' }}></div>
      <div className="absolute top-1/6 right-1/3 w-36 h-36 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-xl drift" style={{ animationDelay: '-20s' }}></div>
      
      {/* Shimmer effects */}
      <div className="absolute top-0 left-0 w-full h-px shimmer"></div>
      <div className="absolute bottom-0 left-0 w-full h-px shimmer" style={{ animationDelay: '-1.5s' }}></div>
      
      {/* Deep space overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
