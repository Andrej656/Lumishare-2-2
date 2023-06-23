import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "./SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const FarmProfile = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const onComponent1101Click = useCallback(() => {
    navigate("/creator-profile");
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
          height: 4281px;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
        <img
          className={css`
            position: absolute;
            width: calc(100% + 3840px);
            top: 0px;
            right: -3840px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            height: 619px;
            object-fit: cover;
          `}
          alt=""
          src="/repeat-grid-24@2x.png"
        />
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
              src="/logo3@2x.png"
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
            top: 654px;
            left: 70px;
            line-height: 31px;
            display: inline-block;
            width: 812px;
            height: 84px;
          `}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div
          className={css`
            position: absolute;
            top: 748px;
            left: 70px;
            width: 87px;
            height: 19px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 2px;
              left: 0px;
            `}
          >
            See more
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              width: 19px;
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
        </div>
        <div
          className={css`
            position: absolute;
            top: 799px;
            left: 70px;
            font-size: var(--font-size-sm);
            color: var(--color-darkgray);
          `}
        >
          Price
        </div>
        <div
          className={css`
            position: absolute;
            top: 819px;
            left: 227px;
            font-size: var(--font-size-7xl);
            font-weight: 600;
            color: var(--color-mediumseagreen);
            text-align: right;
          `}
        >
          +0.87 LUMI
        </div>
        <div
          className={css`
            position: absolute;
            top: 799px;
            left: 229px;
            font-size: var(--font-size-sm);
            color: var(--color-darkgray);
          `}
        >
          Yield
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1264.5px);
            left: 70px;
            width: 811px;
            height: 31px;
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
              left: calc(50% - 279.5px);
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
            top: 818.83px;
            left: 65px;
            width: 121px;
            height: 26.17px;
            text-align: right;
            font-size: var(--font-size-7xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0.17px;
              left: 0px;
              font-weight: 600;
            `}
          >{`80$ | 12 `}</div>
          <img
            className={css`
              position: absolute;
              height: calc(100% - 2.17px);
              top: 0px;
              right: 0px;
              bottom: 2.17px;
              max-height: 100%;
              width: 24px;
            `}
            alt=""
            src="/path-44469.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1341.5px);
            left: calc(50% - 449px);
            width: 175px;
            height: 59px;
            color: var(--color-mediumseagreen);
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
              border: 2px solid var(--color-mediumseagreen);
              box-sizing: border-box;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.77px);
              left: calc(50% - 55px);
              width: 107px;
              height: 20px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: calc(100% - 0.46px);
                top: 0px;
                bottom: 0.46px;
                left: 0px;
                max-height: 100%;
                width: 20px;
              `}
              alt=""
              src="/iconlylightoutlinebuy1.svg"
            />
            <div
              className={css`
                position: absolute;
                top: 4px;
                right: -1px;
                font-weight: 500;
              `}
            >
              Add to cart
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1341.5px);
            left: calc(50% - 254px);
            width: 175px;
            height: 59px;
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
              left: calc(50% - 32.5px);
              font-weight: 500;
            `}
          >
            Buy Now
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            height: 6.96%;
            width: 100%;
            top: 7.5%;
            right: 0%;
            bottom: 85.54%;
            left: 0%;
            background: linear-gradient(180deg, rgba(35, 31, 32, 0), #231f20);
          `}
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1641.5px);
            left: 70px;
            font-size: 60px;
            line-height: 40px;
            font-weight: 600;
            color: var(--color-white);
          `}
        >
          Farm name
        </div>
        <div
          className={css`
            position: absolute;
            top: 654px;
            right: 70px;
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
            src="/component-108--25.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--24.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--23.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--22.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--21.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 568px;
            left: 70px;
            font-size: var(--font-size-5xl);
            color: var(--color-white);
          `}
        >{`By `}</div>
        <img
          className={css`
            position: absolute;
            height: calc(100% - 4251.71px);
            top: 565.35px;
            bottom: 3686.35px;
            left: calc(50% - 698.57px);
            max-height: 100%;
            width: 23.74px;
          `}
          alt=""
          src="/group-54814.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 321px;
            right: 7px;
            width: 63px;
            height: 63px;
          `}
          alt=""
          src="/group-54749.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 321px;
            left: 25px;
            width: 63px;
            height: 63px;
          `}
          alt=""
          src="/group-54921.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 593px;
            left: calc(50% - 16px);
            width: 33px;
            height: 7px;
          `}
          alt=""
          src="/group-54922.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 562px;
            left: 102px;
            width: 154px;
            height: 29px;
            cursor: pointer;
            font-size: var(--font-size-5xl);
            color: var(--color-white);
          `}
          onClick={onComponent1101Click}
        >
          <div
            className={css`
              position: absolute;
              top: 6px;
              left: 0px;
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
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1606.87px);
            left: calc(50% + 688.5px);
            border-radius: var(--br-5xs);
            background-color: var(--color-orangered);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            width: 201.5px;
            height: 58.37px;
            color: var(--color-white);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.19px);
              left: 26px;
              width: 149.5px;
              height: 18.37px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6.81px);
                left: calc(50% - 37.25px);
                font-weight: 500;
              `}
            >
              Farm LIVE 24/7
            </div>
            <img
              className={css`
                position: absolute;
                height: calc(100% - 2.63px);
                top: 0px;
                bottom: 2.63px;
                left: 0px;
                max-height: 100%;
                width: 27.56px;
              `}
              alt=""
              src="/icon-ioniciosvideocam.svg"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 1619.1px);
            right: 1328.48px;
            width: 173.11px;
            height: 19.6px;
            font-size: var(--font-size-lg);
            color: var(--color-white);
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              right: 52.52px;
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 9.59px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 35.25px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 60.9px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
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
            width: calc(100% - 140px);
            top: calc(50% - 1159.5px);
            right: 70px;
            left: 70px;
            height: 2417px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--gap-61xl);
            font-size: var(--font-size-9xl);
          `}
        >
          <div
            className={css`
              position: relative;
              width: 1780px;
              height: 551px;
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
              Electricity Produced
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 79px);
                width: 100%;
                top: 79px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: calc(100% - 87px);
                  width: calc(100% - 80px);
                  top: 87px;
                  right: 77px;
                  bottom: 0px;
                  left: 3px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 48px;
                    right: 0px;
                    width: 117px;
                    height: 216px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--gap-2xl);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      width: 86px;
                      height: 36px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                      `}
                    >
                      Daily output:
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-gray-400);
                      `}
                    >
                      54.09 kWh
                    </div>
                  </div>
                  <div
                    className={css`
                      position: relative;
                      width: 111px;
                      height: 36px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                      `}
                    >
                      Monthly output:
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-gray-400);
                      `}
                    >
                      4,786.21 kWh
                    </div>
                  </div>
                  <div
                    className={css`
                      position: relative;
                      width: 117px;
                      height: 36px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                      `}
                    >
                      Total output:
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-gray-400);
                      `}
                    >
                      1,221.75 MWh
                    </div>
                  </div>
                  <div
                    className={css`
                      position: relative;
                      width: 97px;
                      height: 36px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                      `}
                    >
                      <span>CO</span>
                      <span
                        className={css`
                          font-size: var(--font-size-5xs-7);
                          vertical-align: sub;
                        `}
                      >
                        2
                      </span>
                      <span> avoidance</span>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        color: var(--color-gray-400);
                      `}
                    >
                      684.58 t
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 221px);
                    top: 0px;
                    right: 221px;
                    left: 0px;
                    height: 309px;
                    text-align: right;
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
                        height: calc(100% - 53px);
                        top: 30px;
                        bottom: 23px;
                        left: calc(50% - 658.5px);
                        width: 1381px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: var(--gap-52xl);
                      `}
                    >
                      <div
                        className={css`
                          width: 50px;
                          height: 211px;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 211px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 44.5px);
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 83px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 61px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 150px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 111px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 50px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 61px;
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-100);
                            width: 50px;
                            height: 39px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 256px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 100px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 156px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 89px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 150px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 78px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-200);
                            width: 50px;
                            height: 44px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-100);
                            width: 50px;
                            height: 28px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 211px;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 211px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: calc(50% - 44.5px);
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 83px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 61px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 233px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 83px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 150px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 83px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 256px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 100px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 156px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 89px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 150px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 111px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 50px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 61px;
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-100);
                            width: 50px;
                            height: 39px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 89px;
                          display: flex;
                          flex-direction: column;
                          padding: 0px 0px var(--padding-48xl);
                          box-sizing: border-box;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 22px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 67px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 39px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 28px;
                            `}
                          />
                        </div>
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 117px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 78px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 28px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 50px;
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-100);
                            width: 50px;
                            height: 39px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 172px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 133px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 72px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-orange);
                              height: 61px;
                            `}
                          />
                        </div>
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-gold-100);
                            width: 50px;
                            height: 39px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          width: 50px;
                          height: 256px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            background-color: var(--color-orange);
                            width: 50px;
                            height: 100px;
                          `}
                        />
                        <div
                          className={css`
                            position: relative;
                            width: 50px;
                            height: 156px;
                          `}
                        >
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-color: var(--color-gold-100);
                              height: 67px;
                            `}
                          />
                          <div
                            className={css`
                              position: absolute;
                              width: 100%;
                              top: 0px;
                              right: 0px;
                              left: 0px;
                              background-color: var(--color-gold-200);
                              height: 89px;
                            `}
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        height: calc(100% - 22.5px);
                        width: calc(100% - 59.5px);
                        top: 0px;
                        right: -0.5px;
                        bottom: 22.5px;
                        left: 60px;
                        max-width: 100%;
                        overflow: hidden;
                        max-height: 100%;
                      `}
                      alt=""
                      src="/x-axis-line.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        bottom: 17px;
                        left: 15px;
                      `}
                    >
                      0kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 80.5px);
                        left: 0px;
                      `}
                    >
                      100kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 36.5px);
                        left: 0px;
                      `}
                    >
                      200kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 6.5px);
                        left: 0px;
                      `}
                    >
                      300kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 50.5px);
                        left: 0px;
                      `}
                    >
                      400kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% - 93.5px);
                        left: 0px;
                      `}
                    >
                      500kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 17px;
                        left: 0px;
                      `}
                    >
                      600kWh
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        bottom: 0px;
                        left: calc(50% - 652.5px);
                        width: 1365px;
                        height: 15px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: var(--gap-68xl);
                        text-align: center;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        10:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        11:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        12:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        13:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        14:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        15:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                          align-self: flex-start;
                        `}
                      >
                        16:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                          align-self: flex-start;
                        `}
                      >
                        17:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        18:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        19:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        20:00
                      </div>
                      <div
                        className={css`
                          position: relative;
                        `}
                      >
                        21:00
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 237px);
                    width: 556px;
                    height: 17px;
                    text-align: center;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      width: 146px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        background-color: var(--color-gold-100);
                        width: 17px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 3px;
                        right: -1px;
                      `}
                    >
                      PV System 93 kWh
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: calc(50% - 73px);
                      width: 146px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        background-color: var(--color-gold-200);
                        width: 17px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 3px;
                        right: -1px;
                      `}
                    >
                      PV System 93 kWh
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      width: 146px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        background-color: var(--color-orange);
                        width: 17px;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 3px;
                        right: -1px;
                      `}
                    >
                      PV System 93 kWh
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 5px;
                  left: 0px;
                  width: 1780px;
                  height: 31px;
                  font-size: var(--font-size-3xl);
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
                    top: 0px;
                    left: 23px;
                    font-weight: 600;
                    color: var(--color-gray-400);
                    text-align: center;
                  `}
                >
                  Live
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 126px;
                    font-weight: 600;
                  `}
                >
                  Monthly
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 263px;
                    font-weight: 600;
                  `}
                >
                  Yearly
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 28px;
                    left: -3px;
                    border-top: 3px solid var(--color-gray-200);
                    box-sizing: border-box;
                    width: 89px;
                    height: 6px;
                  `}
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1482px;
              height: 473px;
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
              feed-in tariff
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 3px);
                right: 0px;
                bottom: 0px;
                left: 3px;
                height: 385px;
                text-align: right;
                font-size: var(--font-size-sm);
                color: var(--color-darkgray);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: calc(100% - 76px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 76px;
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
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 53px);
                      top: 30px;
                      bottom: 23px;
                      left: calc(50% - 658.5px);
                      width: 1381px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-52xl);
                    `}
                  >
                    <div
                      className={css`
                        width: 50px;
                        height: 211px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: calc(50% - 44.5px);
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 50px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 78px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-200);
                          width: 50px;
                          height: 44px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 28px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 211px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: calc(50% - 44.5px);
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 233px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 83px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 150px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 50px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 89px;
                        display: flex;
                        flex-direction: column;
                        padding: 0px 0px var(--padding-48xl);
                        box-sizing: border-box;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 22px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 67px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 39px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 28px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 117px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 78px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 28px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 50px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 172px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 133px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 72px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 22.5px);
                      width: calc(100% - 59.5px);
                      top: 0px;
                      right: -0.5px;
                      bottom: 22.5px;
                      left: 60px;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/x-axis-line.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 17px;
                      left: 15px;
                    `}
                  >
                    0kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 80.5px);
                      left: 0px;
                    `}
                  >
                    100kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 36.5px);
                      left: 0px;
                    `}
                  >
                    200kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 0px;
                    `}
                  >
                    300kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 50.5px);
                      left: 0px;
                    `}
                  >
                    400kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 93.5px);
                      left: 0px;
                    `}
                  >
                    500kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 17px;
                      left: 0px;
                    `}
                  >
                    600kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: calc(50% - 652.5px);
                      width: 1365px;
                      height: 15px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-68xl);
                      text-align: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      10:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      11:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      12:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      13:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      14:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      15:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      16:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      17:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      18:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      19:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      20:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      21:00
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: calc(50% - 126.5px);
                  width: 556px;
                  height: 17px;
                  text-align: center;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-gold-100);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 73px);
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-gold-200);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-orange);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1780px;
              height: 728px;
              font-size: var(--font-size-xs);
              color: var(--color-darkgray);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 93.41%;
                width: 100%;
                top: 6.59%;
                right: 0%;
                bottom: 0%;
                left: 0%;
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
                  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  height: 622px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 160.97%;
                    width: 100%;
                    top: -46.97%;
                    right: 0%;
                    bottom: -14.01%;
                    left: 0%;
                  `}
                />
              </div>
              <img
                className={css`
                  position: absolute;
                  right: 26.48px;
                  bottom: 18.74px;
                  width: 19.02px;
                  height: 19.04px;
                `}
                alt=""
                src="/group-548691.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: calc(50% + 277.66px);
                  left: calc(50% - 890px);
                  width: 1780px;
                  height: 4.34px;
                `}
                alt=""
                src="/group-548643.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 20.5px;
                  left: calc(50% - 861.4px);
                  width: 306.4px;
                  height: 15.84px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-end;
                  gap: var(--gap-21xl);
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
                <div
                  className={css`
                    position: relative;
                    width: 38px;
                    height: 12px;
                    margin-left: -5px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                      text-transform: uppercase;
                    `}
                  >
                    Live
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: calc(50% - 4.5px);
                      right: 30px;
                      border-radius: 50%;
                      width: 8px;
                      height: 8px;
                    `}
                    alt=""
                    src="/ellipse-2025.svg"
                  />
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  right: 76.09px;
                  bottom: 19.24px;
                  width: 22.66px;
                  height: 18.54px;
                `}
                alt=""
                src="/icon-awesomechromecast1.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% + 135.41px);
                  right: 1212px;
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
                  top: 328px;
                  right: 1207px;
                  width: 30px;
                  height: 30px;
                `}
                alt=""
                src="/share.svg"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 283.37px);
                left: calc(50% + 740.5px);
                border-radius: var(--br-5xs);
                background-color: var(--color-orangered);
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                width: 124.5px;
                height: 58.37px;
                font-size: var(--font-size-base);
                color: var(--color-white);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 9.19px);
                  left: 26px;
                  width: 72.5px;
                  height: 18.37px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.81px);
                    left: calc(50% + 1.25px);
                    font-weight: 500;
                  `}
                >
                  LIVE
                </div>
                <img
                  className={css`
                    position: absolute;
                    height: calc(100% - 2.63px);
                    top: 0px;
                    bottom: 2.63px;
                    left: 0px;
                    max-height: 100%;
                    width: 27.56px;
                  `}
                  alt=""
                  src="/icon-ioniciosvideocam.svg"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                font-size: var(--font-size-9xl);
                text-transform: capitalize;
                font-weight: 600;
                color: var(--color-gray-400);
              `}
            >
              Farm LIVE 24/7
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 1780px;
              height: 407px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 203.5px);
                left: 0px;
                font-weight: 600;
              `}
            >
              Location
            </div>
            <img
              className={css`
                position: absolute;
                height: calc(100% - 48px);
                width: 100%;
                top: 48px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                object-fit: cover;
              `}
              alt=""
              src="/mask-group-198@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 3.57px);
                left: calc(50% - 79.95px);
                width: 97.95px;
                height: 120.07px;
              `}
              alt=""
              src="/location.svg"
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
            src="/logo4@2x.png"
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

export default FarmProfile;
