import { Fragment } from 'react';
import { SanitizedPublication } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
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

  const renderPublications = () => {
    return publications.map((item, index) => (
      <div key={index} className="card shadow-lg compact bg-base-100">
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h6 className="font-medium opacity-60 mb-2 text-xl">
                    {item.title}
                  </h6>
                  {item.conferenceName && (
                    <p className="text-base-content opacity-50 text-sm font-bold">
                      {item.conferenceName}
                    </p>
                  )}
                  {item.journalName && (
                    <p className="text-base-content opacity-50 text-sm font-bold">
                      {item.journalName}
                    </p>
                  )}

                  {/* Location and Date - moved outside of link */}
                  {(item.location || item.date) && (
                    <div className="flex flex-wrap justify-center gap-2 mt-1 mb-2">
                      {item.location && (
                        <span className="badge badge-outline badge-sm">
                          📍 {item.location}
                        </span>
                      )}
                      {item.date && (
                        <span className="badge badge-outline badge-sm">
                          📅 {item.date}
                        </span>
                      )}
                    </div>
                  )}

                  {item.authors && (
                    <p className="text-base-content opacity-50 text-sm font-bold">
                      Authors: {item.authors}
                    </p>
                  )}
                  {item.indexTerms && (
                    <div className="mt-2">
                      <p className="text-base-content opacity-60 text-xs font-semibold mb-1">
                        Index Terms:
                      </p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {item.indexTerms.split(', ').map((term, idx) => (
                          <span 
                            key={idx}
                            className="badge badge-primary badge-xs"
                          >
                            {term.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.description && (
                    <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View publication: ${item.title}`}
          />
        )}
      </div>
    ));
  };

  return (
    <Fragment>
      <div id="publication" className="w-full">
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
                        Publications
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {loading ? renderSkeleton() : renderPublications()}
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

export default PublicationCard;
