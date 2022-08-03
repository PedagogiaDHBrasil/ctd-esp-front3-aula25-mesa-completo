import React from "react";
import Name from "../Forms/name";
import Email from "../Forms/Email";
import Info from "../Forms/info";
import { useFormContext } from "react-hook-form";

const Form = (props) => {
  const { method } = props;

  const { reset } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={method.handleSubmit(onSubmit)}>
      <Name />
      <Email />
      <Info />
      <button type="submit" className="submit">Inscrever-se</button>
      <button
        className="button-line"
        onClick={() => {
          reset({
            name: "",
            email: "",
          });
        }}
      >
        Limpar campos
      </button>
    </form>
  );
};

export default Form;
