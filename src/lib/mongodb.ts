import { MongoClient, type Collection } from "mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

// 개발 모드의 HMR에서 연결이 계속 늘어나지 않도록 클라이언트를 전역에 재사용
function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
