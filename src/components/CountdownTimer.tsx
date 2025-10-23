import { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
  placesLeft?: number;
}

export default function CountdownTimer({ targetDate, title = "Prochaine session", placesLeft }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsUrgent(days < 3); // Urgent if less than 3 days
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Jours', value: timeLeft.days, icon: Calendar },
    { label: 'Heures', value: timeLeft.hours, icon: Clock },
    { label: 'Min', value: timeLeft.minutes, icon: Clock },
    { label: 'Sec', value: timeLeft.seconds, icon: Clock }
  ];

  return (
    <div className={`glass-strong rounded-2xl p-6 md:p-8 border-2 ${isUrgent ? 'border-red-500/50 animate-pulse-border' : 'border-amber-500/30'}`}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          {isUrgent && <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />}
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">Inscriptions ouvertes maintenant</p>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-4 mb-6">
        {timeUnits.map((unit, index) => (
          <div key={index} className="relative group">
            <div className={`glass rounded-xl p-3 md:p-4 text-center transition-all duration-300 hover:glass-strong ${
              isUrgent && unit.value < 10 ? 'border border-red-500/30' : ''
            }`}>
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                isUrgent ? 'text-red-500' : 'gradient-text'
              }`}>
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{unit.label}</div>
            </div>
            {/* Subtle animation indicator */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 ${
              isUrgent ? 'bg-red-500' : 'bg-amber-500'
            } rounded-full animate-ping opacity-75`}></div>
          </div>
        ))}
      </div>

      {placesLeft !== undefined && placesLeft > 0 && (
        <div className={`text-center py-3 px-4 rounded-lg ${
          placesLeft <= 5 ? 'bg-red-500/20 border border-red-500/30' : 'bg-amber-500/20 border border-amber-500/30'
        }`}>
          <p className={`font-bold ${placesLeft <= 5 ? 'text-red-400' : 'text-amber-400'}`}>
            {placesLeft <= 5 && '🔥 '}
            Plus que <span className="text-2xl mx-1">{placesLeft}</span> place{placesLeft > 1 ? 's' : ''} disponible{placesLeft > 1 ? 's' : ''} !
            {placesLeft <= 5 && ' 🔥'}
          </p>
        </div>
      )}

      {isUrgent && (
        <div className="mt-4 text-center">
          <p className="text-red-400 text-sm font-semibold animate-pulse">
            ⚡ Derniers jours pour vous inscrire !
          </p>
        </div>
      )}
    </div>
  );
}
