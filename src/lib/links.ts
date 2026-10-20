export type Link = {
  id: string;
  title: string;
  url: string;
};

export const links: Link[] = [
  { id: "github", title: "📈 GitHub", url: "https://github.com/seungbok0808" },
  { id: "email", title: "✉️ 이메일", url: "mailto:seungbok0808@gmail.com" },
  { id: "linkedin", title: "🖇️ LinkedIn", url: "https://www.linkedin.com/" },
];

export function isLinkId(id: string): boolean {
  return links.some((link) => link.id === id);
}
