import BlogpostCard from "@/components/general/BlogpostCard";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

const getData = async () => {
  const data = await prisma.BlogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
};

const BlogPosts = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogpostCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <Suspense fallback={<p>loding...</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
