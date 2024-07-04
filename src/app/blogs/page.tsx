import { client } from "@/libs/client";
import BlogList from "@/app/components/BlogList";

interface Blog {
  id: string;
  title: string;
  eyecatch?: { url: string };
  category?: { name: string };
  publishedAt: string;
}

const Home = async () => {
  const blogs: Blog[] = await client
    .get({ endpoint: "blogs" })
    .then((res) => res.contents);

  return <BlogList blogs={blogs} />;
};

export default Home;
