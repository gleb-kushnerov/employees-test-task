import { MainLayout } from '@/layouts';
import { UsersFiltersProvider } from '@/providers';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <UsersFiltersProvider>{children}</UsersFiltersProvider>
    </MainLayout>
  );
}
