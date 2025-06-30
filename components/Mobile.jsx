import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src="/top-mobile.png"
        width={355}
        height={663}
        alt="Mobile"
        className=""
      />
      <div className="absolute top-0 left-0 -translate-1/2">
        <div className="relative">
          <Image
            src="/top1.png"
            width={228}
            height={228}
            alt="User Female"
            className="z-20"
          />
        </div>
      </div>
      <Image
        src="/top2.png"
        width={344}
        height={105}
        alt="Chat White"
        className="absolute top-1/3 -translate-x-1/2"
      />
      <div className="">
        <Image
          src="/top3.png"
          width={254}
          height={98}
          alt="Chat Purple"
          className="absolute right-0 bottom-1/3 translate-x-1/2"
        />
      </div>
      <Image
        src="/top4.png"
        width={228}
        height={228}
        alt="User Male"
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3"
      />
      <Image
        src="/top5.png"
        width={124}
        height={124}
        alt="Emoji"
        className="absolute bottom-0 left-0 -translate-x-1/3 -translate-y-1/4"
      />
    </div>
  );
};

export default Mobile;
