import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const contactFormSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  phone: yup
    .number()
    .required()
    .typeError(
      "Only numbers are allowed, please use spaces to format your number"
    )
    .test(
      "valid-number",
      "Only numbers are allowed, please use spaces to format your number",
      function (val) {
        return /^\d+$/.test(val);
      }
    ),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const sendEmailHandler = (data) => {
    setSubmitted(true);
    console.log("data >>", data);
  };

  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={handleSubmit(sendEmailHandler)}
    >
      <div className="form-unit">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="error">{errors.name?.message}</p>
        )}
      </div>
      <div className="form-unit">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="error">{errors.email?.message}</p>
        )}
      </div>
      <div className="form-unit">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          {...register("phone")}
        />
        {errors.phone?.message && (
          <p className="error">{errors.phone?.message}</p>
        )}
      </div>
      {submitted && (
        <div className="message-success">Email sent successfully</div>
      )}
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
