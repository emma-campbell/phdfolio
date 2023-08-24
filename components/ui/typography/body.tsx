import { FunctionComponent, ReactNode } from "react";

type BodyProps = {
  textSize?: string;
  children: ReactNode;
  className?: string;
};

export const Body: FunctionComponent<BodyProps> = ({
  textSize,
  children,
  className,
}) => {
  const defaultStyles = `font-normal font-sans text-gray-300 text-${
    textSize ?? "md"
  }`;
  return <p className={`${defaultStyles} ${className}`}>{children}</p>;
};
