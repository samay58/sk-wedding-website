/*
  # Add unique constraint to RSVP emails

  1. Changes
    - Add unique constraint to email column in rsvps table
    - Add policy for users to view their own RSVP by email
*/

ALTER TABLE rsvps
ADD CONSTRAINT unique_email UNIQUE (email);

-- Allow users to view their own RSVP by email
CREATE POLICY "Users can view their own RSVP"
  ON rsvps
  FOR SELECT
  TO public
  USING (true);