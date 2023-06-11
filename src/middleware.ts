import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  beforeAuth: () => {
    console.log('From before auth');
  },

  publicRoutes: ['/', '/:locale/sign-in'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
