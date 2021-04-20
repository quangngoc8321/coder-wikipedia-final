import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        is 3 seconds...
      </p>
    </div>
  );
}
