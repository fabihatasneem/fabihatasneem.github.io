import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { GithubProject } from '../../interfaces/github-project';
import { ga, getLanguageColor, skeleton } from '../../utils';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div
          key={index}
          className="py-4 border-b border-base-300 last:border-b-0"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-5 bg-base-300 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-base-300 rounded mb-3 w-full"></div>
              <div className="flex items-center space-x-4">
                <div className="h-4 bg-base-300 rounded w-16"></div>
                <div className="h-4 bg-base-300 rounded w-16"></div>
                <div className="h-4 bg-base-300 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <div
        key={index}
        className="py-4 border-b border-base-300 last:border-b-0 hover:bg-base-200/50 transition-colors duration-200 rounded-lg px-3 -mx-3"
      >
        <div className="flex items-start justify-between group">
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-2">
              <MdInsertLink className="text-base-content/60 mr-2 flex-shrink-0" />
              <a
                href={item.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-200 truncate"
                onClick={(e) => {
                  e.preventDefault();
                  try {
                    if (googleAnalyticsId) {
                      ga.event('Click project', {
                        project: item.name,
                      });
                    }
                  } catch (error) {
                    console.error(error);
                  }
                  window?.open(item.html_url, '_blank');
                }}
              >
                {item.name}
              </a>
            </div>

            <p className="text-base-content/70 text-sm mb-3 leading-relaxed">
              {item.description}
            </p>

            <div className="flex items-center space-x-4 text-sm text-base-content/60">
              <span className="flex items-center">
                <AiOutlineStar className="mr-1" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-1" />
                <span>{item.forks_count}</span>
              </span>
              <span className="flex items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full mr-1.5"
                  style={{ backgroundColor: getLanguageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card compact bg-base-100 shadow">
          <div className="card-body">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">{header}</span>
                )}
              </h5>
              {loading ? (
                skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              ) : (
                <a
                  href={`https://github.com/${username}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary-focus text-sm font-medium transition-colors duration-200"
                >
                  See All →
                </a>
              )}
            </div>

            {/* Projects List */}
            <div className="space-y-0">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
