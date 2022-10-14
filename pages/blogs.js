import Link from "next/link";
import Head from "next/head";
import styles from "../styles/blog.module.css";

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Head>Blogs</Head>
      <h1>Blogs</h1>
      <div className={styles.flex}>
        {data.map((post, index) => {
          return (
            <Link href={`/blog/${post['slug']}`} key={index}>
              <div className={styles.blog_card}>
                  <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
                  <h2>{post.title.rendered}</h2>
                  <div dangerouslySetInnerHTML={{__html:post['excerpt']['rendered']}}></div>
              </div>
              
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const getPosts = await fetch(
    "https://backend.gublootechnologies.com/wp-json/wp/v2/posts?_embed&per_page=100"
  );
  const data = await getPosts.json();
  return { props: { data } };
}
