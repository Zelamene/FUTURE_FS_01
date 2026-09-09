import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, tech, demoLink, githubLink, image } = project;

  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111827] rounded-[12px] overflow-hidden border border-[#E5E7EB] dark:border-[#1F2937] shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow group">
      <div className="h-44 w-full bg-[#F8F9FA] dark:bg-[#0B1120] relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2563EB] to-[#60A5FA] text-white text-4xl font-bold font-heading">
            {initials}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB] font-heading mb-2">
          {title}
        </h3>
        <p className="text-[#6B7280] dark:text-[#D1D5DB] text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs font-medium rounded-[6px] bg-[#F8F9FA] dark:bg-[#1F2937] text-[#111827] dark:text-[#F9FAFB] border border-[#E5E7EB] dark:border-[#374151]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm font-medium">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#2563EB] dark:text-[#60A5FA] hover:underline"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#2563EB] dark:text-[#60A5FA] hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;