"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className="toaster group"
      visibleToasts={3}
      position="bottom-center"
      toastOptions={{
        style: {
          fontFamily: '"Mitr", "Mitr Fallback"',
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
