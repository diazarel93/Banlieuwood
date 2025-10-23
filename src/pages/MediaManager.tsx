import { useState, useEffect } from 'react';
import { Upload, Image, Video, FileText, Trash2, Edit2, Eye, EyeOff, Plus, Save } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Media {
  id: string;
  title: string;
  description: string;
  media_type: string;
  category: string;
  file_url: string;
  thumbnail_url: string;
  alt_text: string;
  position: number;
  is_active: boolean;
  page_location: string;
  created_at: string;
}

interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: string;
  setting_type: string;
  category: string;
  description: string;
}

export default function MediaManager() {
  const [media, setMedia] = useState<Media[]>([]);
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'media' | 'settings'>('media');
  const [uploading, setUploading] = useState(false);
  const [editingSetting, setEditingSetting] = useState<string | null>(null);

  const [newMedia, setNewMedia] = useState({
    title: '',
    description: '',
    media_type: 'photo',
    category: 'gallery',
    page_location: 'home',
    alt_text: '',
    position: 0
  });

  useEffect(() => {
    fetchMedia();
    fetchSettings();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('media_library')
        .select('*')
        .order('page_location', { ascending: true })
        .order('position', { ascending: true });

      if (error) throw error;
      setMedia(data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const bucket = newMedia.media_type === 'video' ? 'videos' : 'images';
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${newMedia.page_location}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      const { error: insertError } = await supabase
        .from('media_library')
        .insert([{
          ...newMedia,
          file_url: publicUrl,
          thumbnail_url: publicUrl
        }]);

      if (insertError) throw insertError;

      alert('Média ajouté avec succès !');
      setNewMedia({
        title: '',
        description: '',
        media_type: 'photo',
        category: 'gallery',
        page_location: 'home',
        alt_text: '',
        position: 0
      });
      fetchMedia();
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  };

  const toggleMediaActive = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from('media_library')
        .update({ is_active: !currentState })
        .eq('id', id);

      if (error) throw error;
      fetchMedia();
    } catch (error) {
      console.error('Error toggling media:', error);
    }
  };

  const deleteMedia = async (id: string) => {
    if (!confirm('Supprimer ce média ?')) return;

    try {
      const { error } = await supabase
        .from('media_library')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchMedia();
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .update({ setting_value: value, updated_at: new Date().toISOString() })
        .eq('setting_key', key);

      if (error) throw error;
      setEditingSetting(null);
      fetchSettings();
      alert('Paramètre mis à jour !');
    } catch (error) {
      console.error('Error updating setting:', error);
    }
  };

  const pageOptions = ['home', 'ateliers', 'films', 'about', 'reussites', 'partenaires'];
  const categoryOptions = ['hero', 'gallery', 'team', 'films', 'partners', 'testimonials'];

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Gestionnaire de Médias</h1>
          <p className="text-gray-400">Gérez tous les visuels du site en un seul endroit</p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('media')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'media'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            <Image className="w-5 h-5 inline mr-2" />
            Bibliothèque Médias
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            <FileText className="w-5 h-5 inline mr-2" />
            Paramètres Visuels
          </button>
        </div>

        {activeTab === 'media' && (
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8 border-2 border-amber-500/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Ajouter un Média
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Titre *</label>
                  <input
                    type="text"
                    value={newMedia.title}
                    onChange={(e) => setNewMedia({ ...newMedia, title: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Nom du média"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Type de média *</label>
                  <select
                    value={newMedia.media_type}
                    onChange={(e) => setNewMedia({ ...newMedia, media_type: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="photo">Photo</option>
                    <option value="video">Vidéo</option>
                    <option value="logo">Logo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Page *</label>
                  <select
                    value={newMedia.page_location}
                    onChange={(e) => setNewMedia({ ...newMedia, page_location: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                  >
                    {pageOptions.map(page => (
                      <option key={page} value={page}>{page}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Catégorie *</label>
                  <select
                    value={newMedia.category}
                    onChange={(e) => setNewMedia({ ...newMedia, category: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                  >
                    {categoryOptions.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Texte alternatif (SEO)</label>
                  <input
                    type="text"
                    value={newMedia.alt_text}
                    onChange={(e) => setNewMedia({ ...newMedia, alt_text: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Description pour SEO"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Position</label>
                  <input
                    type="number"
                    value={newMedia.position}
                    onChange={(e) => setNewMedia({ ...newMedia, position: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Description</label>
                  <textarea
                    value={newMedia.description}
                    onChange={(e) => setNewMedia({ ...newMedia, description: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                    rows={3}
                    placeholder="Description du média"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Fichier *</label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept={newMedia.media_type === 'video' ? 'video/*' : 'image/*'}
                    disabled={uploading || !newMedia.title}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500 file:text-white file:cursor-pointer hover:file:bg-amber-600"
                  />
                  {uploading && <p className="mt-2 text-amber-500">Upload en cours...</p>}
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Médias existants</h2>

              {loading ? (
                <p className="text-gray-400">Chargement...</p>
              ) : media.length === 0 ? (
                <p className="text-gray-400">Aucun média pour le moment</p>
              ) : (
                <div className="space-y-4">
                  {media.map((item) => (
                    <div key={item.id} className="glass rounded-xl p-4 flex items-center gap-4 border-2 border-white/10">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                        {item.media_type === 'video' ? (
                          <Video className="w-full h-full p-6 text-gray-500" />
                        ) : (
                          <img src={item.file_url} alt={item.alt_text} className="w-full h-full object-cover" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded">{item.media_type}</span>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded">{item.page_location}</span>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded">{item.category}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleMediaActive(item.id, item.is_active)}
                          className={`p-2 rounded-lg transition-colors ${
                            item.is_active
                              ? 'bg-green-500 hover:bg-green-600'
                              : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                          title={item.is_active ? 'Actif' : 'Inactif'}
                        >
                          {item.is_active ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => deleteMedia(item.id)}
                          className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="glass-strong rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Paramètres Visuels du Site</h2>

            <div className="space-y-4">
              {settings.map((setting) => (
                <div key={setting.id} className="glass rounded-xl p-4 border-2 border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold">{setting.setting_key}</h3>
                      <p className="text-sm text-gray-400">{setting.description}</p>
                    </div>
                    <button
                      onClick={() => setEditingSetting(setting.setting_key)}
                      className="p-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  </div>

                  {editingSetting === setting.setting_key ? (
                    <div className="flex gap-2 mt-3">
                      <input
                        type="text"
                        defaultValue={setting.setting_value}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            updateSetting(setting.setting_key, e.currentTarget.value);
                          }
                        }}
                        className="flex-1 px-4 py-2 bg-black border-2 border-amber-500 rounded-lg text-white focus:outline-none"
                        placeholder="Nouvelle valeur"
                      />
                      <button
                        onClick={(e) => {
                          const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                          updateSetting(setting.setting_key, input.value);
                        }}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                      >
                        <Save className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2">
                      {setting.setting_type === 'image' && setting.setting_value ? (
                        <img src={setting.setting_value} alt={setting.setting_key} className="h-20 rounded-lg" />
                      ) : (
                        <p className="text-gray-300 font-mono text-sm">{setting.setting_value || '(vide)'}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
