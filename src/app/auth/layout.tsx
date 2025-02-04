import HeaderBeforeLogin from "@/components/HeaderBeforeLogin";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderBeforeLogin />
      <main className="py-5">
        {children}
      </main>
    </>
  );
}
