import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "fenagles19@gmail.com",
  //     name: "Fe",
  //     lastName: "Nagles",
  //     password: "N1234",
  // }
  // });
  // console.log(newUser)
  
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers)

  // allUsers.forEach((user) => {
  //   console.log(`${user.id} - ${user.name}`)
  // })

  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: "clvsmm4wd00001ll1gme2s77i",
  //     email: "fenagles19@gmail.com"
  //   }
  // })
  // console.log(user)

  const user = await prisma.user.findFirst({
    where: {
      AND: [
        { email: "fenagles19@gmail.com" },
        { name: "Fe" }
  ]
}
  })
  console.log(user)
  



}

main()