import Posts from "@/components/posts/all-post";

export default function Home(props) {
  return <Posts posts={props.posts} />;
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080");
  const data = await response.json();

  return {
    props: {
      posts: data.result,
    },
  };
}
