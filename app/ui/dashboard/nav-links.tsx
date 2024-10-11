"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import s from "./nav-links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${s.flexContainer} ${
              pathname === link.href && s.activeLink
            } `}
          >
            <LinkIcon className={s.linkIcon} />
            <p className={s.linkName}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
