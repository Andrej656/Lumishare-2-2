import { memo } from "react";
import { css } from "@emotion/css";

const SelectAToken = memo(({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        width: 390px;
        height: 923px;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: left;
        font-size: var(--font-size-base);
        color: var(--color-gray-400);
        font-family: var(--font-exo-2);
      `}
    >
      <div
        className={css`
          position: absolute;
          width: calc(100% - 35px);
          top: 12px;
          right: 20px;
          left: 15px;
          border-radius: var(--br-mini);
          background-color: var(--color-white);
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.33);
          border: 1px solid var(--color-gainsboro-100);
          box-sizing: border-box;
          height: 735px;
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% - 30px);
            top: 83px;
            right: 15px;
            left: 15px;
            height: 46px;
            color: var(--color-darkgray);
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
              border: 1px solid var(--color-goldenrod);
              box-sizing: border-box;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 6px);
              left: 46px;
            `}
          >
            Search token name
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 10.5px);
              left: 43.5px;
              border-right: 2px solid var(--color-goldenrod);
              box-sizing: border-box;
              width: 4px;
              height: 20px;
            `}
          />
          <img
            className={css`
              position: absolute;
              top: 11px;
              left: 11px;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/search-icon.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 27px;
            left: calc(50% - 162.5px);
            font-size: var(--font-size-lg);
            font-weight: 600;
          `}
        >
          Select a Token
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 217.5px);
            left: 15px;
            width: 255px;
            height: 108px;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% - 28px);
              width: 100%;
              top: 28px;
              right: 0px;
              bottom: 0px;
              left: 0px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 85px;
                height: 36px;
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
                  border: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 12px;
                  right: 6px;
                `}
              >
                LUMI
              </div>
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 12px);
                  width: calc(100% - 61px);
                  top: 6px;
                  right: 53px;
                  bottom: 6px;
                  left: 8px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  object-fit: cover;
                `}
                alt=""
                src="/group-547741@2x.png"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: calc(50% - 37.5px);
                width: 81px;
                height: 36px;
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
                  background-color: rgba(229, 232, 235, 0.7);
                  border: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 12px;
                  right: 7px;
                `}
              >
                BNB
              </div>
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 12px);
                  width: calc(100% - 57px);
                  top: 6px;
                  right: 49px;
                  bottom: 6px;
                  left: 8px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  object-fit: cover;
                `}
                alt=""
                src="/group-547741@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 12px);
                  top: 6px;
                  bottom: 6px;
                  left: 8px;
                  max-height: 100%;
                  width: 24px;
                  object-fit: cover;
                `}
                alt=""
                src="/group-51697@2x.png"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: 0px;
                border-radius: var(--br-5xs);
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                width: 76px;
                height: 36px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 6px);
                  right: 8px;
                `}
              >
                DAI
              </div>
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 12px);
                  left: 8px;
                  width: 24px;
                  height: 24px;
                  object-fit: cover;
                `}
                alt=""
                src="/group-51697@2x.png"
              />
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-5xs);
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                width: 90px;
                height: 36px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 6px);
                  right: 5px;
                `}
              >
                USDT
              </div>
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 12px);
                  left: 8px;
                  width: 24px;
                  height: 24px;
                  object-fit: cover;
                `}
                alt=""
                src="/group-51697@2x.png"
              />
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: calc(50% - 29.5px);
                border-radius: var(--br-5xs);
                border: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                width: 96px;
                height: 36px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 6px);
                  right: 8px;
                `}
              >
                WBTC
              </div>
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 12px);
                  left: 8px;
                  width: 24px;
                  height: 24px;
                  object-fit: cover;
                `}
                alt=""
                src="/group-51697@2x.png"
              />
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 127.5px);
              font-size: var(--font-size-sm);
              color: var(--color-darkgray);
            `}
          >
            Common tokens
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            height: 4.08%;
            width: 8.45%;
            top: 1.63%;
            right: 3.38%;
            bottom: 94.29%;
            left: 88.17%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/x-button1.svg"
        />
        <div
          className={css`
            position: absolute;
            width: calc(100% + 1px);
            top: 65px;
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
            width: calc(100% + 1px);
            right: 0px;
            bottom: 74px;
            left: -1px;
            border-top: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            height: 2px;
          `}
        />
        <div
          className={css`
            position: absolute;
            width: calc(100% + 1px);
            top: calc(50% - 91.5px);
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
            bottom: 75px;
            left: calc(50% - 177.5px);
            width: 355px;
            height: 383px;
            overflow-y: auto;
            mix-blend-mode: normal;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% + 272px);
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: -272px;
              left: 0px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: 0px;
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: 60px;
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 207.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 147.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 87.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 27.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% + 32.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% + 92.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% + 152.5px);
                right: 0px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                right: 0px;
                bottom: 55px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                right: 0px;
                bottom: -5px;
                left: 0px;
                height: 60px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: calc(50% - 122.5px);
                  `}
                >
                  BNB
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: 23px;
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-51697@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 84.5px);
            right: 6px;
            border-radius: var(--br-9xs);
            background-color: #d7d9db;
            width: 5px;
            height: 71px;
          `}
        />
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
          >
            Manage Tokens
          </div>
        </div>
      </div>
    </div>
  );
});

export default SelectAToken;
