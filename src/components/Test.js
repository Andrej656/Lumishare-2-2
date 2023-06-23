import { memo } from "react";
import { css } from "@emotion/css";

const Test = memo(() => {
  return (
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
  );
});

export default Test;
