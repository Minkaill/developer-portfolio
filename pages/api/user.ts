// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { user } from "./data/user";
import { IUser } from "@/types";

const handler = (req: NextApiRequest, res: NextApiResponse<IUser>) => {
  res.status(200).json(user);
};

export default handler;
