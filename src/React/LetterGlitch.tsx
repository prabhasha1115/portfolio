import React from "react";

const LogoBackground = ({
  logoSrc = "octocodz.jpg",
  altText = "Logo",
}: {
  logoSrc?: string;
  altText?: string;
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={logoSrc}
        alt={altText}
        className="h-64 w-64 z-10" // Adjust height (64 = 16rem ≈ size of your left section)
      />
    </div>
  );
};

export default LogoBackground;
