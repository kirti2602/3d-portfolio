"use client";

import { resumeData } from "@/data/resume";

export default function SkillsSectionFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-amber-600 text-center">
        SKILLS & EXPERTISE
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center gap-3">
            <span className="w-4 h-4 bg-amber-500 rounded-full"></span>
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {resumeData.skills.technical.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-amber-100 text-amber-800 rounded-xl text-center font-medium text-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center gap-3">
            <span className="w-4 h-4 bg-amber-500 rounded-full"></span>
            Other Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {resumeData.skills.other.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-amber-50 text-amber-700 rounded-xl text-center font-medium border border-amber-200 text-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center gap-3">
            <span className="w-4 h-4 bg-amber-500 rounded-full"></span>
            Development Tools
          </h3>
          <div className="flex gap-4">
            {resumeData.skills.tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-amber-200 text-amber-800 rounded-xl font-medium text-lg"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
