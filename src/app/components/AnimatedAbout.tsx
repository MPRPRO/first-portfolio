import { motion } from 'motion/react';
import { Code2, Palette, Zap, Trophy, Heart, Rocket } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js & Express', level: 88 },
  { name: 'UI/UX Design', level: 92 },
  { name: 'Three.js & WebGL', level: 85 },
  { name: 'Cloud & DevOps', level: 80 },
];

const stats = [
  { icon: Trophy, label: 'Projets réalisés', value: '150+' },
  { icon: Heart, label: 'Clients satisfaits', value: '80+' },
  { icon: Rocket, label: "Années d'expérience", value: '8+' },
  { icon: Code2, label: 'Lignes de code', value: '500K+' },
];

export function AnimatedAbout() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionné par la création d'expériences numériques innovantes, je combine 
            design créatif et développement technique pour donner vie à des projets exceptionnels.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills & Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Mon expertise</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Depuis plus de 8 ans, je crée des applications web modernes et performantes. 
                  Mon approche combine esthétique soignée, code propre et architecture scalable.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Je suis spécialisé dans le développement d'interfaces utilisateur complexes 
                  avec React, l'animation web, et l'optimisation des performances. J'accorde 
                  une attention particulière aux détails et à l'expérience utilisateur.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'AWS', 'Figma'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-cyan-400 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Compétences techniques</h3>
            </div>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
