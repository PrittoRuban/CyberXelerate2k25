import { Capriola } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section";
import ThemeSwitch from "@/components/ui/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { SparklesCore } from "@/components/ui/sparkles";

const geistSans = Capriola({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geistMono = Capriola({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "CyberXelerate 2K25",
  description:
    "The CyberXelerate-2k24 symposium at RMK College of Engineering and Technology offers a range of technical and non-technical competitions, including paper presentations, coding challenges, and penetration testing. Participants can attend without registration fees and have the chance to win cash prizes1. The event promises a professional atmosphere with a formal dress code and complimentary food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth !scroll-snap-y-mandatory">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#423d3d]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-transparent"></div>
        <div className="relative z-20">
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <div className="w-full h-full absolute -z-20">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="hidden dark:w-full dark:h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="relative">{children}</div>
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
