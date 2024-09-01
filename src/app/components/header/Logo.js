import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
          <img src={"/assets/images/logo/Logo_Full.svg"} alt="voopo" className="img-fluid mt-2" />
      </Link>
    </div>
  );
};

export default Logo;
