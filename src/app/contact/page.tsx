import Link from "next/link";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-4xl m-auto">
      <h2 className="text-center font-semibold text-[35px] p-10">
        Interested in collaboration with me?
      </h2>
      <p className="text-center font-medium text-[30px] p-10">
        I'm always open to discussing product design work or partnership
        opportunities
      </p>
      <div className="flex justify-center items-center gap-10">
        <Link href={"https://www.linkedin.com/in/shaista-jawed/"}>
          <Image
            src={"/linkedin.png"}
            alt="linkedin-logo"
            width={80}
            height={80}
          />
        </Link>
        <Link href={'https://github.com/sjshikoh'}>
        <Image 
        src={'/github1.png'} 
        alt="github-logo"
        width={80}
        height={80}
        />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
