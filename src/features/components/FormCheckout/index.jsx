//react
import { useForm } from "react-hook-form";

//style
import {
  InputStyles,
  LabelStyles,
  RequiredMark,
  CheckboxContainer,
  CheckboxInput,
} from "./style";


export const FormCheckout = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Watch all fields to conditionally show the red star
  const values = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* FIRST NAME */}
      <div>
        <LabelStyles htmlFor="firstName">
          First Name
          {!values.firstName && <RequiredMark>*</RequiredMark>}
        </LabelStyles>
        <InputStyles
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
        />
      </div>

      {/* COMPANY NAME (optional) */}
      <div>
        <LabelStyles htmlFor="companyName">Company Name</LabelStyles>
        <InputStyles
          type="text"
          id="companyName"
          {...register("companyName")}
        />
      </div>

      {/* STREET ADDRESS */}
      <div>
        <LabelStyles htmlFor="street">
          Street Address
          {!values.street && <RequiredMark>*</RequiredMark>}
        </LabelStyles>
        <InputStyles
          type="text"
          id="street"
          {...register("street", { required: true })}
        />
      </div>

      {/* APARTMENT (optional) */}
      <div>
        <LabelStyles htmlFor="apartment">
          Apartment, floor, etc. (optional)
        </LabelStyles>
        <InputStyles type="text" id="apartment" {...register("apartment")} />
      </div>

      {/* CITY */}
      <div>
        <LabelStyles htmlFor="city">
          Town/City
          {!values.city && <RequiredMark>*</RequiredMark>}
        </LabelStyles>
        <InputStyles
          type="text"
          id="city"
          {...register("city", { required: true })}
        />
      </div>

      {/* PHONE */}
      <div>
        <LabelStyles htmlFor="phone">
          Phone Number
          {!values.phone && <RequiredMark>*</RequiredMark>}
        </LabelStyles>
        <InputStyles
          type="text"
          id="phone"
          {...register("phone", { required: true })}
        />
      </div>

      {/* EMAIL */}
      <div>
        <LabelStyles htmlFor="email">
          Email Address
          {!values.email && <RequiredMark>*</RequiredMark>}
        </LabelStyles>
        <InputStyles
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>

      {/* CHECKBOX */}
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="saveInfo"
          {...register("saveInfo")}
        />
        <LabelStyles htmlFor="saveInfo">
          Save this information for faster check-out next time
        </LabelStyles>
      </CheckboxContainer>
    </form>
  );
};
