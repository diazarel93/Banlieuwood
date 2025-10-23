/*
  # Gamification System - Badges, Points, Achievements

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key, references auth.users)
      - `username` (text, unique)
      - `full_name` (text)
      - `avatar_url` (text)
      - `bio` (text)
      - `total_points` (integer) - Total gamification points
      - `level` (integer) - User level (1-10)
      - `created_at` (timestamptz)

    - `badges`
      - `id` (uuid, primary key)
      - `name` (text, unique) - Badge name
      - `description` (text) - Badge description
      - `icon` (text) - Icon/emoji
      - `category` (text) - Badge category
      - `points_required` (integer) - Points needed to unlock

    - `user_badges`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `badge_id` (uuid, references badges)
      - `earned_at` (timestamptz)

    - `user_activities`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `activity_type` (text) - Type of activity
      - `points_earned` (integer)
      - `description` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can view their own data
    - Public can view profiles and badges

  3. Predefined Badges
    - First film, workshop completion, festival selection, etc.
*/

-- User Profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  total_points integer DEFAULT 0,
  level integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON user_profiles
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Badges
CREATE TABLE IF NOT EXISTS badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text NOT NULL,
  icon text DEFAULT '🏆',
  category text DEFAULT 'general',
  points_required integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Badges are viewable by everyone"
  ON badges
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- User Badges (earned badges)
CREATE TABLE IF NOT EXISTS user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  badge_id uuid REFERENCES badges(id) ON DELETE CASCADE,
  earned_at timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User badges are viewable by everyone"
  ON user_badges
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "System can insert user badges"
  ON user_badges
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- User Activities
CREATE TABLE IF NOT EXISTS user_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  activity_type text NOT NULL,
  points_earned integer DEFAULT 0,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own activities"
  ON user_activities
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert activities"
  ON user_activities
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_profiles_username ON user_profiles(username);
CREATE INDEX IF NOT EXISTS idx_user_profiles_points ON user_profiles(total_points DESC);
CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activities_user_id ON user_activities(user_id);

-- Insert predefined badges
INSERT INTO badges (name, description, icon, category, points_required) VALUES
('Première inscription', 'Tu as rejoint Banlieuwood !', '🎬', 'participation', 0),
('Premier atelier', 'Tu as complété ton premier atelier', '🎓', 'participation', 10),
('Réalisateur', 'Tu as réalisé ton premier film', '🎥', 'creation', 50),
('Monteur pro', 'Tu as monté 3 films', '✂️', 'creation', 100),
('Scénariste', 'Tu as écrit 5 scénarios', '✍️', 'creation', 150),
('Chef opérateur', 'Maîtrise de la caméra confirmée', '📹', 'technical', 200),
('Acteur', 'Tu as joué dans 3 films', '🎭', 'acting', 100),
('Sélection festival', 'Ton film a été sélectionné en festival', '🏆', 'achievement', 300),
('Prix festival', 'Tu as remporté un prix !', '🥇', 'achievement', 500),
('Mentor', 'Tu as aidé 5 débutants', '👥', 'community', 250),
('Ambassadeur', '10 personnes inscrites grâce à toi', '🌟', 'community', 400),
('Marathonien', 'Tu as participé à un long métrage', '🎞️', 'participation', 1000);
