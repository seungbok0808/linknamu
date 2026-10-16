import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 실제 프로필/링크 정보로 교체
const profile = {
  name: "홍길동",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="flex w-full max-w-md flex-col gap-10">
        <Profile {...profile} />
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} title={link.title} url={link.url} />
          ))}
        </nav>
      </div>
    </main>
  );
}
