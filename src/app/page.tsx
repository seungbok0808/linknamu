import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

const profile = {
  name: "이승복",
  bio: "QA엔지니어 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/224x224/orange/white.png",
};

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 pt-16 pb-20 sm:pt-24">
      <div className="flex w-full max-w-sm flex-col gap-12">
        <Profile {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
