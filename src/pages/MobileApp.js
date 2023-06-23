import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const MobileApp = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupContainer29Click = useCallback(() => {
    navigate("/investor-wizard1");
  }, [navigate]);

  const onFarmOwnerNameClick = useCallback(() => {
    navigate("/creator-profile1");
  }, [navigate]);

  const onAgricultureImageClick = useCallback(() => {
    navigate("/farm-profile1");
  }, [navigate]);

  const onComponent1231Click = useCallback(() => {
    navigate("/investor-profile1");
  }, [navigate]);

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          background-color: var(--color-white);
          width: 100%;
          height: 4015px;
          text-align: left;
          font-size: var(--font-size-26xl);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% - 20px);
            top: 111px;
            right: 10px;
            left: 10px;
            height: 156px;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              width: 156px;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-3xs);
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 613px;
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
            top: 76.5px;
            right: 0px;
            left: 0px;
            height: 87.5px;
            overflow-x: auto;
            mix-blend-mode: normal;
            text-align: center;
            font-size: var(--font-size-2xs);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: calc(100% + 1877px);
              top: 0px;
              right: -1887px;
              bottom: 0px;
              left: 10px;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: 0px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499514.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: 83px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499515.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: 166px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499516.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: 249px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499517.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: 332px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499518.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 711px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499519.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 628px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499520.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 545px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499521.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 462px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499522.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 379px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499523.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 296px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499524.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 213px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499525.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 130px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499526.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% - 47px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499527.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 36px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499514.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 119px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499515.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 202px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499516.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 285px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499517.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 368px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499518.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 451px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499519.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 534px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499520.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                bottom: 1px;
                left: calc(50% + 617px);
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499521.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: 358.65px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499522.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: 275.65px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499523.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: 192.65px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499524.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: 109.65px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499525.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: 26.65px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499526.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 0px;
                right: -56.35px;
                bottom: 1px;
                width: 67.35px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% - 19.15px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 19.15px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/group-5499527.svg"
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 6px;
                `}
              >
                User Name
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 184px;
            left: calc(50% - 88.5px);
            width: 177px;
            height: 25px;
            font-size: var(--font-size-base);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              width: 45px;
              cursor: pointer;
            `}
            onClick={onGroupContainer29Click}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 97.78%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 2.22%;
                border-radius: var(--br-xs);
                background-color: var(--color-gainsboro-100);
                transform: rotate(180deg);
              `}
            />
            <img
              className={css`
                position: absolute;
                height: 124%;
                width: 68.89%;
                top: 0%;
                right: 31.11%;
                bottom: -24%;
                left: 0%;
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
              bottom: 2px;
              left: 0px;
              font-weight: 600;
            `}
          >
            Investor Wizard
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% + 1.5px);
            top: calc(50% - 1780.5px);
            right: 0px;
            left: -1.5px;
            height: 3696px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--gap-base);
            font-size: var(--font-size-lg);
          `}
        >
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 488.5px;
              align-self: flex-start;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 11.5px;
                font-weight: 600;
              `}
            >
              Top 10
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.75px);
                right: 0px;
                left: 0px;
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
                  width: calc(100% + 709px);
                  top: 0px;
                  right: -698px;
                  bottom: 0px;
                  left: -11px;
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
                        top: calc(50% - 2.5px);
                        left: calc(50% - 107px);
                        font-weight: 600;
                        cursor: pointer;
                      `}
                      onClick={onFarmOwnerNameClick}
                    >
                      Farm owner name
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
                        cursor: pointer;
                      `}
                      alt=""
                      src="/agriculture-image@2x.png"
                      onClick={onAgricultureImageClick}
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
                    left: calc(50% - 165px);
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
                      src="/agriculture-image@2x.png"
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
                    right: 10.5px;
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
                      src="/agriculture-image@2x.png"
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
                    right: -344.5px;
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
                      src="/agriculture-image@2x.png"
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
          </div>
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 488.5px;
              align-self: flex-start;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 11.5px;
                font-weight: 600;
              `}
            >
              Trading
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.75px);
                right: 0px;
                left: 0px;
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
                  width: calc(100% + 709px);
                  top: 0px;
                  right: -698px;
                  bottom: 0px;
                  left: -11px;
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
                      src="/agriculture-image15@2x.png"
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
                    left: calc(50% - 165px);
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
                      src="/agriculture-image@2x.png"
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
                    right: 10.5px;
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
                      src="/agriculture-image@2x.png"
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
                    right: -344.5px;
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
                      src="/agriculture-image@2x.png"
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
          </div>
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 489px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 11.5px;
                font-weight: 600;
              `}
            >
              Videos
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.5px);
                right: 0px;
                left: 0px;
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
                  width: calc(100% + 710px);
                  top: 0px;
                  right: -699px;
                  bottom: 0px;
                  left: -11px;
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
                      top: 0%;
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
                        top: calc(50% - 6.5px);
                        left: 54px;
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
                          width: 161.13%;
                          top: -6.19%;
                          right: -61.13%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 164.04%;
                          top: 67.66%;
                          right: -61.11%;
                          bottom: -0.66%;
                          left: -2.92%;
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
                        width: calc(100% + 0.5px);
                        top: calc(50% + 156.5px);
                        right: 0px;
                        left: -0.5px;
                        border-top: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 2px;
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
                        top: calc(50% + 82.16px);
                        left: calc(50% - 171px);
                        width: 342px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-548644.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 15px;
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
                        left: 15px;
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
                        bottom: 19.23px;
                        left: calc(50% - 75.18px);
                        width: 231.18px;
                        height: 18.54px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 17.06px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/iconlylightoutlinevolumedown.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-top: 1px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                      <img
                        className={css`
                          position: relative;
                          width: 20.62px;
                          height: 16.87px;
                        `}
                        alt=""
                        src="/icon-awesomechromecast.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 19.02px;
                          height: 19.04px;
                        `}
                        alt=""
                        src="/group-548691.svg"
                      />
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
                        right: 10px;
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
                    left: calc(50% - 165.5px);
                    width: 342px;
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
                        top: calc(50% - 6.5px);
                        left: 54px;
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
                          width: 161.13%;
                          top: -6.19%;
                          right: -61.13%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 164.04%;
                          top: 67.66%;
                          right: -61.11%;
                          bottom: -0.66%;
                          left: -2.92%;
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
                        width: calc(100% + 0.5px);
                        top: calc(50% + 156.5px);
                        right: 0px;
                        left: -0.5px;
                        border-top: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 2px;
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
                        top: calc(50% + 82.16px);
                        left: calc(50% - 171px);
                        width: 342px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-548644.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 15px;
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
                        left: 15px;
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
                        bottom: 19.23px;
                        left: calc(50% - 75.18px);
                        width: 231.18px;
                        height: 18.54px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 17.06px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/iconlylightoutlinevolumedown.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-top: 1px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                      <img
                        className={css`
                          position: relative;
                          width: 20.62px;
                          height: 16.87px;
                        `}
                        alt=""
                        src="/icon-awesomechromecast.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 19.02px;
                          height: 19.04px;
                        `}
                        alt=""
                        src="/group-548691.svg"
                      />
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
                        right: 10px;
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
                    right: 11.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                        top: calc(50% - 6.5px);
                        left: 54px;
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
                          width: 161.13%;
                          top: -6.19%;
                          right: -61.13%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 164.04%;
                          top: 67.66%;
                          right: -61.11%;
                          bottom: -0.66%;
                          left: -2.92%;
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
                        width: calc(100% + 0.5px);
                        top: calc(50% + 156.5px);
                        right: 0px;
                        left: -0.5px;
                        border-top: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 2px;
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
                        top: calc(50% + 82.16px);
                        left: calc(50% - 171px);
                        width: 342px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-548644.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 15px;
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
                        left: 15px;
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
                        bottom: 19.23px;
                        left: calc(50% - 75.18px);
                        width: 231.18px;
                        height: 18.54px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 17.06px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/iconlylightoutlinevolumedown.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-top: 1px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                      <img
                        className={css`
                          position: relative;
                          width: 20.62px;
                          height: 16.87px;
                        `}
                        alt=""
                        src="/icon-awesomechromecast.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 19.02px;
                          height: 19.04px;
                        `}
                        alt=""
                        src="/group-548691.svg"
                      />
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
                        right: 10px;
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
                    right: -343.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                        top: calc(50% - 6.5px);
                        left: 54px;
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
                          width: 161.13%;
                          top: -6.19%;
                          right: -61.13%;
                          bottom: -1.77%;
                          left: 0%;
                        `}
                      />
                      <div
                        className={css`
                          position: absolute;
                          height: 33%;
                          width: 164.04%;
                          top: 67.66%;
                          right: -61.11%;
                          bottom: -0.66%;
                          left: -2.92%;
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
                        width: calc(100% + 0.5px);
                        top: calc(50% + 156.5px);
                        right: 0px;
                        left: -0.5px;
                        border-top: 1px solid var(--color-gainsboro-100);
                        box-sizing: border-box;
                        height: 2px;
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
                        top: calc(50% + 82.16px);
                        left: calc(50% - 171px);
                        width: 342px;
                        height: 4.34px;
                      `}
                      alt=""
                      src="/group-548644.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 32.5px);
                        left: 15px;
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
                        left: 15px;
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
                        bottom: 19.23px;
                        left: calc(50% - 75.18px);
                        width: 231.18px;
                        height: 18.54px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: var(--gap-21xl);
                        color: var(--color-darkgray);
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 17.06px;
                          height: 15.5px;
                        `}
                        alt=""
                        src="/iconlylightoutlinevolumedown.svg"
                      />
                      <div
                        className={css`
                          position: relative;
                          margin-top: 1px;
                        `}
                      >
                        0:25 / 3:17
                      </div>
                      <img
                        className={css`
                          position: relative;
                          width: 20.62px;
                          height: 16.87px;
                        `}
                        alt=""
                        src="/icon-awesomechromecast.svg"
                      />
                      <img
                        className={css`
                          position: relative;
                          width: 19.02px;
                          height: 19.04px;
                        `}
                        alt=""
                        src="/group-548691.svg"
                      />
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
                        right: 10px;
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
          </div>
          <img
            className={css`
              position: relative;
              width: 355px;
              height: 73px;
              object-fit: cover;
              margin-left: 1px;
            `}
            alt=""
            src="/group-55112@2x.png"
          />
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 488.5px;
              margin-top: 24px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 11.5px;
                font-weight: 600;
              `}
            >
              Based On Your Interest
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.75px);
                right: 0px;
                left: 0px;
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
                  width: calc(100% + 709px);
                  top: 0px;
                  right: -698px;
                  bottom: 0px;
                  left: -11px;
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
                      src="/agriculture-image16@2x.png"
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
                        left: 15px;
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
                        left: 15px;
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
                    left: calc(50% - 165px);
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
                      src="/agriculture-image@2x.png"
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
                    right: 10.5px;
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
                      src="/agriculture-image@2x.png"
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
                    right: -344.5px;
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
                      src="/agriculture-image@2x.png"
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
          </div>
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 488.5px;
              align-self: flex-start;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 11.5px;
                font-weight: 600;
              `}
            >
              Recommended For You
            </div>
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.75px);
                right: 0px;
                left: 0px;
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
                  width: calc(100% + 709px);
                  top: 0px;
                  right: -698px;
                  bottom: 0px;
                  left: -11px;
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
                      src="/agriculture-image17@2x.png"
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
                    left: calc(50% - 165px);
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
                      src="/agriculture-image@2x.png"
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
                    right: 10.5px;
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
                      src="/agriculture-image@2x.png"
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
                    right: -344.5px;
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
                      src="/agriculture-image@2x.png"
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
          </div>
          <div
            className={css`
              position: relative;
              width: 376px;
              height: 488.5px;
              align-self: flex-start;
              font-size: var(--font-size-base);
            `}
          >
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: calc(50% - 233.75px);
                right: 0px;
                left: 0px;
                height: 478px;
                overflow-x: auto;
                mix-blend-mode: normal;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: calc(100% + 1063px);
                  top: 0px;
                  right: -1052px;
                  bottom: 0px;
                  left: -11px;
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
                      top: 0%;
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
                        width: 272px;
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
                          right: 95px;
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
                      src="/mask-group-1975@2x.png"
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
                        left: calc(50% - 156px);
                        font-size: var(--font-size-sm);
                        line-height: 20px;
                        display: inline-block;
                        width: 313px;
                        height: 84px;
                      `}
                    >
                      Eius sunt voluptate quo esse magnam rem nulla dolorem
                      optio. Ratione quaerat qui accusantium sunt fugit quas sed
                      dolorem. Sint nostrum non eos nisi nihil voluptate. Natus
                      ut unde dolor nesciunt blanditiis et cum. Sed iste
                      inventore reprehenderit incidunt ipsa et. Eius sunt
                      voluptate quo esse magnam rem nulla dolorem optio. Ratione
                      quaerat qui
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 46.5px);
                        left: calc(50% - 156px);
                        font-weight: 600;
                      `}
                    >
                      Article
                    </div>
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
                        width: 312px;
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
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
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
                    left: calc(50% - 342px);
                    width: 342px;
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
                        width: 272px;
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
                          right: 95px;
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
                      src="/mask-group-1975@2x.png"
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
                        left: calc(50% - 156px);
                        font-size: var(--font-size-sm);
                        line-height: 20px;
                        display: inline-block;
                        width: 313px;
                        height: 84px;
                      `}
                    >
                      Eius sunt voluptate quo esse magnam rem nulla dolorem
                      optio. Ratione quaerat qui accusantium sunt fugit quas sed
                      dolorem. Sint nostrum non eos nisi nihil voluptate. Natus
                      ut unde dolor nesciunt blanditiis et cum. Sed iste
                      inventore reprehenderit incidunt ipsa et. Eius sunt
                      voluptate quo esse magnam rem nulla dolorem optio. Ratione
                      quaerat qui
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 46.5px);
                        left: calc(50% - 156px);
                        font-weight: 600;
                      `}
                    >
                      Article
                    </div>
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
                        width: 312px;
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
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
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
                    left: calc(50% + 13px);
                    width: 342px;
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
                        width: 272px;
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
                          right: 95px;
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
                      src="/mask-group-1975@2x.png"
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
                        left: calc(50% - 156px);
                        font-size: var(--font-size-sm);
                        line-height: 20px;
                        display: inline-block;
                        width: 313px;
                        height: 84px;
                      `}
                    >
                      Eius sunt voluptate quo esse magnam rem nulla dolorem
                      optio. Ratione quaerat qui accusantium sunt fugit quas sed
                      dolorem. Sint nostrum non eos nisi nihil voluptate. Natus
                      ut unde dolor nesciunt blanditiis et cum. Sed iste
                      inventore reprehenderit incidunt ipsa et. Eius sunt
                      voluptate quo esse magnam rem nulla dolorem optio. Ratione
                      quaerat qui
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 46.5px);
                        left: calc(50% - 156px);
                        font-weight: 600;
                      `}
                    >
                      Article
                    </div>
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
                        width: 312px;
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
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
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
                    right: 9.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                        width: 272px;
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
                          right: 95px;
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
                      src="/mask-group-1975@2x.png"
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
                        left: calc(50% - 156px);
                        font-size: var(--font-size-sm);
                        line-height: 20px;
                        display: inline-block;
                        width: 313px;
                        height: 84px;
                      `}
                    >
                      Eius sunt voluptate quo esse magnam rem nulla dolorem
                      optio. Ratione quaerat qui accusantium sunt fugit quas sed
                      dolorem. Sint nostrum non eos nisi nihil voluptate. Natus
                      ut unde dolor nesciunt blanditiis et cum. Sed iste
                      inventore reprehenderit incidunt ipsa et. Eius sunt
                      voluptate quo esse magnam rem nulla dolorem optio. Ratione
                      quaerat qui
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 46.5px);
                        left: calc(50% - 156px);
                        font-weight: 600;
                      `}
                    >
                      Article
                    </div>
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
                        width: 312px;
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
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
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
                    right: -345.5px;
                    bottom: 27.5px;
                    width: 342px;
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
                        width: 272px;
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
                          right: 95px;
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
                      src="/mask-group-1975@2x.png"
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
                        left: calc(50% - 156px);
                        font-size: var(--font-size-sm);
                        line-height: 20px;
                        display: inline-block;
                        width: 313px;
                        height: 84px;
                      `}
                    >
                      Eius sunt voluptate quo esse magnam rem nulla dolorem
                      optio. Ratione quaerat qui accusantium sunt fugit quas sed
                      dolorem. Sint nostrum non eos nisi nihil voluptate. Natus
                      ut unde dolor nesciunt blanditiis et cum. Sed iste
                      inventore reprehenderit incidunt ipsa et. Eius sunt
                      voluptate quo esse magnam rem nulla dolorem optio. Ratione
                      quaerat qui
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: calc(50% + 46.5px);
                        left: calc(50% - 156px);
                        font-weight: 600;
                      `}
                    >
                      Article
                    </div>
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
                        width: 312px;
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
                        width: calc(100% - 340px);
                        top: calc(50% + 156.5px);
                        right: 271px;
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
                top: 0px;
                left: 11.5px;
                font-size: var(--font-size-lg);
                font-weight: 600;
              `}
            >
              Articles
            </div>
          </div>
          <div
            className={css`
              position: relative;
              width: 342px;
              height: 531.5px;
              margin-right: 12px;
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
              Top 5 Leaderboard
            </div>
            <div
              className={css`
                position: absolute;
                height: calc(100% - 31px);
                width: 100%;
                top: 31px;
                right: 0px;
                bottom: 0px;
                left: 0px;
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
                Investors
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 4px;
                  left: calc(50% - 81px);
                  font-weight: 600;
                  color: var(--color-darkgray);
                `}
              >
                Creators
              </div>
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: calc(50% - 213.75px);
                  right: 0px;
                  left: 0px;
                  height: 464px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-base);
                  text-align: center;
                  color: var(--color-dimgray);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 342px;
                    height: 80px;
                    cursor: pointer;
                    text-align: left;
                  `}
                  onClick={onComponent1231Click}
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
                      left: 9px;
                      text-align: center;
                    `}
                  >
                    1
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 15.75px);
                      left: calc(50% - 66px);
                      width: 107.21px;
                      height: 35.5px;
                      font-size: var(--font-size-sm);
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
                    >
                      Investor name 1
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        bottom: 2.63px;
                        left: 0px;
                        width: 75.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                        font-size: var(--font-size-xs);
                        font-weight: 500;
                        color: var(--color-darkgray);
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 35.73px);
                      width: calc(100% - 306.12px);
                      top: 17.87px;
                      right: 10px;
                      bottom: 17.87px;
                      left: 296.12px;
                      color: var(--color-goldenrod);
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
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 20px);
                      top: 10px;
                      bottom: 10px;
                      left: 26px;
                      max-height: 100%;
                      width: 60px;
                    `}
                    alt=""
                    src="/group-55075.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 342px;
                    height: 80px;
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
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 20px);
                      top: 10px;
                      bottom: 10px;
                      left: 26px;
                      max-height: 100%;
                      width: 60px;
                    `}
                    alt=""
                    src="/group-548071.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 9px;
                    `}
                  >
                    2
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 21.77px);
                      left: calc(50% - 66px);
                      width: 227px;
                      height: 44.27px;
                      text-align: left;
                      font-size: var(--font-size-sm);
                      color: var(--color-gray-400);
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 6.02px;
                        left: 0px;
                        font-weight: 600;
                      `}
                    >
                      Investor name 1
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        bottom: 5.38px;
                        left: 0px;
                        width: 75.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: 118.79px;
                        bottom: 2.75px;
                        font-size: var(--font-size-xs);
                        font-weight: 500;
                        color: var(--color-darkgray);
                      `}
                    >
                      (1.8)
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: calc(50% + 77.62px);
                        width: 35.88px;
                        font-size: var(--font-size-base);
                        color: var(--color-dimgray);
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
                  </div>
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 342px;
                    height: 80px;
                    text-align: left;
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
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 20px);
                      top: 10px;
                      bottom: 10px;
                      left: 26px;
                      max-height: 100%;
                      width: 60px;
                    `}
                    alt=""
                    src="/group-548072.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 9px;
                      text-align: center;
                    `}
                  >
                    3
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 15.75px);
                      left: calc(50% - 66px);
                      width: 107.21px;
                      height: 35.5px;
                      font-size: var(--font-size-sm);
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
                    >
                      Investor name 1
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        bottom: 2.63px;
                        left: 0px;
                        width: 75.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                        font-size: var(--font-size-xs);
                        font-weight: 500;
                        color: var(--color-darkgray);
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 35.73px);
                      top: 17.87px;
                      bottom: 17.87px;
                      left: calc(50% + 125.12px);
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
                <div
                  className={css`
                    position: relative;
                    width: 342px;
                    height: 80px;
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
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 20px);
                      top: 10px;
                      bottom: 10px;
                      left: 26px;
                      max-height: 100%;
                      width: 60px;
                    `}
                    alt=""
                    src="/group-548073.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 9px;
                    `}
                  >
                    4
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 15.75px);
                      left: calc(50% - 66px);
                      width: 107.21px;
                      height: 35.5px;
                      text-align: left;
                      font-size: var(--font-size-sm);
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
                    >
                      Investor name 1
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        bottom: 2.63px;
                        left: 0px;
                        width: 75.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                        font-size: var(--font-size-xs);
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
                    position: relative;
                    width: 342px;
                    height: 80px;
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
                      top: calc(50% - 6.5px);
                      left: 9px;
                    `}
                  >
                    5
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 15.75px);
                      left: calc(50% - 66px);
                      width: 107.21px;
                      height: 35.5px;
                      text-align: left;
                      font-size: var(--font-size-sm);
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
                    >
                      Investor name 1
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        bottom: 2.63px;
                        left: 0px;
                        width: 75.21px;
                        height: 10.73px;
                      `}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div
                      className={css`
                        position: absolute;
                        right: -1px;
                        bottom: 0px;
                        font-size: var(--font-size-xs);
                        font-weight: 500;
                        color: var(--color-darkgray);
                      `}
                    >
                      (1.8)
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 20px);
                      top: 10px;
                      bottom: 10px;
                      left: 26px;
                      max-height: 100%;
                      width: 60px;
                    `}
                    alt=""
                    src="/group-55074.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 179px;
            right: 10px;
            width: 35px;
            height: 35px;
            cursor: pointer;
          `}
          onClick={openFilter}
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
          <img
            className={css`
              position: absolute;
              top: calc(50% - 4.86px);
              left: calc(50% - 8.38px);
              width: 16.76px;
              height: 11.18px;
            `}
            alt=""
            src="/group-54872.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: var(--color-white);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14);
            height: 60px;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: calc(50% - 20.26px);
              left: calc(50% - 84.86px);
              width: 169.72px;
              height: 40.51px;
              object-fit: cover;
            `}
            alt=""
            src="/group-55010@2x.png"
          />
        </div>
        <img
          className={css`
            position: absolute;
            width: calc(100% + 6px);
            top: calc(50% - 1255.5px);
            right: -6px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            height: 66px;
          `}
          alt=""
          src="/component-118--1.svg"
        />
      </div>
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default MobileApp;
