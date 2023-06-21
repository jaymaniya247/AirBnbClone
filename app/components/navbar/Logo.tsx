"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="hidden md:block cursor-pointer" onClick={() => {}}>
      <Image
        alt="Airbnb logo"
        src={"/images/logo.png"}
        width={"100"}
        height={"100"}
      />
    </div>
  );
};

export default Logo;
