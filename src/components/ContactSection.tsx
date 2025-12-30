import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, MapPin, Clock, Award } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [4600, 5400], [30, -30]);
  const rotate = useTransform(scrollY, [4600, 5400], [0, 360]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const contentInView = useInView(contentRef, { once: true, margin: "-20%" });

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99003-3151",
      description: "Resposta mais rápida",
      color: "from-green-500 to-green-600",
      action: () => window.open('https://wa.me/5511990033151', '_blank')
    }
  ];

  const workingInfo = [
    {
      icon: MapPin,
      title: "Região de Atendimento",
      info: "São Paulo e Grande São Paulo",
      description: "Também atendemos interior e outras cidades"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sábado",
      description: "Das 9h às 18h"
    },
    {
      icon: Award,
      title: "Garantia",
      info: "100% de Satisfação",
      description: "Qualidade garantida"
    }
  ];

  return (
    <footer ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        style={{ y: useTransform(scrollY, [4600, 5400], [-20, 20]) }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        

        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-1 gap-8 mb-16 max-w-md mx-auto"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: 45 }}
                animate={contentInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={contact.action}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 text-center relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl text-white mb-2">{contact.title}</h3>
                    <p className="text-green-400 mb-2">{contact.info}</p>
                    <p className="text-gray-400 text-sm">{contact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Working Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {workingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + (index * 0.1) }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-6 h-6 text-green-400" />
                </motion.div>
                <h4 className="text-white mb-2">{info.title}</h4>
                <p className="text-green-400 text-sm mb-1">{info.info}</p>
                <p className="text-gray-400 text-xs">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl max-w-2xl mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl mb-4"
              >
                🎵
              </motion.div>
              <h3 className="text-2xl text-white mb-4">
                Sua festa merece a trilha sonora perfeita
              </h3>
              <p className="text-gray-300 mb-6">
                Fale comigo agora e vamos criar juntos momentos inesquecíveis através da música.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5511990033151', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-3 mx-auto cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar Agora no WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border-t border-white/10 pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>© 2025 Renan Camargo. Todos os direitos reservados.</p>
              <div className="flex items-center gap-6">
                <span>25 anos de experiência</span>
                <span>•</span>
                <span>2.500+ eventos</span>
                <span>•</span>
                <span>100% satisfação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}