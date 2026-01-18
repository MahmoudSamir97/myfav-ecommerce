import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import '@/shared/styles/tailwind.css';
import { ThemeToggle } from '@/shared/ui';

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    toast.success('hello');
  }, []);
  return (
    <div className="p-5">
      <p>{t('welcome')}</p>
      <p className=" my-5"> {t('email', { ns: 'validation' })}</p>

      <h1 className="text-red-500 text-xl">Hello enterprise</h1>

      <ThemeToggle />
    </div>
  );
}

export default App;
