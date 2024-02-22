"use client";

import { useState } from "react";
import styles from "../styles/movie-tablist.module.css";
import MovieVideo from "./movie-videos";

export default function MovieInfoTabs({ id }: { id: string }) {
  const [currentTab, setCurrentTab] = useState(0);
  const selectedTab = (index) => {
    setCurrentTab(index);
  };
  const tabs = [
    { id: 1, name: "Trailers", content: <MovieVideo id={id} /> },
    { id: 2, name: "Credits", content: "credits" },
    { id: 3, name: "Providers", content: "providers" },
    { id: 4, name: "Similar MV", content: "similar" },
  ];

  return (
    <nav className={styles.container}>
      <ul>
        {tabs.map((tab, index) => (
          <li
            className={index === currentTab ? "focused" : ""}
            onClick={() => selectedTab(index)}
            key={tab.id}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div>{tabs[currentTab].content}</div>
    </nav>
  );
}
