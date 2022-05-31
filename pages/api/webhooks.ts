import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunck of readable) {
    chuncks.push(typeof chunck === 'string' ? Buffer.from(chunck) : chunck);
  }
  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const buf = await buffer(req);

  res.status(200).json({ ok: true });
};
