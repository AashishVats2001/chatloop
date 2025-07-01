import AboutOptions from "@/components/AboutOptions";
import DownloadButtons from "@/components/DownloadButtons";
import HowItWorksCards from "@/components/HowItWorksCards";
import Mobile from "@/components/Mobile";
import { PricingCarousel } from "@/components/PricingCarousel";
import { GetApps, ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import TeamCarousel from "@/components/TeamCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="w-full flex justify-center bg-gradient-to-r from-primary to-secondary pt-20 h-dvh"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-2 px-2">
          <div className="max-w-3/5 gap-4 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin text-balance leading-16 text-slight-fade">
              The best way to connect with your friends is with <br></br>
              <span className="font-semibold text-text-primary">ChatLoop!</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-balance text-text-faded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis laudantium ullam voluptatibus
            </p>
            <div className="mt-20">
              <DownloadButtons />
            </div>
          </div>
          <Mobile />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="w-full max-w-6xl pt-20 flex flex-col gap-16 items-center justify-center overflow-y-clip"
      >
        <h3 className="section-title text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
          About Chat Loop
          {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
        </h3>

        {/* Options */}
        <AboutOptions />

        <h4 className="text-text-gray font-semibold text-xl md:text-2xl lg:text-3xl">
          Connect with People all over the world , with your small device
        </h4>

        <Image
          src="/about-banner.png"
          width={1481}
          height={606}
          alt="Mobile banner"
          className="scale-125"
        />
      </section>

      {/* Features */}
      <section
        id="features"
        className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-y-clip"
      >
        <div className="w-full max-w-6xl flex flex-col gap-16 items-center justify-center text-text-primary">
          <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-semibold">
            Chat Loop Features
            {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
          </h3>

          {/* <Image src='/about-banner.png' width={1481} height={606} alt="Mobile banner" className="" /> */}
          <div className="flex w-full justify-center">
            <ul className="flex flex-col text-end items-end justify-evenly gap-6 border-r-[1px] border-text-faded px-5">
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
            </ul>

            <Image
              src="/feature-mob.png"
              width={356}
              height={606}
              alt="Mobile Features"
              className="hidden md:block"
            />

            <ul className="flex flex-col text-start items-start justify-evenly gap-6 border-l-[1px] border-text-faded px-5">
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Easy Installation</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="howitworks"
        className="w-full max-w-6xl py-20 flex flex-col gap-16 items-center justify-center"
      >
        <h3 className="section-title text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
          How Chat Loop Works
          {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
        </h3>
        <p className="text-text-gray text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
          voluptatem obcaecati! ipsum dolor sit Rem autem voluptatem obcaecati
        </p>
        <HowItWorksCards />
      </section>

      {/* Screenshot Carousel */}
      <section
        id="screenshot"
        className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-y-clip"
      >
        <div className="w-full max-w-6xl flex flex-col gap-16 items-center justify-center text-text-primary">
          <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-semibold">
            Chat Loop Screenshots
            {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
          </h3>
          <ScreenshotCarousel />
        </div>
      </section>

      {/* Our Work Place */}
      <section
        id="workplace"
        className="w-full max-w-6xl py-20 flex flex-col gap-16 items-center justify-center"
      >
        <h3 className="section-title text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
          Our Work Place
          {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
        </h3>
        <TeamCarousel />
      </section>

      {/* Pricing Carousel */}
      <section
        id="pricing"
        className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-y-clip"
      >
        <div className="w-full max-w-6xl flex flex-col gap-16 items-center justify-center text-text-primary">
          <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Pricing Plan
            {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
          </h3>
          <PricingCarousel />
        </div>
      </section>
    </>
  );
}