import Header from "@/components/Header";
import Sidebar from "../components/SidebarMenu";

export default function LayoutSidebar({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
        <Header />
        <Sidebar />
        <main className="md:p-10 py-8 md:ml-80 mt-28">{children}</main>
    </>
  );
}
