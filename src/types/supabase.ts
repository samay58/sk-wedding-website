export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      rsvps: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          attending: boolean
          guests: number
          dietary_restrictions: string | null
          message: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          email: string
          attending: boolean
          guests: number
          dietary_restrictions?: string | null
          message?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          email?: string
          attending?: boolean
          guests?: number
          dietary_restrictions?: string | null
          message?: string | null
        }
      }
    }
  }
}