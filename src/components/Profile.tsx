import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-5 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_32px_-8px_var(--shadow-tint),0_2px_6px_var(--shadow-tint)] dark:ring-white/10"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="text-[15px] leading-relaxed text-muted">{bio}</p>
      </div>
    </section>
  );
}
