import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, Music, Headphones, Star } from 'lucide-react';
import { Button } from './ui/button';
import heroDesktop from 'figma:asset/cd72fa17f47894f3f0635a1fc39c97ed942ed34a.png';
import heroMobile from 'figma:asset/32fc82867497ed460b04f10c8b89a1ecd3889961.png';

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -150]);
  const backgroundY = useTransform(scrollY, [0, 800], [0, 400]);
  const fadeOut = useTransform(scrollY, [0, 400], [1, 0]);
  
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Music, delay: 0, x: 20, y: 20 },
    { icon: Headphones, delay: 0.5, x: 80, y: 30 },
    { icon: Star, delay: 1, x: 15, y: 70 },
    { icon: Music, delay: 1.5, x: 85, y: 80 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Desktop Background */}
        <div className="absolute inset-0 hidden md:block">
          <img 
            src={heroDesktop} 
            alt="Renan Camargo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </div>
        
        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden">
          <img 
            src={heroMobile} 
            alt="Renan Camargo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </div>
        
        {/* Dynamic Light Effects */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            left: `${mousePosition.x - 48}%`,
            top: `${mousePosition.y - 48}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Musical Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden md:block"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            rotate: [0, 360, 720],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          <element.icon className="w-6 h-6 text-green-400" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ opacity: fadeOut }}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        {/* Top Badge - 25 anos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-lg">25 anos de experiência</span>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex gap-6"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-green-400 mb-1">2.500+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Eventos</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-green-400 mb-1">25</div>
            <div className="text-gray-300 text-xs sm:text-sm">Anos</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-green-400 mb-1">100%</div>
            <div className="text-gray-300 text-xs sm:text-sm">Satisfação</div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          ref={titleRef}
          style={{ y: titleY }}
          className="mb-8 text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white mb-6"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              A trilha sonora
            </span>
            <motion.span 
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.0 }}
            >
              do seu evento
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
          >
            Transformo momentos especiais em experiências inesquecíveis através da música
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white border-0 px-10 py-5 text-lg sm:text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 cursor-pointer"
            onClick={() => window.open('https://wa.me/5511990033151', '_blank')}
          >
            Contratar Agora
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}