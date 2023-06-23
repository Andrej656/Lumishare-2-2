import { memo, useState, useCallback } from "react";
import SignUpModalStep2Investo from "./SignUpModalStep2Investo";
import PortalPopup from "./PortalPopup";
import { css } from "@emotion/css";

const SignUpModalStep1Choose = memo(({ onClose }) => {
  const [isSignUpModalStep2InvestoOpen, setSignUpModalStep2InvestoOpen] =
    useState(false);

  const openSignUpModalStep2Investo = useCallback(() => {
    setSignUpModalStep2InvestoOpen(true);
  }, []);

  const closeSignUpModalStep2Investo = useCallback(() => {
    setSignUpModalStep2InvestoOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          width: 1920px;
          height: 920px;
          max-width: 100%;
          max-height: 100%;
          overflow: auto;
          text-align: center;
          font-size: var(--font-size-base);
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
              font-size: var(--font-size-21xl);
              line-height: 40px;
              font-weight: 600;
            `}
          >
            Let's create your account
          </div>
          <div
            className={css`
              position: absolute;
              top: 264px;
              left: calc(50% - 176.5px);
              display: inline-block;
              width: 353px;
            `}
          >
            Choose your profile type
          </div>
          <div
            className={css`
              position: absolute;
              top: 499px;
              left: calc(50% - 176.5px);
              display: inline-block;
              width: 353px;
            `}
          >
            <span>{`Already a member? `}</span>
            <b>Login</b>
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 25px);
              right: 100px;
              width: 258px;
              height: 60px;
              font-size: var(--font-size-lg);
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
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
              `}
            />
            <b
              className={css`
                position: absolute;
                top: 23px;
                left: calc(50% - 31px);
              `}
            >
              Creator
            </b>
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 25px);
              left: 100px;
              width: 251px;
              height: 60px;
              font-size: var(--font-size-lg);
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
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
              `}
            />
            <b
              className={css`
                position: absolute;
                top: 23px;
                left: calc(50% - 34.5px);
              `}
            >
              Investor
            </b>
          </div>
          <div
            className={css`
              position: absolute;
              width: calc(100% - 200px);
              top: calc(50% + 89px);
              right: 100px;
              left: 100px;
              border-radius: var(--br-5xs);
              background-color: var(--color-mediumseagreen);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              height: 60px;
              cursor: pointer;
              font-size: var(--font-size-xl);
              color: var(--color-white);
            `}
            onClick={openSignUpModalStep2Investo}
          >
            <div
              className={css`
                position: absolute;
                top: 23px;
                left: calc(50% - 20.5px);
                line-height: 12px;
                text-transform: capitalize;
                font-weight: 600;
              `}
            >
              Next
            </div>
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
                border-top: 1px solid var(--color-gainsboro-100);
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
                  opacity: 0.5;
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
                  src="/ellipse-20271.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 9px);
                    left: calc(50% - 6px);
                    font-weight: 600;
                    opacity: 0.5;
                  `}
                >
                  2
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
            src="/iconlylightoutlineclosesquare.svg"
          />
        </div>
      </div>
      {isSignUpModalStep2InvestoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpModalStep2Investo}
        >
          <SignUpModalStep2Investo onClose={closeSignUpModalStep2Investo} />
        </PortalPopup>
      )}
    </>
  );
});

export default SignUpModalStep1Choose;
