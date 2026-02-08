import {
  SanitizedExperience,
  SanitizedDetailedExperienceDescription,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const TechBadges = ({ techString }: { techString: string }) => {
  const names = techString
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className="flex flex-wrap gap-1.5">
      {names.map((name, idx) => (
        <span
          key={idx}
          className="badge badge-sm badge-primary/20 text-primary border border-primary/30"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export const DetailedExperienceBlock = ({
  detail,
}: {
  detail: SanitizedDetailedExperienceDescription;
}) => (
  <div className="mt-4 space-y-5 text-sm text-base-content opacity-90 leading-relaxed border-t border-base-300 pt-4">
    {detail.subtitle && (
      <p className="font-semibold text-primary text-base">{detail.subtitle}</p>
    )}
    {detail.domain && (
      <p className="text-base-content opacity-75 italic">{detail.domain}</p>
    )}
    {detail.overview && (
      <div>
        <h4 className="font-semibold text-primary mb-1.5">Overview</h4>
        <p>{detail.overview}</p>
      </div>
    )}
    {detail.problem && detail.problem.length > 0 && (
      <div>
        <h4 className="font-semibold text-primary mb-1.5">Problem</h4>
        <ul className="list-disc list-inside space-y-1">
          {detail.problem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    {detail.contributions && detail.contributions.length > 0 && (
      <div>
        <h4 className="font-semibold text-primary mb-2">My Contributions</h4>
        <div className="space-y-4">
          {detail.contributions.map((contrib, i) => (
            <div key={i}>
              <h5 className="font-semibold text-primary mb-1.5">
                {contrib.title}
              </h5>
              {contrib.tech && (
                <div className="mb-2">
                  <TechBadges techString={contrib.tech} />
                </div>
              )}
              <ul className="list-disc list-inside space-y-1">
                {contrib.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )}
    {detail.impact && detail.impact.length > 0 && (
      <div>
        <h4 className="font-semibold text-primary mb-1.5">Impact</h4>
        <ul className="list-disc list-inside space-y-1">
          {detail.impact.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    {detail.technologies && (
      <div>
        <h4 className="font-semibold text-primary mb-1.5">Key Technologies</h4>
        <TechBadges techString={detail.technologies} />
      </div>
    )}
  </div>
);

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
                <div className="flex items-stretch space-x-4">
                  <div className="flex flex-col items-center flex-shrink-0 pt-2">
                    <div className="w-3 h-3 bg-primary rounded-full shrink-0"></div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-4 bg-base-300 mt-1 self-center" />
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

                    {/* Summary + See more (when detail is on separate view) */}
                    {experience.detailedDescription &&
                    experience.detailSlug ? (
                      <div className="text-sm text-base-content opacity-80 leading-relaxed">
                        {experience.summary &&
                        experience.summary.length > 0 ? (
                          <ul className="list-disc list-inside space-y-1 mb-3">
                            {experience.summary.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          experience.detailedDescription.overview && (
                            <p className="mb-3">
                              {experience.detailedDescription.overview}
                            </p>
                          )
                        )}
                        <a
                          href={`#experience-${experience.detailSlug}`}
                          className="link link-primary font-medium"
                        >
                          See more →
                        </a>
                      </div>
                    ) : null}

                    {/* Inline detailed description (if no detailSlug – legacy) */}
                    {experience.detailedDescription &&
                      !experience.detailSlug && (
                        <DetailedExperienceBlock
                          detail={experience.detailedDescription}
                        />
                      )}

                    {/* Short description (when no detailed description) */}
                    {!experience.detailedDescription &&
                      experience.description && (
                        <div className="text-sm text-base-content opacity-80 leading-relaxed">
                          {Array.isArray(experience.description) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {experience.description.map(
                                (item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ),
                              )}
                            </ul>
                          ) : (
                            experience.description
                          )}
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
