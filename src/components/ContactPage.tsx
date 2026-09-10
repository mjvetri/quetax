// // import React, { useState } from 'react';
// // import { motion } from 'motion/react';
// // import { Send, CheckCircle2, MessageSquare, Mail, Calendar, Sparkles, Shield, Clock, MapPin, Building, ExternalLink, Image as ImageIcon } from 'lucide-react';
// // import tidelNeoMonument from '../assets/images/tidel_neo_villupuram_building_1787141840069.jpg';
// // import tidelNeoDay from '../assets/images/tidel_neo_day_entrance_1787141870934.jpg';
// // import tidelNeoCampus from '../assets/images/tidel_neo_campus_1787141621669.jpg';

// // interface ContactPageProps {
// //   onNavigate: (page: string) => void;
// // }

// // export function ContactPage({ onNavigate }: ContactPageProps) {
// //   const [activePhotoIdx, setActivePhotoIdx] = useState(0);
// //   const campusPhotos = [
// //     { src: tidelNeoMonument, label: 'Tidel Neo Monument & Campus', tag: 'Main Entrance' },
// //     { src: tidelNeoDay, label: 'Daytime Entrance Facade', tag: 'Building Wing' },
// //     { src: tidelNeoCampus, label: 'Campus Architecture & Driveway', tag: 'Tech Hub' },
// //   ];

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     company: '',
// //     projectType: 'Full-Stack Web App',
// //     timeline: '2 - 4 Weeks',
// //     budget: '₹3,00,000 - ₹8,00,000',
// //     details: '',
// //   });

// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const projectTypes = [
// //     'Full-Stack Web App',
// //     'Mobile Application (iOS/Android)',
// //     'Custom Software & Cloud Engine',
// //     'AI & Agentic Workflow',
// //     'Full MVP Fast-Track',
// //   ];

// //   const timelines = ['Urgent (< 2 weeks)', '2 - 4 Weeks', '1 - 2 Months', 'Flexible / Ongoing'];
// //   const budgets = [
// //     '₹1,00,000 - ₹3,00,000',
// //     '₹3,00,000 - ₹8,00,000',
// //     '₹8,00,000 - ₹20,00,000',
// //     '₹20,00,000+',
// //   ];

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!formData.name || !formData.email) return;
// //     setIsSubmitted(true);
// //   };

// //   return (
// //     <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true, margin: '-40px' }}
// //         transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
// //         className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
// //       >
// //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
// //           <Sparkles className="w-3.5 h-3.5 text-blue-700" />
// //           <span>START A PROJECT</span>
// //         </div>

// //         <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
// //           Let's Build Something Exceptional
// //         </h1>
// //         <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium">
// //           Tell us about your product goals, timeline, and requirements. We review every brief within 2 hours and provide an initial architectural scope and estimate.
// //         </p>
// //       </motion.div>

// //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
// //         {/* Form Column */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: '-30px' }}
// //           transition={{ duration: 0.45 }}
// //           className="lg:col-span-8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
// //         >
// //           {isSubmitted ? (
// //             <div className="py-12 px-4 text-center">
// //               <div className="w-14 h-14 bg-emerald-500/20 text-emerald-800 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
// //                 <CheckCircle2 className="w-8 h-8 text-emerald-700" />
// //               </div>
// //               <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
// //                 Project Brief Received!
// //               </h2>
// //               <p className="text-xs sm:text-sm text-neutral-900 max-w-md mx-auto mb-6 leading-relaxed font-medium">
// //                 Thank you, <strong className="text-neutral-950 font-bold">{formData.name}</strong>. Our lead systems architect is reviewing your submission for <strong className="text-neutral-950 font-bold">{formData.company || 'your project'}</strong> and will respond to <strong className="text-neutral-950 font-bold">{formData.email}</strong> within 2 hours.
// //               </p>
// //               <button
// //                 onClick={() => {
// //                   setIsSubmitted(false);
// //                   setFormData({
// //                     name: '',
// //                     email: '',
// //                     company: '',
// //                     projectType: 'Full-Stack Web App',
// //                     timeline: '2 - 4 Weeks',
// //                     budget: '₹3,00,000 - ₹8,00,000',
// //                     details: '',
// //                   });
// //                 }}
// //                 className="inline-flex items-center gap-2 text-xs font-bold bg-white/60 hover:bg-white/80 text-neutral-900 px-5 py-2.5 rounded-full transition-all border border-white/60 shadow-sm backdrop-blur-md active:scale-95 cursor-pointer"
// //               >
// //                 Submit Another Project Brief
// //               </button>
// //             </div>
// //           ) : (
// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               {/* Project Type */}
// //               <div>
// //                 <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
// //                   1. What are you building?
// //                 </label>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
// //                   {projectTypes.map((type) => (
// //                     <button
// //                       type="button"
// //                       key={type}
// //                       onClick={() => setFormData({ ...formData, projectType: type })}
// //                       className={`text-left p-3 rounded-xl border text-xs font-medium transition-all backdrop-blur-md cursor-pointer ${
// //                         formData.projectType === type
// //                           ? 'bg-blue-500/20 border-blue-500 text-blue-950 font-bold ring-1 ring-blue-400/40 shadow-sm'
// //                           : 'bg-white/50 border-white/60 text-neutral-900 hover:bg-white/70'
// //                       }`}
// //                     >
// //                       {type}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Timeline & Budget Grid */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {/* Timeline */}
// //                 <div>
// //                   <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
// //                     2. Desired Timeline
// //                   </label>
// //                   <select
// //                     value={formData.timeline}
// //                     onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
// //                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
// //                   >
// //                     {timelines.map((t) => (
// //                       <option key={t} value={t} className="bg-white text-neutral-900">
// //                         {t}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 {/* Budget */}
// //                 <div>
// //                   <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
// //                     3. Target Budget
// //                   </label>
// //                   <select
// //                     value={formData.budget}
// //                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
// //                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
// //                   >
// //                     {budgets.map((b) => (
// //                       <option key={b} value={b} className="bg-white text-neutral-900">
// //                         {b}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Contact Info */}
// //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// //                 <div>
// //                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
// //                     Your Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     required
// //                     placeholder="Jane Doe"
// //                     value={formData.name}
// //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
// //                     Work Email *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     required
// //                     placeholder="jane@company.com"
// //                     value={formData.email}
// //                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
// //                     Company / Organization
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Acme Labs"
// //                     value={formData.company}
// //                     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
// //                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Project Brief */}
// //               <div>
// //                 <label className="block text-xs font-bold text-neutral-950 mb-1.5">
// //                   Project Overview & Key Requirements
// //                 </label>
// //                 <textarea
// //                   rows={3}
// //                   placeholder="Describe what you want to build, existing systems, or key success metrics..."
// //                   value={formData.details}
// //                   onChange={(e) => setFormData({ ...formData, details: e.target.value })}
// //                   className="w-full bg-white/60 border border-white/60 rounded-xl p-3 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
// //                 ></textarea>
// //               </div>

// //               {/* Submit */}
// //               <button
// //                 type="submit"
// //                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
// //               >
// //                 <span>Send Project Request</span>
// //                 <Send className="w-4 h-4" />
// //               </button>
// //             </form>
// //           )}
// //         </motion.div>

// //         {/* Sidebar Direct Info */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: '-30px' }}
// //           transition={{ duration: 0.45, delay: 0.1 }}
// //           className="lg:col-span-4 space-y-4"
// //         >
// //           <div className="rounded-2xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
// //             <h3 className="text-sm font-bold text-neutral-950 mb-3">Direct Channels</h3>
            
// //             <div className="space-y-3.5 text-xs">
// //               <div className="flex items-start gap-2.5">
// //                 <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
// //                 <div>
// //                   <div className="text-neutral-700 font-medium">General Inquiries</div>
// //                   <a
// //                     href="mailto:contact@quetax.com"
// //                     className="text-neutral-950 hover:text-blue-600 font-mono font-bold transition-colors"
// //                   >
// //                     contact@quetax.com
// //                   </a>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-2.5">
// //                 <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
// //                 <div>
// //                   <div className="text-neutral-700 font-medium">Response Guarantee</div>
// //                   <div className="text-neutral-950 font-bold">&lt; 2 hours during business days</div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-2.5">
// //                 <Shield className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
// //                 <div>
// //                   <div className="text-neutral-700 font-medium">Confidentiality</div>
// //                   <div className="text-neutral-950 font-bold">Standard mutual NDA on request</div>
// //                 </div>
// //               </div>

// //               <div className="pt-2 border-t border-white/40 flex items-start gap-2.5">
// //                 <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
// //                 <div>
// //                   <div className="text-neutral-700 font-medium">Office Location</div>
// //                   <div className="text-neutral-950 font-semibold leading-relaxed mt-0.5">
// //                     No.3, 1st Floor, Tidel Neo,<br />
// //                     Thiruchitrambalam-Koot Road, Vanur,<br />
// //                     Villupuram, Tamil Nadu 605111
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Location Card */}
// //           <div className="rounded-2xl overflow-hidden border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
// //             {/* Campus Photo Display */}
// //             <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
// //               <img
// //                 src={campusPhotos[activePhotoIdx].src}
// //                 alt={`${campusPhotos[activePhotoIdx].label} - QuetaX Development Center`}
// //                 className="w-full h-full object-cover transition-all duration-300"
// //                 referrerPolicy="no-referrer"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              
// //               <div className="absolute top-2.5 right-2.5">
// //                 <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-md border border-white/20">
// //                   {campusPhotos[activePhotoIdx].tag}
// //                 </span>
// //               </div>

// //               <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
// //                 <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[10px] tracking-wide uppercase font-bold text-white border border-white/20">
// //                   Tidel Neo IT Park
// //                 </span>
// //                 <span className="text-[10px] text-white/90 font-medium drop-shadow-sm">Villupuram, TN</span>
// //               </div>
// //             </div>

// //             {/* Thumbnail Selectors */}
// //             <div className="px-5 pt-3 pb-1 flex items-center gap-2">
// //               {campusPhotos.map((photo, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setActivePhotoIdx(idx)}
// //                   className={`flex-1 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
// //                     activePhotoIdx === idx
// //                       ? 'border-blue-600 ring-1 ring-blue-500 scale-[1.02] shadow-sm'
// //                       : 'border-white/60 opacity-70 hover:opacity-100'
// //                   }`}
// //                   title={photo.label}
// //                   aria-label={`View ${photo.label}`}
// //                 >
// //                   <img
// //                     src={photo.src}
// //                     alt={photo.label}
// //                     className="w-full h-full object-cover"
// //                     referrerPolicy="no-referrer"
// //                   />
// //                 </button>
// //               ))}
// //             </div>

// //             <div className="p-5 pt-3">
// //               <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
// //                 <Building className="w-4 h-4 text-blue-700" />
// //                 <span>Development Center</span>
// //               </div>
// //               <div className="text-xs text-neutral-900 font-medium leading-relaxed mb-3">
// //                 Operating out of Tidel Neo IT Park, supporting rapid prototyping, client consultations, and dedicated tech sprints.
// //               </div>
// //               <a
// //                 href="https://maps.google.com/?q=Tidel+Neo+Thiruchitrambalam+Koot+Road+Vanur+Villupuram+Tamil+Nadu+605111"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline"
// //               >
// //                 <span>Open in Google Maps</span>
// //                 <ExternalLink className="w-3 h-3" />
// //               </a>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContactPage;


// import React, { useState } from 'react';
// import { motion } from 'motion/react';
// import { Send, CheckCircle2, MessageSquare, Mail, Calendar, Sparkles, Shield, Clock, MapPin, Building, ExternalLink, Image as ImageIcon, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
// import tidelNeoMonument from '../assets/images/tidel_neo_villupuram_building_1787141840069.jpg';
// import tidelNeoDay from '../assets/images/tidel_neo_day_entrance_1787141870934.jpg';
// import tidelNeoCampus from '../assets/images/tidel_neo_campus_1787141621669.jpg';

// function WhatsAppIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//       <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.836.487 3.618 1.412 5.19L2.05 22l4.94-1.334A9.933 9.933 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12 2zm0 18.03a8.006 8.006 0 01-4.09-1.117l-.293-.174-3.05.823.815-2.977-.19-.306A7.997 7.997 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.001-8 8.03z" />
//     </svg>
//   );
// }

// interface ContactPageProps {
//   onNavigate: (page: string) => void;
// }

// export function ContactPage({ onNavigate }: ContactPageProps) {
//   const [activePhotoIdx, setActivePhotoIdx] = useState(0);
//   const campusPhotos = [
//     { src: tidelNeoMonument, label: 'Tidel Neo Monument & Campus', tag: 'Main Entrance' },
//     { src: tidelNeoDay, label: 'Daytime Entrance Facade', tag: 'Building Wing' },
//     { src: tidelNeoCampus, label: 'Campus Architecture & Driveway', tag: 'Tech Hub' },
//   ];

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     projectType: 'Full-Stack Web App',
//     timeline: '2 - 4 Weeks',
//     budget: '₹3,00,000 - ₹8,00,000',
//     details: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const projectTypes = [
//     'Full-Stack Web App',
//     'Mobile Application (iOS/Android)',
//     'Custom Software & Cloud Engine',
//     'AI & Agentic Workflow',
//     'Full MVP Fast-Track',
//   ];

//   const timelines = ['Urgent (< 2 weeks)', '2 - 4 Weeks', '1 - 2 Months', 'Flexible / Ongoing'];
//   const budgets = [
//     '₹1,00,000 - ₹3,00,000',
//     '₹3,00,000 - ₹8,00,000',
//     '₹8,00,000 - ₹20,00,000',
//     '₹20,00,000+',
//   ];

//   const socialLinks = [
//     { label: 'WhatsApp', href: 'https://wa.me/916369078235', icon: WhatsAppIcon, color: 'text-green-600' },
//     { label: 'Instagram', href: 'https://www.instagram.com/_queta.x/', icon: Instagram, color: 'text-pink-600' },
//     { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593432374022', icon: Facebook, color: 'text-blue-600' },
//     { label: 'X (Twitter)', href: 'https://x.com/queta_x', icon: Twitter, color: 'text-neutral-900' },
//     { label: 'YouTube', href: 'https://www.youtube.com/@queta_x', icon: Youtube, color: 'text-red-600' },
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email) return;
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: '-40px' }}
//         transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//         className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
//       >
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
//           <Sparkles className="w-3.5 h-3.5 text-blue-700" />
//           <span>START A PROJECT</span>
//         </div>

//         <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
//           Let's Build Something Exceptional
//         </h1>
//         <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium">
//           Tell us about your product goals, timeline, and requirements. We review every brief within 2 hours and provide an initial architectural scope and estimate.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
//         {/* Form Column */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-30px' }}
//           transition={{ duration: 0.45 }}
//           className="lg:col-span-8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
//         >
//           {isSubmitted ? (
//             <div className="py-12 px-4 text-center">
//               <div className="w-14 h-14 bg-emerald-500/20 text-emerald-800 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
//                 <CheckCircle2 className="w-8 h-8 text-emerald-700" />
//               </div>
//               <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
//                 Project Brief Received!
//               </h2>
//               <p className="text-xs sm:text-sm text-neutral-900 max-w-md mx-auto mb-6 leading-relaxed font-medium">
//                 Thank you, <strong className="text-neutral-950 font-bold">{formData.name}</strong>. Our lead systems architect is reviewing your submission for <strong className="text-neutral-950 font-bold">{formData.company || 'your project'}</strong> and will respond to <strong className="text-neutral-950 font-bold">{formData.email}</strong> within 2 hours.
//               </p>
//               <button
//                 onClick={() => {
//                   setIsSubmitted(false);
//                   setFormData({
//                     name: '',
//                     email: '',
//                     company: '',
//                     projectType: 'Full-Stack Web App',
//                     timeline: '2 - 4 Weeks',
//                     budget: '₹3,00,000 - ₹8,00,000',
//                     details: '',
//                   });
//                 }}
//                 className="inline-flex items-center gap-2 text-xs font-bold bg-white/60 hover:bg-white/80 text-neutral-900 px-5 py-2.5 rounded-full transition-all border border-white/60 shadow-sm backdrop-blur-md active:scale-95 cursor-pointer"
//               >
//                 Submit Another Project Brief
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Project Type */}
//               <div>
//                 <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
//                   1. What are you building?
//                 </label>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {projectTypes.map((type) => (
//                     <button
//                       type="button"
//                       key={type}
//                       onClick={() => setFormData({ ...formData, projectType: type })}
//                       className={`text-left p-3 rounded-xl border text-xs font-medium transition-all backdrop-blur-md cursor-pointer ${
//                         formData.projectType === type
//                           ? 'bg-blue-500/20 border-blue-500 text-blue-950 font-bold ring-1 ring-blue-400/40 shadow-sm'
//                           : 'bg-white/50 border-white/60 text-neutral-900 hover:bg-white/70'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Timeline & Budget Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* Timeline */}
//                 <div>
//                   <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
//                     2. Desired Timeline
//                   </label>
//                   <select
//                     value={formData.timeline}
//                     onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
//                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
//                   >
//                     {timelines.map((t) => (
//                       <option key={t} value={t} className="bg-white text-neutral-900">
//                         {t}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Budget */}
//                 <div>
//                   <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
//                     3. Target Budget
//                   </label>
//                   <select
//                     value={formData.budget}
//                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
//                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
//                   >
//                     {budgets.map((b) => (
//                       <option key={b} value={b} className="bg-white text-neutral-900">
//                         {b}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Contact Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 <div>
//                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="Jane Doe"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
//                     Work Email *
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     placeholder="jane@company.com"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold text-neutral-950 mb-1.5">
//                     Company / Organization
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Acme Labs"
//                     value={formData.company}
//                     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                     className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
//                   />
//                 </div>
//               </div>

//               {/* Project Brief */}
//               <div>
//                 <label className="block text-xs font-bold text-neutral-950 mb-1.5">
//                   Project Overview & Key Requirements
//                 </label>
//                 <textarea
//                   rows={3}
//                   placeholder="Describe what you want to build, existing systems, or key success metrics..."
//                   value={formData.details}
//                   onChange={(e) => setFormData({ ...formData, details: e.target.value })}
//                   className="w-full bg-white/60 border border-white/60 rounded-xl p-3 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
//                 ></textarea>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
//               >
//                 <span>Send Project Request</span>
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           )}
//         </motion.div>

//         {/* Sidebar Direct Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-30px' }}
//           transition={{ duration: 0.45, delay: 0.1 }}
//           className="lg:col-span-4 space-y-4"
//         >
//           <div className="rounded-2xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
//             <h3 className="text-sm font-bold text-neutral-950 mb-3">Direct Channels</h3>

//             <div className="space-y-3.5 text-xs">
//               <div className="flex items-start gap-2.5">
//                 <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
//                 <div>
//                   <div className="text-neutral-700 font-medium">General Inquiries</div>
//                   <a href="mailto:contact@quetax.com" className="text-neutral-950 hover:text-blue-600 font-mono font-bold transition-colors">
//                     contact@quetax.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
//                 <div>
//                   <div className="text-neutral-700 font-medium">Response Guarantee</div>
//                   <div className="text-neutral-950 font-bold">&lt; 2 hours during business days</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Shield className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
//                 <div>
//                   <div className="text-neutral-700 font-medium">Confidentiality</div>
//                   <div className="text-neutral-950 font-bold">Standard mutual NDA on request</div>
//                 </div>
//               </div>

//               <div className="pt-2 border-t border-white/40 flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
//                 <div>
//                   <div className="text-neutral-700 font-medium">Office Location</div>
//                   <div className="text-neutral-950 font-semibold leading-relaxed mt-0.5">
//                     No.3, 1st Floor, Tidel Neo,<br />
//                     Thiruchitrambalam-Koot Road, Vanur,<br />
//                     Villupuram, Tamil Nadu 605111
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-2xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
//             <h3 className="text-sm font-bold text-neutral-950 mb-3">Follow Us</h3>
//             <div className="grid grid-cols-2 gap-2.5">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;
//                 return (
//                   <a href={social.href} key={social.label} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/50 hover:bg-white/80 border border-white/60 transition-all text-xs font-semibold text-neutral-900 backdrop-blur-md active:scale-95">
//                     <Icon className={`w-4 h-4 ${social.color} shrink-0`} />
//                     <span>{social.label}</span>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="rounded-2xl overflow-hidden border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
//             <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
//               <img
//                 src={campusPhotos[activePhotoIdx].src}
//                 alt={`${campusPhotos[activePhotoIdx].label} - QuetaX Development Center`}
//                 className="w-full h-full object-cover transition-all duration-300"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

//               <div className="absolute top-2.5 right-2.5">
//                 <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-md border border-white/20">
//                   {campusPhotos[activePhotoIdx].tag}
//                 </span>
//               </div>

//               <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
//                 <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[10px] tracking-wide uppercase font-bold text-white border border-white/20">
//                   Tidel Neo IT Park
//                 </span>
//                 <span className="text-[10px] text-white/90 font-medium drop-shadow-sm">Villupuram, TN</span>
//               </div>
//             </div>

//             <div className="px-5 pt-3 pb-1 flex items-center gap-2">
//               {campusPhotos.map((photo, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActivePhotoIdx(idx)}
//                   className={`flex-1 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
//                     activePhotoIdx === idx
//                       ? 'border-blue-600 ring-1 ring-blue-500 scale-[1.02] shadow-sm'
//                       : 'border-white/60 opacity-70 hover:opacity-100'
//                   }`}
//                   title={photo.label}
//                   aria-label={`View ${photo.label}`}
//                 >
//                   <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//                 </button>
//               ))}
//             </div>

//             <div className="p-5 pt-3">
//               <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
//                 <Building className="w-4 h-4 text-blue-700" />
//                 <span>Development Center</span>
//               </div>
//               <div className="text-xs text-neutral-900 font-medium leading-relaxed mb-3">
//                 Operating out of Tidel Neo IT Park, supporting rapid prototyping, client consultations, and dedicated tech sprints.
//               </div>
//               <a href="https://maps.google.com/?q=Tidel+Neo+Thiruchitrambalam+Koot+Road+Vanur+Villupuram+Tamil+Nadu+605111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline">
//                 <span>Open in Google Maps</span>
//                 <ExternalLink className="w-3 h-3" />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default ContactPage;

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Mail, Calendar, Sparkles, Shield, Clock, MapPin, Building, ExternalLink, Image as ImageIcon, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import tidelNeoMonument from '../assets/images/tidel_neo_villupuram_building_1787141840069.jpg';
import tidelNeoDay from '../assets/images/tidel_neo_day_entrance_1787141870934.jpg';
import tidelNeoCampus from '../assets/images/tidel_neo_campus_1787141621669.jpg';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.836.487 3.618 1.412 5.19L2.05 22l4.94-1.334A9.933 9.933 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12 2zm0 18.03a8.006 8.006 0 01-4.09-1.117l-.293-.174-3.05.823.815-2.977-.19-.306A7.997 7.997 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.001-8 8.03z" />
    </svg>
  );
}

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const campusPhotos = [
    { src: tidelNeoMonument, label: 'Tidel Neo Monument & Campus', tag: 'Main Entrance' },
    { src: tidelNeoDay, label: 'Daytime Entrance Facade', tag: 'Building Wing' },
    { src: tidelNeoCampus, label: 'Campus Architecture & Driveway', tag: 'Tech Hub' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Stack Web App',
    timeline: '2 - 4 Weeks',
    budget: '₹3,00,000 - ₹8,00,000',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Full-Stack Web App',
    'Mobile Application (iOS/Android)',
    'Custom Software & Cloud Engine',
    'AI & Agentic Workflow',
    'Full MVP Fast-Track',
  ];

  const timelines = ['Urgent (< 2 weeks)', '2 - 4 Weeks', '1 - 2 Months', 'Flexible / Ongoing'];
  const budgets = [
    '₹1,00,000 - ₹3,00,000',
    '₹3,00,000 - ₹8,00,000',
    '₹8,00,000 - ₹20,00,000',
    '₹20,00,000+',
  ];

  const socialLinks = [
    { label: 'WhatsApp', href: 'https://wa.me/916369078235', icon: WhatsAppIcon, color: 'text-green-600' },
    { label: 'Instagram', href: 'https://www.instagram.com/_queta.x/', icon: Instagram, color: 'text-pink-600' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593432374022', icon: Facebook, color: 'text-blue-600' },
    { label: 'X (Twitter)', href: 'https://x.com/queta_x', icon: Twitter, color: 'text-neutral-900' },
    { label: 'YouTube', href: 'https://www.youtube.com/@queta_x', icon: Youtube, color: 'text-red-600' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const message = `*New Project Enquiry from QuetaX Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Company:* ${formData.company || 'N/A'}
*Project Type:* ${formData.projectType}
*Timeline:* ${formData.timeline}
*Budget:* ${formData.budget}
*Details:* ${formData.details || 'N/A'}`;

    const whatsappUrl = `https://wa.me/916369078235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
          <span>START A PROJECT</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
          Let's Build Something Exceptional
        </h1>
        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium">
          Tell us about your product goals, timeline, and requirements. We review every brief within 2 hours and provide an initial architectural scope and estimate.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
        >
          {isSubmitted ? (
            <div className="py-12 px-4 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-800 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                Redirecting to WhatsApp!
              </h2>
              <p className="text-xs sm:text-sm text-neutral-900 max-w-md mx-auto mb-6 leading-relaxed font-medium">
                Thank you, <strong className="text-neutral-950 font-bold">{formData.name}</strong>. A WhatsApp chat has opened in a new tab with your project details for <strong className="text-neutral-950 font-bold">{formData.company || 'your project'}</strong> pre-filled — just hit send to reach our team.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    projectType: 'Full-Stack Web App',
                    timeline: '2 - 4 Weeks',
                    budget: '₹3,00,000 - ₹8,00,000',
                    details: '',
                  });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold bg-white/60 hover:bg-white/80 text-neutral-900 px-5 py-2.5 rounded-full transition-all border border-white/60 shadow-sm backdrop-blur-md active:scale-95 cursor-pointer"
              >
                Submit Another Project Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
                  1. What are you building?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all backdrop-blur-md cursor-pointer ${
                        formData.projectType === type
                          ? 'bg-blue-500/20 border-blue-500 text-blue-950 font-bold ring-1 ring-blue-400/40 shadow-sm'
                          : 'bg-white/50 border-white/60 text-neutral-900 hover:bg-white/70'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline & Budget Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Timeline */}
                <div>
                  <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
                    2. Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t} className="bg-white text-neutral-900">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2">
                    3. Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium cursor-pointer"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-white text-neutral-900">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-950 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-950 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-950 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/60 border border-white/60 rounded-xl px-3.5 py-2 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-bold text-neutral-950 mb-1.5">
                  Project Overview & Key Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what you want to build, existing systems, or key success metrics..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-white/60 border border-white/60 rounded-xl p-3 text-xs text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md font-medium"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Send Project Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Sidebar Direct Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="rounded-2xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
            <h3 className="text-sm font-bold text-neutral-950 mb-3">Direct Channels</h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-700 font-medium">General Inquiries</div>
                  <a href="mailto:contact@quetax.com" className="text-neutral-950 hover:text-blue-600 font-mono font-bold transition-colors">
                    contact@quetax.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-700 font-medium">Response Guarantee</div>
                  <div className="text-neutral-950 font-bold">&lt; 2 hours during business days</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-700 font-medium">Confidentiality</div>
                  <div className="text-neutral-950 font-bold">Standard mutual NDA on request</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/40 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-700 font-medium">Office Location</div>
                  <div className="text-neutral-950 font-semibold leading-relaxed mt-0.5">
                    No.3, 1st Floor, Tidel Neo,<br />
                    Thiruchitrambalam-Koot Road, Vanur,<br />
                    Villupuram, Tamil Nadu 605111
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
            <h3 className="text-sm font-bold text-neutral-950 mb-3">Follow Us</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a href={social.href} key={social.label} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/50 hover:bg-white/80 border border-white/60 transition-all text-xs font-semibold text-neutral-900 backdrop-blur-md active:scale-95">
                    <Icon className={`w-4 h-4 ${social.color} shrink-0`} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950">
            <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
              <img
                src={campusPhotos[activePhotoIdx].src}
                alt={`${campusPhotos[activePhotoIdx].label} - QuetaX Development Center`}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute top-2.5 right-2.5">
                <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-md border border-white/20">
                  {campusPhotos[activePhotoIdx].tag}
                </span>
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[10px] tracking-wide uppercase font-bold text-white border border-white/20">
                  Tidel Neo IT Park
                </span>
                <span className="text-[10px] text-white/90 font-medium drop-shadow-sm">Villupuram, TN</span>
              </div>
            </div>

            <div className="px-5 pt-3 pb-1 flex items-center gap-2">
              {campusPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`flex-1 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-blue-600 ring-1 ring-blue-500 scale-[1.02] shadow-sm'
                      : 'border-white/60 opacity-70 hover:opacity-100'
                  }`}
                  title={photo.label}
                  aria-label={`View ${photo.label}`}
                >
                  <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            <div className="p-5 pt-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4 text-blue-700" />
                <span>Development Center</span>
              </div>
              <div className="text-xs text-neutral-900 font-medium leading-relaxed mb-3">
                Operating out of Tidel Neo IT Park, supporting rapid prototyping, client consultations, and dedicated tech sprints.
              </div>
              <a href="https://maps.google.com/?q=Tidel+Neo+Thiruchitrambalam+Koot+Road+Vanur+Villupuram+Tamil+Nadu+605111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline">
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;