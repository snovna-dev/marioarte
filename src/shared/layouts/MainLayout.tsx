export function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {children}
      </main>

      <footer />
    </div>
  );
}