import User from "@/models/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { handleError } from "@/lib/utils";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
