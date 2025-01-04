/*
  # Create RSVP table

  1. New Tables
    - `rsvps`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `attending` (boolean)
      - `guests` (integer)
      - `dietary_restrictions` (text)
      - `message` (text)

  2. Security
    - Enable RLS on `rsvps` table
    - Add policy for public to insert their own RSVPs
    - Add policy for authenticated users to read all RSVPs
*/

CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  attending boolean NOT NULL DEFAULT true,
  guests integer NOT NULL DEFAULT 0,
  dietary_restrictions text,
  message text
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert RSVPs"
  ON rsvps
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view RSVPs"
  ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);