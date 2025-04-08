import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";

export type RowType = {
  className?: string;
  heading?: string;
  supportingText?: string;
  collageFinanceBannerConcept?: string;
  cartPlus?: string;
  buttonText?: string;
  cartPlus1?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  showButtonText?: boolean;
  propBackgroundColor?: string;
  propPadding2?: string;
  propOverflow?: string;
  propBorder?: string;
  propWidth?: string;
  propBorderRadius?: string;
  propHeight?: string;
  propColor?: string;
  propAlignSelf?: string;
  buttonFlex?: string;
  buttonAlignSelf?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const Row: FunctionComponent<RowType> = ({
  className = "",
  propPadding,
  heading,
  supportingText,
  propPadding1,
  collageFinanceBannerConcept,
  cartPlus,
  buttonText,
  cartPlus1,
  showRightIcon,
  showLeftIcon,
  showButtonText,
  propBackgroundColor,
  propPadding2,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight,
  propColor,
  propAlignSelf,
  buttonFlex,
  buttonAlignSelf,
}) => {
  const rightContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`w-[1280px] flex flex-row items-center justify-start gap-boundvariablesdata13 text-left text-17xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div
        className="w-[640px] flex flex-col items-start justify-start gap-boundvariablesdata14"
        style={rightContentStyle}
      >
        <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold">
          {heading}
        </div>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
          {supportingText}
        </div>
        <div
          className="flex flex-row items-center justify-start gap-boundvariablesdata15 text-sm"
          style={buttonsStyle}
        >
          <Button
            showRightIcon={showRightIcon}
            showLeftIcon={showLeftIcon}
            buttonText={buttonText}
            showButtonText={showButtonText}
            propBackgroundColor={propBackgroundColor}
            propPadding={propPadding2}
            propOverflow={propOverflow}
            propBorder={propBorder}
            propWidth={propWidth}
            propBorderRadius={propBorderRadius}
            propHeight={propHeight}
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
      <img
        className="w-[558px] relative h-[360px] object-cover"
        alt=""
        src={collageFinanceBannerConcept}
      />
    </div>
  );
};

export default Row;