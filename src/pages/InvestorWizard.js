import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const InvestorWizard = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const onComponent91230Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91231Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onGroupContainer70Click = useCallback(() => {
    navigate("/new-market-place");
  }, [navigate]);

  const onComponent91211Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912111Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912112Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91232Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912321Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912322Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91234Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912341Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912342Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91233Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912331Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912332Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91213Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912131Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912132Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/new-market-place");
  }, [navigate]);

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
          position: relative;
          background-color: var(--color-white);
          width: 100%;
          height: 5717px;
          text-align: left;
          font-size: var(--font-size-9xl);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% - 140px);
            top: 181px;
            right: 70px;
            left: 70px;
            height: 103.5px;
            overflow-x: auto;
            mix-blend-mode: normal;
            text-align: center;
            font-size: var(--font-size-sm);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: calc(100% + 966px);
              top: 0px;
              right: -966px;
              bottom: 0px;
              left: 0px;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19931@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 102px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19932@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 204px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19933@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 306px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19934@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 408px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19935@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 863px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19936@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 761px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19937@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 659px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19938@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 557px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19939@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 455px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199310@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 353px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199311@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 251px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199312@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 149px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199313@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 47px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199314@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 55px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19931@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 157px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19932@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 259px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19933@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 361px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19934@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 463px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19935@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 565px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19936@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 667px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19937@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% + 769px);
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19938@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                right: 420px;
                bottom: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-19939@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                right: 318px;
                bottom: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199310@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                right: 216px;
                bottom: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199311@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                right: 114px;
                bottom: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199312@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                right: 12px;
                bottom: 0px;
                width: 82px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  width: calc(100% - 11px);
                  top: 5.5px;
                  right: 5.5px;
                  left: 5.5px;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 71px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-199313@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 21.5px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 21.5px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/path-444541.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6.5px;
                `}
              >
                User Name
              </div>
            </div>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 204px;
            right: 37px;
            width: 48px;
            height: 48px;
          `}
          alt=""
          src="/group-54745.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 133px;
            left: 70px;
            font-weight: 600;
          `}
        >
          Stories
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% + 169.03px);
            right: -169.03px;
            bottom: -0.03px;
            left: 0px;
            height: 1398.03px;
            font-size: var(--font-size-lg);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              height: 757.03px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% - 169.03px);
                right: 169.03px;
                bottom: 0px;
                left: 0px;
                height: 622px;
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
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 137px);
                  left: 70px;
                  border-radius: var(--br-4xl);
                  background-color: var(--color-white);
                  border: 1px solid var(--color-gray-200);
                  box-sizing: border-box;
                  width: 634px;
                  height: 46px;
                  font-size: var(--font-size-base);
                  color: var(--color-darkgray);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6px);
                    left: 25px;
                  `}
                >
                  Your email address
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 63px;
                  left: 70px;
                  font-size: var(--font-size-5xl);
                  font-weight: 600;
                `}
              >
                Stay in the loop
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 15px);
                  left: calc(50% - 259px);
                  width: 147px;
                  height: 229px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Marketplace
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: calc(50% - 73.5px);
                    right: 0px;
                    left: 0px;
                    height: 188px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--gap-xs);
                    font-size: var(--font-size-sm);
                    color: var(--color-dimgray);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Stories
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Top 10
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Trending
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Videos
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Based on Your Interest
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Recommended for you
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Articles
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 15px);
                  left: calc(50% - 0px);
                  width: 147px;
                  height: 229px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Links
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: calc(50% - 73.5px);
                    right: 0px;
                    left: 0px;
                    height: 188px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--gap-xs);
                    font-size: var(--font-size-sm);
                    color: var(--color-dimgray);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Stories
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Top 10
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Trending
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Videos
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Based on Your Interest
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Recommended for you
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Articles
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 15px);
                  left: calc(50% + 259px);
                  width: 147px;
                  height: 229px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    text-transform: capitalize;
                    font-weight: 600;
                  `}
                >
                  Join us
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: calc(50% - 73.5px);
                    right: 0px;
                    left: 0px;
                    height: 188px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--gap-xs);
                    font-size: var(--font-size-sm);
                    color: var(--color-dimgray);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Stories
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Top 10
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Trending
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Videos
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Based on Your Interest
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Recommended for you
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Articles
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 15px);
                  left: calc(50% + 518px);
                  width: 147px;
                  height: 229px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Marketplace
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: calc(50% - 73.5px);
                    right: 0px;
                    left: 0px;
                    height: 188px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--gap-xs);
                    font-size: var(--font-size-sm);
                    color: var(--color-dimgray);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Stories
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Top 10
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Trending
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Videos
                  </div>
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    Based on Your Interest
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Recommended for you
                  </div>
                  <div
                    className={css`
                      position: relative;
                      text-transform: capitalize;
                    `}
                  >
                    Articles
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 63px;
                  left: calc(50% + 3px);
                  font-size: var(--font-size-5xl);
                  font-weight: 600;
                `}
              >
                Join the community
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 209px);
                  left: 70px;
                  font-size: var(--font-size-base);
                  line-height: 22px;
                  display: inline-block;
                  width: 760px;
                `}
              >
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                LUMI.
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 137px);
                  right: 1083px;
                  width: 123.33px;
                  height: 46.86px;
                  text-align: center;
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
                    background: linear-gradient(180deg, #fceabb, #f8b500);
                    border: 1px solid var(--color-white);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 7px);
                      left: calc(50% - 37px);
                      line-height: 18px;
                      text-transform: uppercase;
                      font-weight: 600;
                    `}
                  >
                    sign up
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: calc(50% + 11.41px);
                  left: 70px;
                  width: 247.9px;
                  height: 59.17px;
                  object-fit: cover;
                `}
                alt=""
                src="/logo7@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 87px);
                  left: 70px;
                  font-size: var(--font-size-base);
                  line-height: 22px;
                  display: inline-block;
                  width: 346px;
                `}
              >
                Driving financial opportunities for billions of people in a
                trustworthy monetary framework.
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 139px);
                  top: calc(50% - 51.5px);
                  right: 69.5px;
                  left: 69.5px;
                  border-top: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                  height: 2px;
                  opacity: 0.35;
                `}
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
                `}
                alt=""
                src="/mask-group-193.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 210.03px);
                  left: calc(50% - 0px);
                  width: 264px;
                  height: 48px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  gap: var(--gap-7xs);
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 48px;
                    height: 48px;
                  `}
                  alt=""
                  src="/component-108--20.svg"
                />
                <img
                  className={css`
                    position: relative;
                    width: 48px;
                    height: 48px;
                  `}
                  alt=""
                  src="/component-108--19.svg"
                />
                <img
                  className={css`
                    position: relative;
                    width: 48px;
                    height: 48px;
                  `}
                  alt=""
                  src="/component-108--18.svg"
                />
                <img
                  className={css`
                    position: relative;
                    width: 48px;
                    height: 48px;
                  `}
                  alt=""
                  src="/component-108--17.svg"
                />
                <img
                  className={css`
                    position: relative;
                    width: 48px;
                    height: 48px;
                  `}
                  alt=""
                  src="/component-108--16.svg"
                />
              </div>
            </div>
            <img
              className={css`
                position: absolute;
                top: 91.03px;
                right: 91.03px;
                border-radius: 50%;
                width: 358px;
                height: 358px;
              `}
              alt=""
              src="/ellipse-1999.svg"
            />
            <img
              className={css`
                position: absolute;
                top: 153.03px;
                right: 393.03px;
                border-radius: 50%;
                width: 134px;
                height: 134px;
                opacity: 0.68;
              `}
              alt=""
              src="/ellipse-1998.svg"
            />
            <img
              className={css`
                position: absolute;
                height: 71.34%;
                width: 25.85%;
                top: 0%;
                right: 0%;
                bottom: 28.66%;
                left: 74.15%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/ellipse-1997.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              width: calc(100% - 264.53px);
              top: 0px;
              right: 217.03px;
              left: 47.5px;
              height: 695.5px;
              font-size: var(--font-size-base);
              color: var(--color-dimgray);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 22.5px;
                font-size: var(--font-size-13xl);
                font-weight: 600;
                color: var(--color-gray-400);
              `}
            >
              Top 5 Leaderboard
            </div>
            <div
              className={css`
                position: absolute;
                top: 58px;
                left: 22.5px;
                font-size: var(--font-size-3xl);
                font-weight: 600;
                color: var(--color-gray-400);
              `}
            >
              Investors
            </div>
            <div
              className={css`
                position: absolute;
                top: 58px;
                left: calc(50% + 49.75px);
                font-size: var(--font-size-3xl);
                font-weight: 600;
                color: var(--color-gray-400);
              `}
            >
              Creators
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 82.5px);
                top: 82.5px;
                bottom: 0px;
                left: 0px;
                width: 884px;
                font-size: var(--font-size-xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: 17.5px;
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-548081.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% - 171px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    2
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% - 53px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    3
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% + 65px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    4
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  right: 22.5px;
                  bottom: 13.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    5
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  right: 22.5px;
                  bottom: -104.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 82.5px);
                top: 82.5px;
                right: 0px;
                bottom: 0px;
                width: 884px;
                font-size: var(--font-size-xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: 17.5px;
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% - 171px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% - 53px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  top: calc(50% + 65px);
                  right: 22.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  right: 22.5px;
                  bottom: 13.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 45px);
                  right: 22.5px;
                  bottom: -104.5px;
                  left: 22.5px;
                  height: 110px;
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 28px);
                      top: 13px;
                      bottom: 15px;
                      left: 47px;
                      max-height: 100%;
                      width: 82px;
                    `}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 8px);
                      left: 17px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6px);
                      left: calc(50% - 270.5px);
                      font-size: var(--font-size-base);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    Investor name 1
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 5.87px);
                      right: 31.14px;
                      width: 75.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 117.14px;
                      bottom: 47px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-darkgray);
                    `}
                  >
                    (1.8)
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 133.23px;
                bottom: 518px;
                left: calc(50% - 252.75px);
                width: 35.88px;
                color: var(--color-goldenrod);
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44461.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44463.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44464.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44465.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 10.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  1
                </b>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 133.23px;
                bottom: 518px;
                left: calc(50% + 685.31px);
                width: 35.88px;
                color: var(--color-goldenrod);
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44461.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44463.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44464.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-44465.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 10.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  1
                </b>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 252.23px;
                bottom: 399px;
                left: calc(50% - 252.75px);
                width: 35.88px;
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444611.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444631.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444641.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444651.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 11.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  2
                </b>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 252.23px;
                bottom: 399px;
                left: calc(50% + 685.31px);
                width: 35.88px;
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444611.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444631.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444641.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444651.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 11.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  2
                </b>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 371.23px;
                bottom: 280px;
                left: calc(50% - 252.75px);
                width: 35.88px;
                color: var(--color-chocolate);
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444612.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444632.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444642.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444652.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 11.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  3
                </b>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 651.23px);
                top: 371.23px;
                bottom: 280px;
                left: calc(50% + 685.31px);
                width: 35.88px;
                color: var(--color-chocolate);
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
                <img
                  className={css`
                    position: absolute;
                    height: 43.65%;
                    width: 104.83%;
                    top: 59.56%;
                    right: -3.44%;
                    bottom: -3.21%;
                    left: -1.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444612.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.16%;
                    width: 14.2%;
                    top: 23.04%;
                    right: 62.48%;
                    bottom: 41.79%;
                    left: 23.32%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444632.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 35.02%;
                    width: 13.81%;
                    top: 23.19%;
                    right: 23.32%;
                    bottom: 41.79%;
                    left: 62.87%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444642.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 72.25%;
                    width: 89.15%;
                    top: 3.39%;
                    right: 5.43%;
                    bottom: 24.36%;
                    left: 5.43%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/path-444652.svg"
                />
                <b
                  className={css`
                    position: absolute;
                    top: calc(50% - 11.37px);
                    left: calc(50% - 3.94px);
                  `}
                >
                  3
                </b>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% + 480px);
            top: 350px;
            right: -550px;
            left: 70px;
            height: 3816px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}
        >
          <div
            className={css`
              position: relative;
              width: 2400px;
              height: 3816px;
            `}
          >
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: calc(50% - 601.5px);
                width: 583px;
                height: 433px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-base);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  top: 0px;
                  bottom: 0px;
                  left: calc(50% - 292px);
                  width: 1181px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  gap: var(--gap-mid);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 582px;
                    height: 433px;
                    cursor: pointer;
                  `}
                  onClick={onComponent91230Click}
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 64px;
                      width: 134px;
                      height: 19px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 4px;
                        left: 0px;
                        font-weight: 600;
                      `}
                    >
                      Farm owner name
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 15.5px);
                      left: 64px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                      display: inline-block;
                      width: 173px;
                      height: 17px;
                    `}
                  >
                    16/3/2023
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 0px);
                      right: 14px;
                      width: 76.21px;
                      height: 32.19px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        right: 1px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% + 9.89px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 6.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 22.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      width: calc(100% + 1px);
                      top: calc(50% + 156.5px);
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
                      right: 0px;
                      bottom: 0px;
                      width: 512px;
                      height: 59px;
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
                        border-radius: 0px 0px var(--br-mini) 0px;
                        background-color: var(--color-white);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: 215px;
                        bottom: 19px;
                        font-weight: 500;
                      `}
                    >
                      Read More
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      left: 0px;
                      max-width: 100%;
                      overflow: hidden;
                      height: 200px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/mask-group-197@2x.png"
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: 23.09%;
                      width: 100%;
                      top: 23.09%;
                      right: 0%;
                      bottom: 53.81%;
                      left: 0%;
                      background: linear-gradient(
                        180deg,
                        rgba(35, 31, 32, 0),
                        #231f20
                      );
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 63.5px);
                      left: calc(50% - 276px);
                      font-size: var(--font-size-sm);
                      line-height: 20px;
                      display: inline-block;
                      width: 553px;
                      height: 77px;
                    `}
                  >
                    Eius sunt voluptate quo esse magnam rem nulla dolorem optio.
                    Ratione quaerat qui accusantium sunt fugit quas sed dolorem.
                    Sint nostrum non eos nisi nihil voluptate. Natus ut unde
                    dolor nesciunt blanditiis et cum. Sed iste inventore
                    reprehenderit incidunt ipsa et. Eius sunt voluptate quo esse
                    magnam rem nulla dolorem optio. Ratione quaerat qui
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 46.5px);
                      left: calc(50% - 275px);
                      font-weight: 600;
                    `}
                  >
                    Article
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      width: 70px;
                      height: 59px;
                    `}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 69px;
                      left: 15px;
                      background: linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.56),
                        #fff
                      );
                      width: 552px;
                      height: 25px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 7.5px);
                      left: 15px;
                      width: 40px;
                      height: 40px;
                    `}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      width: calc(100% - 580px);
                      top: calc(50% + 156.5px);
                      right: 511px;
                      left: 69px;
                      border-right: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      height: 60px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 65.5px);
                      left: 16px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-white);
                    `}
                  >
                    Farm name
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 44.5px);
                      left: 16px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-white);
                      display: inline-block;
                      width: 173px;
                      height: 17px;
                    `}
                  >
                    Farm location
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 60.09px);
                      right: 14px;
                      width: 76.21px;
                      height: 32.19px;
                      font-size: var(--font-size-xs);
                      color: var(--color-white);
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        right: 1px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% + 9.89px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 6.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 22.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 9px;
                      right: 9px;
                      width: 30px;
                      height: 30px;
                    `}
                    alt=""
                    src="/share.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 582px;
                    height: 433px;
                    cursor: pointer;
                  `}
                  onClick={onComponent91231Click}
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
                      border-radius: var(--br-mini);
                      background-color: var(--color-white);
                      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 64px;
                      width: 134px;
                      height: 19px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 4px;
                        left: 0px;
                        font-weight: 600;
                      `}
                    >
                      Farm owner name
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 15.5px);
                      left: 64px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                      display: inline-block;
                      width: 173px;
                      height: 17px;
                    `}
                  >
                    16/3/2023
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 0px);
                      right: 14px;
                      width: 76.21px;
                      height: 32.19px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        right: 1px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% + 9.89px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 6.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 22.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      width: calc(100% + 1px);
                      top: calc(50% + 156.5px);
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
                      right: 0px;
                      bottom: 0px;
                      width: 512px;
                      height: 59px;
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
                        border-radius: 0px 0px var(--br-mini) 0px;
                        background-color: var(--color-white);
                        opacity: 0.8;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: 215px;
                        bottom: 19px;
                        font-weight: 500;
                      `}
                    >
                      Read More
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      left: 0px;
                      max-width: 100%;
                      overflow: hidden;
                      height: 200px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/mask-group-1974@2x.png"
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: 23.09%;
                      width: 100%;
                      top: 23.09%;
                      right: 0%;
                      bottom: 53.81%;
                      left: 0%;
                      background: linear-gradient(
                        180deg,
                        rgba(35, 31, 32, 0),
                        #231f20
                      );
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 63.5px);
                      left: calc(50% - 276px);
                      font-size: var(--font-size-sm);
                      line-height: 20px;
                      display: inline-block;
                      width: 553px;
                      height: 77px;
                    `}
                  >
                    Eius sunt voluptate quo esse magnam rem nulla dolorem optio.
                    Ratione quaerat qui accusantium sunt fugit quas sed dolorem.
                    Sint nostrum non eos nisi nihil voluptate. Natus ut unde
                    dolor nesciunt blanditiis et cum. Sed iste inventore
                    reprehenderit incidunt ipsa et. Eius sunt voluptate quo esse
                    magnam rem nulla dolorem optio. Ratione quaerat qui
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 46.5px);
                      left: calc(50% - 275px);
                      font-weight: 600;
                    `}
                  >
                    Article
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      width: 70px;
                      height: 59px;
                    `}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 69px;
                      left: 15px;
                      background: linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.56),
                        #fff
                      );
                      width: 552px;
                      height: 25px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 7.5px);
                      left: 15px;
                      width: 40px;
                      height: 40px;
                    `}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      width: calc(100% - 580px);
                      top: calc(50% + 156.5px);
                      right: 511px;
                      left: 69px;
                      border-right: 1px solid var(--color-gainsboro-100);
                      box-sizing: border-box;
                      height: 60px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 65.5px);
                      left: 16px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-white);
                    `}
                  >
                    Farm name
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 44.5px);
                      left: 16px;
                      font-size: var(--font-size-sm);
                      font-weight: 500;
                      color: var(--color-white);
                      display: inline-block;
                      width: 173px;
                      height: 17px;
                    `}
                  >
                    Farm location
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 60.09px);
                      right: 14px;
                      width: 76.21px;
                      height: 32.19px;
                      font-size: var(--font-size-xs);
                      color: var(--color-white);
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        right: 1px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% + 9.89px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 6.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: calc(50% - 22.11px);
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 11.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 9px;
                      right: 9px;
                      width: 30px;
                      height: 30px;
                    `}
                    alt=""
                    src="/share.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 452px;
                left: calc(50% - 362px);
                font-size: var(--font-size-13xl);
                font-weight: 600;
                text-align: center;
              `}
            >
              Articles
            </div>
            <img
              className={css`
                position: absolute;
                right: -18px;
                bottom: 176px;
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54749.svg"
            />
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: calc(50% - 442px);
                width: 47px;
                height: 25px;
                cursor: pointer;
              `}
              onClick={onGroupContainer70Click}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 93.62%;
                  top: 0%;
                  right: 6.38%;
                  bottom: 0%;
                  left: 0%;
                  border-radius: var(--br-xs);
                  background-color: var(--color-mediumseagreen);
                  transform: rotate(180deg);
                `}
              />
              <img
                className={css`
                  position: absolute;
                  height: 124%;
                  width: 65.96%;
                  top: 0%;
                  right: -12.77%;
                  bottom: -24%;
                  left: 46.81%;
                  border-radius: 50%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/ellipse-512.svg"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: 3px;
                left: calc(50% - 384px);
                font-weight: 600;
              `}
            >
              Investor Wizard
            </div>
            <div
              className={css`
                position: absolute;
                top: 71px;
                left: calc(50% - 354px);
                font-weight: 600;
              `}
            >
              Top 10
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 827px);
                left: calc(50% - 457px);
                text-transform: capitalize;
                font-weight: 600;
                text-align: center;
              `}
            >
              Recommended for you
            </div>
            <div
              className={css`
                position: absolute;
                top: 665.75px;
                left: calc(50% - 367px);
                font-weight: 600;
              `}
            >
              Trending
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 246px);
                left: calc(50% - 452px);
                font-weight: 600;
                text-align: center;
              `}
            >
              Based on Your Interest
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 655px);
                left: calc(50% - 353px);
                font-weight: 600;
                text-align: center;
              `}
            >
              Videos
            </div>
            <div
              className={css`
                position: absolute;
                top: 101.5px;
                left: calc(50% - 482.5px);
                width: 344px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-base);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 803px);
                  top: 0px;
                  right: -782px;
                  bottom: 0px;
                  left: -21px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    bottom: 27.5px;
                    left: 22.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent91211Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image12@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    bottom: 27.5px;
                    left: calc(50% - 170px);
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912111Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image13@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    right: 20.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912112Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image13@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 857.5px);
                left: calc(50% - 482.5px);
                width: 344px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-base);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 803px);
                  top: 0px;
                  right: -782px;
                  bottom: 0px;
                  left: -21px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    bottom: 27.5px;
                    left: 22.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent91232Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    bottom: 27.5px;
                    left: calc(50% - 170px);
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912321Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 17.5px;
                    right: 20.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912322Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 1219.75px);
                left: calc(50% - 482.5px);
                width: 344px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-base);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 803px);
                  top: 0px;
                  right: -782px;
                  bottom: 0px;
                  left: -21px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.75px;
                    bottom: 19.25px;
                    left: 22.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent91234Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.75px;
                    bottom: 19.25px;
                    left: calc(50% - 170px);
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912341Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.75px;
                    right: 20.5px;
                    bottom: 19.25px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912342Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 266.5px);
                left: calc(50% - 482.5px);
                width: 344px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-base);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 803px);
                  top: 0px;
                  right: -782px;
                  bottom: 0px;
                  left: -21px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.5px;
                    bottom: 19.5px;
                    left: 22.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent91233Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.5px;
                    bottom: 19.5px;
                    left: calc(50% - 170px);
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912331Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 25.5px;
                    right: 20.5px;
                    bottom: 19.5px;
                    width: 342px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912332Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 15.5px);
                        left: 64px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      16/3/2023
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        max-width: 100%;
                        overflow: hidden;
                        height: 200px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        right: 254px;
                        width: 73px;
                        height: 32px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 16px;
                          right: 10px;
                          font-weight: 600;
                        `}
                      >{`80$ | 12 `}</div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          font-size: var(--font-size-xs);
                          color: var(--color-darkgray);
                        `}
                      >
                        Price
                      </div>
                      <img
                        className={css`
                          position: absolute;
                          height: 50%;
                          width: 21.92%;
                          top: 43.75%;
                          right: 0%;
                          bottom: 6.25%;
                          left: 78.08%;
                          max-width: 100%;
                          overflow: hidden;
                          max-height: 100%;
                        `}
                        alt=""
                        src="/lumi.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 64.5px);
                        right: 14px;
                        font-weight: 500;
                        color: var(--color-mediumseagreen);
                        text-align: right;
                      `}
                    >
                      +0.87 %
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 30px);
                        top: calc(50% + 104.5px);
                        right: 15px;
                        left: 15px;
                        height: 30px;
                        font-size: var(--font-size-sm);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          width: 100%;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                          background-color: var(--color-gainsboro-100);
                          height: 6px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            bottom: 0px;
                            left: 0px;
                            border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                            background-color: var(--color-mediumseagreen);
                            width: 109px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 157px;
                          font-weight: 500;
                        `}
                      >
                        255M$
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          color: var(--color-darkgray);
                        `}
                      >
                        Average revenue
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 0px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 49.5px);
                        left: calc(50% + 129px);
                        font-size: var(--font-size-xs);
                        color: var(--color-darkgray);
                      `}
                    >
                      Yield
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        bottom: 0px;
                        left: calc(50% - 101px);
                        width: 156px;
                        height: 59px;
                        color: var(--color-gray-300);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          bottom: 0px;
                          left: 0px;
                          background-color: var(--color-white);
                          width: 156px;
                          height: 59px;
                        `}
                      />
                      <img
                        className={css`
                          position: absolute;
                          bottom: 19.46px;
                          left: calc(50% - 55px);
                          width: 20px;
                          height: 19.54px;
                        `}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          bottom: 19px;
                          left: calc(50% - 25px);
                          text-transform: capitalize;
                          font-weight: 500;
                        `}
                      >
                        Add to cart
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        right: 0px;
                        bottom: 0px;
                        width: 116px;
                        height: 59px;
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
                          border-radius: 0px 0px var(--br-mini) 0px;
                          background-color: var(--color-white);
                          opacity: 0.8;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: 24px;
                          bottom: 19px;
                          font-weight: 500;
                        `}
                      >
                        Buy Now
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 115px;
                        left: 225px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        height: 9.24%;
                        width: 11.7%;
                        top: 48.5%;
                        right: 83.92%;
                        bottom: 42.26%;
                        left: 4.39%;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 65.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 44.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        font-size: var(--font-size-xs);
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 627px);
                left: calc(50% - 602.5px);
                width: 584px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
                font-size: var(--font-size-xs);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 619.5px);
                  top: 0px;
                  right: -598.5px;
                  bottom: 0px;
                  left: -21px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 19px;
                    bottom: 26px;
                    left: 22.5px;
                    width: 582px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent91213Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                        font-size: var(--font-size-base);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        height: 303px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          height: 107.97%;
                          width: 100%;
                          top: -6.19%;
                          right: 0%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 100%;
                          top: 67.66%;
                          right: 0%;
                          bottom: -0.66%;
                          left: 0%;
                          background: linear-gradient(
                            180deg,
                            rgba(35, 31, 32, 0),
                            #231f20
                          );
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 106px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        width: calc(100% - 580px);
                        top: calc(50% + 156.5px);
                        right: 511px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 103.5px);
                        left: 64px;
                        font-size: var(--font-size-base);
                        font-weight: 600;
                      `}
                    >
                      Farm owner name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 124.5px);
                        left: 64px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 98.5px);
                        left: 15px;
                        width: 40px;
                        height: 40px;
                      `}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        right: 14.48px;
                        bottom: 19.74px;
                        width: 19.02px;
                        height: 19.04px;
                      `}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 82.16px);
                        left: calc(50% - 291px);
                        width: 582px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        bottom: 21.5px;
                        left: calc(50% - 192.56px);
                        width: 235.4px;
                        height: 15.84px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 12.99px;
                          height: 15.69px;
                        `}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 89.41px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-left: -3px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 53.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        right: 59.29px;
                        bottom: 20.98px;
                        width: 20.62px;
                        height: 16.87px;
                      `}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 37.91px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 19px;
                    right: 2px;
                    bottom: 26px;
                    width: 582px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912131Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                        font-size: var(--font-size-base);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        height: 303px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          height: 107.97%;
                          width: 100%;
                          top: -6.19%;
                          right: 0%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 100%;
                          top: 67.66%;
                          right: 0%;
                          bottom: -0.66%;
                          left: 0%;
                          background: linear-gradient(
                            180deg,
                            rgba(35, 31, 32, 0),
                            #231f20
                          );
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 106px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        width: calc(100% - 580px);
                        top: calc(50% + 156.5px);
                        right: 511px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 103.5px);
                        left: 64px;
                        font-size: var(--font-size-base);
                        font-weight: 600;
                      `}
                    >
                      Farm owner name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 124.5px);
                        left: 64px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 98.5px);
                        left: 15px;
                        width: 40px;
                        height: 40px;
                      `}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        right: 14.48px;
                        bottom: 19.74px;
                        width: 19.02px;
                        height: 19.04px;
                      `}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 82.16px);
                        left: calc(50% - 291px);
                        width: 582px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        bottom: 21.5px;
                        left: calc(50% - 192.56px);
                        width: 235.4px;
                        height: 15.84px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 12.99px;
                          height: 15.69px;
                        `}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 89.41px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-left: -3px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 53.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        right: 59.29px;
                        bottom: 20.98px;
                        width: 20.62px;
                        height: 16.87px;
                      `}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 37.91px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 45px);
                    top: 19px;
                    right: -595px;
                    bottom: 26px;
                    width: 582px;
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
                      cursor: pointer;
                    `}
                    onClick={onComponent912132Click}
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
                        border-radius: var(--br-mini);
                        background-color: var(--color-white);
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 64px;
                        width: 134px;
                        height: 19px;
                        font-size: var(--font-size-base);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 4px;
                          left: 0px;
                          font-weight: 600;
                        `}
                      >
                        Farm owner name
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: 100%;
                        top: 0px;
                        right: 0px;
                        left: 0px;
                        height: 303px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          height: 107.97%;
                          width: 100%;
                          top: -6.19%;
                          right: 0%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 100%;
                          top: 67.66%;
                          right: 0%;
                          bottom: -0.66%;
                          left: 0%;
                          background: linear-gradient(
                            180deg,
                            rgba(35, 31, 32, 0),
                            #231f20
                          );
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 106px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        width: calc(100% + 1px);
                        top: calc(50% + 156.5px);
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
                        width: calc(100% - 580px);
                        top: calc(50% + 156.5px);
                        right: 511px;
                        left: 69px;
                        border-right: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 60px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 103.5px);
                        left: 64px;
                        font-size: var(--font-size-base);
                        font-weight: 600;
                      `}
                    >
                      Farm owner name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 124.5px);
                        left: 64px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 98.5px);
                        left: 15px;
                        width: 40px;
                        height: 40px;
                      `}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        right: 14.48px;
                        bottom: 19.74px;
                        width: 19.02px;
                        height: 19.04px;
                      `}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: calc(50% + 82.16px);
                        left: calc(50% - 291px);
                        width: 582px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        bottom: 21.5px;
                        left: calc(50% - 192.56px);
                        width: 235.4px;
                        height: 15.84px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 12.99px;
                          height: 15.69px;
                        `}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 89.41px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-left: -3px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 16px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-white);
                      `}
                    >
                      Farm name
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 53.5px);
                        left: 16px;
                        font-size: var(--font-size-sm);
                        font-weight: 500;
                        color: var(--color-white);
                        display: inline-block;
                        width: 173px;
                        height: 17px;
                      `}
                    >
                      Farm location
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        right: 59.29px;
                        bottom: 20.98px;
                        width: 20.62px;
                        height: 16.87px;
                      `}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 70px;
                        height: 59px;
                      `}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 60.09px);
                        right: 14px;
                        width: 76.21px;
                        height: 32.19px;
                        color: var(--color-white);
                      `}
                    >
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          right: 1px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% + 9.89px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 6.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: calc(50% - 22.11px);
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 11.21px;
                          height: 10.73px;
                        `}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div
                        className={css`
                          position: absolute;
                          right: -1px;
                          bottom: 0px;
                        `}
                      >
                        (1.8)
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 30px;
                        height: 30px;
                      `}
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={css`
                position: absolute;
                top: 313px;
                left: calc(50% - 505px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% + 1069px);
                left: calc(50% - 505px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 995px);
                left: calc(50% - 505px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% + 483px);
                left: calc(50% - 505px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 415px);
                left: calc(50% - 625px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                top: 313px;
                left: calc(50% - 163px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% + 1069px);
                left: calc(50% - 163px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 995px);
                left: calc(50% - 163px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% + 483px);
                left: calc(50% - 163px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 415px);
                left: calc(50% - 41px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                bottom: 186px;
                left: calc(50% - 625px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={css`
                position: absolute;
                bottom: 186px;
                left: calc(50% - 41px);
                width: 63px;
                height: 63px;
              `}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 81px);
                left: 0px;
                border-radius: var(--br-sm);
                width: 1780px;
                height: 256px;
                object-fit: cover;
              `}
              alt=""
              src="/image-220@2x.png"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 347px;
            right: 70px;
            width: 112.38px;
            height: 43px;
            font-size: var(--font-size-base);
            color: var(--color-gray-300);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% + 1px);
              width: calc(100% + 1px);
              top: -1px;
              right: 0px;
              bottom: 0px;
              left: -1px;
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
              left: calc(50% - 36.19px);
              width: 69.38px;
              height: 16px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                text-transform: capitalize;
                font-weight: 500;
              `}
            >
              Filters
            </div>
            <img
              className={css`
                position: absolute;
                height: 69.85%;
                width: 24.16%;
                top: 7.39%;
                right: 75.84%;
                bottom: 22.76%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/filter.svg"
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
            height: 100px;
            font-size: var(--font-size-base);
            color: var(--color-darkgray);
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
              cursor: pointer;
            `}
            alt=""
            src="/logo8@2x.png"
            onClick={onLogoImageClick}
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
              src="/search1.svg"
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
};

export default InvestorWizard;
