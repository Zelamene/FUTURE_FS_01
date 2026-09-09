import React, { useState } from "react";
import SEO from "../components/SEO";
import { IconGithub, IconLinkedin, IconMail } from "../components/icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams(formData).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Form submission failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-140px)] max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <SEO title="Zelamene Shazi" description="Contact Zelamene Shazi" />

      <div>
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#111827] dark:text-[#F9FAFB] font-heading tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-[18px] text-[#6B7280] dark:text-[#D1D5DB] mb-8">
          Have a question or want to work together? Leave a message here or
          reach out through my socials.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:shazizelamene@gmail.com"
            className="flex items-center gap-4 text-[#111827] dark:text-[#F9FAFB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <div className="p-3 bg-[#F8F9FA] dark:bg-[#111827] rounded-[8px] border border-[#E5E7EB] dark:border-[#1F2937]">
              <IconMail className="w-5 h-5" />
            </div>
            <span className="font-medium">shazizelamene@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zelamene-shazi-66ab142b6/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#111827] dark:text-[#F9FAFB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <div className="p-3 bg-[#F8F9FA] dark:bg-[#111827] rounded-[8px] border border-[#E5E7EB] dark:border-[#1F2937]">
              <IconLinkedin className="w-5 h-5" />
            </div>
            <span className="font-medium">LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/Zelamene?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#111827] dark:text-[#F9FAFB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <div className="p-3 bg-[#F8F9FA] dark:bg-[#111827] rounded-[8px] border border-[#E5E7EB] dark:border-[#1F2937]">
              <IconGithub className="w-5 h-5" />
            </div>
            <span className="font-medium">GitHub Repositories</span>
          </a>
          <div className="flex items-center gap-4 text-[#111827] dark:text-[#F9FAFB]">
            <div className="p-3 bg-[#F8F9FA] dark:bg-[#111827] rounded-[8px] border border-[#E5E7EB] dark:border-[#1F2937]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="font-medium">Pretoria, South Africa</span>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#111827] p-6 md:p-8 rounded-[12px] border border-[#E5E7EB] dark:border-[#1F2937] shadow-sm">
        {isSuccess ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in-up">
            <div className="w-16 h-16 bg-[#16A34A]/10 dark:bg-[#22C55E]/10 text-[#16A34A] dark:text-[#22C55E] rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] font-heading">
              Message Sent!
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Thanks! I'll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="mt-4 px-6 py-2 rounded-[8px] bg-[#F8F9FA] dark:bg-[#1F2937] text-[#111827] dark:text-[#F9FAFB] border border-[#E5E7EB] dark:border-[#374151] hover:bg-[#E5E7EB] dark:hover:bg-[#374151] transition-colors text-sm font-medium"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5 animate-fade-in-up"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#111827] dark:text-[#F9FAFB] mb-1.5"
              >
                Name{" "}
                <span className="text-[#DC2626] dark:text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#F8F9FA] dark:bg-[#0B1120] border border-[#E5E7EB] dark:border-[#374151] text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#60A5FA] focus:border-transparent transition-shadow"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#111827] dark:text-[#F9FAFB] mb-1.5"
              >
                Email{" "}
                <span className="text-[#DC2626] dark:text-[#EF4444]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#F8F9FA] dark:bg-[#0B1120] border border-[#E5E7EB] dark:border-[#374151] text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#60A5FA] focus:border-transparent transition-shadow"
                placeholder="name@dev.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#111827] dark:text-[#F9FAFB] mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#F8F9FA] dark:bg-[#0B1120] border border-[#E5E7EB] dark:border-[#374151] text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#60A5FA] focus:border-transparent transition-shadow"
                placeholder="Collaboration Opportunity"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#111827] dark:text-[#F9FAFB] mb-1.5"
              >
                Message{" "}
                <span className="text-[#DC2626] dark:text-[#EF4444]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#F8F9FA] dark:bg-[#0B1120] border border-[#E5E7EB] dark:border-[#374151] text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#60A5FA] focus:border-transparent transition-shadow resize-none"
                placeholder="Hi Zelamene..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-[8px] bg-[#2563EB] dark:bg-[#60A5FA] text-white dark:text-[#111827] font-semibold text-[16px] hover:opacity-90 transition-opacity shadow-sm disabled:opacity-70 flex justify-center items-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
