import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center flex-1 h-full justify-center min-h-screen">
      <SignIn />
    </div>
  );
}
