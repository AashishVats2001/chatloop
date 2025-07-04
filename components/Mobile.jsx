import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <div className="relative hidden sm:flex items-center justify-center w-1/4 max-w-[300px] min-w-[200px] md:-translate-x-30">
      <Image
        src="/top-mobile.png"
        width={355}
        height={663}
        alt="Mobile"
        className=""
      />

      <Image
        src="/top1.png"
        width={155}
        height={155}
        alt="User Female"
        className="z-20 absolute top-0 left-0 -translate-1/3 rounded-full w-1/2 max-w-[150px] min-w-[8px]"
      />

      <Image
        src="/top2.png"
        width={344}
        height={105}
        alt="Chat White"
        className="absolute top-1/3 -translate-x-1/2 w-full max-w-[300px] min-w-[200px]"
      />

      <Image
        src="/top3.png"
        width={254}
        height={98}
        alt="Chat Purple"
        className="absolute right-0 bottom-1/3 translate-x-1/2 w-3/4 max-w-[200px] min-w-[100px]"
      />

      <Image
        src="/top4.png"
        width={155}
        height={155}
        alt="User Male"
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 rounded-full w-1/4 max-w-[300px] min-w-[100px]"
      />
      <Image
        src="/top5.png"
        width={124}
        height={124}
        alt="Emoji"
        className="absolute bottom-0 left-0 -translate-x-1/3 -translate-y-1/4 w-1/4 max-w-[300px] min-w-[100px]"
      />
    </div>
  );
};

export default Mobile;
