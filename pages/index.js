import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

export default function Homepage({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Khang&apos;s Blog</title>
        <meta
          name="descripton"
          content="The website which shares the knowledge about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}
