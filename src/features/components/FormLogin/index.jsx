//react
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//Yup validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

//style
import { LoginButton, StyledForm, StyledInput } from "./style";

//components
import { Button } from "../../../components/Common/Button/Button";

//hooks
import { useApi } from "../../../hooks/useApi";

export const FormLogin = () => {
  //  Yup validation schema
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const [apiError, setApiError] = useState("");
  const { post } = useApi();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    setApiError("");

    try {
      const { data, error } = await post("https://dummyjson.com/auth/login", {
        ...values,
        expiresInMins: 30,
      });

      if (error) {
        setApiError(
          typeof error === "string" ? error : "Login failed. Please try again."
        );
      } else {
        localStorage.setItem("userId", data.id);
        navigate("/");
      }
    } catch (err) {
      console.error(" Error during login request:", err);
      setApiError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Email or Phone Number"
        {...register("username")}
      />
      {errors.username && (
        <div style={{ color: "red" }}>{errors.username.message}</div>
      )}

      <StyledInput
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <div style={{ color: "red" }}>{errors.password.message}</div>
      )}

      {apiError && <div style={{ color: "red" }}>{apiError}</div>}

      <LoginButton>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </Button>
      </LoginButton>
    </StyledForm>
  );
};
