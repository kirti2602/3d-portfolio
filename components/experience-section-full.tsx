"use client";

import { resumeData } from "@/data/resume";

export default function ExperienceSectionFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-red-600 text-center">
        PROFESSIONAL EXPERIENCE
      </h2>
      <div className="bg-red-50 p-8 rounded-2xl mb-8 border-l-8 border-red-500">
        <h3 className="text-3xl font-bold text-red-800 mb-4">
          {resumeData.experience.title}
        </h3>
        <p className="text-red-700 text-2xl font-semibold mb-2">
          {resumeData.experience.company}
        </p>
        <div className="flex justify-between items-center mb-6">
          <span className="text-red-600 font-medium text-lg">
            {resumeData.experience.period}
          </span>
          <span className="text-red-500 text-lg">
            {resumeData.experience.location}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-red-700 mb-6">
          Key Achievements
        </h3>
        {resumeData.experience.achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-sm"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              • {achievement}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-8 bg-red-100 rounded-2xl">
        <h3 className="text-2xl font-semibold text-red-800 mb-6">
          Impact Summary
        </h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700">3000+</div>
            <div className="text-red-600 text-lg">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700">70%</div>
            <div className="text-red-600 text-lg">Process Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
}
