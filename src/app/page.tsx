'use client'

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useState, useMemo } from 'react'
import ImageModal from '@/components/ImageModal'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import emailjs from '@emailjs/browser'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ContactForm from '@/components/ContactForm'
import CountUp from '@/components/CountUp'
import { HeroHighlight, Highlight } from "@/components/HeroHighlight"
import Link from 'next/link'

const testImages = [
  {
    src: "https://i.ibb.co/gbSFFbDM/ivan-marketing-tajne.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/Px28WgQ/thumbnail01.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/1vRJQtp/prvi-thumbnail.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/whBHX785/fakulteti.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/bF2m0Nv/popij-ili-odgovori.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/PvGtbFY1/Artboard-1.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/fdx0brJj/REACTION.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/XxCDghb2/unlock.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/ytqdRRC/plavi-evergreen.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/V09TQf6Z/3-vjezbe.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/gt4VdRm/0b1d7e215597007-676f408d53882.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/MRg446x/b6626d215597007-676f408e42ec5.jpg",
    alt: "",
    category: "Thumbnails"
  },
  {
    src: "https://i.ibb.co/3y6mh6fH/wallpaper.jpg",
    alt: "",
    category: "Banners"
  },
  {
    src: "https://i.ibb.co/XrnLM6Nv/banner-2.jpg",
    alt: "",
    category: "Banners"
  },
  {
    src: "https://i.ibb.co/PtPRG7c/laivda.jpg",
    alt: "",
    category: "Banners"
  },
  {
    src: "https://i.ibb.co/bg7LcZgr/banner.jpg",
    alt: "",
    category: "Banners"
  },
  {
    src: "https://i.ibb.co/PgmxSzt/bannerrr.jpg",
    alt: "",
    category: "Banners"
  },
  {
    src: "https://i.ibb.co/HcqV13Z/banner.jpg",
    alt: "",
    category: "Banners"
  }
]

const categories = ['All', 'Thumbnails', 'Banners']

const stats = [
  {
    value: "5+",
    label: "Years Experience"
  },
  {
    value: "500+",
    label: "Happy Clients"
  },
  {
    value: "1500+",
    label: "Projects Done"
  }
]

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = useMemo(() => {
    return activeCategory === 'All' 
      ? testImages 
      : testImages.filter(image => image.category === activeCategory)
  }, [activeCategory])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Light Effects */}
        <div className="absolute inset-0">
          {/* Main spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[100px] opacity-50" />
          
          {/* Additional light sources */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] opacity-30" />
          
          {/* Animated floating orbs */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-24 h-24 bg-violet-400/30 rounded-full blur-[50px]"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-violet-600/20 rounded-full blur-[60px]"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <span className="text-sm font-medium text-violet-400 tracking-wider uppercase bg-violet-500/10 px-4 py-2 rounded-full backdrop-blur-sm">
                Welcome to Ghost Force Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative"
            >
              {/* Title light effect */}
              <div className="absolute -inset-x-20 -inset-y-8 bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 blur-2xl opacity-50" />
              
              <span className="relative">
                Elevate Your Brand with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Professional Design</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
            >
              We create stunning visuals that capture attention and drive engagement. From thumbnails to brand identity, we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <Link href="/mentorship">
                  <button
                    className="group relative px-8 py-4 rounded-xl overflow-hidden bg-violet-600 text-white font-medium"
                  >
                    <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 bg-[length:200%_100%] group-hover:bg-[position:100%_0]" />
                    <div className="relative flex items-center gap-2">
                      View Mentorship Plans
                      <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></i>
                    </div>
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <button
                  onClick={() => {
                    const footer = document.getElementById('footer')
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  type="button"
                  className="group relative px-8 py-4 rounded-xl overflow-hidden border border-white/10 font-medium cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-white/0 via-white/5 to-white/0 bg-[length:200%_100%] group-hover:bg-[position:100%_0]" />
                  <div className="relative text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                    Contact Us
                    <i className="fa-solid fa-paper-plane text-white/60 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"></i>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="text-xl text-purple-400 font-medium tracking-wide uppercase mb-4"
            >
              Showcase
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="text-7xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white relative"
            >
              Latest Projects
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              />
            </motion.h1>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { name: 'All', icon: 'fa-border-all' },
              { name: 'Thumbnails', icon: 'fa-image' },
              { name: 'Banners', icon: 'fa-panorama' }
            ].map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'text-white bg-gradient-to-r from-violet-600/20 via-violet-500/20 to-violet-600/20 border border-violet-500/50 shadow-[inset_0_0_20px_rgba(139,92,246,0.1)] animate-shimmer'
                    : 'text-white/70 hover:text-white border border-transparent hover:border-violet-500/20 hover:bg-violet-500/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className={`fa-solid ${category.icon} ${
                  activeCategory === category.name 
                    ? 'text-violet-400' 
                    : 'text-white/50 group-hover:text-violet-400'
                } transition-colors`} />
                <span>{category.name}</span>
                {activeCategory === category.name && (
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/10 via-violet-500/10 to-violet-600/10 rounded-xl opacity-50 blur-sm" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111] border border-white/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mentorship Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <span className="text-violet-400 font-medium tracking-wide uppercase">
                  Join Our Community
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Level Up Your Design Skills with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                    Expert Mentorship
                  </span>
                </h2>
                <p className="text-lg text-white/60 max-w-xl">
                  Get personalized guidance, real-world projects, and insider tips from industry experts. 
                  Transform your creative journey with our comprehensive mentorship program.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/mentorship">
                  <button className="group relative px-8 py-4 rounded-xl overflow-hidden bg-violet-600 text-white font-medium">
                    <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 bg-[length:200%_100%] group-hover:bg-[position:100%_0] animate-shimmer" />
                    <div className="relative flex items-center gap-2">
                      Explore Mentorship Plans
                      <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </button>
                </Link>
                <button 
                  onClick={() => {
                    const footer = document.getElementById('footer')
                    footer?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden border border-violet-500/20 font-medium hover:bg-violet-500/10 transition-colors"
                >
                  <span className="relative text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                    Contact for Details
                    <i className="fa-solid fa-paper-plane group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <i className="fa-solid fa-graduation-cap text-2xl text-violet-400 mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                    <p className="text-white/60">Custom-tailored guidance for your unique creative journey</p>
                  </div>
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <i className="fa-solid fa-users text-2xl text-violet-400 mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Community Access</h3>
                    <p className="text-white/60">Join a network of passionate designers and creators</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <i className="fa-solid fa-laptop-code text-2xl text-violet-400 mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
                    <p className="text-white/60">Work on actual client projects with expert guidance</p>
                  </div>
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <i className="fa-solid fa-certificate text-2xl text-violet-400 mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Certification</h3>
                    <p className="text-white/60">Earn recognition for your accomplished skills</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <ImageModal
        src={selectedImage || ''}
        alt=""
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  )
} 