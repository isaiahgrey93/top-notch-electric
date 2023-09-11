import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        firstname: z.string(),
        lastname: z.string(),
        phone: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(({ input }) => {
      console.log(input);

      return {
        success: true,
      };
    }),
});
