'use client'

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import ImageModal from '@/components/ImageModal'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import emailjs from '@emailjs/browser'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ContactForm from '@/components/ContactForm'
import CountUp from '@/components/CountUp'
import { HeroHighlight, Highlight } from "@/components/HeroHighlight"
import Link from 'next/link'

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

const partners = [
  { name: 'Merkur', logo: '/partner/merkur.svg' },
  { name: 'Testorize', logo: '/partner/testorize-logo.svg' },
  { name: 'Venom', logo: '/partner/venom.svg' },
  { name: 'File7', logo: '/partner/file7.svg' },
  { name: 'Partner3', logo: '/partner/partner3.svg' },
  { name: 'Partner2', logo: '/partner/parner2.svg' },
]

const skills = [
  {
    name: "Adobe Photoshop",
    icon: "fa-wand-magic-sparkles",
    description: "Professional photo manipulation and graphic design",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Figma",
    icon: "fa-pen-ruler",
    description: "Modern UI/UX design and prototyping",
    color: "from-purple-400 to-purple-600"
  },
  {
    name: "Adobe Illustrator",
    icon: "fa-bezier-curve",
    description: "Vector graphics and brand identity design",
    color: "from-orange-400 to-orange-600"
  },
  {
    name: "Web Development",
    icon: "fa-code",
    description: "Frontend development with modern technologies",
    color: "from-green-400 to-green-600"
  },
  {
    name: "UI/UX Design",
    icon: "fa-layer-group",
    description: "User-centered design and experience",
    color: "from-pink-400 to-pink-600"
  },
  {
    name: "Video Editing",
    icon: "fa-film",
    description: "Professional video editing and motion graphics",
    color: "from-red-400 to-red-600"
  }
]

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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

      {/* Partners Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 font-medium tracking-wide uppercase">
              Trusted By Industry Leaders
            </span>
            <h2 className="mt-4 text-3xl font-bold">
              Partnering with Amazing Brands
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/3 to-violet-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative aspect-[3/2] filter grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats & Impact Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/wallpaper.jpg"
                  alt="Creative Process"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-8 -bottom-8 bg-black/90 backdrop-blur-xl border border-violet-500/20 rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-star text-2xl text-violet-400"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">6+ Years</div>
                    <div className="text-white/60 text-sm">Professional Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-violet-400 font-medium tracking-wide uppercase">
                  Our Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Mastering Digital{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                    Creativity
                  </span>
                </h2>
                <p className="text-lg text-white/60 max-w-xl">
                  From concept to execution, we bring your vision to life with cutting-edge tools and technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors"
                  >
                    <div className="relative z-10">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <i className={`fa-solid ${skill.icon} text-lg text-white`}></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-violet-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <button className="group relative px-8 py-4 rounded-xl overflow-hidden bg-violet-600 text-white font-medium">
                    <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 bg-[length:200%_100%] group-hover:bg-[position:100%_0] animate-shimmer" />
                    <div className="relative flex items-center gap-2">
                      View Our Work
                      <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </button>
                </Link>
                <Link href="/start-project">
                  <button className="group relative px-8 py-4 rounded-xl overflow-hidden border border-violet-500/20 font-medium hover:bg-violet-500/10 transition-colors">
                    <span className="relative text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                      Start a Project
                      <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
    </main>
  )
} 