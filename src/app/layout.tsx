import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-merriweather",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận - Chứng Nhân Hy Vọng",
  description: "Nghiên cứu tổng quan về cuộc đời, linh đạo và di sản của Đức Hồng y Nguyễn Văn Thuận (1928-2002).",
  keywords: "Nguyễn Văn Thuận, Hồng y, Công giáo Việt Nam, Đường Hy Vọng, linh đạo, phong thánh",
  openGraph: {
    title: "Đức Hồng y Nguyễn Văn Thuận - Chứng Nhân Hy Vọng",
    description: "13 năm tù đày, 1001 tư tưởng hy vọng, một di sản bất tử",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
