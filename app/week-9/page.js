"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main style={{ padding: 20 }}>
      {!user && (
        <>
          <h1>Welcome!</h1>
          <button onClick={handleLogin}>Login with GitHub</button>
        </>
      )}

      {user && (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>

          <p>
            <Link href="/week-9/shopping-list">Go to Shopping List</Link>
          </p>
        </>
      )}
    </main>
  );
}
