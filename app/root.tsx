import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { useState } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Somya Jain",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [show,setShow]= useState(false)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-18">
              <div className="w-full justify-between flex items-center">
                <Link to="/" className="flex-shrink-0" >
                  <img
                    className=""
                    src="/images/curly.png"
                    alt="Hi"
                  />
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                     
                    >
                      Home
                    </Link>
                    <Link
                      to="/work"
                      className="text-gray-800 dark:text-white  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      
                    >
                      Work
                    </Link>{" "}
                    <Link
                      to="/blog"
                      className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={()=>setShow(!show)} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={show?"md:hidden": "hidden"}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/"
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
               
              >
                Home
              </Link>
              <Link to="/work"
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
             
              >
                Works
              </Link>
              <Link to="/blog"
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                
              >
                Blogs
              </Link>
            
            </div>
          </div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
