import { memo } from "react";
import { css } from "@emotion/css";

const ConnectWallet = memo(({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        width: 441px;
        height: 920px;
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
          width: calc(100% - 22px);
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 22px;
          background-color: var(--color-white);
          box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 36px;
            left: calc(50% - 177.5px);
            font-weight: 600;
          `}
        >
          Connect wallet
        </div>
        <div
          className={css`
            position: absolute;
            top: 66px;
            left: calc(50% - 177.5px);
            font-size: var(--font-size-base);
            line-height: 24px;
            display: inline-block;
            width: 353px;
          `}
        >
          Choose how you want to connect. There are several wallet providers.
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 64px);
            top: calc(50% - 320px);
            right: 32px;
            left: 32px;
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
              top: 9.63px;
              bottom: 9.62px;
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
              src="/mask-group-109@2x.png"
            />
          </div>
          <b
            className={css`
              position: absolute;
              top: 23px;
              left: calc(50% - 114.5px);
            `}
          >
            MetaMask
          </b>
          <div
            className={css`
              position: absolute;
              height: calc(100% - 19.25px);
              top: 9.63px;
              bottom: 9.62px;
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
            width: calc(100% - 64px);
            top: calc(50% - 248px);
            right: 32px;
            left: 32px;
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
              top: 9.63px;
              bottom: 9.62px;
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
              src="/mask-group-109@2x.png"
            />
          </div>
          <b
            className={css`
              position: absolute;
              top: 23px;
              left: calc(50% - 114.5px);
            `}
          >
            WalletConnect
          </b>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 64px);
            top: calc(50% - 157px);
            right: 32px;
            left: 32px;
            border-radius: var(--br-5xs);
            background-color: var(--color-white);
            border: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            height: 60px;
            text-align: center;
            font-size: var(--font-size-sm);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 26px;
              left: calc(50% - 34.5px);
              line-height: 7px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            Show more
          </div>
        </div>
      </div>
    </div>
  );
});

export default ConnectWallet;
