"use client"

import { useState } from "react"
import Image from "next/image"

const GalleryWidget = () => {
  const [images, setImages] = useState(["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg"])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleAddImage = () => {
    const newImage = `/gallery-${Math.floor(Math.random() * 3) + 1}.jpg`
    setImages([...images, newImage])
  }

  const getVisibleImages = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(images[(currentIndex + i) % images.length])
    }
    return visible
  }

  return (
    <div
      className="rounded-[12px] p-8 transition-shadow duration-300"
      style={{
        backgroundColor: "#2B2B2B",
        boxShadow: "0px 3px 6px rgba(0,0,0,0.25), inset 0px 1px 2px rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 -ml-1 -mt-1"
            style={{
              backgroundColor: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.4), inset 0px 1px 1px rgba(255,255,255,0.05)",
            }}
          >
            <span className="text-xs font-bold" style={{ color: "#D1D5DB" }}>
              ?
            </span>
          </div>
          <div
            className="px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "#000000",
              boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.05), 2px 2px 4px rgba(0,0,0,0.6)",
            }}
          >
            <h2 className="font-bold text-base" style={{ color: "#F3F4F6" }}>
              Gallery
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 text-xs font-semibold"
            style={{
              backgroundColor: "#333333",
              color: "#E0E0E0",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0px 2px 4px rgba(0,0,0,0.5), inset 0px 1px 1px rgba(255,255,255,0.08), 0px 0px 8px rgba(255,255,255,0.1)",
            }}
          >
            <span className="text-base">+</span>
            ADD IMAGE
          </button>

          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-lg"
            style={{
              backgroundColor: "#333333",
              color: "#E0E0E0",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0px 2px 4px rgba(0,0,0,0.5), inset 0px 1px 1px rgba(255,255,255,0.08), 0px 0px 8px rgba(255,255,255,0.1)",
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-lg"
            style={{
              backgroundColor: "#333333",
              color: "#E0E0E0",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0px 2px 4px rgba(0,0,0,0.5), inset 0px 1px 1px rgba(255,255,255,0.08), 0px 0px 8px rgba(255,255,255,0.1)",
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {getVisibleImages().map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-[12px] overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryWidget
