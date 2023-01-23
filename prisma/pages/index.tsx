import {GetStaticProps} from "next";
import prisma from "@/lib/prisma";
import Header from "@/components/Header";

type Post = {
  id: string,
  title: string,
  content:string,
  published: boolean,
  authorId:string,
}

type Props = {
  feed: Post[]
}

export default function Home({feed}: Props) {
  console.log(feed[0])
  return (
    <>
      <Header/>
    </>
  )
}

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    // include: {
    //   author: {
    //     select: { name: true },
    //   },
    // },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

