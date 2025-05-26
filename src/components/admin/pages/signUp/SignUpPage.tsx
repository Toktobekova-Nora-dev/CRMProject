import React from "react";
import scss from "./SignUpPage.module.scss";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.content}>
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
