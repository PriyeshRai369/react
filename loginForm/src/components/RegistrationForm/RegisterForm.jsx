import React from "react";
import Input from "../Input/input";
import Button from "../Button/Button";

function RegisterForm() {
  return (
    <form action="" className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button value="Register" />
    </form>
  );
}

export default RegisterForm;
