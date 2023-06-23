import { memo, useState, useCallback } from "react";
import ConnectWallet from "./ConnectWallet";
import PortalPopup from "./PortalPopup";
import SignUpModalStep1Choose from "./SignUpModalStep1Choose";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import SwapATokens from "./SwapATokens";

const NavigationBar = memo(() => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const onCartIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const openConnectWallet = useCallback(() => {
    setConnectWalletOpen(true);
  }, []);

  const closeConnectWallet = useCallback(() => {
    setConnectWalletOpen(false);
  }, []);

  const onLightningIconClick = useCallback(() => {
    navigate("/your-favorite");
  }, [navigate]);

  const onLeaderBoardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const openSwapATokens = useCallback(() => {
    setSwapATokensOpen(true);
  }, []);

  const closeSwapATokens = useCallback(() => {
    setSwapATokensOpen(false);
  }, []);

  const openSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(true);
  }, []);

  const closeSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: absolute;
          width: 100%;
          top: 0px;
          right: 0px;
          left: 0px;
          height: 100px;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-darkgray);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            background-color: var(--color-white);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          `}
        />
        <img
          className={css`
            position: absolute;
            height: calc(100% - 40.82px);
            top: 20.41px;
            bottom: 20.41px;
            left: 70px;
            max-height: 100%;
            width: 247.9px;
            object-fit: cover;
          `}
          alt=""
          src="/logo1@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 15px);
            right: 70px;
            width: 202.49px;
            height: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--gap-16xl);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 30px;
              height: 30px;
            `}
            alt=""
            src="/user.svg"
          />
          <img
            className={css`
              position: relative;
              width: 30px;
              height: 30px;
              cursor: pointer;
            `}
            alt=""
            src="/cart.svg"
            onClick={onCartIconClick}
          />
          <img
            className={css`
              position: relative;
              width: 20.64px;
              height: 19.17px;
              cursor: pointer;
            `}
            alt=""
            src="/wallet.svg"
            onClick={openConnectWallet}
          />
          <img
            className={css`
              position: relative;
              width: 16.85px;
              height: 22.32px;
              cursor: pointer;
              margin-top: 3px;
            `}
            alt=""
            src="/lightning.svg"
            onClick={onLightningIconClick}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 23px);
            left: calc(50% - 573px);
            border-radius: var(--br-4xl);
            background-color: var(--color-white);
            border: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            width: 746px;
            height: 46px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 6px);
              left: 44px;
            `}
          >
            Search
          </div>
          <img
            className={css`
              position: absolute;
              bottom: 14px;
              left: 16px;
              width: 16.04px;
              height: 16.4px;
            `}
            alt=""
            src="/search.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 5px);
            right: 332px;
            width: 347px;
            height: 16px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: var(--gap-20xl);
            text-align: center;
            color: var(--color-gray-400);
          `}
        >
          <div
            className={css`
              position: relative;
              font-weight: 600;
              cursor: pointer;
            `}
            onClick={onLeaderBoardTextClick}
          >
            LeaderBoard
          </div>
          <div
            className={css`
              position: relative;
              font-weight: 600;
              cursor: pointer;
            `}
            onClick={openSwapATokens}
          >
            Swap
          </div>
          <div
            className={css`
              position: relative;
              font-weight: 600;
            `}
          >
            Login
          </div>
          <div
            className={css`
              position: relative;
              font-weight: 600;
              cursor: pointer;
            `}
            onClick={openSignUpModalStep1Choose}
          >
            Sign Up
          </div>
        </div>
      </div>
      {isConnectWalletOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWallet}
        >
          <ConnectWallet onClose={closeConnectWallet} />
        </PortalPopup>
      )}
      {isSwapATokensOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSwapATokens}
        >
          <SwapATokens onClose={closeSwapATokens} />
        </PortalPopup>
      )}
      {isSignUpModalStep1ChooseOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpModalStep1Choose}
        >
          <SignUpModalStep1Choose onClose={closeSignUpModalStep1Choose} />
        </PortalPopup>
      )}
    </>
  );
});

export default NavigationBar;
