import React from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects = () => (
    <div className="min-h-screen max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-20 mt-16">
        <SEO title="Zelamene Shazi" description="Projects by Zelamene Shazi" />

        <div className="mb-12">
            <h1 className="text-[32px] md:text-[48px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading tracking-tight mb-4">
                Projects
            </h1>
            <p className="text-[18px] text-[#6B7280] dark:text-[#D1D5DB]">
                A selection of things I've built, broken, and learned from.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
                <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    </div>
);

export default Projects;