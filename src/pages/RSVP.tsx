import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { RSVPForm } from '../components/RSVP/RSVPForm';
import { RSVPLookup } from '../components/RSVP/RSVPLookup';
import { RSVPDisplay } from '../components/RSVP/RSVPDisplay';
import { RSVPActions } from '../components/RSVP/RSVPActions';
import { FormData } from '../types/rsvp';

type ViewState = 'actions' | 'lookup' | 'form' | 'display' | 'update';

export function RSVP() {
  const [viewState, setViewState] = useState<ViewState>('actions');
  const [existingRSVP, setExistingRSVP] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'exists' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleExistingRSVP = (rsvp: FormData) => {
    setExistingRSVP(rsvp);
    setViewState('display');
  };

  const handleUpdateRSVP = (rsvp: FormData) => {
    setExistingRSVP(rsvp);
    setViewState('update');
  };

  const handleNewRSVP = () => {
    setExistingRSVP(null);
    setViewState('form');
  };

  const handleCheckRSVP = () => {
    setViewState('lookup');
  };

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    try {
      if (viewState === 'update' && existingRSVP) {
        const { error } = await supabase
          .from('rsvps')
          .update(data)
          .eq('email', existingRSVP.email);

        if (error) throw error;
      } else {
        // Check if RSVP exists first
        const { data: existingData } = await supabase
          .from('rsvps')
          .select('*')
          .eq('email', data.email)
          .single();

        if (existingData) {
          setSubmitStatus('exists');
          setExistingRSVP(existingData as FormData);
          return;
        }

        // If no existing RSVP, proceed with insert
        const { error } = await supabase
          .from('rsvps')
          .insert([data]);

        if (error) throw error;
      }

      setSubmitStatus('success');
      setExistingRSVP(data);
      setViewState('display');
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-playfair text-4xl text-center mb-8 text-[#7a6e5a]">RSVP</h1>

        {submitStatus === 'error' && errorMessage && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}

        {submitStatus === 'exists' && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-lg">
            <p>An RSVP already exists for this email.</p>
            <button
              onClick={() => setViewState('display')}
              className="text-blue-700 hover:text-blue-800 underline mt-2"
            >
              Click here to view or update your RSVP
            </button>
          </div>
        )}

        {viewState === 'actions' && (
          <RSVPActions 
            onNewRSVP={handleNewRSVP}
            onCheckRSVP={handleCheckRSVP}
          />
        )}

        {viewState === 'lookup' && (
          <RSVPLookup 
            onExistingRSVP={handleExistingRSVP}
            onUpdateRSVP={handleUpdateRSVP}
          />
        )}

        {(viewState === 'form' || viewState === 'update') && (
          <RSVPForm 
            onSubmit={handleSubmit} 
            isSubmitting={isSubmitting}
            initialData={viewState === 'update' ? existingRSVP : undefined}
          />
        )}

        {viewState === 'display' && existingRSVP && (
          <RSVPDisplay
            rsvp={existingRSVP}
            onNewRSVP={handleNewRSVP}
            onUpdateRSVP={handleUpdateRSVP}
          />
        )}
      </div>
    </div>
  );
}