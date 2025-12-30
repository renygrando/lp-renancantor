import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function CTASection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [3800, 4600], [50, -50]);
  const scale = useTransform(scrollY, [3800, 4600], [0.9, 1.1]);
  const rotate = useTransform(scrollY, [3800, 4600], [-5, 5]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const contentInView = useInView(contentRef, { once: true, margin: "-20%" });



  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y, scale, rotate }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-40 blur-3xl"
      />
      
      <motion.div
        style={{ y: useTransform(scrollY, [3800, 4600], [-30, 30]) }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        

        {/* Main CTA */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Orçamento Gratuito
              </motion.div>

              <h3 className="text-3xl sm:text-4xl text-white mb-6">
                Vamos falar sobre seu evento?
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato agora e receba um orçamento personalizado. 
                Respondo rapidamente e ajudo você a escolher a melhor opção para seu evento.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white border-0 px-12 py-6 text-xl rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 cursor-pointer"
                  onClick={() => window.open('https://wa.me/5511990033151', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Falar no WhatsApp
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}