import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionHeading from "./ui/section-heading";
import { useSectionObserver } from "@/hooks/intersection-observer";
import { link } from "@nextui-org/react";

export default function Contact() {
  useSectionObserver("contact", "Contact");
  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto px-8 mb-12 backdrop-blur-sm"
    >
      <SectionHeading>Contact</SectionHeading>
      <div className="font-serif text-gray-600 dark:text-gray-400 text-md">
      <HoverEffect items={contacts} className="gap-6" /></div>
    </section>
  );
}

export const contacts = [
  {
    title: "Head Of Department CSE (Cyber Security)",
    details: [{ name: "Dr. Udhaya Sankar S M", phone: "" }],
    link: "https://www.linkedin.com/in/udhaya-sankar-s-m-00799021/",
  },
  {
    title: "Faculty Coordinator - Associate Professor",
    details: [{ name: "Dr. Dharini N", phone: "" }],
    link: "https://www.linkedin.com/in/dr-dharini-n-80854b136/",
  },
  {
    title: "Student Coordinator",
    details: [{ name: "Mr. Aswanth Babu", phone: "+91 91509 08828" }],
    link: "https://www.linkedin.com/in/aswanthbabu2004/",
  },
];
