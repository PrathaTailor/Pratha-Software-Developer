import React from "react";
import Image from "next/image";
import profileImg from "../public/images/img-1.png";
import { sendEmail } from "./page";

export default function Banner() {
  return (
    <div className="min-h-screen p-12 bg-[#f3f3f3] flex gap-60 justify-center items-center">
      <div className="ml-10 grid gap-10">
        <h2 className="font-bold text-6xl tracking-wider">
          Hi, I am Pratha Tailor
        </h2>
        <h3 className="text-3xl tracking-wide">
          A React JS Developer based in Canada
        </h3>
        <button
          type="button"
          onClick={sendEmail}
          className="bg-[#ceff06] hover:bg-[#dffd07] p-2 w-60"
        >
          EMAIL ME
        </button>
      </div>
      <Image src={profileImg} width={550} alt="img" className="mx-10" />
    </div>
  );
}
