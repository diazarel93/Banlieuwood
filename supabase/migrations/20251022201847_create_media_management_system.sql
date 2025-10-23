/*
  # Create Media Management System

  1. New Tables
    - `media_library`
      - `id` (uuid, primary key)
      - `title` (text) - Nom du média
      - `description` (text) - Description
      - `media_type` (text) - photo, video, logo
      - `category` (text) - hero, gallery, team, films, partners, etc.
      - `file_url` (text) - URL du fichier dans Storage
      - `thumbnail_url` (text) - URL miniature
      - `alt_text` (text) - Texte alternatif SEO
      - `position` (integer) - Ordre d'affichage
      - `is_active` (boolean) - Actif ou non
      - `page_location` (text) - home, ateliers, films, about, etc.
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `site_settings`
      - `id` (uuid, primary key)
      - `setting_key` (text, unique) - Clé du paramètre
      - `setting_value` (text) - Valeur
      - `setting_type` (text) - text, image, video, color
      - `category` (text) - hero, footer, general
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can read active media
    - Only authenticated users can manage media
*/

-- Create media_library table
CREATE TABLE IF NOT EXISTS media_library (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  media_type text NOT NULL CHECK (media_type IN ('photo', 'video', 'logo', 'document')),
  category text NOT NULL,
  file_url text NOT NULL,
  thumbnail_url text,
  alt_text text,
  position integer DEFAULT 0,
  is_active boolean DEFAULT true,
  page_location text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text UNIQUE NOT NULL,
  setting_value text NOT NULL,
  setting_type text NOT NULL CHECK (setting_type IN ('text', 'image', 'video', 'color', 'url')),
  category text NOT NULL,
  description text,
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_media_page_location ON media_library(page_location);
CREATE INDEX IF NOT EXISTS idx_media_category ON media_library(category);
CREATE INDEX IF NOT EXISTS idx_media_active ON media_library(is_active);
CREATE INDEX IF NOT EXISTS idx_settings_key ON site_settings(setting_key);

-- Enable RLS
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Policies for media_library
CREATE POLICY "Public can view active media"
  ON media_library
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert media"
  ON media_library
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media"
  ON media_library
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete media"
  ON media_library
  FOR DELETE
  TO authenticated
  USING (true);

-- Policies for site_settings
CREATE POLICY "Public can view site settings"
  ON site_settings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert settings"
  ON site_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update settings"
  ON site_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete settings"
  ON site_settings
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert default settings
INSERT INTO site_settings (setting_key, setting_value, setting_type, category, description) VALUES
  ('hero_video_url', '', 'video', 'hero', 'URL de la vidéo hero (YouTube/Vimeo)'),
  ('hero_background_image', 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg', 'image', 'hero', 'Image de fond du hero'),
  ('logo_url', '', 'image', 'general', 'Logo principal du site'),
  ('primary_color', '#8B5CF6', 'color', 'general', 'Couleur primaire du site'),
  ('secondary_color', '#3B82F6', 'color', 'general', 'Couleur secondaire du site')
ON CONFLICT (setting_key) DO NOTHING;

-- Insert sample media entries
INSERT INTO media_library (title, description, media_type, category, file_url, alt_text, position, page_location) VALUES
  ('Atelier de tournage 1', 'Jeunes en pleine création cinématographique', 'photo', 'gallery', 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg', 'Jeunes filmant avec une caméra professionnelle', 1, 'home'),
  ('Équipe de production', 'Collaboration et créativité au rendez-vous', 'photo', 'gallery', 'https://images.pexels.com/photos/7991434/pexels-photo-7991434.jpeg', 'Équipe regardant un écran de montage', 2, 'home'),
  ('Salle de projection', 'Moment de partage lors d''une projection', 'photo', 'gallery', 'https://images.pexels.com/photos/7234408/pexels-photo-7234408.jpeg', 'Public lors d''une projection de film', 3, 'home'),
  ('Atelier caméra', 'Apprentissage des techniques de prise de vue', 'photo', 'gallery', 'https://images.pexels.com/photos/8132560/pexels-photo-8132560.jpeg', 'Jeune apprenant à utiliser une caméra', 1, 'ateliers'),
  ('Montage vidéo', 'Session de montage en groupe', 'photo', 'gallery', 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg', 'Jeunes devant un ordinateur de montage', 2, 'ateliers'),
  ('Réalisation film', 'Tournage d''une scène', 'photo', 'gallery', 'https://images.pexels.com/photos/8940016/pexels-photo-8940016.jpeg', 'Tournage d''une scène avec équipe complète', 3, 'ateliers')
ON CONFLICT DO NOTHING;
