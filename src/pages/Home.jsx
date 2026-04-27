import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import BackGroundEffect from '@/components/BackGroundEffect'
import Navbar from '../components/Navbar'

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


      {/* Footer */}
    </div>
  )
}
