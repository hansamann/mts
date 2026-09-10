export type CommunityLink = {
  label: string;
  href: string;
};

export const LINK_CALENDAR = "https://luma.com/techsauna";
export const LINK_DISCORD = "https://discord.gg/UxfC45hrwS";
export const LINK_WHATSAPP =
  "https://chat.whatsapp.com/Lcv6eUCDZaOLvULvUtUeUA?s=cl&p=i&ilr=0";
export const LINK_REDDIT = "https://www.reddit.com/r/munichtechsauna";

export const COMMUNITY_LINKS: CommunityLink[] = [
  { label: "Calendar", href: LINK_CALENDAR },
  { label: "Discord", href: LINK_DISCORD },
  { label: "Reddit", href: LINK_REDDIT },
];
