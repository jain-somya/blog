import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getPost } from "~/post";
import type { Post } from "~/post";
import { LinksFunction } from "@remix-run/server-runtime";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const links: LinksFunction=()=> {
  return [{ rel: "stylesheet", href: styles }];
}
export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return json(await getPost(params.slug,"blog"));
};

export default function PostSlug() {
  const post = useLoaderData<Post>();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-72 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/pool.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
          
            <div className="sm:px-3 sm:py-8 sm:border-l sm:border-r border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  //  <main dangerouslySetInnerHTML={{ __html: post.html }} />;

}
