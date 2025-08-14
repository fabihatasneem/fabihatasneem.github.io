import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <div key={index} className="card bg-base-200 animate-pulse">
          <div className="card-body p-4">
            <div className="flex justify-between items-start mb-2">
              {skeleton({ widthCls: 'w-32', heightCls: 'h-4' })}
              {skeleton({ widthCls: 'w-24', heightCls: 'h-3' })}
            </div>
            {skeleton({ widthCls: 'w-40', heightCls: 'h-5' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-16' })}
          </div>
        </div>,
      );
    }
    return array;
  };

  return (
    <div id="work" className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3 mb-6">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Work Experience
              </span>
            )}
          </h5>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderSkeleton()}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="card bg-base-200 hover:bg-base-300 transition-colors duration-200"
              >
                <div className="card-body p-5">
                  {/* Date Range */}
                  <div className="text-sm text-base-content opacity-60 mb-3">
                    {experience.from} - {experience.to}
                  </div>

                  {/* Position */}
                  <h3 className="text-lg font-semibold text-base-content mb-2">
                    {experience.position}
                  </h3>

                  {/* Company */}
                  <div className="mb-4">
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary-focus font-medium transition-colors duration-200"
                    >
                      {experience.company}
                    </a>
                  </div>

                  {/* Description */}
                  {experience.description && (
                    <div className="text-sm text-base-content opacity-80 leading-relaxed">
                      {experience.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
