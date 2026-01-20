import { Footer } from '@/widgets/footer';
import { Navbar } from '@/widgets/navbar';
import { AnnouncementBar } from '@/widgets/navbar/ui/AnnouncementBar';
import { Outlet } from 'react-router-dom';

export const BaseLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header>
        <AnnouncementBar />
        <Navbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
