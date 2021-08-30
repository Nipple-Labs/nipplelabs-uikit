import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 44 44" {...props}>
      <path d="M21.6997 43.0354C33.5531 43.0354 43.1621 33.4264 43.1621 21.573C43.1621 9.71964 33.5531 0.110596 21.6997 0.110596C9.84635 0.110596 0.237305 9.71964 0.237305 21.573C0.237305 33.4264 9.84635 43.0354 21.6997 43.0354Z" />
      <path d="M13.1678 23.4928L15.836 30.1697C16.0182 30.6318 16.6169 30.7554 16.9683 30.404L20.2092 27.1632L26.1637 31.9008C26.5607 32.2197 27.1529 32.0114 27.27 31.5168L31.6627 12.6315C31.7864 12.0848 31.2527 11.6228 30.7321 11.831L8.94432 20.5774C8.36513 20.8116 8.36514 21.6381 8.95083 21.8659L13.1678 23.4928ZM11.7622 20.9939L22.9945 16.484L13.6494 22.1327L11.7622 21.3973C11.5799 21.3323 11.5734 21.072 11.7622 20.9939ZM25.0899 16.907L17.2937 24.0395L16.3566 27.5732L14.619 23.239L25.0899 16.907ZM17.8729 27.456L18.348 25.6729L19.0768 26.2521L17.8729 27.456ZM25.8644 29.8118L19.0378 24.3844L29.7169 14.6098L26.2093 29.6816C26.1767 29.8508 25.9945 29.9159 25.8644 29.8118Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
