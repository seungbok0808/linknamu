type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex h-15 w-full items-center justify-center rounded-2xl border border-glass-border bg-glass px-16 text-[15px] font-medium shadow-[0_4px_24px_-10px_var(--shadow-tint)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-[0_8px_28px_-10px_var(--shadow-tint)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
    >
      {title}
      <span className="absolute right-5 text-xs font-normal tabular-nums text-muted">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
