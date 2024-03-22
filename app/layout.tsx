import '@/app/ui/global.css'; 
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Root Dashboard',
    default: 'Root Dashboard',
  },
  description:
    'This repository is part of the Next.js App Router course, where we explore the main features of Next.js by building a full-stack web application.',
  metadataBase: new URL(
    'https://nextjs-dashboard-git-main-shamim-hossains-projects-03448f0e.vercel.app/',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
