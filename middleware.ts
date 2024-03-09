import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // // Routes that can be accessed while signed out
  publicRoutes: ["/api/webhooks/clerk"],
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/sign-in"]
  ignoredRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
