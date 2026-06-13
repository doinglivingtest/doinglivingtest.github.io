import {
  Home,
  Route,
  Wrench,
  FolderGit2,
  Bookmark,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  shortcut: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", shortcut: "1", icon: Home },
  { href: "/journey", label: "Journey", shortcut: "2", icon: Route },
  { href: "/skills", label: "Skills", shortcut: "3", icon: Wrench },
  { href: "/projects", label: "Projects", shortcut: "4", icon: FolderGit2 },
  { href: "/bookmarks", label: "Bookmarks", shortcut: "5", icon: Bookmark },
];

export const profile = {
  name: "Alejandro Tellez",
  title: "Senior Web3 QA Engineer",
  avatar: "/images/profile_picturet.png",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/doinglivingtest",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandrotellez",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/intent/user?screen_name=doinglivingtest",
  },
  {
    label: "Email",
    href: "mailto:alejandrotellezm12@gmail.com",
  },
  {
    label: "Resume",
    href: "/files/CV_Alejandro_Tellez_SDET.pdf",
  },
] as const;
