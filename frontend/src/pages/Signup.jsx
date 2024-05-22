import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";

const PORT = import.meta.env.VITE_PORT;

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder={"Enter your First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
          />
          <InputBox
            placeholder={"Enter your Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
          />
          <InputBox
            placeholder={"Enter your Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
          />
          <InputBox
            placeholder={"Enter your Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                console.log(username, firstName, lastName, password);
                const response = await axios
                  .post(`http://localhost:${PORT}/api/v1/user/signup`, {
                    username,
                    firstName,
                    lastName,
                    password,
                  })
                  .catch((err) => {
                    alert(err.response.data.message);
                  });

                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
