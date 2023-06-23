import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const InvestorProfile1 = () => {
  const navigate = useNavigate();

  const onAgricultureImageClick = useCallback(() => {
    navigate("/farm-profile1");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: var(--color-white);
        width: 100%;
        height: 1582px;
        text-align: left;
        font-size: var(--font-size-lg);
        color: var(--color-gray-400);
        font-family: var(--font-exo-2);
      `}
    >
      <div
        className={css`
          position: absolute;
          width: calc(100% + 1px);
          top: calc(50% - 301px);
          right: 0.5px;
          left: -1.5px;
          height: 488.5px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 11.5px;
            font-weight: 600;
          `}
        >
          Investment History
        </div>
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: calc(50% - 233.75px);
            right: 0px;
            left: 0px;
            height: 478px;
            overflow-x: auto;
            mix-blend-mode: normal;
            font-size: var(--font-size-base);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: calc(100% + 709px);
              top: 0px;
              right: -698px;
              bottom: 0px;
              left: -11px;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: calc(100% - 45px);
                top: 17.5px;
                bottom: 27.5px;
                left: 22.5px;
                width: 342px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                    cursor: pointer;
                  `}
                  alt=""
                  src="/agriculture-image@2x.png"
                  onClick={onAgricultureImageClick}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 45px);
                top: 17.5px;
                bottom: 27.5px;
                left: calc(50% - 165px);
                width: 342px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 45px);
                top: 17.5px;
                right: 10.5px;
                bottom: 27.5px;
                width: 342px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 45px);
                top: 17.5px;
                right: -344.5px;
                bottom: 27.5px;
                width: 342px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          width: 100%;
          top: 0px;
          right: 0px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          height: 178px;
          object-fit: cover;
        `}
        alt=""
        src="/mask-group-201@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: calc(50% - 178px);
          right: 18.93px;
          width: 106.07px;
          height: 55px;
          display: none;
          font-size: var(--font-size-26xl);
          color: var(--color-darkslategray-100);
          font-family: var(--font-montserrat);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            font-weight: 600;
            opacity: 0.5;
          `}
        >
          4.5
        </div>
        <img
          className={css`
            position: absolute;
            height: calc(100% - 24.47px);
            top: 12.73px;
            right: 0px;
            bottom: 11.73px;
            max-height: 100%;
            width: 32.14px;
            opacity: 0.5;
          `}
          alt=""
          src="/star.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 215px;
          left: 10px;
          width: 169px;
          height: 26px;
          font-size: var(--font-size-7xl);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 13px);
            left: 0px;
            line-height: 25px;
            font-weight: 600;
          `}
        >
          Investor Name
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          height: calc(100% - 1552.71px);
          top: 213.21px;
          bottom: 1339.5px;
          left: calc(50% + 10px);
          max-height: 100%;
          width: 23.74px;
        `}
        alt=""
        src="/group-54814.svg"
      />
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          top: calc(50% - 395px);
          right: 10px;
          left: 10px;
          height: 61px;
          font-size: var(--font-size-sm);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% + 1px);
            top: 0px;
            left: 0px;
            line-height: 19px;
            display: inline-block;
            height: 39px;
          `}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 82px;
            height: 19px;
          `}
        >
          <div
            className={css`
              position: absolute;
              bottom: 2px;
              left: 0px;
            `}
          >
            See more
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              width: 19px;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: calc(50% - 2.58px);
                left: calc(50% - 4.75px);
                width: 9.54px;
                height: 5.23px;
              `}
              alt=""
              src="/union.svg"
            />
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          width: calc(100% + 25px);
          top: 0px;
          right: -25px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          height: 86px;
        `}
        alt=""
        src="/group-55054.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 128px;
          left: 10px;
          width: 75px;
          height: 75px;
        `}
        alt=""
        src="/group-55060.svg"
      />
      <div
        className={css`
          position: absolute;
          top: calc(50% - 570.37px);
          right: 10px;
          width: 109px;
          height: 13.37px;
          font-size: var(--font-size-xs);
          color: var(--color-darkgray);
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            right: 0px;
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/star-icon.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: calc(50% + 27.29px);
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/star-icon.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: calc(50% + 11.29px);
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/star-icon.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: calc(50% - 4.71px);
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/star-icon.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 33.79px;
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/icon-awesomestar.svg"
        />
        <div
          className={css`
            position: absolute;
            right: 83px;
            bottom: 0px;
          `}
        >
          (1.8)
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% - 458px);
          left: 10px;
          width: 289px;
          height: 34px;
          font-size: var(--font-size-base);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 17px);
            left: calc(50% - 30.5px);
            border-radius: var(--br-5xs);
            background-color: var(--color-gainsboro-100);
            width: 175px;
            height: 34px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5.5px);
              left: calc(50% - 59px);
              font-weight: 500;
            `}
          >
            Send a Message
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 17px);
            left: 0px;
            width: 104px;
            height: 34px;
            color: var(--color-white);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-5xs);
              background-color: var(--color-mediumseagreen);
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5.6px);
              left: calc(50% - 25px);
              width: 46px;
              height: 16px;
            `}
          >
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: calc(50% - 23px);
                font-weight: 500;
              `}
            >
              Follow
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 264.87px;
          left: 10px;
          width: 307px;
          height: 48px;
          font-size: var(--font-size-sm);
          color: var(--color-darkgray);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
          `}
        >
          Followers
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 248px;
          `}
        >
          Following
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 123px;
          `}
        >
          Posts
        </div>
        <div
          className={css`
            position: absolute;
            top: 22px;
            left: 0px;
            width: 58px;
            height: 26px;
            font-size: var(--font-size-7xl);
            color: var(--color-gray-400);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: -1px;
              font-weight: 600;
            `}
          >
            5.6M
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 22px;
            left: 248px;
            width: 43px;
            height: 26px;
            font-size: var(--font-size-7xl);
            color: var(--color-gray-400);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: -1px;
              font-weight: 600;
            `}
          >
            152
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 22px;
            left: 123px;
            width: 65px;
            height: 26px;
            font-size: var(--font-size-7xl);
            color: var(--color-gray-400);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: -1px;
              font-weight: 600;
            `}
          >
            1,529
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 152px;
          right: 10px;
          width: 184px;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: var(--gap-5xs);
        `}
      >
        <img
          className={css`
            position: relative;
            width: 85px;
            height: 85px;
          `}
          alt=""
          src="/component-108--38.svg"
        />
        <img
          className={css`
            position: relative;
            width: 85px;
            height: 85px;
          `}
          alt=""
          src="/component-108--37.svg"
        />
        <img
          className={css`
            position: relative;
            width: 85px;
            height: 85px;
          `}
          alt=""
          src="/component-108--36.svg"
        />
        <img
          className={css`
            position: relative;
            width: 85px;
            height: 85px;
          `}
          alt=""
          src="/component-108--35.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% + 1332px);
          right: -1332px;
          bottom: 86px;
          left: 0px;
          height: 487px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 10px;
            font-weight: 600;
          `}
        >
          Energy I Produce
        </div>
        <div
          className={css`
            position: absolute;
            height: calc(100% - 37px);
            width: 100%;
            top: 37px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            font-size: var(--font-size-xs);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 4px);
              right: -6px;
              bottom: 0px;
              left: 10px;
              height: 386px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 48px;
                right: 0px;
                width: 117px;
                height: 216px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: var(--gap-2xl);
                font-size: var(--font-size-sm);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: 86px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                  `}
                >
                  Daily output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  54.09 kWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 111px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                  `}
                >
                  Monthly output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  4,786.21 kWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 117px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                  `}
                >
                  Total output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  1,221.75 MWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 97px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                  `}
                >
                  <span>CO</span>
                  <span
                    className={css`
                      font-size: var(--font-size-5xs-7);
                      vertical-align: sub;
                    `}
                  >
                    2
                  </span>
                  <span> avoidance</span>
                </div>
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  684.58 t
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 374px;
                height: 309px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    height: calc(100% - 22.5px);
                    width: calc(100% - 54.5px);
                    top: 0px;
                    right: -0.5px;
                    bottom: 22.5px;
                    left: 55px;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/x-axis-line1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 17px;
                    left: 14px;
                  `}
                >
                  0kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 82.5px);
                    left: 2px;
                  `}
                >
                  100kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 38.5px);
                    left: 0px;
                  `}
                >
                  200kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 4.5px);
                    left: 0px;
                  `}
                >
                  300kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 48.5px);
                    left: 0px;
                  `}
                >
                  400kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 91.5px);
                    left: 1px;
                  `}
                >
                  500kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 20px;
                    left: 2px;
                    text-align: right;
                  `}
                >
                  600kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 64px);
                    top: calc(50% - 124.5px);
                    right: 9px;
                    left: 55px;
                    height: 279px;
                    overflow-x: auto;
                    mix-blend-mode: normal;
                    text-align: right;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 91.76%;
                      top: 0%;
                      bottom: 8.24%;
                      left: calc(50% - 138px);
                      width: 516px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-17xl);
                    `}
                  >
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 78px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-200);
                          width: 10px;
                          height: 44px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 28px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 233px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 83px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 150px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 44.67%;
                            width: 100%;
                            top: 55.33%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 55.33%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 44.67%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 89px;
                        display: flex;
                        flex-direction: column;
                        padding: 0px 0px var(--padding-48xl);
                        box-sizing: border-box;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 22px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 67px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 58.21%;
                            width: 100%;
                            top: 41.79%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 41.79%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 58.21%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 117px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 78px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 35.9%;
                            width: 100%;
                            top: 64.1%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 64.1%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 35.9%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 172px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 133px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 54.14%;
                            width: 100%;
                            top: 45.86%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 45.86%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 54.14%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 4.66%;
                      top: 95.34%;
                      bottom: 0%;
                      left: calc(50% - 148px);
                      width: 545px;
                      display: flex;
                      flex-direction: row;
                      padding: 0px var(--padding-3xs) 0px 0px;
                      box-sizing: border-box;
                      align-items: flex-end;
                      gap: var(--gap-mid);
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      10:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      11:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      12:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      13:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      14:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      15:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      16:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      17:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      18:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      19:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      20:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      21:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: 0px;
                width: 297px;
                height: 45px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-color: var(--color-gold-100);
                    width: 17px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  width: 127px;
                  height: 17px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-color: var(--color-gold-200);
                    width: 17px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-color: var(--color-orange);
                    width: 17px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 0px;
              width: 375px;
              height: 36px;
              overflow-x: auto;
              mix-blend-mode: normal;
              font-size: var(--font-size-sm);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0%;
                bottom: 0%;
                left: calc(50% - 177.5px);
                width: 531px;
                display: flex;
                flex-direction: row;
                padding: 0px var(--padding-3xs) 0px 0px;
                box-sizing: border-box;
                align-items: flex-start;
                gap: var(--gap-19xl);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: 86px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Daily output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  54.09 kWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 111px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Monthly output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  4,786.21 kWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 117px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Total output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  1,221.75 MWh
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 97px;
                  height: 36px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0%;
                    left: 0%;
                  `}
                >
                  <span>CO</span>
                  <span
                    className={css`
                      font-size: var(--font-size-5xs-7);
                      vertical-align: sub;
                    `}
                  >
                    2
                  </span>
                  <span> avoidance</span>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  684.58 t
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          width: calc(100% + 6px);
          top: calc(50% - 39px);
          right: -6px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          height: 66px;
        `}
        alt=""
        src="/component-118--1.svg"
      />
    </div>
  );
};

export default InvestorProfile1;
