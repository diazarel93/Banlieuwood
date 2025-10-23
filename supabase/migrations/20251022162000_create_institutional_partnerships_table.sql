/*
  # Create institutional partnerships table

  1. New Tables
    - `institutional_partnerships`
      - `id` (uuid, primary key)
      - `institution_name` (text) - Nom de l'institution
      - `institution_type` (text) - Type: collège, lycée, mairie, MJC, etc.
      - `contact_name` (text) - Nom du contact
      - `contact_role` (text) - Fonction du contact
      - `email` (text) - Email de contact
      - `phone` (text) - Téléphone
      - `city` (text) - Ville
      - `project_description` (text) - Description du projet
      - `participants_count` (integer, nullable) - Nombre de participants estimé
      - `preferred_format` (text, nullable) - Format souhaité (ponctuel, trimestriel, annuel)
      - `budget_range` (text, nullable) - Fourchette budget
      - `timeline` (text, nullable) - Échéance souhaitée
      - `status` (text) - Statut: pending, contacted, accepted, rejected
      - `notes` (text, nullable) - Notes internes admin
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `institutional_partnerships` table
    - Add policy for public to insert (contact form)
    - Add policy for authenticated admins to read all
    - Add policy for authenticated admins to update
*/

CREATE TABLE IF NOT EXISTS institutional_partnerships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_name text NOT NULL,
  institution_type text NOT NULL,
  contact_name text NOT NULL,
  contact_role text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  project_description text NOT NULL,
  participants_count integer,
  preferred_format text,
  budget_range text,
  timeline text,
  status text NOT NULL DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE institutional_partnerships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit partnership request"
  ON institutional_partnerships
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all partnership requests"
  ON institutional_partnerships
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins
      WHERE admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can update partnership requests"
  ON institutional_partnerships
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins
      WHERE admins.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins
      WHERE admins.user_id = auth.uid()
    )
  );

CREATE INDEX IF NOT EXISTS idx_institutional_partnerships_status ON institutional_partnerships(status);
CREATE INDEX IF NOT EXISTS idx_institutional_partnerships_created_at ON institutional_partnerships(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_institutional_partnerships_institution_type ON institutional_partnerships(institution_type);
