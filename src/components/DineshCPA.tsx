import { FunctionComponent } from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import GroupComponent from "./GroupComponent";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Container from "./Container";
import AboutUs1 from "./AboutUs1";

export type DineshCPAType = {
  className?: string;
};

const DineshCPA: FunctionComponent<DineshCPAType> = ({ className = "" }) => {
  return (
    <div
      className={`relative bg-white flex flex-col items-center justify-start text-17xl text-gray-900 font-text-xl-font-normal overflow-hidden ${className}`}
      data-scroll-to="hero"
    
    >
      <Header />
      <Jumbotron />
      <div className="bg-green-800 w-full py-16 px-4 flex flex-col items-center text-center text-white" data-scroll-to="servicesContainer">
        <div className="max-w-screen-xl w-full flex flex-col items-center justify-center">
          <div className="max-w-3xl flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Together we can achieve your financial goals.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              We specialize in transforming your financial data into actionable
              insights for the future. We will work with you to craft a top-tier
              personal or corporate strategy, ensuring maximum growth
              opportunities.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button
                showRightIcon
                showLeftIcon={false}
                buttonText="Learn more"
                showButtonText
                propBackgroundColor="#f9fafb"
                propPadding="14px 24px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/arrowright1.svg"
                propTextTransform="unset"
                propColor="#000"
                propAlignSelf="unset"
                cartPlus1="/arrowrightoutline.svg"
                buttonFlex="unset"
                buttonAlignSelf="unset"
              />
              <Button
                showRightIcon={false}
                showLeftIcon
                buttonText="Watch video"
                showButtonText
                propBackgroundColor="#fff"
                propPadding="14px 24px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/videocamera.svg"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
                cartPlus1="/cartplus3.svg"
                buttonFlex="unset"
                buttonAlignSelf="unset"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-start text-17xl text-gray-900">
        <b className=" text-center text-4xl font-extrabold leading-tight mt-16">
          Our Areas of Expertise
        </b>
        <Services />
      </div>
      <Hero />
      <Container />
      <AboutUs1 />
      {/* <Carousel /> */}

      <GroupComponent />
      {/* <div className="relative w-full flex flex-col items-center justify-center text-center text-gray-900 py-16 px-4">
        <h2 className="text-13xl md:text-5xl font-extrabold leading-tight">
          Stay informed with the most recent financial and business updates by
          subscribing to our blog.
        </h2>
      </div> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <Contact />

      <Footer />
    </div>
  );
};

export default DineshCPA;
