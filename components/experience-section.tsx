import { resumeData } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-red-600 text-center border-b-2 border-red-200 pb-4">
        PROFESSIONAL EXPERIENCE
      </h2>
      <div className="bg-red-50 p-4 rounded-xl mb-4 border-l-4 border-red-500">
        <h3 className="text-lg font-bold text-red-800 mb-2">
          {resumeData.experience.title}
        </h3>
        <p className="text-red-700 text-xl font-semibold mb-1">
          {resumeData.experience.company}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-red-600 font-medium">
            {resumeData.experience.period}
          </span>
          <span className="text-red-500">{resumeData.experience.location}</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold text-red-700 mb-4">
          Key Achievements
        </h3>
        {resumeData.experience.achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border-l-4 border-red-300 shadow-sm"
          >
            <p className="text-gray-700 leading-relaxed">• {achievement}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-red-100 rounded-xl">
        <h3 className="text-base font-semibold text-red-800 mb-3">
          Impact Summary
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-700">3000+</div>
            <div className="text-red-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-700">70%</div>
            <div className="text-red-600">Process Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
}
