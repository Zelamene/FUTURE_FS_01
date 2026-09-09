import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center text-center px-4 pt-16">
        <SEO title="Page Not Found" description="The requested page could not be found." />
        <h1 className="text-[96px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading leading-none mb-4">404</h1>
        <h2 className="text-[24px] font-medium text-[#6B7280] dark:text-[#D1D5DB] mb-8">Page not found.</h2>
        <Link
            to="/"
            className="px-6 py-3 rounded-[8px] bg-[#2563EB] dark:bg-[#60A5FA] text-white dark:text-[#111827] font-semibold hover:opacity-90 transition-opacity"
        >
            Back to Home
        </Link>
    </div>
);

export default NotFound;