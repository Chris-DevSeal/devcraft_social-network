import { PrismaClient } from '@prisma/client';
import express from 'express';

// const host = process.env.HOST ?? 'localhost';
const prisma = new PrismaClient();
const port = process.env.PORT ? Number(process.env.PORT) : 3002;

const app = express();

app.get('/', (req, res) => {
  const posts = prisma.post.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
  });

console.log("Hello from feed")

  res.json(posts);
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
