import { auth } from "../auth";
import ProfileLink from "./ProfileLink";

async function UserMenu() {
  const session = await auth();
  const user = session?.user;

  return <div>{user ? <ProfileLink user={user} /> : null}</div>;
}

export default UserMenu;
