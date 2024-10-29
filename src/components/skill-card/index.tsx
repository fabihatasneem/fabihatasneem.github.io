import { skeleton } from '../../utils';

type SkillCategories = {
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  tools?: string[];
  cloud?: string[];
  ml?: string[];
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
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
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
          Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="p-3 flow-root">
              <h6 className="text-sm font-semibold mb-2">
                {categoryTitles[category as keyof SkillCategories]}
              </h6>
              <div className="-m-1 flex flex-wrap">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillCard;
