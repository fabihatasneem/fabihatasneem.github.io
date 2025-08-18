import { Fragment, useState } from 'react';
import { SanitizedAward } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const AwardCard = ({
  awards,
  header,
  loading,
}: {
  awards: SanitizedAward[];
  header: string;
  loading: boolean;
}) => {
  const [selectedAward, setSelectedAward] = useState<number | null>(null);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < awards.length; index++) {
      array.push(
        <div
          className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          key={index}
        >
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-base-400 animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-400 rounded animate-pulse"></div>
                <div className="h-3 bg-base-400 rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  const renderAwards = () => {
    return awards.map((item, index) => (
      <div
        key={index}
        className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-base-300 hover:border-primary/30"
        onClick={() => setSelectedAward(selectedAward === index ? null : index)}
      >
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            {item.logoUrl && (
              <div className="w-16 h-16 rounded-full overflow-hidden bg-base-300 flex items-center justify-center">
                <LazyImage
                  src={item.logoUrl}
                  alt="Award logo"
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-bold text-lg text-base-content mb-1">
                {item.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-base-content/60">
                <span className="badge badge-primary badge-sm">
                  {item.year}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-focus transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <p className="text-base-content/80 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {(item.imageUrl1 || item.imageUrl2) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {item.imageUrl1 && (
                <div className="relative group">
                  <LazyImage
                    src={item.imageUrl1}
                    alt="Award image 1"
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-48',
                      shape: 'rounded-lg',
                    })}
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </div>
              )}
              {item.imageUrl2 && (
                <div className="relative group">
                  <LazyImage
                    src={item.imageUrl2}
                    alt="Award image 2"
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-48',
                      shape: 'rounded-lg',
                    })}
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </div>
              )}
            </div>
          )}

          {/* Remove expand/collapse since images are always visible */}
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div id="award" className="col-span-1 lg:col-span-2">
        <div className="card compact bg-base-100 shadow-lg">
          <div className="card-body">
            {/* Header */}
            <div className="mx-3 mb-6">
              <h5 className="card-title text-2xl">
                {loading ? (
                  skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-80 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {header}
                  </span>
                )}
              </h5>
              <p className="text-base-content/60 text-sm mt-2">
                Recognition and achievements in my professional journey
              </p>
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderAwards()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AwardCard;
