"use client";
import Image from "next/image";
import profileImg from "../public/images/img-1.png";
import profileImg2 from "../public/images/img-5.png";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="min-h-screen p-12 bg-[#f3f3f3] flex gap-60 justify-center items-center">
        <div className="ml-10 grid gap-10">
          <h2 className="font-bold text-6xl ">Hi, I am Pratha Tailor</h2>
          <h3 className="text-3xl tracking-wide">
            A React JS Developer based in Canada
          </h3>
          <button
            type="button"
            onClick={() => (window.location = "mailto:pratha.developer22@gmail.com")}
            className="bg-[#ceff06] hover:bg-[#dffd07] p-2 w-60 font-bold"
          >
            EMAIL ME
          </button>
        </div>
        <Image src={profileImg} width={490} alt="img" className="mx-10" />
      </div>
      <div className="flex gap-20 justify-center items-center min-h-screen mx-20">
        <Image src={profileImg2} width={500} alt="img" className="" />
        <div className="grid gap-10 p-10">
          <hr className="bg-[#ceff06] h-1 w-10 "/>
          <h2 className="font-bold text-6xl">Who Am I?</h2>
          <h4 className="tracking-wide text-medium text-justify  pr-20">
            Hi, I’m Pratha Tailor, a passionate React JS Developer with over four
            years of experience crafting dynamic, responsive, and user-focused
            web applications. My expertise lies in leveraging modern JavaScript
            frameworks like React and Next.js, alongside best practices in Agile
            development and CI/CD pipelines. I thrive on creating seamless user
            experiences, optimizing performance, and constantly learning new
            technologies to stay ahead in the ever-evolving world of web
            development. Whether it’s building scalable solutions or
            collaborating with teams across the globe, I’m always ready for the
            next challenge. Let’s create something amazing together!
          </h4>
        </div>
      </div>
    </div>
  );
}
