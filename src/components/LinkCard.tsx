type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-15 w-full items-center justify-center rounded-2xl border border-glass-border bg-glass px-5 text-[15px] font-medium shadow-[0_4px_24px_-10px_var(--shadow-tint)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-[0_8px_28px_-10px_var(--shadow-tint)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
    >
      {title}
    </a>
  );
}
