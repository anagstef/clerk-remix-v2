import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
    const { userId } = await getAuth(args);
    if(!userId){
      return redirect("/sign-in");
    }
    return {};
  }

export default function ServerProtectedPage() {
    return (
      <div>
        <h1>Server-Protected route</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }