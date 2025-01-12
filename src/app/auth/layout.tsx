import HeaderBeforeLogin from "@/components/HeaderBeforeLogin";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderBeforeLogin />
      <main className="py-8 md:py-10">
        <div className="container max-w-[600px] mx-auto">{children}</div>
      </main>
    </>
  );
}
