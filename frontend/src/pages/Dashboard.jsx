import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <div>
      <AppBar />
      <div className="px-12 py-4">
        <Balance value={1000} />
        <Users />
      </div>
    </div>
  );
}
