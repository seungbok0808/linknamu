import { connection } from "next/server";
import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  await connection();

  const collection = await getClicksCollection();
  const docs = await collection
    .find({ _id: { $in: links.map((link) => link.id) } })
    .toArray();

  const counts: Record<string, number> = {};
  for (const link of links) counts[link.id] = 0;
  for (const doc of docs) counts[doc._id] = doc.count;

  return Response.json(counts);
}
