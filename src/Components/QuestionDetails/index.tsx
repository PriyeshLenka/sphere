import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { BsReplyFill } from 'react-icons/bs';

const QuestionDetails = () => {
  return (
    <>
      <div className="question-details-container mt-5">
        <div className="question-box-and-comment-section">
          {/* <div className="back-btn-container">
          <IoMdArrowRoundBack />
          <h4 className="text-sm text-justify font-semibold">
            Go Back
          </h4>
        </div> */}
          <div className="question-header">
            <h4 className="text-sm text-justify font-semibold">
              Q . Need help with deploying a Spring Boot application
              to a server in the AWS Cloud .
            </h4>
          </div>
          <div className="comment-box-container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
              <div className="comment-box">
                <div className="comment-header">
                  <div className="comment-person-details">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <h4 className="text-sm text-justify font-semibold">
                      Arup Padhi
                    </h4>
                  </div>
                  <h4 className="text-sm font-medium text-slate-900">
                    11 mins ago
                  </h4>
                </div>
                <div className="comment">
                  <h4 className="text-sm text-justify">
                    Can you Please Help Me with this ? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                    Consectetur fugiat dolores, quia aliquid similique
                    cupiditate doloremque eum obcaecati ullam aut
                    consequuntur unde, ab soluta quae quis. Blanditiis
                    provident ad iure.
                  </h4>
                  {i % 2 === 0 && (
                    <img
                      src="https://mdbcdn.b-cdn.net/docs/react/extended/comments/assets/featured.jpg"
                      alt=""
                    />
                  )}
                </div>
                <div className="comment-footer-actions">
                  <h4 className="text-sm text-justify font-semibold flex items-center	gap-4px	">
                    <MdDeleteForever />
                    Delete
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionDetails;
