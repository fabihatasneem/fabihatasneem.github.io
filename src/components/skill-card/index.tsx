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
    for (let index = 0; index < 4; index++) {
      array.push(
        <div key={index} className="card bg-base-200 animate-pulse">
          <div className="card-body p-4">
            <div className="h-4 bg-base-400 rounded mb-3"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 bg-base-400 rounded-full w-20"
                ></div>
              ))}
            </div>
          </div>
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

  const categoryIcons = {
    languages: '💻',
    frameworks: '⚡',
    databases: '🗄️',
    tools: '🛠️',
    cloud: '☁️',
    ml: '🤖',
    security: '🔒',
  };

  const categoryColors = {
    languages: 'from-blue-500 to-cyan-500',
    frameworks: 'from-purple-500 to-pink-500',
    databases: 'from-green-500 to-emerald-500',
    tools: 'from-orange-500 to-red-500',
    cloud: 'from-indigo-500 to-blue-500',
    ml: 'from-yellow-500 to-orange-500',
    security: 'from-red-500 to-pink-500',
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        {/* Header */}
        <div className="mx-3 mb-6">
          <h5 className="card-title text-2xl">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-80 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            )}
          </h5>
          <p className="text-base-content/60 text-sm mt-2">
            Technical expertise across various domains
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderSkeleton()}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300 hover:border-primary/30"
              >
                <div className="card-body p-5">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h6 className="font-bold text-base-content text-lg">
                        {
                          categoryTitles[
                            category as keyof typeof categoryTitles
                          ]
                        }
                      </h6>
                      <div
                        className={`w-12 h-1 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}
                      ></div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {skillList?.map((skill, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-200 rounded-lg text-sm font-medium cursor-pointer transform hover:scale-105 hover:shadow-md"
                      >
                        {skill}
                      </div>
                    ))}
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

export default SkillCard;
