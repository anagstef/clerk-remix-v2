import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/remix";

export default function ClientProtectedPage() {
    return (
        <>
            <SignedIn>
                <div>
                    <h1>Client-Protected route</h1>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
  }