import { useState, useEffect } from 'react';
import { UserPlus, MapPin, X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
  avatar?: string;
}

const mockNotifications: Notification[] = [
  { id: 1, name: 'Mohamed', location: 'Paris 19ème', action: "s'est inscrit à l'atelier", timeAgo: 'Il y a 2 min' },
  { id: 2, name: 'Sarah', location: 'Saint-Denis', action: 'a rejoint le programme', timeAgo: 'Il y a 5 min' },
  { id: 3, name: 'Karim', location: 'Bobigny', action: "s'est inscrit à l'atelier", timeAgo: 'Il y a 8 min' },
  { id: 4, name: 'Amina', location: 'Montreuil', action: 'a réservé sa place', timeAgo: 'Il y a 12 min' },
  { id: 5, name: 'Dylan', location: 'Aubervilliers', action: "s'est inscrit à l'atelier", timeAgo: 'Il y a 15 min' },
  { id: 6, name: 'Fatou', location: 'Pantin', action: 'a rejoint le programme', timeAgo: 'Il y a 18 min' },
  { id: 7, name: 'Lucas', location: 'Paris 20ème', action: 'a réservé sa place', timeAgo: 'Il y a 23 min' },
  { id: 8, name: 'Inès', location: 'Clichy-sous-Bois', action: "s'est inscrit à l'atelier", timeAgo: 'Il y a 27 min' }
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialDelay = setTimeout(() => {
      showNextNotification();
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next notification after 12 seconds (5s visible + 7s gap)
    const nextTimer = setTimeout(() => {
      showNextNotification();
    }, 12000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, notificationIndex]);

  const showNextNotification = () => {
    const nextIndex = (notificationIndex + 1) % mockNotifications.length;
    setNotificationIndex(nextIndex);
    setCurrentNotification(mockNotifications[nextIndex]);
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="glass-strong rounded-2xl p-4 pr-12 border border-amber-500/30 shadow-2xl max-w-sm backdrop-blur-xl hover-lift">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer la notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          {/* Avatar with gradient border */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-amber-500" />
              </div>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm mb-1">
              <span className="text-amber-500">{currentNotification.name}</span>
              <span className="text-gray-300 ml-1">{currentNotification.action}</span>
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>{currentNotification.location}</span>
              <span className="text-gray-600">•</span>
              <span>{currentNotification.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 animate-progress"></div>
        </div>
      </div>
    </div>
  );
}
