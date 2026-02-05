import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    text: "Alexandre est un véritable génie du développement web. Son attention aux détails et sa capacité à transformer nos idées en réalité ont dépassé toutes nos attentes. Notre plateforme n'a jamais été aussi performante !",
    rating: 5,
  },
  {
    name: 'Marc Dubois',
    role: 'Fondateur, DesignHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    text: "Travailler avec Alexandre a été une expérience exceptionnelle. Sa maîtrise technique combinée à son sens du design font de lui un partenaire idéal. Je recommande vivement ses services.",
    rating: 5,
  },
  {
    name: 'Julie Martin',
    role: 'Directrice Marketing, InnovCorp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    text: "Le site web qu'Alexandre a créé pour nous a augmenté nos conversions de 300% ! Son approche stratégique et son expertise technique sont impressionnantes. Un professionnel hors pair.",
    rating: 5,
  },
  {
    name: 'Thomas Bernard',
    role: 'CTO, DataFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    text: "La qualité du code et l'architecture mise en place par Alexandre sont exemplaires. Notre application est maintenant scalable et maintenue facilement. Un développeur d'exception !",
    rating: 5,
  },
];

export function AnimatedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Témoignages clients
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ce que mes clients disent de mon travail
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
            <Quote className="w-16 h-16 text-cyan-400/30 mb-6" />
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
              "{testimonials[activeIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h4>
                <p className="text-slate-400">{testimonials[activeIndex].role}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Selector */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                activeIndex === index
                  ? 'border-cyan-400 ring-4 ring-cyan-400/30'
                  : 'border-slate-600 opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
