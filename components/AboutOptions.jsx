import { MessageSquareText } from "lucide-react";
import React from "react";

const AboutOptions = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center pb-10 justify-center border-b-[1px] border-border-light text-text-gray text-lg md:text-xl lg:text-2xl font-medium">
      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r-[1px] border-border-light">
        <MessageSquareText size={48}/>
        <p className="">Stay Connected</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r-[1px] border-border-light">
        <MessageSquareText size={48}/>
        <p className="">Stay Connected</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r-[1px] border-border-light">
        <MessageSquareText size={48}/>
        <p className="">Stay Connected</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8">
        <MessageSquareText size={48}/>
        <p className="">Stay Connected</p>
      </div>
    </div>
  );
};

export default AboutOptions;
