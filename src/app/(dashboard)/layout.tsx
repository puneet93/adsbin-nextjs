import Header from "@/components/Header";
import Sidebar from "@/components/SidebarMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="md:p-10 pb-8 md:ml-80 md:mt-[62px] mt-[59px]">{children}</main>
    </>
  );
}
