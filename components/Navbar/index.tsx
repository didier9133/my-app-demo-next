import styles from "@/components/Navbar/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <ActiveLink key={item.href} href={item.href} text={item.text} />
      ))}
    </ul>
  );
};

export default Navbar;
