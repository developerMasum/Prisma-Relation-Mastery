import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupByData = await prisma.user.groupBy({
    by: ["role"],
    _count:{
      role:true
    },
    having:{
      age:{
      _sum:{
        gte:25
      }
      }
    }
  });
  console.log(groupByData);
};
groupBy();
