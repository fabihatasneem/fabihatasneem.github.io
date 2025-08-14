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
        <div key={index} className="flex items-start space-x-4 mb-8">
          <div className="flex-shrink-0">
            {skeleton({ widthCls: 'w-4', heightCls: 'h-4' })}
          </div>
          <div className="flex-1 space-y-2">
            {skeleton({ widthCls: 'w-32', heightCls: 'h-4' })}
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
          renderSkeleton()
        ) : (
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot and line */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-base-300"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    {/* Date */}
                    <div className="text-sm text-base-content opacity-60 mb-2">
                      {experience.from} - {experience.to}
                    </div>

                    {/* Position */}
                    <h3 className="text-lg font-semibold text-base-content mb-2">
                      {experience.position}
                    </h3>

                    {/* Company */}
                    <div className="mb-3">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
