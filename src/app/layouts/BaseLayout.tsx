import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';

export const BaseLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
