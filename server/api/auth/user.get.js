import { userTransformer } from "~~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const user = event.context.auth?.user;

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized user",
      }),
    );
  }

  return {
    user: userTransformer(user),
  };
});
