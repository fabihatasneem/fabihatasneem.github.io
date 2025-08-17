import React, { Fragment } from 'react';
import { SanitizedExtraCurricularActivity } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const ListItem = ({
  year,
  position,
  company,
  companyLink,
  logoUrl,
}: {
  year: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  logoUrl?: string;
}) => (
  <li className="mb-6 ml-4">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border-2 border-base-100 mt-1.5 shadow-sm"
      style={{ left: '-5.5px' }}
    ></div>
    
    <div className="flex items-start space-x-4">
      {/* Logo Section */}
      {logoUrl && (
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-base-200 to-base-300 shadow-md border border-base-300">
          <LazyImage
            src={logoUrl}
            alt={`${company} logo`}
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
        <div className="flex items-center space-x-2 mb-2">
          <span className="badge badge-primary badge-sm font-medium">
            {year}
          </span>
          {companyLink && (
            <a
              href={companyLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary-focus transition-colors"
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
        
        <h3 className="font-bold text-lg text-base-content mb-2 leading-tight">
          {position}
        </h3>
        
        <div className="text-base-content/80 font-medium leading-relaxed">
          {companyLink ? (
            <a 
              href={companyLink} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </div>
      </div>
    </div>
  </li>
);

const ExtraCurricularCard = ({
  extraCurricularActivities,
  loading,
}: {
  extraCurricularActivities: SanitizedExtraCurricularActivity[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          logoUrl=""
        />,
      );
    }

    return array;
  };
  return (
    <div id="extraCurricular" className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Extra Curricular Activities
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {extraCurricularActivities.map((experience, index) => (
                  <ListItem
                    key={index}
                    year={experience.year}
                    position={experience.position}
                    company={experience.company}
                    companyLink={
                      experience.companyLink
                        ? experience.companyLink
                        : undefined
                    }
                    logoUrl={experience.logoUrl}
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularCard;
