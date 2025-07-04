import React from "react";
import { Home, Users, Smile, Settings } from "lucide-react";

const AboutOptions = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center pb-10 justify-center border-b border-border-light text-text-gray text-lg md:text-xl lg:text-2xl font-medium">
      
      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r border-border-light">
        <Home size={48} />
        <p>Create Space</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r border-border-light">
        <Users size={48} />
        <p>Invite People</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8 border-r border-border-light">
        <Smile size={48} />
        <p>Hangout</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-8">
        <Settings size={48} />
        <p>Customize</p>
      </div>
      
    </div>
  );
};

export default AboutOptions;

