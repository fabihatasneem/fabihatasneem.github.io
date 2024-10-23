import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils';
import { SanitizedAward } from '../../interfaces/sanitized-config';

const AwardCard = ({
  awards,
  header,
  loading,
}: {
  awards: SanitizedAward[];
  header: string;
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < awards.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
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
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer w-full"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center">
            {item.logoUrl && (
              <div className="mr-6">
                <div className="w-24 h-24">
                  <LazyImage
                    src={item.logoUrl}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
            )}
            <div className="flex-1">
              <h2 className="font-medium opacity-60 mb-2">{item.title}</h2>
              <p className="text-base-content text-opacity-60 text-sm">{item.description}</p>
            </div>
          </div>
          {(item.imageUrl1 || item.imageUrl2) && (
            <div className="flex justify-start mt-4 space-x-4">
              {item.imageUrl1 && (
                <div className="w-full max-w-xs h-auto">
                  <LazyImage
                    src={item.imageUrl1}
                    alt={'Award image 1'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-48',
                      shape: '',
                    })}
                  />
                </div>
              )}
              {item.imageUrl2 && (
                <div className="w-full max-w-xs h-auto">
                  <LazyImage
                    src={item.imageUrl2}
                    alt={'Award image 2'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-48',
                      shape: '',
                    })}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {loading ? renderSkeleton() : renderAwards()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AwardCard;
