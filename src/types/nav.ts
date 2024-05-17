export type NavProps = {
  list: NavItemProps[];
  pathname: string;
  isMobile?: boolean;
};

export type NavItemProps = {
  href: string;
  name: string;
  icon: JSX.Element;
  isActive: boolean;
  isMobile?: boolean;
};
