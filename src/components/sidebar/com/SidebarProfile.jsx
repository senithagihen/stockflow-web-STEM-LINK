import { UserRound } from "lucide-react";

function SidebarProfile() {
  return (
    <div className="mt-auto border-t border-border px-4 py-2 lg:py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdf1ed] text-[#a63d1d]">
          <UserRound aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-xs font-medium text-foreground">StockFlow user</p>
          <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
            Access pending
          </p>
        </div>
      </div>
    </div>
  );
}


export default SidebarProfile;
