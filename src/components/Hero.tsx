import { FunctionComponent } from "react";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`bg-white w-full py-16 px-4 flex flex-col items-center text-center text-gray-900 ${className}`}
    >
      <div className="max-w-screen-xl flex flex-col items-center justify-center">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-13xl md:text-5xl font-extrabold leading-tight">
            Numbers with Purpose: Building Your Path to Prosperity.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-500">
            Our approach goes beyond just managing your finances—we turn numbers
            into strategy, helping individuals and businesses build a clear path
            to financial security and success.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 mt-6 sm:hidden">
            <Button
              showRightIcon
              showLeftIcon={false}
              buttonText="Learn more"
              showButtonText
              propBackgroundColor="#1a56db"
              propPadding="14px 24px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="/arrowright1.svg"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/arrowright.svg"
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
  );
};

export default Hero;
