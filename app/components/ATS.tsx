import { cn } from "~/lib/utils";

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {
  return (
    <div
      className={cn(
        "to-light-white flex w-full flex-col gap-4 rounded-2xl bg-linear-to-b p-8 shadow-md",
        score >= 80
          ? "from-green-100"
          : score >= 50
            ? "from-yellow-100"
            : "from-red-100",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={
            score >= 80
              ? "/icons/ats-good.svg"
              : score >= 50
                ? "/icons/ats-warning.svg"
                : "/icons/ats-bad.svg"
          }
          alt="ATS"
          className="h-10 w-10"
        />
        <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-medium">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className="text-lg text-gray-600">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion, index) => (
          <div className="flex flex-row items-center gap-2" key={index}>
            <img
              src={
                suggestion.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt="ATS"
              className="h-4 w-4"
            />
            <p className="text-lg text-gray-600">{suggestion.tip}</p>
          </div>
        ))}
        <p className="text-lg text-gray-600">
          Want a better score? Improve your resume by applying the suggestions
          listed above.
        </p>
      </div>
    </div>
  );
};

export default ATS;
