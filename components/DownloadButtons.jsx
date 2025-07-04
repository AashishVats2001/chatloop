import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

const DownloadButtons = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap justify-center">
      <div className="flex items-center gap-2 text-lg md:text-xl rounded-lg bg-white px-5 py-3 text-secondary font-medium hover:opacity-95 hover:scale-105 transition-all cursor-pointer">
        {/* <FontAwesomeIcon icon={faAppStoreIos} className="text-text-dark" size="2x" /> */}
        <FontAwesomeIcon
          icon={faGooglePlay}
          className="text-text-gray text-xl md:text-2xl lg:text-3xl"
          
        />
        <h3>Play Store</h3>
      </div>
      <div className="flex items-center gap-2 text-lg md:text-xl rounded-lg bg-white px-5 py-3 text-secondary font-medium hover:opacity-95 hover:scale-105 transition-all cursor-pointer">
        <FontAwesomeIcon
          icon={faAppStoreIos}
          className="text-text-gray text-xl md:text-2xl lg:text-3xl"
          
        />
        <h3>App Store</h3>
      </div>
    </div>
  );
};

export default DownloadButtons;
