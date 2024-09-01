import prisma from "../../src/prismaClient";
import { faker } from "@faker-js/faker";

type UserId = string;

async function PostSeeder(usersId: UserId[]) {
  const data = [];

  for (let i = 0; i < 20; i++) {
    const title = faker.lorem.sentence();
    const content = faker.lorem.sentences();
    const userId = usersId[Math.floor(Math.random() * usersId.length)];

    data.push({
      title,
      content,
      userId,
    });
  }

  console.log("Started post seeding...");
  await prisma.post.createMany({ data });
  console.log("Done post seeding.");
}

export default PostSeeder;
