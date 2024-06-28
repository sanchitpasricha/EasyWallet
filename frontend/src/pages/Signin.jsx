import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";

export function Signin() {
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white text-center p-6">
        <Heading label={"Sign In"} />
        <Subheading
          label={"Enter your credentials to sign into your account."}
        />
        <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
        <InputBox label={"Password"} placeholder={"Password"} />
        <div className="pt-4">
          <Button label={"Sign In"} />
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
