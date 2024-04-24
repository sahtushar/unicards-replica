import "./stickybar.scss";

import React from "react";

function ApplicationSection() {
  return (
    <div className="stickyWrapper">
      <section className="style-0">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <form className="style-4">
                <div className="style-5">
                  <div className="style-6">
                    <input
                      className="style-7"
                      placeholder="Enter Phone Number"
                      value=""
                    />
                    <span className="style-8"></span>
                  </div>
                  <button type="submit" className="style-9">
                    <span className="style-10">Apply Now</span>
                  </button>
                </div>
              </form>
              <div className="style-11">
                <input type="checkbox" checked="" className="style-12" />
                <label htmlFor="consent-msg" className="style-13">
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </label>
              </div>
            </div>
          </div>
          <div className="style-14">
            <div className="style-15">
              <a
                href="https://uni-growth.onelink.me/v6cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="style-16"
              >
                <div className="style-17">
                  <span className="style-18">Download</span>
                </div>
              </a>
            </div>
            <div className="style-19">
              <p className="style-20">
                Thank you for your interest in the Uni Card.
                <br className="style-21" /> Download the Uni Cards app now and
                get your Uni Card in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplicationSection;
