import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from './icons';

const TimelineItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-[#E5E7EB] dark:border-[#1F2937] rounded-[12px] bg-[#FFFFFF] dark:bg-[#111827] overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-[#F8F9FA] dark:hover:bg-[#1F2937]/50 transition-colors"
            >
                <div>
                    <h4 className="text-[18px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading">
                        {item.title}
                    </h4>
                    <div className="text-[#6B7280] dark:text-[#D1D5DB] text-sm mt-1">
                        {item.entity} • {item.date}
                    </div>
                </div>
                <div className="text-[#6B7280] dark:text-[#D1D5DB]">
                    {isExpanded ? <IconChevronUp className="w-5 h-5" /> : <IconChevronDown className="w-5 h-5" />}
                </div>
            </button>

            <div
                className={`px-4 md:px-6 transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] pb-6 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
                    }`}
            >
                {Array.isArray(item.description) ? (
                    <ul className="list-disc pl-5 space-y-2 text-[#111827] dark:text-[#F9FAFB] text-[16px] leading-[1.6]">
                        {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-[#111827] dark:text-[#F9FAFB] text-[16px] leading-[1.6]">
                        {item.description}
                    </p>
                )}

                {item.achievements && (
                    <div className="mt-4 pt-4 border-t border-[#E5E7EB] dark:border-[#1F2937]">
                        <h5 className="font-semibold text-[#111827] dark:text-[#F9FAFB] mb-2 font-heading">
                            Achievements & Honours:
                        </h5>
                        <ul className="list-disc pl-5 space-y-1 text-[#6B7280] dark:text-[#D1D5DB] text-[15px]">
                            {item.achievements.map((ach, i) => (
                                <li key={i}>{ach}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelineItem;