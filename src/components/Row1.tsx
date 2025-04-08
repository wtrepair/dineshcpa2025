import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";

export type Row1Type = {
  className?: string;
  mockup?: string;
  heading?: string;
  supportingText?: string;
  cartPlus?: string;
  buttonText?: string;
  cartPlus1?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  showButtonText?: boolean;
  propBackgroundColor?: string;
  propPadding1?: string;
  propOverflow?: string;
  propBorder?: string;
  propWidth?: string;
  propBorderRadius?: string;
  propHeight1?: string;
  propColor?: string;
  propAlignSelf?: string;
  buttonFlex?: string;
  buttonAlignSelf?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const Row1: FunctionComponent<Row1Type> = ({
  className = "",
  mockup,
  propPadding,
  heading,
  propHeight,
  propDisplay,
  supportingText,
  cartPlus,
  buttonText,
  cartPlus1,
  showRightIcon,
  showLeftIcon,
  showButtonText,
  propBackgroundColor,
  propPadding1,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight1,
  propColor,
  propAlignSelf,
  buttonFlex,
  buttonAlignSelf,
}) => {
  const rightContent1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`w-[1280px] flex flex-row items-center justify-start gap-boundvariablesdata13 text-left text-17xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <img
        className="w-[540.5px] relative rounded-lg h-[406.8px] object-cover"
        alt=""
        src={mockup}
      />
      <div
        className="w-[640px] flex flex-col items-start justify-start gap-boundvariablesdata14"
        style={rightContent1Style}
      >
        <div
          className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold"
          style={headingStyle}
        >
          {heading}
        </div>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
          {supportingText}
        </div>
        <div className="flex flex-row items-center justify-start gap-boundvariablesdata15 text-sm">
          <Button
            showRightIcon={showRightIcon}
            showLeftIcon={showLeftIcon}
            buttonText={buttonText}
            showButtonText={showButtonText}
            propBackgroundColor={propBackgroundColor}
            propPadding={propPadding1}
            propOverflow={propOverflow}
            propBorder={propBorder}
            propWidth={propWidth}
            propBorderRadius={propBorderRadius}
            propHeight={propHeight1}
            cartPlus={cartPlus}
            propColor={propColor}
            propAlignSelf={propAlignSelf}
            cartPlus1={cartPlus1}
            buttonFlex={buttonFlex}
            buttonAlignSelf={buttonAlignSelf}
          />
          <div className="rounded-rounded-lg1 bg-white border-gray-200 border-[1px] border-solid hidden flex-row items-center justify-center py-boundvariablesdata17 px-boundvariablesdata18 gap-boundvariablesdata16">
            <img
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/arrownarrowright1.svg"
            />
            <div className="relative leading-[150%] font-medium">Read more</div>
            <img
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/arrownarrowright1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;