import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/server-runtime";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const links: LinksFunction=()=> {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Blog() {
  return (
    <div>
      <div className="flex justify-center">
        {/*  className="prose lg:prose-xl py-10 overflow-x-hidden" */}
        <Outlet />
      </div>
    </div>
  );
}
