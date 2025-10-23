import { Users, Film, Award, TrendingUp, Bell, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface RecentActivity {
  id: string;
  name: string;
  action: string;
  time: string;
  location: string;
}

const recentActivities: RecentActivity[] = [
  { id: '1', name: 'Sarah M.', action: 's\'est inscrite à l\'atelier Découverte', time: 'Il y a 3 min', location: 'Saint-Denis' },
  { id: '2', name: 'Karim B.', action: 'a rejoint l\'atelier Trimestriel', time: 'Il y a 12 min', location: 'Aubervilliers' },
  { id: '3', name: 'Amina L.', action: 's\'est inscrite à l\'atelier Semestriel', time: 'Il y a 25 min', location: 'Pantin' },
  { id: '4', name: 'Mehdi K.', action: 'a réservé sa place', time: 'Il y a 1h', location: 'Bobigny' },
  { id: '5', name: 'Fatou S.', action: 's\'est inscrite à l\'atelier Découverte', time: 'Il y a 2h', location: 'Saint-Denis' },
];

export default function LiveImpact() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [stats, setStats] = useState({
    totalYouth: 487,
    filmsCreated: 156,
    festivalsWon: 18,
    employmentRate: 87
  });

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % recentActivities.length);
    }, 5000);

    const statsTimer = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalYouth: prev.totalYouth + Math.floor(Math.random() * 2)
      }));
    }, 30000);

    return () => {
      clearInterval(activityTimer);
      clearInterval(statsTimer);
    };
  }, []);

  const currentItem = recentActivities[currentActivity];

  return (
    <div className="fixed bottom-8 left-8 z-40 max-w-sm hidden lg:block">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="glass-strong rounded-xl p-4 border border-amber-500/30 shadow-glow hover:shadow-glow-strong transition-all duration-300 w-full text-left group"
      >
        <div className="flex items-start gap-3">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-full flex-shrink-0 animate-pulse">
            <Bell className="w-4 h-4 text-black" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm mb-1">
              <span className="text-amber-500">{currentItem.name}</span> {currentItem.action}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>{currentItem.time}</span>
              <span>•</span>
              <span>{currentItem.location}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-amber-500 group-hover:translate-y-0.5 transition-transform" />
            ) : (
              <ChevronUp className="w-5 h-5 text-amber-500 group-hover:-translate-y-0.5 transition-transform" />
            )}
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-lg p-3 text-center border border-white/10 hover-lift">
            <Users className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-2xl font-bold gradient-text">{stats.totalYouth}</div>
            <div className="text-xs text-gray-400">Jeunes formés</div>
          </div>
          <div className="glass rounded-lg p-3 text-center border border-white/10 hover-lift">
            <Film className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-2xl font-bold gradient-text">{stats.filmsCreated}</div>
            <div className="text-xs text-gray-400">Films créés</div>
          </div>
          <div className="glass rounded-lg p-3 text-center border border-white/10 hover-lift">
            <Award className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-2xl font-bold gradient-text">{stats.festivalsWon}</div>
            <div className="text-xs text-gray-400">Prix festivals</div>
          </div>
          <div className="glass rounded-lg p-3 text-center border border-white/10 hover-lift">
            <TrendingUp className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-2xl font-bold gradient-text">{stats.employmentRate}%</div>
            <div className="text-xs text-gray-400">Emploi</div>
          </div>
        </div>
      </div>
    </div>
  );
}
