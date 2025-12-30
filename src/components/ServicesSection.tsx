import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Music, Users, Mic, Guitar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import flashLogo from 'figma:asset/fd004bb83a0e21380fd01711bfb41ff9d6316c0b.png';
import remixLogo from 'figma:asset/cbf7a46c19ed45d89a67d53c612dee4d74fa248a.png';
import renanLogo from 'figma:asset/db59909f81cda3fb0f549e525890ac2102fcca13.png';

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [1400, 2200], [100, -100]);
  const y2 = useTransform(scrollY, [1400, 2200], [-50, 50]);
  const rotate = useTransform(scrollY, [1400, 2200], [0, 360]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-20%" });

  const services = [
    {
      icon: Guitar,
      title: "Voz & Violão",
      subtitle: "Apresentação Solo",
      description: "Repertório intimista e envolvente para ambientes acolhedores. Perfeito para cerimônias, jantares românticos e eventos corporativos que buscam elegância.",
      features: ["Repertório Nacional e Internacional", "Música ao Vivo", "Ambiente Intimista", "Flexibilidade Total"],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      logo: renanLogo
    },
    {
      icon: Users,
      title: "Flash'N Pop",
      subtitle: "Banda Completa",
      description: "Energia total com uma banda completa que domina os maiores sucessos pop, rock e dance music. Ideal para festas, casamentos e eventos que precisam de animação.",
      features: ["Banda Completa", "Pop Rock Nacional", "Dance Music", "Máxima Interação"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      logo: flashLogo
    },
    {
      icon: Mic,
      title: "Banda ReMix",
      subtitle: "Show Espetacular",
      description: "O projeto mais completo, com repertório diversificado e produção profissional. A escolha certa para eventos que buscam excelência e impacto.",
      features: ["Produção Completa", "Repertório Eclético", "Som Profissional", "Performance Premium"],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      logo: remixLogo
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-white mb-6 px-4">
            O que Renan Oferece
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Três projetos únicos para tornar seu evento inesquecível
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              animate={cardsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Icon/Logo */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 relative z-10 flex justify-center"
                >
                  {service.logo ? (
                    <div className="w-52 h-52 rounded-2xl overflow-hidden bg-white/95 border border-white/30 flex items-center justify-center p-4">
                      <ImageWithFallback
                        src={service.logo}
                        alt={`${service.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-52 h-52 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-24 h-24 text-white" />
                    </div>
                  )}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                    <span className="text-green-400 text-sm">{service.subtitle}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-3 text-gray-400 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>


                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl text-white mb-4">
              Não sabe qual escolher?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vamos conversar sobre seu evento e encontrar a opção perfeita para criar a atmosfera que você deseja.
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white border-0 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 cursor-pointer"
              onClick={() => window.open('https://wa.me/5511990033151', '_blank')}
            >
              Falar com Renan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}