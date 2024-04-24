import "./instantcredit.scss"

import React from "react";

function InstantCreditSection() {
  return (
    <div className="instantcreditWrapper">
      <section className="style-0">
        <img src="https://www.uni.cards/images/circles.png" alt="circles" className="style-1" />
        <div className="style-2">
          <div className="style-3">
            <p className="style-4">
              We’ve all heard of instant groceries, now say hello to
              <span className="style-5">
                <br className="style-6" /> instant credit.
              </span>
            </p>
            <p className="style-7">
              0% hassle, 100% paperless. Get your <br className="style-8" /> Uni
              Card instantly.
            </p>
          </div>
          <div className="style-9">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
              alt=""
              loading="lazy"
              className="style-10"
            />
          </div>
        </div>
        <div className="style-11">
          <div className="style-12">
            <p className="style-13">
              With Uni,{" "}
              <span className="style-14">
                <br className="style-15" />
                you’re always in control.
              </span>{" "}
            </p>
            <p className="style-16">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.{" "}
            </p>
          </div>
          <div className="style-17">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
              alt=""
              loading="lazy"
              className="style-18"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default InstantCreditSection;
