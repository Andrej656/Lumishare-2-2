import { memo } from "react";
import { css } from "@emotion/css";

const Filter = memo(({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        width: 375px;
        height: 812px;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: left;
        font-size: var(--font-size-26xl);
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
          height: calc(100% - 128px);
          width: 100%;
          top: 128px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          border-radius: var(--br-xl) var(--br-xl) 0px 0px;
          background-color: var(--color-white);
          box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.28);
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
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% + 207px);
          right: 18.93px;
          width: 106.07px;
          height: 55px;
          display: none;
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
          width: calc(100% - 39px);
          top: calc(50% - 196px);
          right: 19px;
          left: 20px;
          height: 453.93px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          font-size: var(--font-size-base);
        `}
      >
        <div
          className={css`
            position: relative;
            width: 336px;
            height: 63.83px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: 299px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            price
          </div>
          <div
            className={css`
              position: absolute;
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              height: 36.35px;
              font-size: var(--font-size-xs);
              color: var(--color-darkgray);
            `}
          >
            <img
              className={css`
                position: absolute;
                bottom: 11.35px;
                left: calc(50% - 168px);
                width: 335px;
                height: 25px;
              `}
              alt=""
              src="/group-54878.svg"
            />
            <div
              className={css`
                position: absolute;
                right: 328px;
                bottom: 0px;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                right: -1px;
                bottom: 0px;
              `}
            >
              100
            </div>
          </div>
        </div>
        <div
          className={css`
            position: relative;
            width: 336px;
            height: 63.84px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 31.92px);
              left: 0px;
              width: 35px;
              height: 16px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                text-transform: capitalize;
                font-weight: 600;
              `}
            >
              Yield
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              height: 36.35px;
              font-size: var(--font-size-xs);
              color: var(--color-darkgray);
            `}
          >
            <img
              className={css`
                position: absolute;
                bottom: 11.35px;
                left: calc(50% - 168px);
                width: 335px;
                height: 25px;
              `}
              alt=""
              src="/group-548781.svg"
            />
            <div
              className={css`
                position: absolute;
                right: 328px;
                bottom: 0px;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                right: -1px;
                bottom: 0px;
              `}
            >
              100
            </div>
          </div>
        </div>
        <div
          className={css`
            position: relative;
            width: 336px;
            height: 63.84px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 31.92px);
              left: 0px;
              width: 128px;
              height: 16px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                text-transform: capitalize;
                font-weight: 600;
              `}
            >
              Average Revenue
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              height: 36.35px;
              font-size: var(--font-size-xs);
              color: var(--color-darkgray);
            `}
          >
            <img
              className={css`
                position: absolute;
                bottom: 11.35px;
                left: calc(50% - 168px);
                width: 335px;
                height: 25px;
              `}
              alt=""
              src="/group-548781.svg"
            />
            <div
              className={css`
                position: absolute;
                right: 328px;
                bottom: 0px;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                right: -1px;
                bottom: 0px;
              `}
            >
              100
            </div>
          </div>
        </div>
        <div
          className={css`
            position: relative;
            width: 335px;
            height: 78px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: 271.5px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            location
          </div>
          <div
            className={css`
              position: absolute;
              top: 27px;
              right: 0px;
              border-radius: var(--br-5xs);
              background-color: var(--color-white);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              width: 336px;
              height: 51px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% + 8px);
              left: 15px;
              color: var(--color-darkgray);
            `}
          >
            All locations
          </div>
          <img
            className={css`
              position: absolute;
              top: calc(50% + 11.62px);
              left: calc(50% + 132.68px);
              width: 14.33px;
              height: 8.85px;
            `}
            alt=""
            src="/path-44489.svg"
          />
        </div>
        <div
          className={css`
            position: relative;
            width: 335px;
            height: 51.42px;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 47.49%;
              width: 100%;
              top: 52.51%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/group-54887.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 0px;
              right: 297px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            Rank
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 40px);
          right: 20px;
          bottom: 30px;
          left: 20px;
          height: 45px;
          text-align: center;
          font-size: var(--font-size-sm);
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
            border: 2px solid var(--color-mediumseagreen);
            box-sizing: border-box;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 5.5px);
            left: calc(50% - 17.5px);
            line-height: 7px;
            text-transform: capitalize;
            font-weight: 600;
          `}
        >
          Apply
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% - 246px);
          left: calc(50% - 29.5px);
          font-size: var(--font-size-3xl);
          font-weight: 600;
          text-align: center;
        `}
      >
        Filters
      </div>
    </div>
  );
});

export default Filter;
