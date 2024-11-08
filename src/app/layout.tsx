import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

const MitrFont = Mitr({
  weight: ["400", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Tic-tac-toe challenge",
  description: "Tic-tac-toe game challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="px-10 lg:px-6 flex-1">
            <div className="fixed right-10 top-5">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-8",
                  },
                }}
              />
            </div>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
