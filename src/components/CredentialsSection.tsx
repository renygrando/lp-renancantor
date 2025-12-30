import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle, Star, Heart, Clock, Zap } from 'lucide-react';

export default function CredentialsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [2200, 3000], [50, -50]);
  const y2 = useTransform(scrollY, [2200, 3000], [-30, 30]);
  const scale = useTransform(scrollY, [2200, 3000], [0.9, 1.1]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-20%" });

  const credentials = [
    {
      icon: Star,
      title: "Excelência Reconhecida",
      description: "25 anos de carreira sólida com histórico comprovado de sucesso em eventos de todos os tamanhos e estilos.",
      stats: "2.500+ eventos realizados",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Conexão Genuína",
      description: "Capacidade única de ler o público e criar momentos de conexão real através da música.",
      stats: "100% satisfação dos clientes",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Clock,
      title: "Pontualidade Absoluta",
      description: "Profissionalismo e responsabilidade que garantem que seu evento aconteça exatamente como planejado.",
      stats: "Pontualidade em 100% dos eventos",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Versatilidade Total",
      description: "Repertório eclético e adaptável que se molda perfeitamente ao estilo e energia do seu evento.",
      stats: "Repertório de 1000+ músicas",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Ana Carolina",
      event: "Casamento",
      text: "Renan foi fundamental para tornar nosso casamento perfeito. Ele entendeu exatamente o que queríamos!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      event: "Evento Corporativo",
      text: "Profissionalismo exemplar. A música criou o ambiente perfeito para nossa confraternização.",
      rating: 5
    },
    {
      name: "Marina Santos",
      event: "Festa de 15 Anos",
      text: "Superou todas as expectativas! Os convidados não pararam de elogiar a qualidade do show.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-40 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-gray-900 mb-6 px-4">
            Escolhido por quem busca emoção real
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            A confiança de milhares de clientes construída ao longo de mais de duas décadas
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-20">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${credential.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Check Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={cardsInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}
                  className="absolute top-6 right-6"
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${credential.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <credential.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl text-gray-900 mb-3">{credential.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {credential.description}
                  </p>
                  <div className="text-sm text-green-600 bg-green-50 px-3 py-2 rounded-full inline-block">
                    {credential.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl text-gray-900 text-center mb-12">
            O que dizem sobre Renan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 45 }}
                animate={cardsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <div className="text-gray-900 font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border border-green-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl text-green-600 mb-2">2.500+</div>
                <div className="text-sm text-gray-600">Eventos</div>
              </div>
              <div>
                <div className="text-3xl text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div>
                <div className="text-3xl text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl text-green-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}