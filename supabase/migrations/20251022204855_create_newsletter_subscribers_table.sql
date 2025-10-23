/*
  # Newsletter Subscribers Table

  1. New Table
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - Subscriber email address
      - `subscribed_at` (timestamptz) - Timestamp of subscription
      - `is_active` (boolean) - Active subscription status
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public (anonymous) users to insert their own subscription
    - Unique constraint on email to prevent duplicate subscriptions

  3. Notes
    - Public can only INSERT (subscribe)
    - Email validation handled at application level
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_created_at ON newsletter_subscribers(created_at DESC);
