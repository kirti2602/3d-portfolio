"use client";

import type React from "react";

import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import PersonalSectionFull from "./personal-section-full";
import EducationSectionFull from "./education-section-full";
import SkillsSectionFull from "./skills-section-full";
import ExperienceSectionFull from "./experience-section-full";
import AchievementsSectionFull from "./achievements-section-full";

interface FullscreenViewProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
  tabs: Array<{ name: string; icon: React.ComponentType<any>; color: string }>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FullscreenView({
  activeSection,
  setActiveSection,
  tabs,
  onClose,
  onNext,
  onPrev,
}: FullscreenViewProps) {
  const sections = [
    <PersonalSectionFull key={0} />,
    <EducationSectionFull key={1} />,
    <SkillsSectionFull key={2} />,
    <ExperienceSectionFull key={3} />,
    <AchievementsSectionFull key={4} />,
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto font-system">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Exit fullscreen (Esc)"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              Portfolio - Detailed View
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Previous section (←)"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Next section (→)"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center pb-4">
          <div className="flex bg-gray-100 rounded-full p-1 gap-1">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeSection === index
                      ? "bg-white text-gray-800 shadow-md"
                      : "text-gray-600 hover:bg-white hover:bg-opacity-50"
                  }`}
                  style={{
                    backgroundColor:
                      activeSection === index ? tab.color : "transparent",
                    color: activeSection === index ? "white" : undefined,
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="animate-fadeIn">{sections[activeSection]}</div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-500">
        <p>Use arrow keys to navigate • Press Esc to exit fullscreen</p>
      </div>
    </div>
  );
}
