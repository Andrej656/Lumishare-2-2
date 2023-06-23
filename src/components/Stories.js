import { memo } from "react";
import { css } from "@emotion/css";

const Stories = memo(({ onClose }) => {
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
        font-size: var(--font-size-sm);
        color: var(--color-white);
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
        `}
      />
      <div
        className={css`
          position: absolute;
          height: calc(100% - 20px);
          top: 15px;
          right: 176px;
          bottom: 5px;
          width: 1071px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            left: calc(50% - 491.5px);
            width: 507px;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 100%;
              width: calc(100% - 1px);
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 1px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            alt=""
            src="/mask-group-199@2x.png"
          />
          <div
            className={css`
              position: absolute;
              height: 11.11%;
              width: 100%;
              top: 88.89%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
              background: linear-gradient(180deg, rgba(35, 31, 32, 0), #231f20);
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 11.11%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 88.89%;
              left: 0%;
              border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
              background: linear-gradient(0deg, rgba(35, 31, 32, 0), #231f20);
            `}
          />
          <img
            className={css`
              position: absolute;
              height: 0.22%;
              width: 92.31%;
              top: 2.33%;
              right: 3.75%;
              bottom: 97.44%;
              left: 3.94%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/path-44483.svg"
          />
          <img
            className={css`
              position: absolute;
              bottom: 875.76px;
              left: calc(50% - 232.5px);
              width: 331.74px;
              height: 2px;
            `}
            alt=""
            src="/group-54861.svg"
          />
          <img
            className={css`
              position: absolute;
              height: calc(100% - 884.5px);
              top: 42px;
              bottom: 842.5px;
              left: calc(50% + 216.44px);
              max-height: 100%;
              width: 17.06px;
            `}
            alt=""
            src="/group-54986.svg"
          />
          <img
            className={css`
              position: absolute;
              height: calc(100% - 884.32px);
              width: calc(100% - 494.44px);
              top: 42px;
              right: 53.77px;
              bottom: 842.32px;
              left: 440.68px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/icon-awesomeplay1.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 31px;
              left: 21px;
              width: 154px;
              height: 35px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 0px;
                max-height: 100%;
                width: 35px;
              `}
              alt=""
              src="/group-54821.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 5.5px);
                right: 22px;
              `}
            >
              Creator Name
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 5.5px);
                right: -1px;
                color: var(--color-silver-200);
              `}
            >
              1h
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              width: calc(100% - 39.44px);
              right: 21.44px;
              bottom: 17px;
              left: 18px;
              height: 46px;
              text-align: left;
              font-size: var(--font-size-base);
              color: var(--color-silver-200);
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 57.18%;
                width: 5.63%;
                top: 20.33%;
                right: 8.22%;
                bottom: 22.5%;
                left: 86.16%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/icon-feathersun.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 12.11px);
                right: -2.41px;
                width: 25.63px;
                height: 25.63px;
              `}
              alt=""
              src="/send.svg"
            />
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: calc(100% - 82.56px);
                top: 0px;
                right: 82.56px;
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
                  border-radius: var(--br-4xl);
                  border: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: 21px;
                  `}
                >
                  Replay to [Creator name]
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: calc(50% - 12px);
            left: calc(50% + 28.5px);
            width: 50px;
            height: 50px;
          `}
          alt=""
          src="/component-112--1.svg"
        />
        <img
          className={css`
            position: absolute;
            top: calc(50% - 12px);
            left: calc(50% - 535.5px);
            width: 50px;
            height: 50px;
          `}
          alt=""
          src="/component-112--2.svg"
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 179px);
            left: calc(50% + 73.5px);
            width: 206px;
            height: 358px;
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
                height: 99.55%;
                width: 307.77%;
                top: -1.17%;
                right: -19.42%;
                bottom: 1.62%;
                left: -188.35%;
              `}
            />
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-3xs);
              background-color: var(--color-gray-200);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 65px);
                left: calc(50% - 44px);
                width: 88px;
                height: 106px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 24px);
                  top: 0px;
                  right: 12px;
                  left: 12px;
                  max-width: 100%;
                  overflow: hidden;
                  height: 64px;
                `}
                alt=""
                src="/group-54989.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 22px);
                  left: 0px;
                `}
              >
                Creator Name
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: calc(50% - 8px);
                `}
              >
                2h
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 179px);
            right: 0px;
            width: 206px;
            height: 358px;
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
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            alt=""
            src="/mask-group-200@2x.png"
          />
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-3xs);
              background-color: var(--color-gray-200);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 65px);
                left: calc(50% - 44px);
                width: 88px;
                height: 106px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 22px);
                  left: 0px;
                `}
              >
                Creator Name
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: calc(50% - 8px);
                `}
              >
                3h
              </div>
              <img
                className={css`
                  position: absolute;
                  height: 52.28%;
                  width: 62.97%;
                  top: 4.05%;
                  right: 18.51%;
                  bottom: 43.67%;
                  left: 18.51%;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-1993@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: 60.38%;
                  width: 72.73%;
                  top: 0%;
                  right: 13.64%;
                  bottom: 39.62%;
                  left: 13.64%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-44454.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          height: 4.35%;
          width: 2.08%;
          top: 5.54%;
          right: 3.65%;
          bottom: 90.11%;
          left: 94.27%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/x-button.svg"
      />
    </div>
  );
});

export default Stories;
