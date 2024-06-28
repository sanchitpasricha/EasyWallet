import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";

export function Signup() {
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white text-center p-6">
        <Heading label={"Sign Up"} />
        <Subheading label={"Enter your information to create an account."} />
        <InputBox label={"First Name"} placeholder={"John"} />
        <InputBox label={"Last Name"} placeholder={"Doe"} />
        <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
        <InputBox label={"Password"} placeholder={"Password"} />
        <div className="pt-4">
          <Button label={"Sign Up"} />
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
