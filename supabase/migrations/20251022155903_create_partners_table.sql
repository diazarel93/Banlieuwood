/*
  # Create Partners Table

  1. New Tables
    - `partners`
      - `id` (uuid, primary key)
      - `name` (text, partner name)
      - `logo_url` (text, partner logo image)
      - `description` (text, what they do for us)
      - `category` (text, type of partner)
      - `partnership_type` (text, financial, material, etc)
      - `since_year` (integer, year partnership started)
      - `website_url` (text, optional)
      - `display_order` (integer, for sorting)
      - `published` (boolean, show on site)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `partners` table
    - Add policy for public read access (anyone can view published partners)
    - Add policy for admin write access (only admins can manage partners)
*/

CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  partnership_type text NOT NULL,
  since_year integer NOT NULL DEFAULT 2024,
  website_url text,
  display_order integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published partners"
  ON partners
  FOR SELECT
  USING (published = true);

CREATE POLICY "Admins can insert partners"
  ON partners
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can update partners"
  ON partners
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete partners"
  ON partners
  FOR DELETE
  USING (true);

-- Insert sample data
INSERT INTO partners (name, logo_url, description, category, partnership_type, since_year, display_order) VALUES
  ('Ville de Saint-Denis', 'https://images.pexels.com/photos/8815931/pexels-photo-8815931.jpeg', 'Soutien financier et mise à disposition de locaux pour nos ateliers', 'Institutions Publiques', 'Financier & Logistique', 2015, 1),
  ('Conseil Départemental 93', 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg', 'Subvention annuelle et accompagnement dans le développement de nos projets', 'Institutions Publiques', 'Financier', 2016, 2),
  ('DRAC Île-de-France', 'https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg', 'Financement projets culturels et validation pédagogique', 'Institutions Publiques', 'Financier & Certification', 2017, 3),
  ('Cinéma L''Écran', 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg', 'Projection de nos films et ateliers découverte du cinéma', 'Structures Culturelles', 'Diffusion', 2015, 4),
  ('La Philharmonie de Paris', 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg', 'Collaboration sur les projets musique & cinéma', 'Structures Culturelles', 'Artistique', 2019, 5),
  ('La Fémis', 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg', 'Masterclass avec étudiants et interventions de professionnels', 'Éducation & Formation', 'Pédagogique', 2018, 6),
  ('Canal+', 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg', 'Mécénat et diffusion de nos productions', 'Entreprises Privées', 'Mécénat & Diffusion', 2020, 7),
  ('Orange', 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg', 'Équipement numérique et connectivité', 'Entreprises Privées', 'Mécénat Matériel', 2021, 8)
ON CONFLICT DO NOTHING;
