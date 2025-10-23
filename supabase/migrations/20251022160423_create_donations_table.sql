/*
  # Create Donations Table

  1. New Tables
    - `donations`
      - `id` (uuid, primary key)
      - `donor_name` (text, donor's full name)
      - `donor_email` (text, donor's email for receipt)
      - `amount` (decimal, donation amount in euros)
      - `message` (text, optional message from donor)
      - `status` (text, pending/completed/failed)
      - `payment_method` (text, card/bank_transfer/check)
      - `payment_id` (text, external payment reference)
      - `receipt_sent` (boolean, fiscal receipt sent status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `donations` table
    - Add policy for admin read access only (donations are sensitive)
    - Add policy for insert (anyone can donate)
    - No public read access to protect donor privacy

  3. Important Notes
    - Donations are private and GDPR-compliant
    - Only admins can view donation history
    - Donors can insert but not read others' donations
    - Automatic fiscal receipts tracked with receipt_sent flag
*/

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  donor_email text NOT NULL,
  amount decimal(10,2) NOT NULL CHECK (amount >= 5.00),
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_method text,
  payment_id text,
  receipt_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert donations"
  ON donations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can view donations"
  ON donations
  FOR SELECT
  USING (false);

CREATE POLICY "Only admins can update donations"
  ON donations
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Only admins can delete donations"
  ON donations
  FOR DELETE
  USING (false);

CREATE INDEX idx_donations_status ON donations(status);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX idx_donations_donor_email ON donations(donor_email);
