import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           published: true,
  //         },
  //         {
  //           title: {
  //             contains: "tx",
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log(andFiltering);

  //   or filtering
  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           published: true,
  //         },
  //         {
  //           title: {
  //             contains: "tx",
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log(orFiltering);

  // not operator

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: "this is title",
        },
      ],
    },
  });
  console.log(notFiltering);
};

filtering();
