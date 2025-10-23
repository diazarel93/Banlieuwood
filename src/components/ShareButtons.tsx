import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function ShareButtons({
  url = window.location.href,
  title = 'Banlieuwood - Ateliers Cinéma Gratuits',
  description = 'Apprends le cinéma gratuitement avec des professionnels à Saint-Denis. Ateliers pour jeunes de 12-25 ans.'
}: ShareButtonsProps) {
  const [showMenu, setShowMenu] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + ' - ' + url)}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    setShowMenu(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
        setShowMenu(false);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        <Share2 className="w-5 h-5" />
        <span>Partager</span>
      </button>

      {showMenu && !navigator.share && (
        <div className="absolute top-full mt-2 right-0 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-2 z-50 min-w-[200px]">
          <button
            onClick={() => handleShare('facebook')}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded transition-colors text-left"
          >
            <Facebook className="w-5 h-5 text-blue-500" />
            <span>Facebook</span>
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded transition-colors text-left"
          >
            <Twitter className="w-5 h-5 text-sky-500" />
            <span>Twitter</span>
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded transition-colors text-left"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => handleShare('email')}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded transition-colors text-left"
          >
            <Mail className="w-5 h-5 text-amber-500" />
            <span>Email</span>
          </button>
        </div>
      )}

      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
