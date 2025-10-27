"use client"
import AboutMeWidget from "@/components/about-me-widget"
import GalleryWidget from "@/components/gallery-widget"

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center" style={{ background: "#141414" }}>
      <div className="w-full max-w-7xl">
        {/* Main grid layout - left empty, right with widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left side - empty but responsive */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right side - widgets */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me Widget */}
            <AboutMeWidget />

            {/* Gallery Widget */}
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  )
}
