import React from "react";
import Input from "../Input/input";
import Button from "../Button/Button";

function Form() {
  return <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <Button value="Submit" />
  </form>;
}

export default Form;
