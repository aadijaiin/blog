import React from "react";
import Newsletter from "../landing/Newsletter";
import Contact from "../landing/Contact";
import Tags from "../landing/Tags";
import Topics from "../landing/Topics";

const SideBar = () => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      <Topics />
      <Tags />
      <Contact />
      <Newsletter />
    </aside>
  );
};

export default SideBar;
