import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={474}
    height={570}
    viewBox="0 0 441 570"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="5" y="0" rx="0" ry="0" width="441" height="476" />
    <rect x="5" y="545" rx="10" ry="10" width="436" height="22" />
    <rect x="5" y="505" rx="10" ry="10" width="436" height="22" />
  </ContentLoader>
);
