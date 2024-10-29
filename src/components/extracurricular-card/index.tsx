import React, { Fragment } from 'react';
import { SanitizedExtraCurricularActivity } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  position,
  company,
  companyLink,
}: {
  year: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
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
              <span className="text-base-content opacity-70">Extra Curricular Activities</span>
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
