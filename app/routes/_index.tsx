import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/remix";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { userId } = useAuth();
  return (
    <div>
      <div>Index Page</div>
      <SignedIn>
        <p>You are signed in! Your userId is: {userId}</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        You are signed out!
      </SignedOut>
    </div>
  );
}