"use client";

import { resumeData } from "@/data/resume";

export default function AchievementsSectionFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-purple-600 text-center">
        ACHIEVEMENTS & IMPACT
      </h2>
      <div className="space-y-8">
        {resumeData.achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-purple-50 p-8 rounded-2xl border-l-8 border-purple-500"
          >
            <p className="text-purple-800 text-xl leading-relaxed">
              {achievement}
            </p>
          </div>
        ))}

        <div className="bg-purple-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-purple-800 mb-6">
            Key Metrics & Impact
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700 text-lg">
                  2000+ users on text editor platform
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700 text-lg">
                  3000+ members using calendar system
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700 text-lg">
                  70% process improvement
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700 text-lg">
                  50+ students taught programming
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Teaching & Mentorship
          </h3>
          <p className="text-purple-700 leading-relaxed text-lg">
            During the COVID-19 pandemic, took initiative to help students
            worldwide by teaching programming fundamentals through online
            platforms. This experience enhanced communication skills and
            reinforced technical knowledge through teaching, demonstrating
            leadership and commitment to knowledge sharing.
          </p>
        </div>
      </div>
    </div>
  );
}
