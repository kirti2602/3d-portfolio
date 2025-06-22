import { resumeData } from "@/data/resume";

export default function EducationSection() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-emerald-600 text-center border-b-2 border-emerald-200 pb-4">
        EDUCATION
      </h2>
      <div className="space-y-4">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500"
          >
            <h3 className="text-base font-bold text-emerald-800 mb-2">
              {edu.degree}
            </h3>
            <p className="text-emerald-700 text-lg font-medium mb-1">
              {edu.institution}
            </p>
            <p className="text-emerald-600 mb-2">{edu.field}</p>
            <div className="flex justify-between items-center">
              <span className="text-emerald-500 font-semibold">
                {edu.period}
              </span>
              <div className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm">
                {index === 0 ? "Bachelor's" : "High School"}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-emerald-100 rounded-xl">
        <h3 className="text-base font-semibold text-emerald-800 mb-3">
          Academic Focus
        </h3>
        <p className="text-emerald-700">
          Specialized in Computer Science with strong foundation in programming,
          algorithms, and software engineering principles. Graduated with
          comprehensive knowledge in modern development practices.
        </p>
      </div>
    </div>
  );
}
