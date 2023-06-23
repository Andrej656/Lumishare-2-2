import { memo } from "react";
import { css } from "@emotion/css";

const Banner = memo(() => {
  return (
    <img
      className={css`
        position: relative;
        border-radius: var(--br-sm);
        width: 1780px;
        height: 256px;
        object-fit: cover;
      `}
      alt=""
      src="/image-220@2x.png"
    />
  );
});

export default Banner;
