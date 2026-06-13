import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/nav";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12.04c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.54 11.54 0 0 0 23.5 12.04C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const iconFor: Record<string, () => React.ReactNode> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  "X (Twitter)": XIcon,
  Email: () => <Mail className="h-4 w-4" aria-hidden="true" />,
  Resume: () => <FileText className="h-4 w-4" aria-hidden="true" />,
};

export default function Socials() {
  return (
    <div className="flex flex-col gap-1">
      {socials.map((social) => {
        const Icon = iconFor[social.label];
        const isExternal =
          social.href.startsWith("http") || social.href.endsWith(".pdf");
        return (
          <a
            key={social.label}
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between gap-2 rounded-lg p-2 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900"
          >
            <span className="inline-flex items-center gap-2 font-medium">
              {Icon && <Icon />}
              {social.label}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-300 transition-colors duration-200 group-hover:text-brand-600" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
