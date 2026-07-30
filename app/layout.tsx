import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DefateStar — 开源项目参与者与开发者",
  description: "DefateStar 的个人网站，记录 Shell++、产品界面、开源文档与发布维护。",
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "DefateStar",
    title: "DefateStar — Build clearly. Share openly.",
    description: "围绕开源、穿戴设备、产品界面与文档体验持续创造。",
    images: [{ url: `${siteUrl}/og.png`, width: 1536, height: 1024, alt: "DefateStar 个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DefateStar — Build clearly. Share openly.",
    description: "围绕开源、穿戴设备、产品界面与文档体验持续创造。",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
