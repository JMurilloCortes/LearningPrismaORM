import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "fenagles19@gmail.com",
      name: "Fe",
      lastName: "Nagles",
      password: "N1234",
  }
  });
  console.log(newUser)
}

main()