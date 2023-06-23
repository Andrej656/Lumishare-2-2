import { useState, useCallback } from "react";
import SelectAToken from "../components/SelectAToken";
import PortalPopup from "../components/PortalPopup";
import { css } from "@emotion/css";

const SwapATokensWithPopup = () => {
  const [isSelectATokenOpen, setSelectATokenOpen] = useState(false);

  const openSelectAToken = useCallback(() => {
    setSelectATokenOpen(true);
  }, []);

  const closeSelectAToken = useCallback(() => {
    setSelectATokenOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          width: 100%;
          height: 923px;
          text-align: left;
          font-size: var(--font-size-3xl);
          color: var(--color-silver-100);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: calc(100% - 21px);
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 21px;
            background-color: var(--color-white);
            box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.16);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 64px);
              top: 78px;
              right: 32px;
              left: 32px;
              border-radius: var(--br-mini);
              background-color: var(--color-white);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              height: 232px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% - 30px);
                top: calc(50% - 27px);
                right: 15px;
                left: 15px;
                height: 70px;
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
                  background-color: var(--color-whitesmoke);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 9px);
                  left: 10px;
                `}
              >
                0.0
              </div>
              <div
                className={css`
                  position: absolute;
                  height: calc(100% - 34px);
                  top: 17px;
                  right: 10px;
                  bottom: 17px;
                  width: 108px;
                  font-size: var(--font-size-sm);
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
                    background-color: var(--color-gainsboro-100);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 18px);
                  `}
                >
                  Swap
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 8px);
                    right: 10px;
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
                <img
                  className={css`
                    position: absolute;
                    height: calc(100% - 16px);
                    width: calc(100% - 88px);
                    top: 8px;
                    right: 77px;
                    bottom: 8px;
                    left: 11px;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-54774@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 30px);
                top: 15px;
                right: 15px;
                left: 15px;
                height: 70px;
                cursor: pointer;
              `}
              onClick={openSelectAToken}
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
                  background-color: var(--color-whitesmoke);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 9px);
                  left: 10px;
                `}
              >
                0.0
              </div>
              <div
                className={css`
                  position: absolute;
                  height: calc(100% - 34px);
                  top: 17px;
                  right: 10px;
                  bottom: 17px;
                  width: 108px;
                  font-size: var(--font-size-sm);
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
                    background-color: var(--color-gainsboro-100);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 18px);
                  `}
                >
                  Swap
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 8px);
                    right: 10px;
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
                <img
                  className={css`
                    position: absolute;
                    height: calc(100% - 16px);
                    width: calc(100% - 88px);
                    top: 8px;
                    right: 77px;
                    bottom: 8px;
                    left: 11px;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-54774@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 30px);
                right: 15px;
                bottom: 15px;
                left: 15px;
                height: 45px;
                text-align: center;
                font-size: var(--font-size-sm);
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
                  background-color: var(--color-goldenrod);
                  border: 2px solid var(--color-goldenrod);
                  box-sizing: border-box;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 5.5px);
                  left: calc(50% - 48.5px);
                  line-height: 7px;
                  text-transform: capitalize;
                  font-weight: 600;
                `}
              >{`Connect wallet `}</div>
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 44px);
                left: calc(50% - 14.5px);
                width: 30px;
                height: 30px;
              `}
              alt=""
              src="/down-arrow-icon.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 36px;
              left: calc(50% - 177.5px);
              font-size: var(--font-size-lg);
              font-weight: 600;
              color: var(--color-gray-400);
            `}
          >
            Swap a Tokens
          </div>
        </div>
      </div>
      {isSelectATokenOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSelectAToken}
        >
          <SelectAToken onClose={closeSelectAToken} />
        </PortalPopup>
      )}
    </>
  );
};

export default SwapATokensWithPopup;
