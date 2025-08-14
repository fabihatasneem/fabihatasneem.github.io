import { skeleton } from '../../utils';

type SkillCategories = {
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  tools?: string[];
  cloud?: string[];
  ml?: string[];
  security?: string[];
};

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: SkillCategories;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  const categoryTitles = {
    languages: 'Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases & ORMs',
    tools: 'Tools & APIs',
    cloud: 'Cloud & Services',
    ml: 'Machine Learning',
    security: 'Security',
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3 mb-4">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Skills</span>
            )}
          </h5>
        </div>

        {loading ? (
          <div className="p-3 flow-root">
            <div className="-m-1 flex flex-wrap justify-center">
              {renderSkeleton()}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="border-b border-base-300 pb-3 last:border-b-0"
              >
                <h6 className="text-sm font-semibold mb-3 text-base-content/80 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h6>
                <div className="flex flex-wrap gap-2">
                  {skillList?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
