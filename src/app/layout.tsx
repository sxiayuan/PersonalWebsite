import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stephanie Xia — Interactive 3D Portfolio',
  description: 'Exploring growth through creative engineering and interactive storytelling.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-warmDark text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
