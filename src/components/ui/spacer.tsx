import * as React from "react"

interface SpacerProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export const Spacer: React.FC<SpacerProps> = ({ className, size = "lg" }) => {

  switch (size) {
    case "sm":
      return <div className={`h-3 lg:h-8 xl:h-12 ${className ? className : ""}`} />;
    case "md":
      return <div className={`h-8 lg:h-12 xl:h-24 ${className ? className : ""}`} />;
    case "lg":
      return <div className={`h-12 lg:h-16 xl:h-32 ${className ? className : ""}`} />;
    case "xl":
      return <div className={`h-16 lg:h-20 xl:h-40 ${className ? className : ""}`} />;
  }
};
