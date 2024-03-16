import React from "react";
import reactSvg from "../../assets/react.svg";
import ExpandableParagraph from "./Comment";
import "./UserDasboard.css";
import Comment from "./Comment";
import ChatInput from "./ChatInput";
const QueriesSection = () => {
  const [openDialog, setopenDialog] = React.useState(false);
  const toggleAccordion = (id) => {
    const accordionItem = document.getElementById(id);
    accordionItem.classList.toggle("hidden");
  };
  return (
    <>
      <div className="root-query-section">
        <section className="queries-header-root">
          <h4>Queries</h4>
        </section>
        <div className="parent-queries-container">
          <div className="aside1">
            <div className="comment-box-container_new">
              <div className="question-box-root">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                  <div className="question-box-container">
                    <div className="source-image-box">
                      <img src={reactSvg} />
                    </div>
                    <div className="question-mid-box">
                      <h5 className="text-sm text-justify font-semibold">
                        Need help with deploying a Spring Boot application to a
                        server in the AWS Cloud .
                      </h5>
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        24 January 2024
                      </span>
                    </div>
                    <div className="question-tag-box">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 custom-chipclass">
                        React
                      </span>
                    </div>
                  </div>
                ))}
                {/* <Comment/> */}
              </div>
            </div>
          </div>
          <div className="question-details-comment-section">
            <div className="question-details">
              <div className="question-box-card">
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="accordion-question-area"
                >
                  <div id="accordion-collapse-heading-3">
                    <button
                      type="button"
                      className="accordion-button"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() =>
                        toggleAccordion("accordion-collapse-body-1")
                      }
                    >
                      <span>
                        What is
                        Flowbitesdfffffffffffffffffffffffffffffffffffffffffffffffffff?
                      </span>
                      <svg
                        className="w-3 h-3 rotate-180 shrink-0 "
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                    <div className="question-details-footer">
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        24 January 2024
                      </span>
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        React
                      </span>
                    </div>
                  </div>
                  <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 ">
                      <div className="question-text-area">
                        <h5 className="text-sm text-justify font-semibold">
                          Need help with deploying a Spring Boot application to
                          a server in the AWS Cloud. Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Adipisci, accusantium.
                          Aliquid maxime in dolore ad obcaecati, distinctio sunt
                          minus eveniet vitae? Nemo, aperiam iste ipsam numquam
                          repellendus corrupti sed non!. Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Inventore, quod
                          consequuntur adipisci voluptates velit eveniet quia
                          voluptas modi, dolore consectetur ab beatae animi
                          quasi. Tenetur aliquid id sequi voluptatem maiores!.
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta perferendis magni, odio esse cumque,
                          accusamus similique doloribus explicabo adipisci
                          deserunt saepe, ipsam vitae sed a debitis libero
                          blanditiis reprehenderit asperiores. Lorem ipsum dolor
                          sit amet, consectetur adipisicing elit. Neque amet
                          earum consectetur eaque eveniet corporis commodi, esse
                          ex perspiciatis at rerum reprehenderit, recusandae
                          delectus itaque voluptate fugiat adipisci possimus
                          dignissimos. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Accusantium et enim totam obcaecati
                          quasi sed sunt nam, officia laudantium error soluta
                          magni fugit est placeat laboriosam, voluptatibus vero
                          mollitia voluptatum.
                        </h5>

                        <img
                          src="https://mdbcdn.b-cdn.net/docs/react/extended/comments/assets/featured.jpg"
                          alt=""
                          className="img-in-question"
                        />
                      </div>
                    </div>
                  </div>
                  {/* More accordion items go here */}
                </div>
              </div>

              <div className="comment-sections">
                <div>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
              </div>
              <div>
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueriesSection;
