import React from 'react';
import { IconGithub, IconExternalLink } from './icons';

const ProjectCard = ({ project }) => (
    <div className="group flex flex-col bg-[#FFFFFF] dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#1F2937] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-[#2563EB] dark:hover:border-[#60A5FA] transition-all duration-300 h-full">
        <h3 className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB] font-heading mb-3 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
            {project.title}
        </h3>
        <p className="text-[#6B7280] dark:text-[#D1D5DB] text-[16px] leading-[1.6] mb-6 flex-grow">
            {project.description}
        </p>

        <div className="mt-auto flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-sm rounded-[6px] bg-[#F8F9FA] dark:bg-[#1F2937] text-[#6B7280] dark:text-[#D1D5DB] border border-[#E5E7EB] dark:border-[#374151]"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB] dark:border-[#1F2937]">
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        className="flex items-center gap-1.5 text-sm font-medium text-[#111827] dark:text-[#F9FAFB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                    >
                        <IconGithub className="w-4 h-4" /> GitHub
                    </a>
                )}
                {project.demoLink && (
                    <a
                        href={project.demoLink}
                        className="flex items-center gap-1.5 text-sm font-medium text-[#111827] dark:text-[#F9FAFB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                    >
                        <IconExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                )}
            </div>
        </div>
    </div>
);

export default ProjectCard;