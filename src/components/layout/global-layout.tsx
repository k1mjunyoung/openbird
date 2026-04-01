import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.svg";
import defaultAvatar from "@/assets/default-avatar.png";
import { SunIcon } from "lucide-react";

export default function GlobalLayout() {
  return (
  <div className="flex min-h-[100vh] flex-col">
    <header className="h-15 border-b">
      <div className="flex justify-between h-full max-w-175 w-full m-auto px-4">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={logo} className="h-5" alt="Openbird logo"/>
          <div className="font-bold">Openbird</div>
        </Link>
        <div className="flex items-center gap-5">
          <div className="hover:bg-muted cursor-pointer rounded-full p-2">
            <SunIcon />
          </div>
          <img src={defaultAvatar} className="h-6"/>
        </div>
      </div>
    </header>
    <main className="flex-1 max-w-175 w-full m-auto px-4 py-6 border-x">
      <Outlet />
    </main>
    <footer className="border-t py-10 text-muted-foreground text-center">
      @Openbird
    </footer>
  </div>
  );
}