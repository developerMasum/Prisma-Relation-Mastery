import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "user20",
      email: "user1200@mail.com",
      role: userRole.user,
      age: 41,
    },
  });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bii",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "TS",
  //   },
  // });

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "this is title5",
  //     content: "this is content5",
  //     authorId: 2,
  //     postCategory: {
  //       create: [
  //         {
  //           categoryId: 3,
  //           //   category: {
  //           //     connect: {
  //           //       id: 2,
  //           //     },
  //           //   },
  //         },
  //         {
  //           categoryId: 2,
  //         },
  //         {
  //           categoryId: 4,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });

  console.log(createUser);
};

main();
