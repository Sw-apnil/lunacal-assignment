"use client"

import { useState } from "react"

type TabType = "about" | "experiences" | "recommended"

const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about")

  const tabContent = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    experiences: `I have extensive experience in sales and customer relationship management. Over the past 3 years at Salesforce, I've successfully managed multiple enterprise accounts and helped businesses streamline their operations.

My expertise includes CRM implementation, sales strategy, and client success management. I'm passionate about helping companies achieve their goals through innovative solutions.`,
    recommended: `I'm highly recommended by my colleagues and clients for my dedication to customer success. My approach focuses on building long-term relationships and delivering exceptional value.

I pride myself on being responsive, proactive, and committed to exceeding expectations in every interaction.`,
  }

  return (
    <div
      className="rounded-[12px] p-8 transition-shadow duration-300"
      style={{
        backgroundColor: "#2B2B2B",
        boxShadow: "0px 3px 6px rgba(0,0,0,0.25), inset 0px 1px 2px rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 -ml-1 -mt-1"
          style={{
            backgroundColor: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          <span className="text-xs font-bold" style={{ color: "#A0A0A0" }}>
            ?
          </span>
        </div>

        <div
          className="flex items-center gap-1 rounded-full flex-1"
          style={{
            backgroundColor: "#000000",
            padding: "4px 6px",
            boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.05), inset -1px -1px 2px rgba(0,0,0,0.3)",
          }}
        >
          {["about", "experiences", "recommended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className="flex-1 px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap"
              style={
                activeTab === tab
                  ? {
                      backgroundColor: "rgba(59, 59, 59, 0.8)",
                      color: "#FFFFFF",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.4)",
                    }
                  : {
                      backgroundColor: "#000000",
                      color: "#A0A0A0",
                      boxShadow: "none",
                    }
              }
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.backgroundColor = "#1A1A1A"
                  e.currentTarget.style.color = "#D1D5DB"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.backgroundColor = "#000000"
                  e.currentTarget.style.color = "#A0A0A0"
                }
              }}
            >
              {tab === "about" && "About Me"}
              {tab === "experiences" && "Experiences"}
              {tab === "recommended" && "Recommended"}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative rounded-lg p-6 max-h-56 overflow-y-auto custom-scrollbar"
        style={{
          backgroundColor: "#2B2B2B",
          boxShadow: "inset 0px 4px 8px rgba(0,0,0,0.4), inset 0px -2px 4px rgba(255,255,255,0.05)",
        }}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "#C0C0C0" }}>
          {tabContent[activeTab]}
        </p>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(160, 160, 160, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(160, 160, 160, 0.3);
        }
      `}</style>
    </div>
  )
}

export default AboutMeWidget
