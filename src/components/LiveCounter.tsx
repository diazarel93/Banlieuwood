import { useState, useEffect } from 'react';
import { Users, Film, Award, TrendingUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

interface LiveCounterProps {
  initialStats?: {
    youngsTrained: number;
    filmsCreated: number;
    awards: number;
    activeSessions: number;
  };
}

export default function LiveCounter({ initialStats }: LiveCounterProps) {
  const [stats, setStats] = useState({
    youngsTrained: initialStats?.youngsTrained || 347,
    filmsCreated: initialStats?.filmsCreated || 89,
    awards: initialStats?.awards || 23,
    activeSessions: initialStats?.activeSessions || 5
  });

  useEffect(() => {
    // Simulate real-time increment (can be replaced with actual DB polling)
    const interval = setInterval(() => {
      const now = new Date();
      const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);

      // Add subtle increments based on time (makes it feel live)
      setStats(prev => ({
        ...prev,
        youngsTrained: 347 + Math.floor(dayOfYear * 0.5),
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const counters = [
    {
      icon: Users,
      value: stats.youngsTrained,
      label: 'Jeunes formés',
      suffix: '+',
      color: 'text-amber-500',
      bgColor: 'from-amber-500/20',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      gradientColor: 'from-amber-500 to-orange-500'
    },
    {
      icon: Film,
      value: stats.filmsCreated,
      label: 'Films créés',
      suffix: '+',
      color: 'text-blue-500',
      bgColor: 'from-blue-500/20',
      bgImage: 'https://images.pexels.com/photos/7234401/pexels-photo-7234401.jpeg',
      gradientColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      value: stats.awards,
      label: 'Prix & festivals',
      suffix: '+',
      color: 'text-green-500',
      bgColor: 'from-green-500/20',
      bgImage: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
      gradientColor: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      value: stats.activeSessions,
      label: 'Sessions actives',
      suffix: '',
      color: 'text-orange-500',
      bgColor: 'from-orange-500/20',
      bgImage: 'https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg',
      gradientColor: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
      {counters.map((counter, index) => (
        <div
          key={index}
          className="relative group rounded-2xl overflow-hidden transition-all duration-300 hover-lift border border-white/5 hover:border-amber-500/30"
        >
          <div className="absolute inset-0">
            <img
              src={counter.bgImage}
              alt={counter.label}
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${counter.gradientColor} opacity-60`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>

          <div className="relative p-6">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 mx-auto border border-white/30">
              <counter.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-2">
              <AnimatedCounter end={counter.value} suffix={counter.suffix} />
            </div>
            <p className="text-sm text-gray-100 font-medium drop-shadow">{counter.label}</p>
          </div>

          {/* Pulse effect for live feeling */}
          <div className={`absolute top-4 right-4 w-2 h-2 ${counter.color} rounded-full animate-pulse`}></div>
        </div>
      ))}
    </div>
  );
}
