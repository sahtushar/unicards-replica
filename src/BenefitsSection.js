import "./benefits.scss"; // Import your generic SCSS file

import React from "react";

function BenefitsSection() {
  return (
    <div className="benefitsWrapper">
      <div className="style-0">
        <div className="style-1">
          <div className="style-2 md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px]">
            <div className="style-3">
              <div className="style-4">
                <div className="style-5">
                  <span className="style-6">
                    1% assured cashback on your spends.
                  </span>
                  <span className="style-7">
                    The more you spend, the more you earn.
                  </span>
                </div>
              </div>
              <div className="style-8">
                <div className="style-9">
                  Not applicable on fuel purchase, rent & wallet transfers, ATM
                  withdrawals & international transactions.
                </div>
              </div>
            </div>
            <div className="style-10">
              <div className="style-11">
                <div className="style-12">
                  <img
                    src="https://www.uni.cards/images/one_percent_cashback.png"
                    className="style-13"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="style-14 md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px]">
            <div className="style-15">
              <div className="style-16">
                <div className="style-17">
                  <span className="style-18">
                    5x more value than your cashback,
                  </span>
                  <span className="style-19"> only at the Uni Store.</span>
                </div>
              </div>
            </div>
            <div className="style-20">
              <div className="style-21">
                <div className="style-22">
                  <img src="https://www.uni.cards/images/five_x_rewards.png" className="style-23" />
                </div>
              </div>
            </div>
          </div>
          <div className="style-24 md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px]">
            <div className="style-25">
              <div className="style-26">
                <div className="style-27">
                  <span className="style-28">Zero Forex Markup.</span>
                  <br className="style-29" />
                  <span className="style-30">
                    {" "}
                    Go international, without any fees.
                  </span>
                </div>
              </div>
            </div>
            <div className="style-31">
              <div className="style-32">
                <div className="style-33">
                  <img src="https://www.uni.cards/images/forex_globe.png" className="style-34" />
                </div>
              </div>
            </div>
          </div>
          <div className="style-35">
            <p className="style-36">
              Lifetime <span className="style-37">free. </span>
              <span className="style-38">No joining fee.</span>
              <span className="style-39"> No annual charges. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
