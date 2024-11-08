"use client";

import { useUser } from "@clerk/nextjs";

const ScrollGame = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="flex justify-center space-x-4 text-sm">
      <div className="border px-4 py-2 rounded-md shadow-inner">
        {isLoaded ? (
          <>
            ชนะ :{" "}
            {user?.unsafeMetadata.points
              ? (user?.unsafeMetadata.points as number).toLocaleString()
              : 0}
          </>
        ) : (
          <>Loading ...</>
        )}
      </div>
      <div className="border px-4 py-2 rounded-md shadow-inner">
        {isLoaded ? (
          <>
            คะแนนพิเศษ :{" "}
            {user?.unsafeMetadata.bonus
              ? (user?.unsafeMetadata.bonus as number).toLocaleString()
              : 0}
          </>
        ) : (
          <>Loading ...</>
        )}
      </div>
    </div>
  );
};

export default ScrollGame;
