import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { cookies } from "next/headers";

export default async function Home() {
  // Adding this line will remove the warning from the build logs
  // await cookies();
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <div>{isAuth ? "Authenticated" : "Not Authenticated"}</div>
  );
}
