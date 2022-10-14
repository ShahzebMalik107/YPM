import styles from "../../styles/blog.module.css";
export default function Home({ data }) {
  return (
      <div>
        {data.map((post, index) => {
          return (
              <div key={index} className={styles.blog_card}>
                  <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
                  <h2>{post.title.rendered}</h2>
                  <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}></div>
              </div>
          );
        })}
      </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const getPosts = await fetch(
    `https://backend.gublootechnologies.com/wp-json/wp/v2/posts?_embed&slug=${id}`
  );
  const data = await getPosts.json();
  return { props: { data } };
  const res = await fetch;
}
