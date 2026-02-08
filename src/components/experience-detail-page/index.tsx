import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { DetailedExperienceBlock } from '../experience-card';

const ExperienceDetailPage = ({
  experience,
  onBack,
}: {
  experience: SanitizedExperience;
  onBack: () => void;
}) => (
  <div className="min-h-screen">
    <div className="mb-6">
      <button
        type="button"
        onClick={onBack}
        className="btn btn-ghost btn-sm gap-2 text-base-content opacity-80 hover:opacity-100"
        aria-label="Back to profile"
      >
        <span aria-hidden>←</span>
        Back to profile
      </button>
    </div>
    <div className="card shadow-lg bg-base-100">
      <div className="card-body">
        <div className="text-sm text-base-content opacity-60 mb-1">
          {experience.from} – {experience.to}
        </div>
        <h1 className="text-2xl font-bold text-base-content mb-1">
          {experience.position}
        </h1>
        <a
          href={experience.companyLink}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:text-primary-focus font-semibold text-lg mb-4 inline-block"
        >
          {experience.company}
        </a>
        {experience.detailedDescription && (
          <DetailedExperienceBlock detail={experience.detailedDescription} />
        )}
      </div>
    </div>
  </div>
);

export default ExperienceDetailPage;
