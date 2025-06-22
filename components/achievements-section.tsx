import { resumeData } from "@/data/resume";

export default function AchievementsSection() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-purple-600 text-center border-b-2 border-purple-200 pb-4">
        ACHIEVEMENTS & IMPACT
      </h2>
      <div className="space-y-4">
        {resumeData.achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500"
          >
            <p className="text-purple-800 text-lg leading-relaxed">
              {achievement}
            </p>
          </div>
        ))}

        <div className="bg-purple-100 p-4 rounded-xl">
          <h3 className="text-base font-semibold text-purple-800 mb-4">
            Key Metrics & Impact
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700">
                  2000+ users on text editor platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700">
                  3000+ members using calendar system
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700">70% process improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700">
                  50+ students taught programming
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl">
          <h3 className="text-base font-semibold text-purple-800 mb-3">
            Teaching & Mentorship
          </h3>
          <p className="text-purple-700 leading-relaxed">
            During the COVID-19 pandemic, took initiative to help students
            worldwide by teaching programming fundamentals through online
            platforms. This experience enhanced communication skills and
            reinforced technical knowledge through teaching.
          </p>
        </div>
      </div>
    </div>
  );
}
