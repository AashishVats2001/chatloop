import AboutOptions from "@/components/AboutOptions";
import DownloadButtons from "@/components/DownloadButtons";
import FAQs from "@/components/FAQ";
import Form from "@/components/Form";
import HowItWorksCards from "@/components/HowItWorksCards";
import Mobile from "@/components/Mobile";
import { PricingCarousel } from "@/components/PricingCarousel";
import { GetApps, ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import SocialIcons from "@/components/SocialIcons";
import TeamCarousel from "@/components/TeamCarousel";
import {
  faGooglePlay,
  faTwitter,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              Connect. Collaborate. Create <br></br> All in One Virtual Space
              with <br></br>
              <span className="font-semibold text-text-primary">
                VerseSquare!
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-balance text-text-faded">
              VerseSquare lets you host immersive virtual hangouts, events, and
              meetups with just a few clicks.
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
          About VerseSquare
          {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
        </h3>

        {/* Options */}
        <AboutOptions />

        <h4 className="text-text-gray font-semibold text-xl md:text-2xl lg:text-3xl">
          Connect with People all over the world, with your small device
        </h4>

        <Image
          src="/about-banner.png"
          width={1481}
          height={606}
          alt="Mobile banner"
          className="-mb-60"
        />
      </section>

      {/* Features */}
      <section
        id="features"
        className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-y-clip"
      >
        <div className="w-full max-w-6xl flex flex-col gap-16 items-center justify-center text-text-primary">
          <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-semibold">
            VerseSquare Features
            {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
          </h3>

          {/* <Image src='/about-banner.png' width={1481} height={606} alt="Mobile banner" className="" /> */}
          <div className="flex w-full justify-center">
            <ul className="flex flex-col text-end items-end justify-evenly gap-6 border-r-[1px] border-text-faded px-5">
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Custom Virtual Spaces</h4>
                  <p>Build and design unique environments</p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">
                    Real-Time Video & Voice
                  </h4>
                  <p>Talk and see each other instantly</p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Spatial Audio</h4>
                  <p>Hear sound based on user location</p>
                </div>
              </li>
              <li className="flex items-start feature-link-left">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Screen Sharing</h4>
                  <p> Share your screen with anyone</p>
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
                  <h4 className="text-xl font-medium">
                    Avatar Personalization
                  </h4>
                  <p>Create avatars that reflect you</p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Event Scheduling</h4>
                  <p>Plan meetups with calendar integration</p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Cross-Device Support</h4>
                  <p>Works on phone, tablet, and desktop</p>
                </div>
              </li>
              <li className="flex items-start feature-link-right">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">Privacy Controls</h4>
                  <p>Control access and room visibility</p>
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
          How It Works
          {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
        </h3>
        <p className="text-text-gray text-sm md:text-base lg:text-lg text-balance text-center font-medium">
          Getting started is simple. Choose a space design, send a link, and
          you're ready to go. VerseSquare removes the friction from virtual
          meetups. No downloads, no confusion, just real-time connection in
          beautifully designed environments
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
            VerseSquare Screenshots
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

      {/* FAQ */}
      <section
        id="faq"
        className="w-full flex items-center justify-center bg-background py-20"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-5 px-2">
          <div className="w-full flex flex-col gap-10 items-center md:items-start justify-center">
            <h2 className="heading text-primary flex flex-col gap-2 items-center md:items-start section-title text-2xl md:text-3xl lg:text-4xl">
              FAQ
              {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
            </h2>
            <FAQs />
          </div>
          <Image
            src="/about-banner-3.png"
            width={585}
            height={800}
            alt="FAQ Image"
            className="w-1/2"
          />
        </div>
      </section>

      {/* Contact Info */}
      <section
        id="contact"
        className="w-full py-20 flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-primary to-secondary overflow-y-clip"
      >
        <div className="w-full max-w-6xl flex flex-col gap-16 items-center justify-center text-text-primary">
          <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-semibold">
            Contact
            {/* <span className="px-3 py-10 text-inherit border-b-2 fill-inherit border-dotted"></span> */}
          </h3>
        </div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row border-border-light border-[1px] rounded-lg text-white z-10">
          {/* Contact Info */}
          <div className="flex items-start justify-center pt-20 pb-10 px-16 md:w-2/5 border-r-[0.1px] border-gray-300">
            <div className="flex flex-col gap-10 items-start">
              <h3 className="text-2xl font-bold">Contact Info</h3>
              <p>
                Got questions, feedback, or partnership inquiries? We&apos;re
                here to help.
              </p>

              {/* Email Us */}
              <div className="flex items-start gap-4 text-white">
                <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5! h-5!" />
                </div>
                <div className="flex flex-col items-start font-medium">
                  <h4 className="text-xl">Email us</h4>
                  <p className="text-sm">support@versesquare.com</p>
                </div>
              </div>

              {/* twitter*/}
              <div className="flex items-start gap-4 text-white">
                <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                  <FontAwesomeIcon icon={faTwitter} className="w-5! h-5!" />
                </div>
                <div className="flex flex-col items-start font-medium">
                  <h4 className="text-xl ">Twitter</h4>
                  <p className="text-sm">@VerseSquare</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 text-white">
                <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="w-5! h-5!"
                  />
                </div>
                <div className="flex flex-col items-start font-medium">
                  <h4 className="text-xl">Location</h4>
                  <p className="text-sm">
                    Remote-first, globally distributed team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex items-center md:items-start justify-center w-full md:w-3/4 pt-20 pb-10 px-16">
            <Form />
          </div>
        </div>
      </section>

      <footer className="w-full flex items-center justify-center bg-text-gray relative pb-20 pt-40">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className=" heading text-5xl text-white flex flex-col gap-2 items-center">
            Download VerseSquare
          </h2>
          <div className="flex flex-col md:flex-row justify-stretch w-3/4 md:w-full lg:w-3/4 gap-6 px-2">
            {/* App Store */}
            <div className="py-5 w-full flex items-center text-text-gray justify-center gap-2 bg-white rounded-full cursor-pointer relative">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="text-4xl"
                fixedWidth
              />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
              </div>
              <div className="absolute py-5 w-full flex items-center justify-center gap-2 rounded-full cursor-pointer text-white inset-0 bg-gradient-to-r from-white to-white hover:from-primary hover:to-secondary opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-4xl"
                  fixedWidth
                />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">
                    iOS App Store
                  </p>
                </div>
              </div>
            </div>

            {/* Play Store */}
            <div className="py-5 w-full flex items-center text-text-gray justify-center gap-2 bg-white rounded-full cursor-pointer relative">
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="text-4xl"
                fixedWidth
              />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Play Store</p>
              </div>
              <div className="absolute py-5 w-full flex items-center justify-center gap-2 rounded-full cursor-pointer text-white inset-0 bg-gradient-to-r from-white to-white hover:from-primary hover:to-secondary opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  className="text-4xl"
                  fixedWidth
                />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Play Store</p>
                </div>
              </div>
            </div>

            {/* Windows Store */}
            <div className="py-5 w-full flex items-center text-text-gray justify-center gap-2 bg-white rounded-full cursor-pointer relative">
              <FontAwesomeIcon
                icon={faWindows}
                className="text-4xl"
                fixedWidth
              />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Windows Store</p>
              </div>
              <div className="absolute py-5 w-full flex items-center justify-center gap-2 rounded-full cursor-pointer text-white inset-0 bg-gradient-to-r from-white to-white hover:from-primary hover:to-secondary opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faWindows}
                  className="text-4xl"
                  fixedWidth
                />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">
                    Windows Store
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <SocialIcons />
          <p className="text-white text-sm">
            © Copyright 2025. Developed by{" "}
            <span className="text-blue-400">DA</span>
          </p>
        </div>
      </footer>
    </>
  );
}
