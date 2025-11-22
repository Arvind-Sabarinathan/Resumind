interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = "";
  let badgeText = "";

  if (score >= 80) {
    badgeColor = "bg-badge-green text-green-600";
    badgeText = "Strong";
  } else if (score >= 50) {
    badgeColor = "bg-badge-yellow text-yellow-600";
    badgeText = "Good Start";
  } else {
    badgeColor = "bg-badge-red text-red-600";
    badgeText = "Needs Work";
  }

  return (
    <div className={`rounded-full px-3 py-1 ${badgeColor}`}>
      <p className="text-sm font-medium">{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;
