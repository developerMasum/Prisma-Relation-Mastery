import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // to show only the posts of this user
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .post();

  // user info with posts
  // const result = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     post: true,
  //   },
  // });

  const publishedPostUser = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUser, { depth: Infinity });
};
relationalQueries();
