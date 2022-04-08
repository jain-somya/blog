import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/post";
import type {Post} from '~/post'


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
    return json(await getPosts('blog'));
  };
export default function BlogIndex() {
  const posts = useLoaderData<Post[]>();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
        <h2>Articles</h2>
      <div >
        <div className="justify-left">
          <ul>
            {posts.map((post:any) => (
              <li key={post.slug}>
                <Link to={post.slug} className="text-blue-600 underline">
                  {post.title}
                </Link>
            <p>{post.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
