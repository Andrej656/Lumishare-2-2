import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "F$9c8cd4ec-85e5-4bb0-ba50-dd7b47673225$";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

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
          height: 3733px;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 100px;
            right: 0px;
            left: 0px;
            background-color: var(--color-white);
            height: 336px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1704.15px);
            left: 70px;
            font-size: var(--font-size-21xl);
            line-height: 40px;
            font-weight: 600;
          `}
        >
          LeaderBoard
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1630.15px);
            left: calc(50% - 891px);
            border-radius: var(--br-5xs);
            background-color: var(--color-white);
            border: 1px solid var(--color-gainsboro-100);
            box-sizing: border-box;
            width: 489px;
            height: 47px;
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 6.5px);
              left: 44px;
            `}
          >
            Search by name
          </div>
          <img
            className={css`
              position: absolute;
              bottom: 15px;
              left: 16.22px;
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
            width: calc(100% - 139.5px);
            top: 328.35px;
            right: 69.5px;
            left: 70px;
            height: 31px;
            text-align: center;
            font-size: var(--font-size-3xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% + 0.5px);
              right: 0px;
              bottom: -1px;
              left: -0.5px;
              border-top: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              height: 2px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 215px;
              height: 31px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 28px;
                left: -3px;
                border-top: 3px solid var(--color-gray-200);
                box-sizing: border-box;
                width: 99px;
                height: 6px;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 3px;
                font-weight: 600;
              `}
            >
              Investors
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 131px;
                font-weight: 600;
                color: var(--color-darkgray);
                text-align: left;
              `}
            >
              Creators
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 140px);
            top: 400.85px;
            right: 70px;
            left: 70px;
            height: 34.5px;
            font-size: var(--font-size-lg);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.45px);
              left: 8px;
              font-weight: 500;
            `}
          >
            POS
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.45px);
              left: 202px;
              font-weight: 500;
            `}
          >
            Name
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.45px);
              left: calc(50% + 75px);
              font-weight: 500;
            `}
          >
            Lorem
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.45px);
              left: calc(50% + 286px);
              font-weight: 500;
            `}
          >
            Lorem
          </div>
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 117px);
              width: 32.79px;
              height: 25.8px;
            `}
            alt=""
            src="/group-55165.svg"
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.45px);
              left: calc(50% - 392px);
              font-weight: 500;
            `}
          >
            Rate
          </div>
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
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% + 169.03px);
            right: -169.03px;
            bottom: -0.03px;
            left: 0px;
            height: 757.03px;
            font-size: var(--font-size-lg);
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
              src="/logo2@2x.png"
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
            width: calc(100% - 141px);
            top: 448px;
            right: 70px;
            left: 71px;
            height: 1100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}
        >
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              2
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              3
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              4
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              5
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              6
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              7
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              8
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              9
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              10
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 141px);
            top: calc(50% - 14.5px);
            right: 70px;
            left: 71px;
            height: 1100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}
        >
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 13px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              11
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              12
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              13
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              14
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              15
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              16
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              17
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              18
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              19
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
          <div
            className={css`
              position: relative;
              width: 1779px;
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
                left: 77px;
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
                left: 12px;
                font-size: var(--font-size-xl);
                color: var(--color-dimgray);
                text-align: center;
              `}
            >
              20
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 201px;
                font-weight: 600;
              `}
            >
              Investor name 1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 119.5px);
                font-weight: 600;
              `}
            >
              1
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% + 318.5px);
                font-weight: 600;
              `}
            >
              1.5
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% - 10.62px);
                left: calc(50% - 110.5px);
                width: 19.24px;
                height: 19.24px;
              `}
              alt=""
              src="/arrow-downward.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: calc(50% - 392.5px);
                width: 116px;
                height: 14px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: calc(50% - 6.87px);
                  right: 0px;
                  width: 75.21px;
                  height: 10.73px;
                `}
                alt=""
                src="/group-54808.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 500;
                `}
              >
                (1.8)
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 65.73px);
                top: 32.87px;
                bottom: 32.87px;
                left: calc(50% - 558.43px);
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
                    top: 23.05%;
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
                    top: 23.18%;
                    right: 23.32%;
                    bottom: 41.8%;
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
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            width: calc(100% - 140px);
            top: calc(50% - 294.5px);
            right: 70px;
            left: 70px;
            border-radius: var(--br-sm);
            max-width: 100%;
            overflow: hidden;
            height: 256px;
            object-fit: cover;
          `}
          alt=""
          src="/image-220@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 238.85px;
            left: calc(50% - 378.38px);
            width: 112.38px;
            height: 43px;
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
            src="/logo2@2x.png"
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
              `}
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

export default LeaderBoard;
