import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Media {
  id: string;
  title: string;
  description: string;
  file_url: string;
  alt_text: string;
}

interface MediaGalleryProps {
  pageLocation: string;
  category?: string;
  columns?: number;
}

export default function MediaGallery({ pageLocation, category = 'gallery', columns = 3 }: MediaGalleryProps) {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    fetchMedia();
  }, [pageLocation, category]);

  const fetchMedia = async () => {
    try {
      let query = supabase
        .from('media_library')
        .select('id, title, description, file_url, alt_text')
        .eq('page_location', pageLocation)
        .eq('media_type', 'photo')
        .eq('is_active', true)
        .order('position', { ascending: true });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMedia(data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % media.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + media.length) % media.length);
    }
  };

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video bg-gray-800 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (media.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns as keyof typeof gridCols] || 'md:grid-cols-3'} gap-6`}>
        {media.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(index)}
            className="group cursor-pointer relative overflow-hidden rounded-xl aspect-video bg-gray-900"
          >
            <img
              src={item.file_url}
              alt={item.alt_text || item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[90vh] w-full">
            <img
              src={media[selectedImage].file_url}
              alt={media[selectedImage].alt_text || media[selectedImage].title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-xl mb-2">{media[selectedImage].title}</h3>
              {media[selectedImage].description && (
                <p className="text-gray-300">{media[selectedImage].description}</p>
              )}
              <p className="text-gray-500 text-sm mt-2">
                {selectedImage + 1} / {media.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
