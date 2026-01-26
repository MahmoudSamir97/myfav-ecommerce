// // import { Link } from 'react-router-dom';
// import { APP_NAME } from '@/shared/config';
// import { Button } from '@/shared/ui';

// export const Logo = () => (
//   <Button aria-label="Home">
//     <div className="text-primary font-bold text-xl hover:text-primary/90 transition-colors">
//       {APP_NAME}
//     </div>
//   </Button>
// )
import { APP_NAME } from '@/shared/config';
import { Button } from '@/shared/ui';

export const Logo = () => (
  <Button
    variant="nav"
    className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer hover:bg-none"
    aria-label="Home"
  >
    <span className="font-bold text-xl sm:inline-block">{APP_NAME}</span>
  </Button>
);
