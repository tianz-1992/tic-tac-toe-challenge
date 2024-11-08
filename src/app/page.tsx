import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <div className="flex flex-col items-center flex-1 h-full justify-center min-h-screen">
      {userId}
    </div>
  );
}
