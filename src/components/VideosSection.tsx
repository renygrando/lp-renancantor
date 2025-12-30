import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Play, Eye, Star } from 'lucide-react';

export default function VideosSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [3000, 3800], [100, -100]);
  const y2 = useTransform(scrollY, [3000, 3800], [-50, 50]);
  const rotate = useTransform(scrollY, [3000, 3800], [0, 180]);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const gridInView = useInView(gridRef, { once: true, margin: "-20%" });

  const videos = [
    {
      id: "1121982917",
      aspectRatio: "177.78%", // Portrait format - Institucional Renan
      isFeature: true
    },
    {
      id: "1120868398",
      aspectRatio: "177.78%" // Portrait format
    },
    {
      id: "1120868355",
      aspectRatio: "177.78%"
    },
    {
      id: "1120868309",
      aspectRatio: "177.78%"
    },
    {
      id: "1120868244",
      aspectRatio: "177.78%"
    },
    {
      id: "1120867300",
      aspectRatio: "177.78%"
    },
    {
      id: "1120867266",
      aspectRatio: "177.78%"
    },
    {
      id: "1120867188",
      aspectRatio: "177.78%"
    },
    {
      id: "1120867143",
      aspectRatio: "177.78%"
    }
  ];

  const featuredVideo = videos.find(video => video.isFeature);
  const regularVideos = videos.filter(video => !video.isFeature);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
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
            Veja Renan em Ação
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Momentos únicos, música inesquecível. Confira alguns dos nossos melhores shows e apresentações.
          </p>
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 max-w-sm mx-auto"
          >
            <div className="group relative">
              <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/30 overflow-hidden hover:bg-green-500/20 transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </motion.div>
                  </motion.div>

                  <div style={{ padding: featuredVideo.aspectRatio + " 0 0 0", position: "relative" }}>
                    <iframe 
                      src={`https://player.vimeo.com/video/${featuredVideo.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Feature Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -top-3 -right-3 z-20"
              >
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Institucional
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Videos Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {regularVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              animate={gridInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
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
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 relative">
                {/* Video Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={gridInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="absolute top-3 left-3 z-20"
                >
                  <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {String(index + 2).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </motion.div>
                </motion.div>

                <div style={{ padding: video.aspectRatio + " 0 0 0", position: "relative" }}>
                  <iframe 
                    src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl mb-4"
            >
              🎵
            </motion.div>
            <h3 className="text-2xl text-white mb-4">Cada apresentação é única</h3>
            <p className="text-gray-300 leading-relaxed">
              Estes são apenas alguns exemplos dos nossos shows. Cada evento é personalizado 
              para criar a trilha sonora perfeita da sua celebração.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Load Vimeo player script */}
      <script src="https://player.vimeo.com/api/player.js" async />
    </section>
  );
}