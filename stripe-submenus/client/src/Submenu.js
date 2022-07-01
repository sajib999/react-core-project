import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const [columns, setColumns] = useState("col-2");
  const containerRef = useRef(null);
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();

  useEffect(() => {
    const submenu = containerRef.current;
    setColumns("col-2");
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (page.length === 3) {
      setColumns("col-3");
    }
    if (page.length > 3) {
      setColumns("col-4");
    }
  }, [page, links, location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={containerRef}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={index}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
