import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {


  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // users.forEach((user) => {
  //   console.log("------------------------------------");
  //   console.log(`User: ${user.name} ${user.lastName}`);
  //   user.posts.forEach((post, i) => {
  //     console.log(`${i}. ${post.title} ${post.content}`);
  //   });
  // });



  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "juanes@gmail.com",
  //     name: "Juan",
  //     lastName: "Esteban",
  //     password: "J1234",
  //     posts: {
  //       create: {
  //         title: "Este es mi segundo post",
  //         content: "Super contento de estar creando posts",
  //       },
  //     },
  //   },
  // });
  // console.log(newUser);


  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "yebemuco@gmail.com",
  //     name: "Yesenia",
  //     lastName: "Murillo",
  //     password: "Y1234",
  // }
  // });
  // console.log(newUser)

  
  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Este es mi segundo post",
  //     content: "Super contento de estar creando posts",
  //     authorId: newUser.id,
  //   },
  // });
  // console.log(newPost);


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

  // const user = await prisma.user.findFirst({
  //   where: {
  //     AND: [{ email: "fenagles19@gmail.com" }, { name: "Fe" }],
  //   },
  // });
  // console.log(user);


  // const user = await prisma.user.update({
  //   where: {
  //     email: "alice@gmail.com",
  //   },
  //   data: {
  //     email: "fenagles19@gmail.com",
  //     name: "Fe",
  //     lastName: "Nagles",
  //     password: "F1234",
  //   },
  // });
  // console.log(user);

  // const user = await prisma.user.delete({
  //   where: {
  //     email: "fenagles19@gmail.com",
  //   }
  // })
  // console.log(user)

  // const user = await prisma.user.upsert({
  //   where: {
  //     email: "jealmuco@gmail.com",
  //   },
  //   update: {
  //     name: "Jerry",
  //     lastName: "Murillo",
  //     password: "J1234",
  //     email: "jealmuco@gmail.com",
  //   },
  //   create: {
  //     name: "Jerry",
  //     lastName: "Murillo",
  //     password: "J1234",
  //     email: "jealmuco@gmail.com",
  //   },
  // });
  // console.log(user);



}

main();
