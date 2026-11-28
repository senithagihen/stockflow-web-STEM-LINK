import React from "react";

import { SidebarHeader, SidebarNav, SidebarProfile } from "./com";
import { House, Package, ChartNoAxesCombined } from "lucide-react";

const defaultHeader = {
  title: "StockFlow",
  subtitle: "Distribution System",
};

const defaultNav = [
  { label: "Home", to: "/", icon: House },
  { label: "Inventory", to: "/inventory", icon: Package },
  { label: "Reports", to: "/reports", icon: ChartNoAxesCombined },
];

function Sidebar({ nav = defaultNav, header = defaultHeader }) {
  return (
    <div className="sticky top-0 h-screen z-40 w-60 border-r border-border bg-background flex flex-col">
      <SidebarHeader header={header} />
      <SidebarNav items={nav} />
      <SidebarProfile />
    </div>
  );
}

export default Sidebar;
