import Header from "@/components/Header";
import Sidebar from "@/components/SidebarMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="md:p-10 py-8 md:ml-80 md:mt-28 mt-20">{children}</main>
    </>
  );
}
