import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kali Bữa Ăn",
    template: "%s · Kali Bữa Ăn",
  },
  description:
    "Ước lượng Kali theo cách chế biến, món Việt, bệnh lý và thuốc lưu hành tại Việt Nam. Công cụ giáo dục, không thay thế bác sĩ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[16px] leading-7">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
