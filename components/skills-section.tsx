import { resumeData } from "@/data/resume";

export default function SkillsSection() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-amber-600 text-center border-b-2 border-amber-200 pb-4">
        SKILLS & EXPERTISE
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold text-amber-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {resumeData.skills.technical.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-amber-100 text-amber-800 rounded-lg text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-amber-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            Other Skills
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {resumeData.skills.other.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-amber-50 text-amber-700 rounded-lg text-center font-medium border border-amber-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-amber-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            Development Tools
          </h3>
          <div className="flex gap-3">
            {resumeData.skills.tools.map((tool, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-amber-200 text-amber-800 rounded-lg font-medium"
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
