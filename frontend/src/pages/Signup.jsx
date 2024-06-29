import axios from "axios";
import { useRecoilState } from "recoil";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import {
  firstName,
  lastName,
  userEmail,
  userPassword,
} from "../store/atoms/userSignupAtom";

export function Signup() {
  const [firstname, setFirstName] = useRecoilState(firstName);
  const [lastname, setLastName] = useRecoilState(lastName);
  const [username, setEmail] = useRecoilState(userEmail);
  const [password, setPassword] = useRecoilState(userPassword);

  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white text-center p-6">
        <Heading label={"Sign Up"} />
        <Subheading label={"Enter your information to create an account."} />
        <InputBox
          label={"First Name"}
          placeholder={"John"}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstname}
        />
        <InputBox
          label={"Last Name"}
          placeholder={"Doe"}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastname}
        />
        <InputBox
          label={"Email"}
          placeholder={"johndoe@example.com"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={username}
        />
        <InputBox
          label={"Password"}
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <div className="pt-4">
          <Button
            label={"Sign Up"}
            onClick={() => {
              axios
                .post("http://localhost:3000/api/v1/users/signup", {
                  firstname,
                  lastname,
                  username,
                  password,
                })
                .then(() => {
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setPassword("");
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          />
        </div>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign In"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}
