import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batch = async () => {

  const createUser = prisma.user.create({
    data: {
      username: "faarhans",
      email: "faf@gmail.com",
      age: 25,
      role: "admin",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 55,
    },
  });

  const [userData, updateData] =  await prisma.$transaction([
    createUser,
    updateUser
  ])
  console.log(userData,updateData);
};

batch();
