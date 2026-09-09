import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import myPicture from "../assets/my_picture.jpeg";

const Home = () => (
  <div className="min-h-[calc(100vh-140px)] flex flex-col justify-center px-4 md:px-8 max-w-[1100px] mx-auto pt-16">
    <SEO
      title="Zelamene Shazi"
      description="Portfolio of Zelamene Shazi, final-year Computer Science student at the University of Pretoria."
    />

    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
      <div className="max-w-2xl animate-fade-in-up flex-1">
        <h1 className="text-4xl md:text-[48px] font-bold text-[#111827] dark:text-[#F9FAFB] leading-tight font-heading mb-6 tracking-tight">
          Zelamene Shazi
        </h1>
        <p className="text-[18px] md:text-[24px] text-[#6B7280] dark:text-[#D1D5DB] leading-[1.6] mb-10">
          Final‑year Computer Science student at the University of Pretoria,
          interested in software development, cloud/DevOps, and applying
          quantitative methods to real‑world problems.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-[8px] bg-[#2563EB] dark:bg-[#60A5FA] text-white dark:text-[#111827] font-semibold text-[16px] hover:opacity-90 transition-opacity shadow-[0_1px_3px_rgba(0,0,0,0.08)] text-center"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-[8px] bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#F9FAFB] border border-[#E5E7EB] dark:border-[#1F2937] font-semibold text-[16px] hover:bg-[#F8F9FA] dark:hover:bg-[#1F2937] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.08)] text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {}
      <div className="animate-fade-in-up w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#FFFFFF] dark:border-[#1F2937] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <img
          src={myPicture}
          alt="Zelamene Shazi"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default Home;
