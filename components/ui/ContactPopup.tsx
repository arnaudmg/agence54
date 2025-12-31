"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Building2, User, Mail, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const frequencyOptions = [
  { value: "", label: "Sélectionnez une fréquence" },
  { value: "1-par-mois", label: "1 contenu par mois" },
  { value: "2-par-mois", label: "2 contenus par mois" },
  { value: "1-par-semaine", label: "1 contenu par semaine" },
  { value: "2-par-semaine", label: "2+ contenus par semaine" },
  { value: "sur-mesure", label: "Besoin sur-mesure" },
];

const needOptions = [
  { value: "", label: "Sélectionnez votre besoin principal" },
  { value: "podcast", label: "Podcast Audio/Vidéo" },
  { value: "personal-branding", label: "Personal Branding" },
  { value: "contenu-linkedin", label: "Contenu LinkedIn" },
  { value: "video-corporate", label: "Vidéo Corporate" },
  { value: "formation", label: "Formation & Coaching" },
  { value: "autre", label: "Autre" },
];

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    need: "",
    frequency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        need: "",
        frequency: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  const isFormValid = formData.company && formData.name && formData.email && formData.need && formData.frequency;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-2xl md:max-h-[90vh] 
                       bg-zinc-950 border border-zinc-800 z-[100] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative px-6 md:px-8 py-6 border-b border-zinc-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-800/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                Parlons de votre projet
              </h2>
              <p className="text-zinc-400 mt-2 text-sm md:text-base">
                Remplissez ce formulaire et nous vous recontacterons sous 24h.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Merci pour votre intérêt. Notre équipe vous contactera très rapidement.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Company & Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <Building2 className="w-3 h-3" />
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Votre entreprise"
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white text-sm
                                 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <User className="w-3 h-3" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Prénom Nom"
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white text-sm
                                 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vous@entreprise.com"
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white text-sm
                                 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 612 345 678"
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white text-sm
                                 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Need Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-wider">
                      Votre besoin principal *
                    </label>
                    <div className="relative">
                      <select
                        name="need"
                        value={formData.need}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm appearance-none",
                          "focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",
                          formData.need ? "text-white" : "text-zinc-600"
                        )}
                      >
                        {needOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Frequency Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-wider">
                      Fréquence de contenu souhaitée *
                    </label>
                    <div className="relative">
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm appearance-none",
                          "focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",
                          formData.frequency ? "text-white" : "text-zinc-600"
                        )}
                      >
                        {frequencyOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" />
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Décrivez votre projet ou vos besoins spécifiques..."
                      className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white text-sm
                               focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={cn(
                        "w-full h-12 rounded-none gap-2 font-medium",
                        isFormValid
                          ? "bg-white text-black hover:bg-zinc-200"
                          : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-600 border-t-transparent rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-zinc-600 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook for managing popup state
export function useContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}

