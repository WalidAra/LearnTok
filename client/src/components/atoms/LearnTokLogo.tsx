import React from "react";

type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
};

const LearnTokLogo = ({
  width = 0,
  height = 0,
  color = "#6C5ECF",
  size,
}: LogoProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 960 1080"
      width={width !== 0 ? width : size}
      height={height !== 0 ? height : size}
    >
      <style type="text/css">{`.st0{fill:${color};}`}</style>
      <path
        className="st0"
        d="M724.8,348.1C788.9,386.6,856,421,916.1,464.9c54.5,39.8,43.2,118.8-18.5,156.3
        c-76.4,46.5-154.3,90.5-231.7,135.3C501.1,852.1,336.4,947.8,171.3,1043c-82.7,47.7-159.8,4.6-160.1-90.6
        c-0.7-277.5-0.5-555,0.2-832.5C11.7,24,88.1-19,171.6,28.9c101.2,58,201.6,117.5,303,175c40.4,22.9,59.3,56.3,59.7,101.5
        c0.3,38.2,0.1,76.5,0.1,124.9c-121.8-69.5-233.3-133.2-351.2-200.5c0,206.7,0,404.9,0,614.9c55.1-35.2,106.1-62.8,150.4-98.7
        c16.6-13.4,22.2-45.8,24.4-70.3c3.8-42.1,1.1-84.7,1.1-137c52.2,29.7,97.5,53.6,140.6,80.9c25.2,16,45.7,18,70.9,0.7
        c28.8-19.8,60.1-35.8,90.4-53.3c35.9-20.8,52.7-51.9,52.2-93.3c-0.5-39.7-0.1-79.4-0.1-119.1C717,352.4,720.9,350.2,724.8,348.1z"
      />
    </svg>
  );
};

export default LearnTokLogo;
