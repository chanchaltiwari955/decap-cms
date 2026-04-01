import { getAllPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
