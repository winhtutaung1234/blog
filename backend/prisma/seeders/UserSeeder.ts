import prisma from "../../src/prismaClient";
import { faker } from "@faker-js/faker";

async function UserSeeder() {
  const userIds = [];

  console.log("Started user seeding...");
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
      },
    });

    userIds.push(user.id);
  }

  console.log("Done user seeding.");

  return userIds;
}

export default UserSeeder;
