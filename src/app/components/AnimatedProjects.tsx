import { motion } from 'motion/react';
import { ExternalLink, Github, Award, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

const projects = [
  {
    title: 'Plateforme E-Commerce Premium',
    category: 'E-Commerce',
    description: 'Une plateforme e-commerce nouvelle génération avec IA pour recommandations personnalisées, système de paiement multi-devises, et dashboard analytique en temps réel.',
    image: 'https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbmVyfGVufDF8fHx8MTc3MDA0MjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
    views: '15K',
    awards: 3,
  },
  {
    title: 'Application de Design Collaboratif',
    category: 'Design Tool',
    description: 'Outil de design collaboratif en temps réel avec canvas interactif, gestion des versions, commentaires, et intégration Figma/Sketch.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MDAxOTA1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'WebSocket', 'Canvas API', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    views: '28K',
    awards: 5,
  },
  {
    title: 'Dashboard Analytics AI',
    category: 'Data Visualization',
    description: 'Tableau de bord intelligent avec prédictions IA, visualisations 3D interactives, et rapports automatisés pour l\'analyse de données massives.',
    image: 'https://images.unsplash.com/photo-1765408217738-39fac9c0b3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAwNjAxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Three.js', 'D3.js', 'Python', 'TensorFlow'],
    github: '#',
    live: '#',
    views: '42K',
    awards: 8,
  },
  {
    title: 'Réseau Social Créatif',
    category: 'Social Media',
    description: 'Plateforme sociale pour créatifs avec portfolio intégré, messagerie temps réel, marketplace, et système de collaboration sur projets.',
    image: 'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAwNTk2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    github: '#',
    live: '#',
    views: '67K',
    awards: 12,
  },
  {
    title: 'Application Mobile Fitness',
    category: 'Health & Fitness',
    description: 'App de fitness avec plans d\'entraînement personnalisés par IA, suivi nutrition, coach virtuel, et gamification pour motivation.',
    image: 'https://images.unsplash.com/photo-1639493115941-a70fcef4f715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzcwMDAyMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase', 'ML Kit', 'Redux', 'Stripe'],
    github: '#',
    live: '#',
    views: '35K',
    awards: 6,
  },
  {
    title: 'Plateforme d\'Apprentissage Interactive',
    category: 'EdTech',
    description: 'LMS moderne avec cours interactifs, quiz gamifiés, certificats blockchain, et système de mentorat en temps réel.',
    image: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDAyMDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'Nuxt', 'Supabase', 'Web3', 'WebRTC'],
    github: '#',
    live: '#',
    views: '51K',
    awards: 9,
  },
];

export function AnimatedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-cyan-900/10 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projets en vedette
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Une sélection de mes meilleurs travaux qui ont un impact réel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity"
                animate={{
                  opacity: hoveredIndex === index ? 0.75 : 0,
                }}
              />

              <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc="/placeholder.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-400/30">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/50 to-transparent flex items-center justify-center gap-4"
                  >
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Award className="w-4 h-4" />
                      <span>{project.awards} awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Voir tous les projets
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
