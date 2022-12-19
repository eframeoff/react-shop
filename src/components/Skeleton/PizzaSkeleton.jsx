import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={500}
      viewBox="0 0 300 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="260" height="260" />
      <rect x="0" y="320" rx="15" ry="15" width="260" height="90" />
      <rect x="0" y="425" rx="15" ry="15" width="90" height="30" />
      <rect x="150" y="425" rx="15" ry="15" width="110" height="30" />
      <rect x="0" y="280" rx="15" ry="15" width="260" height="25" />
    </ContentLoader>
  );
};

export default PizzaSkeleton;
