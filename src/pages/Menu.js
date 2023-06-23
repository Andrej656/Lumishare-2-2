import { useState, useCallback } from "react";
import Swap from "../components/Swap";
import PortalPopup from "../components/PortalPopup";
import ConnectWallet1 from "../components/ConnectWallet1";
import { css } from "@emotion/css";

const Menu = () => {
  const [isSwapOpen, setSwapOpen] = useState(false);
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);

  const openSwap = useCallback(() => {
    setSwapOpen(true);
  }, []);

  const closeSwap = useCallback(() => {
    setSwapOpen(false);
  }, []);

  const openConnectWallet = useCallback(() => {
    setConnectWalletOpen(true);
  }, []);

  const closeConnectWallet = useCallback(() => {
    setConnectWalletOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          background-color: var(--color-white);
          width: 100%;
          height: 812px;
          text-align: left;
          font-size: var(--font-size-26xl);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
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
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
            height: 60px;
            font-size: var(--font-size-7xl);
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
              background-color: var(--color-white);
              box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14);
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 8px);
              left: 154px;
              line-height: 25px;
              font-weight: 600;
            `}
          >
            Menu
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 113.63px;
            left: 15px;
            width: 171px;
            height: 320.47px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 45px;
            text-align: center;
            font-size: var(--font-size-xl);
          `}
        >
          <div
            className={css`
              position: relative;
              width: 166px;
              height: 28.79px;
              margin-left: 5px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 7px;
                left: 50px;
                font-weight: 600;
              `}
            >
              LeaderBoard
            </div>
            <img
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 0px;
                max-height: 100%;
                width: 30px;
              `}
              alt=""
              src="/trophy.svg"
            />
          </div>
          <div
            className={css`
              position: relative;
              width: 100px;
              height: 30px;
              cursor: pointer;
              margin-left: 5px;
            `}
            onClick={openSwap}
          >
            <div
              className={css`
                position: absolute;
                top: 8px;
                left: calc(50% - 1px);
                font-weight: 600;
              `}
            >
              Swap
            </div>
            <img
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 0px;
                max-height: 100%;
                width: 30px;
              `}
              alt=""
              src="/swap.svg"
            />
          </div>
          <div
            className={css`
              position: relative;
              width: 124px;
              height: 32.28px;
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
                width: 32.28px;
              `}
              alt=""
              src="/path-38313.svg"
            />
            <img
              className={css`
                position: absolute;
                bottom: 1.68px;
                left: 5.38px;
                width: 25.56px;
                height: 24.97px;
              `}
              alt=""
              src="/iconlylightoutlinebuy3.svg"
            />
            <div
              className={css`
                position: absolute;
                top: 9.14px;
                left: calc(50% - 8px);
                font-weight: 600;
              `}
            >
              My Cart
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 136px;
              height: 24.17px;
              cursor: pointer;
              margin-left: 8px;
            `}
            onClick={openConnectWallet}
          >
            <img
              className={css`
                position: absolute;
                height: calc(100% - 3px);
                width: calc(100% - 113.36px);
                top: 0px;
                right: 113.36px;
                bottom: 3px;
                left: 0px;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/wallet1.svg"
            />
            <div
              className={css`
                position: absolute;
                top: 4.17px;
                left: calc(50% - 20px);
                font-weight: 600;
              `}
            >
              My Wallet
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 116px;
              height: 25.4px;
              margin-left: 9px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 5.4px;
                left: calc(50% - 14px);
                font-weight: 600;
              `}
            >
              Log Out
            </div>
            <img
              className={css`
                position: absolute;
                height: calc(100% - 0.6px);
                top: 0px;
                bottom: 0.6px;
                left: 0px;
                max-height: 100%;
                width: 22.92px;
              `}
              alt=""
              src="/log-out.svg"
            />
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            width: calc(100% + 6px);
            right: -6px;
            bottom: -6px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            height: 66px;
          `}
          alt=""
          src="/component-118--13.svg"
        />
      </div>
      {isSwapOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSwap}
        >
          <Swap onClose={closeSwap} />
        </PortalPopup>
      )}
      {isConnectWalletOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWallet}
        >
          <ConnectWallet1 onClose={closeConnectWallet} />
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;
