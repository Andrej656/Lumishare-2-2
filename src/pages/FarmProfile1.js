import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const FarmProfile1 = () => {
  const navigate = useNavigate();

  const onFarmProfileContainerClick = useCallback(() => {
    navigate("/after-scrolling-the-title-will-appear-on-top");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: var(--color-white);
        width: 100%;
        height: 2514px;
        cursor: pointer;
        text-align: left;
        font-size: var(--font-size-base);
        color: var(--color-gray-400);
        font-family: var(--font-exo-2);
      `}
      onClick={onFarmProfileContainerClick}
    >
      <div
        className={css`
          position: absolute;
          top: calc(50% - 644px);
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
      <div
        className={css`
          position: absolute;
          width: 100%;
          top: 0px;
          right: 0px;
          left: 0px;
          height: 283px;
          overflow-x: auto;
          mix-blend-mode: normal;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: calc(100% + 748px);
            top: 0px;
            right: -748px;
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
              width: 375px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                object-fit: cover;
              `}
              alt=""
              src="/1024x512@2x.png"
            />
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              bottom: 0px;
              left: calc(50% - 186.5px);
              width: 375px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                object-fit: cover;
              `}
              alt=""
              src="/1024x512@2x.png"
            />
          </div>
          <div
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              right: -2px;
              bottom: 0px;
              width: 375px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                object-fit: cover;
              `}
              alt=""
              src="/1024x512@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 299px;
          left: 10px;
          width: 133px;
          height: 53px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 26.5px);
            left: 0px;
            font-size: var(--font-size-7xl);
            line-height: 25px;
            font-weight: 600;
          `}
        >
          Farm name
        </div>
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: 0px;
          `}
        >{`By `}</div>
        <div
          className={css`
            position: absolute;
            right: 10px;
            bottom: 0px;
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
      <img
        className={css`
          position: absolute;
          top: 266.5px;
          left: calc(50% - 16.5px);
          width: 33px;
          height: 7px;
        `}
        alt=""
        src="/group-55040.svg"
      />
      <img
        className={css`
          position: absolute;
          height: calc(100% - 2484.71px);
          top: 330.85px;
          bottom: 2153.85px;
          left: calc(50% - 44.24px);
          max-height: 100%;
          width: 23.74px;
        `}
        alt=""
        src="/group-54814.svg"
      />
      <div
        className={css`
          position: absolute;
          top: calc(50% - 950.59px);
          right: 10px;
          width: 109px;
          height: 13.37px;
          font-size: var(--font-size-xs);
          color: var(--color-darkgray);
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            right: 0px;
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
            left: calc(50% + 27.29px);
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
            left: calc(50% + 11.29px);
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
            left: calc(50% - 4.71px);
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
            left: 33.79px;
            width: 11.21px;
            height: 10.73px;
          `}
          alt=""
          src="/icon-awesomestar.svg"
        />
        <div
          className={css`
            position: absolute;
            right: 83px;
            bottom: 0px;
          `}
        >
          (1.8)
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          top: 376px;
          right: 10px;
          left: 10px;
          height: 61px;
          font-size: var(--font-size-sm);
        `}
      >
        <div
          className={css`
            position: absolute;
            width: calc(100% + 1px);
            top: 0px;
            left: 0px;
            line-height: 19px;
            display: inline-block;
            height: 39px;
          `}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 82px;
            height: 19px;
          `}
        >
          <div
            className={css`
              position: absolute;
              bottom: 2px;
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
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          top: calc(50% - 651px);
          right: 10px;
          left: 10px;
          height: 59px;
          color: var(--color-mediumseagreen);
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            left: 0px;
            width: 175px;
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
            height: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 168px;
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
              left: calc(50% - 32px);
              font-weight: 500;
            `}
          >
            Buy Now
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% - 793px);
          left: 5px;
          width: 297px;
          height: 46px;
          text-align: right;
          font-size: var(--font-size-7xl);
          color: var(--color-mediumseagreen);
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 135px;
          `}
        >
          <div
            className={css`
              position: absolute;
              bottom: 0px;
              left: 0px;
              font-weight: 600;
            `}
          >
            +0.87 LUMI
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 2px;
              font-size: var(--font-size-sm);
              color: var(--color-darkgray);
              text-align: left;
            `}
          >
            Yield
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            left: 0px;
            width: 121px;
            text-align: left;
            font-size: var(--font-size-sm);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 5px;
            `}
          >
            Price
          </div>
          <div
            className={css`
              position: absolute;
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              height: 26.17px;
              text-align: right;
              font-size: var(--font-size-7xl);
              color: var(--color-gray-400);
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
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          top: calc(50% - 700px);
          right: 10px;
          left: 10px;
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
            left: 126px;
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
          width: calc(100% + 1332px);
          top: calc(50% - 538px);
          right: -1332px;
          left: 0px;
          height: 526px;
          font-size: var(--font-size-lg);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 10px;
            font-weight: 600;
          `}
        >
          Electricity Produced
        </div>
        <div
          className={css`
            position: absolute;
            height: calc(100% - 30px);
            width: 100%;
            top: 30px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            font-size: var(--font-size-xs);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 4px);
              right: -6px;
              bottom: 0px;
              left: 10px;
              height: 386px;
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
                font-size: var(--font-size-sm);
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
                top: 0px;
                left: 0px;
                width: 374px;
                height: 309px;
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
                    height: calc(100% - 22.5px);
                    width: calc(100% - 54.5px);
                    top: 0px;
                    right: -0.5px;
                    bottom: 22.5px;
                    left: 55px;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/x-axis-line1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 17px;
                    left: 14px;
                  `}
                >
                  0kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 82.5px);
                    left: 2px;
                  `}
                >
                  100kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 38.5px);
                    left: 0px;
                  `}
                >
                  200kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 4.5px);
                    left: 0px;
                  `}
                >
                  300kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 48.5px);
                    left: 0px;
                  `}
                >
                  400kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 91.5px);
                    left: 1px;
                  `}
                >
                  500kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 20px;
                    left: 2px;
                    text-align: right;
                  `}
                >
                  600kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 64px);
                    top: calc(50% - 124.5px);
                    right: 9px;
                    left: 55px;
                    height: 279px;
                    overflow-x: auto;
                    mix-blend-mode: normal;
                    text-align: right;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 91.76%;
                      top: 0%;
                      bottom: 8.24%;
                      left: calc(50% - 138px);
                      width: 516px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-17xl);
                    `}
                  >
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 78px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-200);
                          width: 10px;
                          height: 44px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 28px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 83px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 150px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 44.67%;
                            width: 100%;
                            top: 55.33%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 55.33%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 44.67%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 22px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 67px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 58.21%;
                            width: 100%;
                            top: 41.79%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 41.79%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 58.21%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 117px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 78px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 35.9%;
                            width: 100%;
                            top: 64.1%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 64.1%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 35.9%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 172px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 133px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 54.14%;
                            width: 100%;
                            top: 45.86%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 45.86%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 54.14%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 4.66%;
                      top: 95.34%;
                      bottom: 0%;
                      left: calc(50% - 148px);
                      width: 545px;
                      display: flex;
                      flex-direction: row;
                      padding: 0px var(--padding-3xs) 0px 0px;
                      box-sizing: border-box;
                      align-items: flex-end;
                      gap: var(--gap-mid);
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
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: 0px;
                width: 297px;
                height: 45px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
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
              top: 4px;
              left: 10px;
              width: 209px;
              height: 16px;
              text-align: center;
              font-size: var(--font-size-base);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                font-weight: 600;
                color: var(--color-gray-400);
              `}
            >
              Live
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: calc(50% - 35.5px);
                font-weight: 600;
              `}
            >
              Monthly
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                font-weight: 600;
              `}
            >
              Yearly
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 49px;
              left: 0px;
              width: 375px;
              height: 36px;
              overflow-x: auto;
              mix-blend-mode: normal;
              font-size: var(--font-size-sm);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0%;
                bottom: 0%;
                left: calc(50% - 177.5px);
                width: 531px;
                display: flex;
                flex-direction: row;
                padding: 0px var(--padding-3xs) 0px 0px;
                box-sizing: border-box;
                align-items: flex-start;
                gap: var(--gap-19xl);
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Daily output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Monthly output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Total output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
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
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  684.58 t
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% + 1332px);
          top: calc(50% + 67px);
          right: -1332px;
          left: 0px;
          height: 487px;
          font-size: var(--font-size-lg);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 10px;
            font-weight: 600;
          `}
        >
          Feed-In Tariff
        </div>
        <div
          className={css`
            position: absolute;
            height: calc(100% - 37px);
            width: 100%;
            top: 37px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            font-size: var(--font-size-xs);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 4px);
              right: -6px;
              bottom: 0px;
              left: 10px;
              height: 386px;
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
                font-size: var(--font-size-sm);
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
                top: 0px;
                left: 0px;
                width: 374px;
                height: 309px;
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
                    height: calc(100% - 22.5px);
                    width: calc(100% - 54.5px);
                    top: 0px;
                    right: -0.5px;
                    bottom: 22.5px;
                    left: 55px;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/x-axis-line1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 17px;
                    left: 14px;
                  `}
                >
                  0kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 82.5px);
                    left: 2px;
                  `}
                >
                  100kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 38.5px);
                    left: 0px;
                  `}
                >
                  200kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 4.5px);
                    left: 0px;
                  `}
                >
                  300kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 48.5px);
                    left: 0px;
                  `}
                >
                  400kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 91.5px);
                    left: 1px;
                  `}
                >
                  500kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 20px;
                    left: 2px;
                    text-align: right;
                  `}
                >
                  600kWh
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 64px);
                    top: calc(50% - 124.5px);
                    right: 9px;
                    left: 55px;
                    height: 279px;
                    overflow-x: auto;
                    mix-blend-mode: normal;
                    text-align: right;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 91.76%;
                      top: 0%;
                      bottom: 8.24%;
                      left: calc(50% - 138px);
                      width: 516px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-17xl);
                    `}
                  >
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 78px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-200);
                          width: 10px;
                          height: 44px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 28px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 31.75%;
                            width: 100%;
                            top: 68.25%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 39.34%;
                            width: 100%;
                            top: 28.91%;
                            right: 0%;
                            bottom: 31.75%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 28.91%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 71.09%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 83px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 150px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 44.67%;
                            width: 100%;
                            top: 55.33%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 55.33%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 44.67%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 45.05%;
                            width: 100%;
                            top: 54.95%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 54.95%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 45.05%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 22px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 67px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 58.21%;
                            width: 100%;
                            top: 41.79%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 41.79%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 58.21%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 117px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 78px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 35.9%;
                            width: 100%;
                            top: 64.1%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 64.1%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 35.9%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
                        height: 172px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 133px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 54.14%;
                            width: 100%;
                            top: 45.86%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 45.86%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 54.14%;
                            left: 0%;
                            background-color: var(--color-orange);
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 10px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 10px;
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
                          width: 10px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 10px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            height: 42.95%;
                            width: 100%;
                            top: 57.05%;
                            right: 0%;
                            bottom: 0%;
                            left: 0%;
                            background-color: var(--color-gold-100);
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            height: 57.05%;
                            width: 100%;
                            top: 0%;
                            right: 0%;
                            bottom: 42.95%;
                            left: 0%;
                            background-color: var(--color-gold-200);
                          `}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 4.66%;
                      top: 95.34%;
                      bottom: 0%;
                      left: calc(50% - 148px);
                      width: 545px;
                      display: flex;
                      flex-direction: row;
                      padding: 0px var(--padding-3xs) 0px 0px;
                      box-sizing: border-box;
                      align-items: flex-end;
                      gap: var(--gap-mid);
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
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: 0px;
                width: 297px;
                height: 45px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
                    right: -1px;
                  `}
                >
                  PV System 93 kWh
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  width: 127px;
                  height: 17px;
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
                    top: 5px;
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
              top: 3px;
              left: 0px;
              width: 375px;
              height: 36px;
              overflow-x: auto;
              mix-blend-mode: normal;
              font-size: var(--font-size-sm);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0%;
                bottom: 0%;
                left: calc(50% - 177.5px);
                width: 531px;
                display: flex;
                flex-direction: row;
                padding: 0px var(--padding-3xs) 0px 0px;
                box-sizing: border-box;
                align-items: flex-start;
                gap: var(--gap-19xl);
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Daily output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Monthly output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
                  `}
                >
                  Total output:
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 50%;
                    left: 0%;
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
                    top: 0%;
                    left: 0%;
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
                    top: 50%;
                    left: 0%;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-gray-400);
                  `}
                >
                  684.58 t
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          right: 10px;
          bottom: 348px;
          left: 10px;
          height: 291px;
          font-size: var(--font-size-xs);
          color: var(--color-darkgray);
        `}
      >
        <div
          className={css`
            position: absolute;
            height: calc(100% - 28px);
            width: 100%;
            top: 28px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: var(--br-mini);
            background-color: var(--color-white);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: calc(100% - 64px);
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 64px;
              left: 0px;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: calc(100% + 252px);
                width: 100%;
                top: -126px;
                right: 0px;
                bottom: -126px;
                left: 0px;
              `}
            />
          </div>
          <img
            className={css`
              position: absolute;
              right: 12.48px;
              bottom: 20.4px;
              width: 19.02px;
              height: 19.04px;
            `}
            alt=""
            src="/group-548692.svg"
          />
          <img
            className={css`
              position: absolute;
              width: 100%;
              top: calc(50% + 67.5px);
              right: 0px;
              left: 0px;
              max-width: 100%;
              overflow: hidden;
              height: 4.34px;
            `}
            alt=""
            src="/group-548645.svg"
          />
          <div
            className={css`
              position: absolute;
              bottom: 22.16px;
              left: 24px;
              width: 235.4px;
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
              src="/icon-awesomeplay2.svg"
            />
            <img
              className={css`
                position: relative;
                width: 89.41px;
                height: 15.5px;
              `}
              alt=""
              src="/group-548671.svg"
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
          <img
            className={css`
              position: absolute;
              right: 51.09px;
              bottom: 20.9px;
              width: 22.66px;
              height: 18.54px;
            `}
            alt=""
            src="/icon-awesomechromecast1.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 20.5px;
              right: 10px;
              width: 37.82px;
              height: 12px;
              color: var(--color-gray-400);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                text-transform: uppercase;
                text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.34);
              `}
            >
              Live
            </div>
            <img
              className={css`
                position: absolute;
                height: calc(100% - 1px);
                top: 1.5px;
                bottom: -0.5px;
                left: 0px;
                border-radius: 50%;
                max-height: 100%;
                width: 11px;
              `}
              alt=""
              src="/ellipse-20251.svg"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: var(--font-size-lg);
            font-weight: 600;
            color: var(--color-gray-400);
          `}
        >
          Farm LIVE 24/7
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          width: calc(100% - 20px);
          right: 10px;
          bottom: 83px;
          left: 10px;
          height: 211px;
          font-size: var(--font-size-lg);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 105.5px);
            left: 0px;
            font-weight: 600;
          `}
        >
          Location
        </div>
        <img
          className={css`
            position: absolute;
            height: calc(100% - 28px);
            width: 100%;
            top: 28px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
          `}
          alt=""
          src="/mask-group-1981@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: calc(50% - 9.4px);
            left: calc(50% - 61.81px);
            width: 54.66px;
            height: 64.8px;
          `}
          alt=""
          src="/group-55049.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          width: calc(100% + 25px);
          top: 0px;
          right: -25px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          height: 85px;
        `}
        alt=""
        src="/group-550541.svg"
      />
      <img
        className={css`
          position: absolute;
          width: calc(100% + 6px);
          top: calc(50% - 505px);
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
  );
};

export default FarmProfile1;
