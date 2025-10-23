/*
  # Create admin dashboard and booking system tables

  1. New Tables
    - `workshops`
      - `id` (uuid, primary key) - Unique identifier for each workshop
      - `title` (text) - Workshop title
      - `date` (date) - Workshop date
      - `time` (text) - Workshop time
      - `location` (text) - Workshop location
      - `spots` (integer) - Total spots available
      - `available` (integer) - Available spots remaining
      - `description` (text) - Workshop description
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

    - `workshop_bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `workshop_id` (uuid, foreign key) - References workshops table
      - `name` (text) - Participant name
      - `email` (text) - Participant email
      - `phone` (text) - Participant phone
      - `age` (integer) - Participant age
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - Booking timestamp

    - `films_data`
      - `id` (uuid, primary key) - Unique identifier for each film
      - `title` (text) - Film title
      - `vimeo_id` (text) - Vimeo video ID
      - `thumbnail` (text) - Thumbnail URL
      - `year` (integer) - Production year
      - `category` (text) - Film category
      - `description` (text) - Film description
      - `display_order` (integer) - Order for displaying films
      - `published` (boolean) - Whether film is published
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Public can read workshops and films
    - Only authenticated users can read bookings
    - Only authenticated users can manage workshop data
    - Anyone can create bookings
*/

CREATE TABLE IF NOT EXISTS workshops (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  location text NOT NULL,
  spots integer NOT NULL DEFAULT 15,
  available integer NOT NULL DEFAULT 15,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS workshop_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id uuid REFERENCES workshops(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  age integer NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS films_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  vimeo_id text NOT NULL,
  thumbnail text NOT NULL,
  year integer NOT NULL,
  category text NOT NULL,
  description text,
  display_order integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE films_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published workshops"
  ON workshops
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage workshops"
  ON workshops
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can create workshop bookings"
  ON workshop_bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON workshop_bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON workshop_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view published films"
  ON films_data
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Authenticated users can manage films"
  ON films_data
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);