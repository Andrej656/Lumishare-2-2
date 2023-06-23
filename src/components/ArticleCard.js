import { memo } from "react";
import { css } from "@emotion/css";

const ArticleCard = memo(() => {
  return (
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
  );
});

export default ArticleCard;
