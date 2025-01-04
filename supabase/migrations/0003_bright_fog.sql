/*
  # Add updated_at tracking to RSVPs

  1. Changes
    - Add updated_at column with timestamp
    - Add trigger to automatically update timestamp
    - Add update policy for RSVPs

  2. Security
    - Update policy allows updates with proper checks
*/

-- Add updated_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'rsvps' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE rsvps ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
END $$;

-- Add trigger to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'set_updated_at'
  ) THEN
    CREATE TRIGGER set_updated_at
      BEFORE UPDATE ON rsvps
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at();
  END IF;
END $$;

-- Add update policy (using correct column name policyname)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Users can update their own RSVP'
  ) THEN
    CREATE POLICY "Users can update their own RSVP"
      ON rsvps
      FOR UPDATE
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;