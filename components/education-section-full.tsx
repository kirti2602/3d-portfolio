"use client";

import { resumeData } from "@/data/resume";

export default function EducationSectionFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-emerald-600 text-center">
        EDUCATION
      </h2>
      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-emerald-50 p-8 rounded-2xl border-l-8 border-emerald-500"
          >
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
              {edu.degree}
            </h3>
            <p className="text-emerald-700 text-xl font-medium mb-2">
              {edu.institution}
            </p>
            <p className="text-emerald-600 text-lg mb-4">{edu.field}</p>
            <div className="flex justify-between items-center">
              <span className="text-emerald-500 font-semibold text-lg">
                {edu.period}
              </span>
              <div className="px-6 py-2 bg-emerald-200 text-emerald-800 rounded-full">
                {index === 0 ? "Bachelor's Degree" : "High School"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
