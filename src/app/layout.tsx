import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import"./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lulu Sir - Full-Stack Creative Developer & AI Specialist",
  description: "Portfolio showcasing expertise in AI integration, modern web development, visual design, and creative automation. Discover innovative solutions that blend technology with creativity.",
  keywords: ["AI", "Web Development", "Design", "Automation", "Full-Stack", "Creative Coding", "Portfolio"],
  authors: [{ name: "Lulu Sir" }],
  creator: "Lulu Sir",
  publisher: "Lulu Sir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lulusir.dev",
    siteName: "Lulu Sir Portfolio",
    title: "Lulu Sir - Full-Stack Creative Developer & AI Specialist",
    description: "Portfolio showcasing expertise in AI integration, modern web development, visual design, and creative automation.",
    images: [
      {
        url: "https://lulusir.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lulu Sir Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lulu Sir - Full-Stack Creative Developer & AI Specialist",
    description: "Portfolio showcasing expertise in AI integration, modern web development, visual design, and creative automation.",
    images: ["https://lulusir.dev/og-image.png"],
    creator: "@lulusir"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}
      >
        {/* Theme initialization script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemDark);

                if (shouldUseDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.log('Theme initialization failed:', e);
              }
            })();
          `
        }} />

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
