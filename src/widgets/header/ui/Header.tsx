import { AnnouncementBar } from '@/widgets/header/ui/AnnouncementBar';
import { Navbar } from '@/widgets/header/ui/Navbar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <Navbar />
    </header>
  );
};
