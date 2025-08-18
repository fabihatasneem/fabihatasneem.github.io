import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const ListItem = ({
  time,
  degree,
  institution,
  logoUrl,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
  logoUrl?: string;
}) => (
  <li className="mb-6 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="flex items-start space-x-4">
      {/* Logo Section */}
      {logoUrl && (
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-base-200 to-base-300 shadow-md border border-base-300">
          <LazyImage
            src={logoUrl}
            alt={`${institution} logo`}
            placeholder={skeleton({
              widthCls: 'w-full',
              heightCls: 'h-full',
              shape: '',
            })}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        <div className="my-0.5 text-xs text-base-content/60 mb-2">{time}</div>
        <h3 className="font-bold text-lg text-base-content mb-2 leading-tight">{degree}</h3>
        <div className="text-base-content/80 font-medium leading-relaxed">{institution}</div>
      </div>
    </div>
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          logoUrl=""
        />,
      );
    }

    return array;
  };

  return (
    <div id="education" className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Education</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    time={`${item.from} - ${item.to}`}
                    degree={item.degree}
                    institution={item.institution}
                    logoUrl={item.logoUrl}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
