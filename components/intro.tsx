"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile.png"
              width="192"
              height="192"
              priority={true}
              alt="Akshay venu profile pic"
              quality="95"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0  right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="!leading-1.5 mb-10 mt-4 px-4 font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Akshay.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110  hover:bg-gray-950 focus:scale-110 active:scale-x-105"
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition   hover:scale-110 focus:scale-110 active:scale-x-105"
          download
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-venu-99a6591b1/" target="_blank"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 outline-none transition  hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15]  active:scale-x-105"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/akshayvenu" target="_blank"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] outline-none transition   hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-x-105"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
