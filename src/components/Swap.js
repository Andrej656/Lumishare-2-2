import { memo } from "react";
import { css } from "@emotion/css";

const Swap = memo(({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        width: 375px;
        height: 812px;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        font-size: var(--font-size-3xl);
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
          background-color: var(--color-darkslategray-200);
          opacity: 0.45;
        `}
      />
      <div
        className={css`
          position: absolute;
          width: 100%;
          right: 0px;
          bottom: 0px;
          left: 0px;
          border-radius: var(--br-xl) var(--br-xl) 0px 0px;
          background-color: var(--color-white);
          box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.28);
          height: 369px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 6px;
            left: calc(50% - 16.5px);
            border-radius: var(--br-11xs);
            background-color: var(--color-darkslategray-100);
            width: 34px;
            height: 3px;
            opacity: 0.15;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 32px;
            left: calc(50% - 73.5px);
            font-weight: 600;
          `}
        >
          Swap a Tokens
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% + 207px);
          right: 18.93px;
          width: 106.07px;
          height: 55px;
          display: none;
          text-align: left;
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
          width: calc(100% - 40px);
          right: 20px;
          bottom: 30px;
          left: 20px;
          height: 45px;
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
        >{`Connect Wallet `}</div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 50px);
          top: calc(50% + 133px);
          right: 25px;
          left: 25px;
          height: 142px;
          text-align: left;
          color: var(--color-silver-100);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            right: 0px;
            bottom: 0px;
            left: 0px;
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
                bottom: 8px;
                left: 11px;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/path-44516.svg"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
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
                bottom: 8px;
                left: 11px;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/path-44516.svg"
            />
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: calc(50% - 14px);
            left: calc(50% - 14.5px);
            width: 30px;
            height: 30px;
          `}
          alt=""
          src="/down-arrow-icon.svg"
        />
      </div>
    </div>
  );
});

export default Swap;
