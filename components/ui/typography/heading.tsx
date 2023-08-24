import { FunctionComponent, ReactNode } from "react";

type HeadingProps = {
  level: number;
  children: ReactNode;
  className?: string;
};

export const Heading: FunctionComponent<HeadingProps> = ({
  level,
  children,
  className,
}) => {
  const defaultStyles = "font-semibold text-black pb-2";
  switch (level) {
    case 1:
      return (
        <h1 className={`${defaultStyles} text-3xl md:text-5xl ${className}`}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${defaultStyles} text-2xl md:text-4xl ${className}`}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${defaultStyles} text-xl md:text-3xl ${className}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${defaultStyles} text-lg md:text-2xl ${className}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${defaultStyles} text-lg md:text-xl ${className}`}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${defaultStyles} text-lg ${className}`}>{children}</h6>
      );
    default:
      throw Error("Unsupported heading level");
  }
};
