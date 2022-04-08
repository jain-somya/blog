import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/post";
import type { Post } from "~/post";

// function postFromModule(mod: any){
//     return {
//         slug: mod.filename.replace(/\.mdx?$/,''),
//         ...mod.attributes.meta
//     }
// }

// export const loader: LoaderFunction=()=>{
//     return [postFromModule(post1),postFromModule(post1)]

// }

export const loader = async () => {
  return json(await getPosts("work"));
};
export default function BlogIndex() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="w-3/4 p-12">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Tech Projects</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {posts.map((post: any) => (
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <Link to={post.slug} className="w-full block h-full">
              <img
                alt="blog photo"
                src="/images/pool.jpg"
                className="max-h-40 w-full object-cover"
              />
            </Link>
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <Link to={post.slug} className="w-full block h-full">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  {post.title}
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  {post.desc}
                </p>
              </Link>
              <div className="flex items-center mt-4">
                <a href="#" className="w-full block h-full"></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <section className="text-gray-600 body-font overflow-hidden">
    //     <h2>Projects</h2>
    //   <div >
    //     <div className="justify-left">
    //       <ul>

    //       </ul>
    //     </div>
    //   </div>
    // </section>
  );
}
