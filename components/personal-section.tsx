import { resumeData } from "@/data/resume";

export default function PersonalSection() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">
        {resumeData.personal.name}
      </h1>
      <div className="space-y-3 text-sm text-gray-600 mb-4">
        <p className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          {resumeData.personal.phone}
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          {resumeData.personal.location}
        </p>
        <p className="text-blue-600 font-medium">{resumeData.personal.email}</p>
      </div>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/kirti--sharma/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors cursor-pointer"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://github.com/kirti2602"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer"
        >
          GitHub Profile
        </a>
      </div>
      <div className="mt-8 p-4 bg-indigo-50 rounded-xl">
        <h3 className="text-base font-semibold text-indigo-800 mb-3">
          Software Engineer
        </h3>
        <p className="text-indigo-700">
          Passionate full-stack developer with expertise in React, Node.js, and
          modern web technologies. Currently building scalable platforms at
          GrowthX, serving thousands of users worldwide.
        </p>
      </div>
    </div>
  );
}
