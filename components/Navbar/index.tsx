import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="px-8 mx-auto w-full max-w-6 h-20">
            <Image
                src={"/mintlifyLogo.svg"}
                alt="mintlifyLogo"
                width={104}
                height={24}
            ></Image>
        </nav>
    );
};

export default Navbar;
