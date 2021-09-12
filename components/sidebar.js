import styles from "../styles/sidebar.module.scss";
import settings from "../data/settings.json";
import ActiveLink from "./activeLink.js";

export default function SideBar() {
  const { pages } = settings.sidebar;
  const listItems = pages.map((item, index) => (
    <li key={index}>
      <ActiveLink href={item.url}>{item.text}</ActiveLink>
    </li>
  ));
  return (
    <>
      <div className={styles.sidebar}>
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
