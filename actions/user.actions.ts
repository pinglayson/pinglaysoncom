import User from "@/models/user.model";
import dbConnect from "@/lib/mongoose";
import { handleError } from "@/lib/utils";

export async function createUser(user: CreateUserParams) {
  try {
    await dbConnect();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
