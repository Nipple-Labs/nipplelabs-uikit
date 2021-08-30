import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 14" {...props}>
      <path d="M24.0124 8.74103L22.9738 3.17025C22.9597 3.09644 22.9527 3.02263 22.9457 2.94883C22.8086 1.52186 20.9071 0.943695 19.2429 0.599255C17.3749 0.212639 14.9796 0 12.5 0C10.0186 0 7.62337 0.212639 5.75707 0.599255C4.09286 0.943695 2.19318 1.52186 2.05435 2.94883C2.04732 3.02263 2.04028 3.09644 2.02622 3.17025L0.987627 8.74103C0.351468 9.12941 0 9.54414 0 9.95712C0 11.6073 5.59539 13.3839 12.5 13.3839C19.4029 13.3839 25 11.6055 25 9.95712C25 9.54239 24.6485 9.12941 24.0124 8.74103ZM12.5 4.89596C7.74814 4.89596 3.89428 3.97336 3.89428 3.11753C3.89428 2.2617 7.74638 1.4006 12.5 1.4006C17.2536 1.4006 21.1057 2.2617 21.1057 3.11753C21.1057 3.97336 17.2536 4.89596 12.5 4.89596Z"/>
    </Svg>
  );
};

export default Icon;
