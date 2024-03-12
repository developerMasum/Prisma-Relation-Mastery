import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // average
  //   const averageAge = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });
  //sum
  //   const sum = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });
  //count
  //   const count = await prisma.user.aggregate({
  //     _count: {
  //       age: true,
  //     },
  //   });

  //   count total data
  //   const countData = await prisma.user.count();
  //   console.log(countData);
  // min /max
  const minOrMax = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minOrMax);
};
aggregates();
