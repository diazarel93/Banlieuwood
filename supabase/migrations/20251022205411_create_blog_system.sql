/*
  # Blog System with Categories and Tags

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null) - Post title
      - `slug` (text, unique, not null) - URL-friendly slug
      - `content` (text, not null) - Post content (markdown supported)
      - `excerpt` (text) - Short description for previews
      - `cover_image` (text) - Cover image URL
      - `author_name` (text) - Author name
      - `author_avatar` (text) - Author avatar URL
      - `category` (text) - Category (tutorials, success-stories, news, tips)
      - `tags` (text[]) - Array of tags
      - `views_count` (integer) - Number of views
      - `reading_time` (integer) - Estimated reading time in minutes
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `blog_posts` table
    - Public can read published posts
    - Only authenticated users can create/update/delete

  3. Indexes
    - Index on slug for fast lookups
    - Index on published_at for sorting
    - Index on category for filtering
    - GIN index on tags for array searches
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  cover_image text,
  author_name text DEFAULT 'Équipe Banlieuwood',
  author_avatar text,
  category text DEFAULT 'news',
  tags text[] DEFAULT '{}',
  views_count integer DEFAULT 0,
  reading_time integer DEFAULT 5,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can create posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published) WHERE published = true;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();

-- Insert some sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, cover_image, category, tags, published, published_at, reading_time) VALUES
(
  'Comment réaliser ton premier court-métrage en 7 jours',
  'premier-court-metrage-7-jours',
  '# Introduction\n\nRéaliser un court-métrage peut sembler intimidant, mais avec la bonne méthodologie, c''est tout à fait possible en une semaine !\n\n## Jour 1 : L''idée\n\nTout commence par une idée simple. Pas besoin d''un scénario hollywoodien...',
  'Guide complet pour créer ton premier film en une semaine, même sans expérience. Méthodologie étape par étape.',
  'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
  'tutorials',
  ARRAY['réalisation', 'débutant', 'tutoriel', 'court-métrage'],
  true,
  now() - interval '2 days',
  8
),
(
  'Mohamed : De la cité au festival de Cannes',
  'mohamed-de-la-cite-a-cannes',
  '# L''histoire de Mohamed\n\nMohamed avait 17 ans quand il a poussé les portes de Banlieuwood pour la première fois...',
  'Le parcours inspirant de Mohamed, de Paris 19ème aux marches du festival de Cannes. Une success story authentique.',
  'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
  'success-stories',
  ARRAY['témoignage', 'success-story', 'festival', 'cannes'],
  true,
  now() - interval '5 days',
  6
),
(
  '5 erreurs à éviter quand on débute en montage vidéo',
  '5-erreurs-montage-video-debutant',
  '# Les pièges classiques du montage\n\nLe montage est un art qui s''apprend. Voici les 5 erreurs que font 90% des débutants...',
  'Évite ces erreurs courantes et améliore instantanément la qualité de tes montages vidéo.',
  'https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg',
  'tips',
  ARRAY['montage', 'conseils', 'post-production', 'débutant'],
  true,
  now() - interval '7 days',
  5
);
