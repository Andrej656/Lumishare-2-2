import { memo } from "react";
import { css } from "@emotion/css";

const SignUpModalStep2Investo = memo(({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        width: 1920px;
        height: 920px;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        font-size: var(--font-size-21xl);
        color: var(--color-gray-400);
        font-family: var(--font-exo-2);
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
          background-color: var(--color-gray-200);
          opacity: 0.21;
        `}
      />
      <div
        className={css`
          position: absolute;
          height: calc(100% - 248px);
          top: 124px;
          bottom: 124px;
          left: calc(50% - 367px);
          border-radius: var(--br-lg);
          background-color: var(--color-white);
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          width: 735px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 292.65px);
            left: 144px;
            line-height: 40px;
            font-weight: 600;
          `}
        >
          Let's create your account
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 199px);
            top: calc(50% - 209px);
            right: 99px;
            left: 100px;
            height: 63px;
            font-size: var(--font-size-sm);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 42px);
              top: calc(50% - 12px);
              right: 24.5px;
              left: 17.5px;
              border-top: 1px solid #ffcc00;
              box-sizing: border-box;
              height: 2px;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              bottom: 0px;
              left: 0px;
              width: 74px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 49px;
                left: calc(50% - 37px);
                text-transform: capitalize;
              `}
            >
              profile type
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: calc(50% - 20px);
                width: 40px;
                height: 40px;
                text-align: left;
                font-size: var(--font-size-3xl);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/ellipse-2027.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 9px);
                  left: calc(50% - 5px);
                  font-weight: 600;
                `}
              >
                1
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              width: 50px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 49px;
                left: calc(50% - 25px);
                text-transform: capitalize;
              `}
            >
              Sign Up
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 10px);
                top: 0px;
                right: 5px;
                left: 5px;
                height: 40px;
                font-size: var(--font-size-3xl);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/ellipse-2027.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 9px);
                  left: calc(50% - 6px);
                  font-weight: 600;
                `}
              >
                2
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: calc(50% - 267.5px);
            width: 535px;
            height: 463px;
            overflow-y: auto;
            mix-blend-mode: normal;
            font-size: var(--font-size-xl);
            color: var(--color-white);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% + 572px);
              width: 100%;
              top: 18px;
              right: 0px;
              bottom: -590px;
              left: 0px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: 100%;
                right: 0px;
                bottom: 40px;
                left: 0px;
                border-radius: var(--br-5xs);
                background-color: var(--color-mediumseagreen);
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 60px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 23px;
                  left: calc(50% - 35.5px);
                  line-height: 12px;
                  text-transform: capitalize;
                  font-weight: 600;
                `}
              >
                Sign Up
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 517.5px);
                right: 0px;
                left: 0px;
                height: 882px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                text-align: left;
                font-size: var(--font-size-base);
                color: var(--color-darkgray);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 74px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 24px);
                    width: 100%;
                    top: 24px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-5xs);
                    background-color: var(--color-gray-100);
                    border: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 33px);
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >
                  Full name
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 74px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    width: 253px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 24px);
                      width: 100%;
                      top: 24px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: var(--br-5xs);
                      background-color: var(--color-gray-100);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 33px);
                      left: 15px;
                      text-transform: capitalize;
                    `}
                  >
                    Verify Email
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    width: 253px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 24px);
                      width: 100%;
                      top: 24px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: var(--br-5xs);
                      background-color: var(--color-gray-100);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 33px);
                      left: 15px;
                      text-transform: capitalize;
                    `}
                  >
                    Email
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  border-radius: var(--br-5xs);
                  background-color: var(--color-gray-100);
                  border: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                  width: 535px;
                  height: 70px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 15px;
                  `}
                >
                  Gender
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 3px);
                    right: 12px;
                    width: 19px;
                    height: 19px;
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
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 4px);
                    left: 15px;
                    color: var(--color-silver-200);
                  `}
                >
                  Choose your gender
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  border-radius: var(--br-5xs);
                  background-color: var(--color-gray-100);
                  border: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                  width: 535px;
                  height: 70px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >{`Country `}</div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 3px);
                    right: 12px;
                    width: 19px;
                    height: 19px;
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
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 4px);
                    left: 15px;
                    color: var(--color-silver-200);
                  `}
                >
                  Choose your country
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 74px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 24px);
                    width: 100%;
                    top: 24px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-5xs);
                    background-color: var(--color-gray-100);
                    border: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 33px);
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >
                  Government ID Number
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 124px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 58px);
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >
                  Government ID Picture
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 24px);
                    width: 100%;
                    top: 24px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    text-align: center;
                    color: var(--color-gray-400);
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
                      background-color: var(--color-gray-100);
                      border: 1px dashed var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 24px);
                      width: calc(100% - 459px);
                      top: 12px;
                      right: 447px;
                      bottom: 12px;
                      left: 12px;
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 156.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 91px;
                      height: 40px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 5.5px);
                        left: calc(50% - 25.2px);
                        font-weight: 500;
                      `}
                    >
                      Upload
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 101.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 45px;
                      height: 40px;
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        bottom: 10.5px;
                        left: 12.5px;
                        width: 20px;
                        height: 17.82px;
                      `}
                      alt=""
                      src="/iconlylightoutlinecamera.svg"
                    />
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 9.98px);
                      left: calc(50% - 227.48px);
                      width: 19.96px;
                      height: 19.95px;
                    `}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 124px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 58px);
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >
                  Profile Picture
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 24px);
                    width: 100%;
                    top: 24px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    text-align: center;
                    color: var(--color-gray-400);
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
                      background-color: var(--color-gray-100);
                      border: 1px dashed var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 24px);
                      width: calc(100% - 459px);
                      top: 12px;
                      right: 447px;
                      bottom: 12px;
                      left: 12px;
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 156.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 91px;
                      height: 40px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 5.5px);
                        left: calc(50% - 25.2px);
                        font-weight: 500;
                      `}
                    >
                      Upload
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 101.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 45px;
                      height: 40px;
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        bottom: 10.5px;
                        left: 12.5px;
                        width: 20px;
                        height: 17.82px;
                      `}
                      alt=""
                      src="/iconlylightoutlinecamera1.svg"
                    />
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 9.98px);
                      left: calc(50% - 227.48px);
                      width: 19.96px;
                      height: 19.95px;
                    `}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: relative;
                  width: 535px;
                  height: 124px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 58px);
                    left: 15px;
                    text-transform: capitalize;
                  `}
                >
                  Cover Picture
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 24px);
                    width: 100%;
                    top: 24px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    text-align: center;
                    color: var(--color-gray-400);
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
                      background-color: var(--color-gray-100);
                      border: 1px dashed var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 24px);
                      width: calc(100% - 459px);
                      top: 12px;
                      right: 447px;
                      bottom: 12px;
                      left: 12px;
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 156.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 91px;
                      height: 40px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 5.5px);
                        left: calc(50% - 25.2px);
                        font-weight: 500;
                      `}
                    >
                      Upload
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 20px);
                      left: calc(50% + 101.5px);
                      border-radius: var(--br-5xs);
                      background-color: var(--color-white);
                      border: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      width: 45px;
                      height: 40px;
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        bottom: 10.5px;
                        left: 12.5px;
                        width: 20px;
                        height: 17.82px;
                      `}
                      alt=""
                      src="/iconlylightoutlinecamera1.svg"
                    />
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 9.98px);
                      left: calc(50% - 227.48px);
                      width: 19.96px;
                      height: 19.95px;
                    `}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 11.27px;
            right: 11.27px;
            width: 29.46px;
            height: 29.46px;
          `}
          alt=""
          src="/iconlylightoutlineclosesquare1.svg"
        />
      </div>
    </div>
  );
});

export default SignUpModalStep2Investo;
