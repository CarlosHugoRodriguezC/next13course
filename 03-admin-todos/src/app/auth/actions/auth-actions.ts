import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export const getUserServerSession = async () => {
  const sessionServer = await getServerSession(authOptions);
  return sessionServer?.user;
};

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return null;
  }

  const userDb = await prisma.user.findUnique({
    where: { email },
  });

  if (!userDb) {
    const newUser = await createUser(email, password);
    return newUser;
  }

  if (!bcrypt.compareSync(password, userDb.password ?? "")) {
    return null;
  }

  return userDb;
};

const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: bcrypt.hashSync(password, 10),
    },
  });

  return user;
};
