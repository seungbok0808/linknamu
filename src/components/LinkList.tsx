"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (!ignore && data) {
          // 데이터를 받는 사이에 누른 클릭 수는 유지
          setCounts((prev) => {
            const next = { ...data };
            for (const [id, n] of Object.entries(prev)) next[id] = (next[id] ?? 0) + n;
            return next;
          });
        }
      })
      .catch(() => {});
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭이 열리거나 페이지를 떠나도 요청이 끝까지 전송되도록 keepalive 사용
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(() => {});
  }

  return (
    <nav className="flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
