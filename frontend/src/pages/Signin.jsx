import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { useRecoilState } from "recoil";
import { userName, userPassword } from "../store/atoms/userSigninAtom";

export function Signin() {
  const [username, setUsername] = useRecoilState(userName);
  const [password, setPassword] = useRecoilState(userPassword);

  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white text-center p-6">
        <Heading label={"Sign In"} />
        <Subheading
          label={"Enter your credentials to sign into your account."}
        />
        <InputBox
          label={"Email"}
          placeholder={"johndoe@example.com"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <InputBox
          label={"Password"}
          placeholder={"Password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <div className="pt-4">
          <Button
            label={"Sign In"}
            onClick={async () => {
              await axios
                .post("http://localhost:3000/api/v1/users/signin", {
                  username,
                  password,
                })
                .then((response) => {
                  localStorage.setItem("token", response.data.token);
                  setUsername("");
                  setPassword("");
                })
                .catch((err) => {
                  console.error(err);
                  alert("Invalid credentials! Please try again.");
                });
            }}
          />
        </div>
        <BottomWarning
          label={"Don't have an account ?"}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}
