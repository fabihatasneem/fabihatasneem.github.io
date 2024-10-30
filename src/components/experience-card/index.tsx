import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  isEven,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  isEven: boolean;
}) => (
  <li
    className={`mb-2 ${isEven ? 'ml-auto pl-4' : 'mr-auto pr-4'} w-[45%] relative`}
  >
    <div
      className="absolute w-3 h-3 bg-base-300 rounded-full z-10"
      style={{
        top: '10px',
        [isEven ? 'left' : 'right']: '-6.5px',
      }}
    />
    <div
      className="absolute w-[15px] h-0.5 bg-base-300"
      style={{
        top: '14px',
        [isEven ? 'left' : 'right']: '-15px',
      }}
    />
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
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
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          isEven={index % 2 === 0}
          time={skeleton({
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
    <div id="work" className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
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
        <div className="text-base-content text-opacity-60">
          <div className="relative my-2 mx-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-base-300" />
            <ol className="relative flex flex-col -space-y-3">
              {loading ? (
                renderSkeleton()
              ) : (
                <Fragment>
                  {experiences.map((experience, index) => (
                    <ListItem
                      key={index}
                      isEven={index % 2 === 0}
                      time={`${experience.from} - ${experience.to}`}
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
    </div>
  );
};

export default ExperienceCard;
