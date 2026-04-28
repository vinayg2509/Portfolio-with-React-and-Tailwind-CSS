import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import BackGroundEffect from '@/components/BackGroundEffect'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle Theme */}
        <ThemeToggle/>

      {/* BackGround Effect */}
        <BackGroundEffect/>

      {/* Navbar */}
        <Navbar/>
      {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutSection/>
        </main>

      {/* Footer */}
    </div>
  )
}
