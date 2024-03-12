import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const transition = async () => {
  const result = await prisma.$transaction(async (transitionClient) => {
    const getAllPost = await transitionClient.user.findMany({
      where: {
        role: "admin",
      },
    });
    console.log(getAllPost);

    const countUser = await transitionClient.user.count();
    const updateUser = await transitionClient.user.update({
      where: {
        id: 6,
      },
      data: {
        age: 78,
      },
    });
});
console.log(result);
};
transition();
