import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "F$9c8cd4ec-85e5-4bb0-ba50-dd7b47673225$";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/new-market-place");
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
          height: 1828px;
          text-align: left;
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% + 169.03px);
            right: -169.03px;
            bottom: -0.03px;
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
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating LUMI.
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% + 11.41px);
                left: 70px;
                width: 247.9px;
                height: 59.18px;
                object-fit: cover;
              `}
              alt=""
              src="/logo9@2x.png"
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
            top: calc(50% - 751.65px);
            left: 70px;
            font-size: var(--font-size-21xl);
            line-height: 40px;
            font-weight: 600;
          `}
        >
          Portfolio
        </div>
        <div
          className={css`
            position: absolute;
            top: 262px;
            left: 129px;
            font-weight: 500;
            color: var(--color-darkgray);
          `}
        >
          Farm
        </div>
        <div
          className={css`
            position: absolute;
            top: 256px;
            left: 70px;
            width: 25px;
            height: 25px;
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
              border-radius: var(--br-5xs);
              border: 2px solid var(--color-gainsboro-100);
              box-sizing: border-box;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 52%;
              width: 52%;
              top: 24%;
              right: 24%;
              bottom: 24%;
              left: 24%;
              border-radius: var(--br-4xs);
              background-color: var(--color-dodgerblue);
              opacity: 0;
            `}
          />
          <img
            className={css`
              position: absolute;
              width: calc(100% - 11.35px);
              top: calc(50% - 5.09px);
              right: 5.67px;
              left: 5.67px;
              max-width: 100%;
              overflow: hidden;
              height: 10.18px;
            `}
            alt=""
            src="/path-6395.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 299.35px;
            left: 69px;
            border-top: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            width: 1161.5px;
            height: 2px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 262px;
            left: calc(50% - 214.5px);
            font-weight: 500;
            color: var(--color-darkgray);
          `}
        >
          Quantity
        </div>
        <div
          className={css`
            position: absolute;
            top: 262px;
            left: calc(50% - 427px);
            font-weight: 500;
            color: var(--color-darkgray);
          `}
        >
          Price
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 572px);
            left: 70px;
            width: 1160.5px;
            height: 682px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--gap-19xl);
            text-align: right;
            font-size: var(--font-size-xl);
          `}
        >
          <div
            className={css`
              position: relative;
              width: 1160.5px;
              height: 142px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% + 1px);
                right: 0px;
                bottom: -1px;
                left: -1px;
                border-top: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 2px;
              `}
            />
            <div
              className={css`
                position: absolute;
                width: calc(100% - 54.5px);
                top: 0px;
                right: 54.5px;
                left: 0px;
                height: 100px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  top: 0px;
                  bottom: 0px;
                  left: 47px;
                  border-radius: var(--br-mini);
                  background-color: var(--color-white);
                  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  width: 100px;
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
                  src="/mask-group-2034@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 21px);
                  right: 0px;
                  width: 646px;
                  height: 42px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 129px);
                    width: 114px;
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
                        border-radius: var(--br-5xs);
                        border: 2px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: calc(50% - 7.24px);
                          left: calc(50% - 38.93px);
                          width: 77.84px;
                          height: 14.47px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            width: 14.47px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 1.25px);
                              right: 0px;
                              left: 0px;
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              height: 2.5px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              height: calc(100% - 11.98px);
                              top: 5.99px;
                              bottom: 5.99px;
                              left: calc(50% - 7.24px);
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              width: 14.47px;
                              transform: rotate(270deg);
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: absolute;
                            top: calc(50% - 1.25px);
                            left: 0px;
                            border-radius: 1.12px;
                            background-color: var(--color-darkgray);
                            width: 14.47px;
                            height: 2.5px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 7px);
                        left: calc(50% - 7px);
                        font-weight: 600;
                      `}
                    >
                      2
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 21px);
                    top: 10px;
                    bottom: 11px;
                    left: calc(50% + 59px);
                    width: 123px;
                    text-align: left;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: 1px;
                    `}
                  >
                    Save for later
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 0.15px);
                      top: 0.15px;
                      bottom: 0px;
                      left: 0px;
                      max-height: 100%;
                      width: 17.04px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 11px);
                    right: 0px;
                    width: 84px;
                    height: 20px;
                    text-align: left;
                    font-size: var(--font-size-base);
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
                      width: 18.46px;
                    `}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: -3px;
                    `}
                  >
                    Remove
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 10px);
                    left: 0px;
                    width: 96px;
                    height: 23px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 2px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 3px);
                      top: 0px;
                      right: 0px;
                      bottom: 3px;
                      max-height: 100%;
                      width: 20px;
                    `}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 25.65px);
                  left: calc(50% - 384px);
                  width: 148.74px;
                  height: 57.29px;
                  text-align: left;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 28.65px);
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    height: 23.29px;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 0px;
                    `}
                  >{`By `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: calc(50% + 55.49px);
                      max-height: 100%;
                      width: 18.88px;
                    `}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 22px;
                      font-size: var(--font-size-5xl);
                    `}
                  >
                    <span>Creator Name</span>
                    <span
                      className={css`
                        font-size: var(--font-size-base);
                        font-weight: 600;
                      `}
                    />
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 0px;
                  width: 25px;
                  height: 25px;
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
                    border-radius: var(--br-5xs);
                    border: 2px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 52%;
                    width: 52%;
                    top: 24%;
                    right: 24%;
                    bottom: 24%;
                    left: 24%;
                    border-radius: var(--br-4xs);
                    background-color: var(--color-dodgerblue);
                    opacity: 0;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    width: calc(100% - 11.35px);
                    top: calc(50% - 5.09px);
                    right: 5.67px;
                    left: 5.67px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 10.18px;
                  `}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1160.5px;
              height: 142px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% + 1px);
                right: 0px;
                bottom: -1px;
                left: -1px;
                border-top: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 2px;
              `}
            />
            <div
              className={css`
                position: absolute;
                width: calc(100% - 54.5px);
                top: 0px;
                right: 54.5px;
                left: 0px;
                height: 100px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  top: 0px;
                  bottom: 0px;
                  left: 47px;
                  border-radius: var(--br-mini);
                  background-color: var(--color-white);
                  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  width: 100px;
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
                  src="/mask-group-2035@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 21px);
                  right: 0px;
                  width: 646px;
                  height: 42px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 129px);
                    width: 114px;
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
                        border-radius: var(--br-5xs);
                        border: 2px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: calc(50% - 7.24px);
                          left: calc(50% - 38.93px);
                          width: 77.84px;
                          height: 14.47px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            width: 14.47px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 1.25px);
                              right: 0px;
                              left: 0px;
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              height: 2.5px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              height: calc(100% - 11.98px);
                              top: 5.99px;
                              bottom: 5.99px;
                              left: calc(50% - 7.24px);
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              width: 14.47px;
                              transform: rotate(270deg);
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: absolute;
                            top: calc(50% - 1.25px);
                            left: 0px;
                            border-radius: 1.12px;
                            background-color: var(--color-darkgray);
                            width: 14.47px;
                            height: 2.5px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 7px);
                        left: calc(50% - 7px);
                        font-weight: 600;
                      `}
                    >
                      1
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 21px);
                    top: 10px;
                    bottom: 11px;
                    left: calc(50% + 59px);
                    width: 123px;
                    text-align: left;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: 1px;
                    `}
                  >
                    Save for later
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 0.15px);
                      top: 0.15px;
                      bottom: 0px;
                      left: 0px;
                      max-height: 100%;
                      width: 17.04px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 11px);
                    right: 0px;
                    width: 84px;
                    height: 20px;
                    text-align: left;
                    font-size: var(--font-size-base);
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
                      width: 18.46px;
                    `}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: -3px;
                    `}
                  >
                    Remove
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 10px);
                    left: 0px;
                    width: 96px;
                    height: 23px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 2px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 3px);
                      top: 0px;
                      right: 0px;
                      bottom: 3px;
                      max-height: 100%;
                      width: 20px;
                    `}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 25.65px);
                  left: calc(50% - 384px);
                  width: 148.74px;
                  height: 57.29px;
                  text-align: left;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 28.65px);
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    height: 23.29px;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 0px;
                    `}
                  >{`By `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: calc(50% + 55.49px);
                      max-height: 100%;
                      width: 18.88px;
                    `}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 22px;
                    `}
                  >
                    <span>Creator Name</span>
                    <span
                      className={css`
                        font-weight: 600;
                      `}
                    />
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 0px;
                  width: 25px;
                  height: 25px;
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
                    border-radius: var(--br-5xs);
                    border: 2px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 52%;
                    width: 52%;
                    top: 24%;
                    right: 24%;
                    bottom: 24%;
                    left: 24%;
                    border-radius: var(--br-4xs);
                    background-color: var(--color-dodgerblue);
                    opacity: 0;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    width: calc(100% - 11.35px);
                    top: calc(50% - 5.09px);
                    right: 5.67px;
                    left: 5.67px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 10.18px;
                  `}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1160.5px;
              height: 142px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% + 1px);
                right: 0px;
                bottom: -1px;
                left: -1px;
                border-top: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 2px;
              `}
            />
            <div
              className={css`
                position: absolute;
                width: calc(100% - 54.5px);
                top: 0px;
                right: 54.5px;
                left: 0px;
                height: 100px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  top: 0px;
                  bottom: 0px;
                  left: 47px;
                  border-radius: var(--br-mini);
                  background-color: var(--color-white);
                  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  width: 100px;
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
                  src="/mask-group-2036@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 21px);
                  right: 0px;
                  width: 646px;
                  height: 42px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 129px);
                    width: 114px;
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
                        border-radius: var(--br-5xs);
                        border: 2px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: calc(50% - 7.24px);
                          left: calc(50% - 38.93px);
                          width: 77.84px;
                          height: 14.47px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            width: 14.47px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 1.25px);
                              right: 0px;
                              left: 0px;
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              height: 2.5px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              height: calc(100% - 11.98px);
                              top: 5.99px;
                              bottom: 5.99px;
                              left: calc(50% - 7.24px);
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              width: 14.47px;
                              transform: rotate(270deg);
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: absolute;
                            top: calc(50% - 1.25px);
                            left: 0px;
                            border-radius: 1.12px;
                            background-color: var(--color-darkgray);
                            width: 14.47px;
                            height: 2.5px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 7px);
                        left: calc(50% - 7px);
                        font-weight: 600;
                      `}
                    >
                      1
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 21px);
                    top: 10px;
                    bottom: 11px;
                    left: calc(50% + 59px);
                    width: 123px;
                    text-align: left;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: 1px;
                    `}
                  >
                    Save for later
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 0.15px);
                      top: 0.15px;
                      bottom: 0px;
                      left: 0px;
                      max-height: 100%;
                      width: 17.04px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 11px);
                    right: 0px;
                    width: 84px;
                    height: 20px;
                    text-align: left;
                    font-size: var(--font-size-base);
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
                      width: 18.46px;
                    `}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: -3px;
                    `}
                  >
                    Remove
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 10px);
                    left: 0px;
                    width: 96px;
                    height: 23px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 2px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 3px);
                      top: 0px;
                      right: 0px;
                      bottom: 3px;
                      max-height: 100%;
                      width: 20px;
                    `}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 25.65px);
                  left: calc(50% - 384px);
                  width: 148.74px;
                  height: 57.29px;
                  text-align: left;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 28.65px);
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    height: 23.29px;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 0px;
                    `}
                  >{`By `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: calc(50% + 55.49px);
                      max-height: 100%;
                      width: 18.88px;
                    `}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 22px;
                    `}
                  >
                    <span>Creator Name</span>
                    <span
                      className={css`
                        font-weight: 600;
                      `}
                    />
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 0px;
                  width: 25px;
                  height: 25px;
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
                    border-radius: var(--br-5xs);
                    border: 2px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 52%;
                    width: 52%;
                    top: 24%;
                    right: 24%;
                    bottom: 24%;
                    left: 24%;
                    border-radius: var(--br-4xs);
                    background-color: var(--color-dodgerblue);
                    opacity: 0;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    width: calc(100% - 11.35px);
                    top: calc(50% - 5.09px);
                    right: 5.67px;
                    left: 5.67px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 10.18px;
                  `}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1160.5px;
              height: 142px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: calc(100% + 1px);
                right: 0px;
                bottom: -1px;
                left: -1px;
                border-top: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 2px;
              `}
            />
            <div
              className={css`
                position: absolute;
                width: calc(100% - 54.5px);
                top: 0px;
                right: 54.5px;
                left: 0px;
                height: 100px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  top: 0px;
                  bottom: 0px;
                  left: 47px;
                  border-radius: var(--br-mini);
                  background-color: var(--color-white);
                  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  width: 100px;
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
                  src="/mask-group-2037@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 21px);
                  right: 0px;
                  width: 646px;
                  height: 42px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 129px);
                    width: 114px;
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
                        border-radius: var(--br-5xs);
                        border: 2px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: calc(50% - 7.24px);
                          left: calc(50% - 38.93px);
                          width: 77.84px;
                          height: 14.47px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 100%;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            width: 14.47px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 1.25px);
                              right: 0px;
                              left: 0px;
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              height: 2.5px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              height: calc(100% - 11.98px);
                              top: 5.99px;
                              bottom: 5.99px;
                              left: calc(50% - 7.24px);
                              border-radius: 1.12px;
                              background-color: var(--color-darkgray);
                              width: 14.47px;
                              transform: rotate(270deg);
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: absolute;
                            top: calc(50% - 1.25px);
                            left: 0px;
                            border-radius: 1.12px;
                            background-color: var(--color-darkgray);
                            width: 14.47px;
                            height: 2.5px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 7px);
                        left: calc(50% - 7px);
                        font-weight: 600;
                      `}
                    >
                      1
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: calc(100% - 21px);
                    top: 10px;
                    bottom: 11px;
                    left: calc(50% + 59px);
                    width: 123px;
                    text-align: left;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: 1px;
                    `}
                  >
                    Save for later
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 0.15px);
                      top: 0.15px;
                      bottom: 0px;
                      left: 0px;
                      max-height: 100%;
                      width: 17.04px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 11px);
                    right: 0px;
                    width: 84px;
                    height: 20px;
                    text-align: left;
                    font-size: var(--font-size-base);
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
                      width: 18.46px;
                    `}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      right: -3px;
                    `}
                  >
                    Remove
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 10px);
                    left: 0px;
                    width: 96px;
                    height: 23px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 2px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 3px);
                      top: 0px;
                      right: 0px;
                      bottom: 3px;
                      max-height: 100%;
                      width: 20px;
                    `}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 25.65px);
                  left: calc(50% - 384px);
                  width: 148.74px;
                  height: 57.29px;
                  text-align: left;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 28.65px);
                    left: 0px;
                    font-weight: 600;
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    height: 23.29px;
                    font-size: var(--font-size-base);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 0px;
                    `}
                  >{`By `}</div>
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: calc(50% + 55.49px);
                      max-height: 100%;
                      width: 18.88px;
                    `}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 3.29px;
                      left: 22px;
                    `}
                  >
                    <span>Creator Name</span>
                    <span
                      className={css`
                        font-weight: 600;
                      `}
                    />
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 0px;
                  width: 25px;
                  height: 25px;
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
                    border-radius: var(--br-5xs);
                    border: 2px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 52%;
                    width: 52%;
                    top: 24%;
                    right: 24%;
                    bottom: 24%;
                    left: 24%;
                    border-radius: var(--br-4xs);
                    background-color: var(--color-dodgerblue);
                    opacity: 0;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    width: calc(100% - 11.35px);
                    top: calc(50% - 5.09px);
                    right: 5.67px;
                    left: 5.67px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 10.18px;
                  `}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 241px;
            right: 70px;
            width: 543px;
            height: 414px;
            font-size: var(--font-size-21xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 207px);
              left: 0px;
              line-height: 40px;
              font-weight: 600;
            `}
          >
            Summary
          </div>
          <div
            className={css`
              position: absolute;
              height: calc(100% - 58px);
              width: calc(100% + 1px);
              top: 58px;
              right: 0px;
              bottom: 0px;
              left: -1px;
              border-radius: var(--br-5xs);
              background-color: var(--color-white);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              font-size: var(--font-size-lg);
              color: var(--color-darkgray);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 120px);
                left: 32px;
                font-weight: 500;
              `}
            >
              Sub Total
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 26px);
                left: 32px;
                font-size: var(--font-size-5xl);
                font-weight: 500;
                color: var(--color-gray-400);
              `}
            >
              Grand Total
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 60px);
                left: 32px;
                font-weight: 500;
              `}
            >{`Discount `}</div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 62px);
                right: 32px;
                font-size: var(--font-size-xl);
                font-weight: 500;
                text-align: right;
              `}
            >
              $0
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 65px);
                right: 33px;
                bottom: 37px;
                left: 32px;
                height: 59px;
                text-align: center;
                font-size: var(--font-size-base);
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
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 5.5px);
                  left: calc(50% - 44.5px);
                  font-weight: 500;
                `}
              >{`Buy & Invest`}</div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 118px);
                right: 33px;
                width: 108px;
                height: 23px;
                text-align: right;
                font-size: var(--font-size-xl);
                color: var(--color-gray-400);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 2px;
                  left: 0px;
                  font-weight: 600;
                `}
              >{`160$ | 24 `}</div>
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 3px);
                  top: 0px;
                  right: 0px;
                  bottom: 3px;
                  max-height: 100%;
                  width: 20px;
                `}
                alt=""
                src="/path-444691.svg"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 26px);
                right: 33px;
                width: 125px;
                height: 25px;
                text-align: right;
                font-size: var(--font-size-5xl);
                color: var(--color-gray-400);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 600;
                `}
              >{`400$ | 60 `}</div>
              <img
                className={css`
                  position: absolute;
                  top: 1px;
                  right: 0px;
                  width: 20px;
                  height: 20px;
                `}
                alt=""
                src="/path-444691.svg"
              />
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 64px);
                top: calc(50% - 13px);
                right: 33px;
                left: 31px;
                border-top: 1px solid var(--color-silver-200);
                box-sizing: border-box;
                height: 2px;
              `}
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
            src="/logo9@2x.png"
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
              `}
              alt=""
              src="/cart.svg"
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
        <div
          className={css`
            position: absolute;
            top: 257px;
            left: calc(50% + 132px);
            width: 91px;
            height: 22px;
            opacity: 0.2;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: calc(100% - 2px);
              top: 1px;
              bottom: 1px;
              left: 0px;
              max-height: 100%;
              width: 18.46px;
            `}
            alt=""
            src="/iconlylightoutlinedelete.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 4px;
              right: -2px;
              font-weight: 500;
            `}
          >
            Remove
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

export default Cart;
