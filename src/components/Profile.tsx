import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border border-zinc-200 object-cover dark:border-zinc-700"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
      </div>
    </section>
  );
}
