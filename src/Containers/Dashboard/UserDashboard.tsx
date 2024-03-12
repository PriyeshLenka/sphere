import React from 'react';
import InfoBox from '../../Components/InfoBox';
import { CiCircleInfo } from 'react-icons/ci';
import QuestionBox from '../../Components/QuestionBox';
import QuestionDetails from '../../Components/QuestionDetails';

const UserDashboard = () => {
  return (
    <>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      <div className="relative isolate px-1 pt-1 lg:px-8 w-full h-20">
        <div className="flex items-center justify-between gap-x-6 py-4 mb-6">
          <h2 className="text-1xl fixed font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {/* User Dashboard  */}
            Question Details
          </h2>
          {/* <button
            type="button"
            id="ask-question"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Ask a question ?
          </button>
          <button
            type="button"
            id="show-statistics-mobile-view"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Show Statistics
            <CiCircleInfo />
          </button> */}
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6" />
        {/* <div className="mobile-view-btn py-2">
          <button
            type="button"
            id="ask-question-mobile-view"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Ask a question ?
          </button>
        </div> */}
      </div>
      {/* <div className="dashboard-content">
        <div className="dashboard-questions-section">
          <QuestionBox />
        </div>
        <div className="user-dashboard-statistics">
          <InfoBox
            config={{
              heading: 'Summary of Questions in your bucket'
            }}
            details={[
              { info: 'Total Questions', count: 6, key: 1 },
              { info: 'Answered and closed', count: 4, key: 2 },
              { info: 'Awaiting your inputs', count: 2, key: 3 }
            ]}
          />
        </div>
      </div> */}
      <QuestionDetails />
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
    </>
  );
};

export default UserDashboard;
