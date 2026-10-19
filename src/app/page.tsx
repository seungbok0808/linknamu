import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "이승복",
  bio: "QA엔지니어 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/224x224/orange/white.png",
};

const links = [
  { id: "github", title: "📈 GitHub", url: "https://github.com/seungbok0808" },
  { id: "email", title: "✉️ 이메일", url: "mailto:seungbok0808@gmail.com" },
  { id: "linkedin", title: "🖇️ LinkedIn", url: "https://www.linkedin.com/" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 pt-16 pb-20 sm:pt-24">
      <div className="flex w-full max-w-sm flex-col gap-12">
        <Profile {...profile} />
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.id} title={link.title} url={link.url} />
          ))}
        </nav>
      </div>
    </main>
  );
}
