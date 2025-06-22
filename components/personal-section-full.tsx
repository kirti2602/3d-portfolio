"use client";

import { resumeData } from "@/data/resume";

export default function PersonalSectionFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-6 text-indigo-600">
          {resumeData.personal.name}
        </h1>
        <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-600 mb-8">
          <div className="flex items-center justify-center gap-3">
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
            <span>{resumeData.personal.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
            <span>{resumeData.personal.location}</span>
          </div>
        </div>
        <p className="text-blue-600 font-medium text-xl mb-8">
          {resumeData.personal.email}
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/kirti--sharma/"
            className="px-8 py-4 bg-blue-100 text-blue-700 rounded-full font-medium text-lg hover:bg-blue-200 transition-colors"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/kirti2602"
            className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="bg-indigo-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          Software Engineer
        </h3>
        <p className="text-indigo-700 text-lg leading-relaxed">
          Passionate full-stack developer with expertise in React, Node.js, and
          modern web technologies. Currently building scalable platforms at
          GrowthX, serving thousands of users worldwide. Experienced in
          developing complex web applications, implementing efficient solutions,
          and leading technical initiatives that drive business growth.
        </p>
      </div>
    </div>
  );
}
