import React from 'react';

const Comment = () => {
  return (
    <>
    <div className="flex items-center justify-start space-x-2">
      <div className="block">
        <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
          <div className="font-medium">
            <a href="#" className="hover:underline text-sm">
              <small>Nirmala</small>
            </a>
          </div>
          <div className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
          </div>
        </div>
        <div className="flex justify-start items-center text-xs w-full">
          <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
            <a href="#" className="hover:underline">
              <small>Like</small>
            </a>
            <small className="self-center">.</small>
            <a href="#" className="hover:underline">
              <small>Reply</small>
            </a>
            <small className="self-center">.</small>
            <a href="#" className="hover:underline">
              <small>15 hour</small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
      <a href="#">
        <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
          <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </div>
      </a>
    </div>
    </>
  );
};

export default Comment;
