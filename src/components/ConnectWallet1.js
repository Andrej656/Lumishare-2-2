import { memo } from "react";
import { css } from "@emotion/css";

const ConnectWallet1 = memo(({ onClose }) => {
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
        font-size: var(--font-size-lg);
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
          height: 491px;
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
            left: calc(50% - 71.5px);
            font-size: var(--font-size-3xl);
            font-weight: 600;
            text-align: center;
          `}
        >
          Connect wallet
        </div>
        <div
          className={css`
            position: absolute;
            top: 116px;
            left: calc(50% - 167.5px);
            font-size: var(--font-size-base);
            line-height: 24px;
            display: inline-block;
            width: 336px;
          `}
        >
          Choose how you want to connect. There are several wallet providers.
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 40px);
            top: calc(50% - 41.5px);
            right: 20px;
            left: 20px;
            border-radius: var(--br-5xs);
            background-color: var(--color-white);
            border: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            height: 60px;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% - 19.25px);
              top: 9.41px;
              bottom: 9.84px;
              left: 13.46px;
              width: 40.75px;
              background-image: url("/public/group-40070@3x.png");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: top;
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
              src="/ellipse-1557.svg"
            />
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
              src="/mask-group-1091@2x.png"
            />
          </div>
          <b
            className={css`
              position: absolute;
              top: 23px;
              left: calc(50% - 109.5px);
            `}
          >
            MetaMask
          </b>
          <div
            className={css`
              position: absolute;
              height: calc(100% - 19.25px);
              top: 9.41px;
              bottom: 9.84px;
              left: 13.46px;
              width: 40.75px;
              background-image: url("/public/group-40070@3x.png");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: top;
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
              src="/ellipse-1557.svg"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 40px);
            top: calc(50% + 30.5px);
            right: 20px;
            left: 20px;
            border-radius: var(--br-5xs);
            background-color: var(--color-white);
            border: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            height: 60px;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% - 19.25px);
              top: 9.46px;
              bottom: 9.79px;
              left: 13.46px;
              width: 40.75px;
              background-image: url("/public/group-40070@3x.png");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: top;
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
              src="/ellipse-1557.svg"
            />
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
              src="/mask-group-1091@2x.png"
            />
          </div>
          <b
            className={css`
              position: absolute;
              top: 23px;
              left: calc(50% - 110.5px);
            `}
          >
            WalletConnect
          </b>
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
              background-color: var(--color-white);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5.5px);
              left: calc(50% - 34.5px);
              line-height: 7px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            Show More
          </div>
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
    </div>
  );
});

export default ConnectWallet1;
