import "./herosection.scss";

import React from "react";

function NXWaveCard() {
  return (
    <div className="heroWrapper">
      <div className="style-0">
        <div className="style-1">
          <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            alt="card_asset"
            className="style-2"
          />
          <div className="style-3">
            <h1 className="style-4">
              <span className="style-5">
                <strong className="style-6">NX Wave.</strong> The next-gen
                credit card for those who love rewards.
              </span>
            </h1>
            <div className="style-7">
              <p className="style-8">
                1% Cashback
                <svg
                  className="style-9"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    className="style-10"
                  ></path>
                </svg>
                5x Rewards
                <svg
                  className="style-11"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    className="style-12"
                  ></path>
                </svg>
                Zero Forex Markup
              </p>
            </div>
            <div className="style-13">
              <div className="style-14">
                <div className="style-15">
                  <form className="style-16">
                    <div className="style-17">
                      <div className="style-18">
                        <input
                          className="style-19"
                          placeholder="Enter Phone Number"
                          value=""
                        />
                        <span className="style-20"></span>
                      </div>
                      <button type="submit" className="style-21">
                        <span className="style-22">Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div className="style-23">
                    <input type="checkbox" checked="" className="style-24" />
                    <label htmlFor="consent-msg" className="style-25">
                      You agree to be contacted by Uni Cards over Call, SMS,
                      Email or WhatsApp to guide you through your application.
                    </label>
                  </div>
                </div>
              </div>
              <div className="style-26">
                <div className="style-27">
                  <a
                    href="https://uni-growth.onelink.me/v6cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style-28"
                  >
                    <div className="style-29">
                      <span className="style-30">Download</span>
                    </div>
                  </a>
                </div>
                <div className="style-31">
                  <p className="style-32">
                    Thank you for your interest in the Uni Card.
                    <br className="style-33" />
                    Download the Uni Cards app now and get your Uni Card in
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay muted loop playsinline class="style-100">
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
          class="style-101"
        />
      </video>
    </div>
  );
}

export default NXWaveCard;
