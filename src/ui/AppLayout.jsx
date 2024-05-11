import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";
import SidebarNav from "./SidebarNav";
// import Modal from "./Modal";

function AppLayout() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      {/* Desktop */}
      <section className="hidden md:block">
        <SidebarNav />
      </section>
      {/* Mobile */}
      <section className="md:hidden">
        <MobileNav />
      </section>
      <section className="flex justify-center md:flex">
        <Outlet />
      </section>
      {/* <Modal /> */}
    </main>
  );
}

export default AppLayout;
