import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export default function BiographySection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [800, 1400], [100, -100]);
  const rotate = useTransform(scrollY, [800, 1400], [5, -5]);
  const scale = useTransform(scrollY, [800, 1400], [0.8, 1.1]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const textInView = useInView(textRef, { once: true, margin: "-20%" });

  const milestones = [
    {
      icon: Calendar,
      year: "2001",
      title: "Início da Carreira",
      description: "Primeiros passos no mundo musical"
    },
    {
      icon: Users,
      year: "2010",
      title: "Flash'N Pop",
      description: "Formação da primeira banda profissional"
    },
    {
      icon: Award,
      year: "2015",
      title: "Banda ReMix",
      description: "Criação do projeto que se tornou referência"
    },
    {
      icon: MapPin,
      year: "2024",
      title: "2.500+ Eventos",
      description: "Marca histórica de apresentações"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-50 blur-3xl"
      />
      
      <motion.div
        style={{ y: useTransform(scrollY, [800, 1400], [-50, 50]) }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-30 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-gray-900 mb-6 px-4">
            Uma jornada de 25 anos
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Conheça a trajetória que transformou paixão em profissão
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Timeline */}
          <motion.div
            ref={textRef}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={textInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <milestone.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            ref={imageRef}
            style={{ scale }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-lg"
            >
              <div className="text-4xl mb-6">🎵</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Renan Camargo</strong> iniciou sua carreira musical aos 17 anos, movido pela paixão genuína 
                de levar alegria e emoção através da música. O que começou como um hobby transformou-se 
                numa sólida carreira de mais de duas décadas.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Ao longo dos anos, desenvolveu um repertório eclético e versátil, adaptando-se aos mais 
                diversos estilos e ambientes. Sua capacidade de ler o público e criar a atmosfera perfeita 
                para cada momento fez dele uma referência no segmento.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Com a criação das bandas <strong>Flash'N Pop</strong> e <strong>ReMix</strong>, expandiu suas 
                possibilidades artísticas, oferecendo desde apresentações intimistas até grandes 
                espetáculos. Hoje, com mais de 2.500 eventos realizados, continua a escrever sua 
                história através da música que emociona e conecta pessoas.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
                <div className="text-2xl text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Anos de Carreira</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
                <div className="text-2xl text-green-600 mb-2">2.500+</div>
                <div className="text-sm text-gray-600">Eventos Realizados</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl sm:text-3xl text-gray-800 italic mb-6 px-4">
            "A música tem o poder de transformar momentos ordinários em memórias extraordinárias"
          </blockquote>
          <div className="text-green-600">— Renan Camargo</div>
        </motion.div>
      </div>
    </section>
  );
}