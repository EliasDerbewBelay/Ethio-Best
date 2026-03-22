"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree or custom API)
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* --- Header Section --- */}
      <section className="bg-purple-900 py-20 md:py-28 px-4 text-center relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl opacity-90 leading-relaxed">
            Have questions about a property or want to schedule a viewing? Our
            expert team is here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-700 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300 shrink-0 shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Call Us
                      </p>
                      <a
                        href="tel:+251975612114"
                        className="text-lg font-semibold text-slate-900 hover:text-purple-700 transition-colors"
                      >
                        (+251) 975 6121 14
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-700 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300 shrink-0 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Email Us
                      </p>
                      <a
                        href="mailto:info@ethiobest.com"
                        className="text-lg font-semibold text-slate-900 hover:text-purple-700 transition-colors"
                      >
                        info@ethiobest.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-700 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300 shrink-0 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Office Location
                      </p>
                      <p className="text-lg font-semibold text-slate-900">
                        Bole Medhanialem Area, <br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 mt-12 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase mb-5 tracking-widest">
                  Follow Our Updates
                </p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-purple-900 hover:bg-purple-900 hover:text-yellow-400 transition-all active:scale-90 border border-slate-100 shadow-sm"
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-8 text-purple-800">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <MessageSquare size={24} className="text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Elias Derbew"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 focus:bg-white transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+251 ..."
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 focus:bg-white transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 focus:bg-white transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the property you're interested in..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 focus:bg-white transition-all resize-none outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-yellow-400 text-purple-950 font-bold rounded-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-yellow-400/30 active:scale-[0.98]"
                >
                  Send Inquiry
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="w-full h-[450px] bg-slate-200 rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-2xl">
          <iframe
            title="Ethio Best Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.553255146524!2d38.7844!3d9.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0NycwMy44IkU!5e0!3m2!1sen!2set!4v1625000000000!5m2!1sen!2set"
            className="absolute inset-0 w-full h-full grayscale"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-6 left-6 bg-purple-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl border border-yellow-400/40 backdrop-blur-sm">
            Visit Our Head Office
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
