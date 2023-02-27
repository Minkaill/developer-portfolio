// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { user } from "./data/user";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(user);
};

export default handler;
