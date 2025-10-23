import { Film, Users, Calendar, Mail, Plus, Trash2, Edit, Image } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  spots: number;
  available: number;
  description: string;
}

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  status: string;
  created_at: string;
  workshop_id: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'workshops' | 'bookings' | 'messages'>('workshops');
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);

    if (activeTab === 'workshops') {
      const { data } = await supabase
        .from('workshops')
        .select('*')
        .order('date', { ascending: true });
      if (data) setWorkshops(data);
    } else if (activeTab === 'bookings') {
      const { data } = await supabase
        .from('workshop_bookings')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setBookings(data);
    } else if (activeTab === 'messages') {
      const { data } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setMessages(data);
    }

    setLoading(false);
  };

  const deleteWorkshop = async (id: string) => {
    if (confirm('Supprimer cet atelier ?')) {
      await supabase.from('workshops').delete().eq('id', id);
      loadData();
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    await supabase.from('workshop_bookings').update({ status }).eq('id', id);
    loadData();
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-10 h-10 text-amber-500" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-bold">Tableau de Bord Admin</h1>
          </div>

          <div className="glass-strong rounded-2xl p-6 mb-8 border-2 border-amber-500/30">
            <Link
              to="/media-manager"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
            >
              <Image className="w-5 h-5" />
              Gérer les Médias du Site
            </Link>
            <p className="text-gray-400 text-sm mt-3">
              Uploadez et gérez toutes les photos et vidéos du site depuis un seul endroit
            </p>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'workshops'
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Ateliers
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'bookings'
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Réservations
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'messages'
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Messages
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {activeTab === 'workshops' && (
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Ateliers</h2>
                    <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Nouvel Atelier
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 px-4">Titre</th>
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Lieu</th>
                          <th className="text-left py-3 px-4">Places</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workshops.map((workshop) => (
                          <tr key={workshop.id} className="border-b border-gray-800">
                            <td className="py-3 px-4">{workshop.title}</td>
                            <td className="py-3 px-4">{new Date(workshop.date).toLocaleDateString('fr-FR')}</td>
                            <td className="py-3 px-4">{workshop.location}</td>
                            <td className="py-3 px-4">{workshop.available}/{workshop.spots}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteWorkshop(workshop.id)}
                                  className="p-2 bg-red-900 hover:bg-red-800 rounded transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div className="bg-gray-900 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Réservations</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 px-4">Nom</th>
                          <th className="text-left py-3 px-4">Email</th>
                          <th className="text-left py-3 px-4">Âge</th>
                          <th className="text-left py-3 px-4">Statut</th>
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-gray-800">
                            <td className="py-3 px-4">{booking.name}</td>
                            <td className="py-3 px-4">{booking.email}</td>
                            <td className="py-3 px-4">{booking.age} ans</td>
                            <td className="py-3 px-4">
                              <select
                                value={booking.status}
                                onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                                className="bg-gray-800 border border-gray-700 rounded px-2 py-1"
                              >
                                <option value="pending">En attente</option>
                                <option value="confirmed">Confirmé</option>
                                <option value="cancelled">Annulé</option>
                              </select>
                            </td>
                            <td className="py-3 px-4">{new Date(booking.created_at).toLocaleDateString('fr-FR')}</td>
                            <td className="py-3 px-4">
                              <a href={`mailto:${booking.email}`} className="text-amber-500 hover:underline">
                                Contacter
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="bg-gray-900 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Messages de Contact</h2>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="bg-black rounded-lg p-6 border border-gray-800">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg">{message.name}</h3>
                            <p className="text-gray-400">{message.email}</p>
                            {message.phone && <p className="text-gray-400">{message.phone}</p>}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(message.created_at).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
                        <div className="mt-4 flex gap-2">
                          <a
                            href={`mailto:${message.email}`}
                            className="text-amber-500 hover:underline text-sm"
                          >
                            Répondre par email
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
