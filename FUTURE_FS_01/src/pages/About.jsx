import React from 'react';
import SEO from '../components/SEO';
import TimelineItem from '../components/TimelineItem';
import skillsData from '../data/skills';
import experienceData from '../data/experience';
import { IconDownload } from '../components/icons';

const About = () => (
    <div className="min-h-screen max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-20 mt-16">
        <SEO title="Zelamene Shazi" description="About Zelamene Shazi - Experience and Skills" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
                <h1 className="text-[32px] md:text-[48px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading tracking-tight mb-6">
                    About Me
                </h1>
                <div className="text-[#111827] dark:text-[#F9FAFB] text-[16px] leading-[1.6] space-y-4 mb-8">
                    <p>
                        I am a final-year Computer Science student at the University of Pretoria with a deep interest in software development, architectural design, cloud/DevOps operations, and quantitative work.
                    </p>
                    <p>
                        Over the course of my studies, I've developed a passion for solving complex, real-world problems—whether it's building adversarial tools for hackathons, architecting backend solutions for a university capstone, or optimizing simulation logic.
                    </p>
                    <p>
                        When I'm not coding, I'm involved in mentoring and tutoring students in algorithms and computer science fundamentals.
                    </p>
                </div>

                <button className="flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#F9FAFB] border border-[#E5E7EB] dark:border-[#1F2937] font-semibold text-sm hover:bg-[#F8F9FA] dark:hover:bg-[#1F2937] transition-colors shadow-sm">
                    <IconDownload className="w-4 h-4" /> Download Resume
                </button>
            </div>

            <div className="lg:col-span-7 space-y-12">
                <section>
                    <h3 className="text-[24px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading mb-6 border-b border-[#E5E7EB] dark:border-[#1F2937] pb-2">
                        Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skillsData.map((category, idx) => (
                            <div key={idx} className="bg-[#FFFFFF] dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#1F2937] p-5 rounded-[12px]">
                                <h4 className="text-sm font-bold text-[#6B7280] dark:text-[#D1D5DB] uppercase tracking-wider mb-3">
                                    {category.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 text-[14px] rounded-[6px] bg-[#F8F9FA] dark:bg-[#1F2937] text-[#111827] dark:text-[#F9FAFB] border border-[#E5E7EB] dark:border-[#374151]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-[24px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading mb-6 border-b border-[#E5E7EB] dark:border-[#1F2937] pb-2">
                        Experience & Education
                    </h3>
                    <div className="space-y-4">
                        {experienceData.map((item, idx) => (
                            <TimelineItem key={idx} item={item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </div>
);

export default About;