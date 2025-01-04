import Sidebar from "./ui/components/sidebarMenu";

export default function LayoutSidebar({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
        <Sidebar />
        <main className="md:p-10 py-8 md:ml-80 mt-28">{children}</main>
    </>
  );
}
