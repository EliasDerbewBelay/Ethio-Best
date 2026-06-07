"use client";

import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactItems = [
    { icon: Phone, label: "Call Us", value: "(+251) 975 6121 14", href: "tel:+251975612114" },
    { icon: Mail, label: "Email Us", value: "info@ellamanrealestate.com", href: "mailto:info@ellamanrealestate.com" },
    { icon: MapPin, label: "Office", value: "Bole Medhanialem, Addis Ababa", href: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      <PageHero
        title={<>Get in <span className="text-yellow-400">Touch</span></>}
        description="Have questions about a property or want to schedule a viewing? Our expert team is here to guide you."
      />

      <section className="section-container relative z-20 -mt-6 sm:-mt-10 page-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-purple-100 h-full">
              <h2 className="text-h3 text-purple-900 mb-5 sm:mb-6">Contact Information</h2>
              <div className="space-y-5 sm:space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="icon-box-sm bg-purple-50 rounded-xl flex items-center justify-center text-purple-700 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all">
                      <item.icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-caption text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-body-sm font-semibold text-slate-900 hover:text-purple-700 break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-body-sm font-semibold text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-100">
                <p className="text-caption text-slate-400 uppercase mb-3 sm:mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                    <button key={idx} className="icon-box-sm rounded-full bg-slate-50 flex items-center justify-center text-purple-900 hover:bg-purple-900 hover:text-yellow-400 transition-all border border-slate-100">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-purple-100">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 text-purple-800">
                <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-lg">
                  <MessageSquare size={20} className="text-yellow-600 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-h3">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-caption font-semibold text-slate-700 ml-1">Full Name</label>
                    <input type="text" placeholder="Your name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-body-sm focus:outline-none focus:ring-2 focus:ring-purple-900" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-caption font-semibold text-slate-700 ml-1">Phone</label>
                    <input type="tel" placeholder="+251 ..." required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-body-sm focus:outline-none focus:ring-2 focus:ring-purple-900" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-caption font-semibold text-slate-700 ml-1">Email</label>
                  <input type="email" placeholder="example@mail.com" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-body-sm focus:outline-none focus:ring-2 focus:ring-purple-900" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-caption font-semibold text-slate-700 ml-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about the property..." required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-body-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-900" />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto bg-yellow-400 text-purple-950 hover:bg-yellow-300 shadow-lg shadow-yellow-400/30 rounded-xl">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-8 sm:pb-12">
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-slate-200 rounded-xl sm:rounded-2xl overflow-hidden relative border-2 border-white shadow-xl">
          <iframe
            title="Ella Man Real Estate Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.553255146524!2d38.7844!3d9.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0NycwMy44IkU!5e0!3m2!1sen!2set!4v1625000000000!5m2!1sen!2set"
            className="absolute inset-0 w-full h-full grayscale"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-purple-900 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-caption font-bold border border-yellow-400/40">
            Visit Our Head Office
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
