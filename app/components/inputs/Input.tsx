"use client";

import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder=" "
        {...register(id, { required })}
        className={`
            peer 
            w-full 
            p-3
            pt-6 
            font-light 
            rounded-md
            transition 
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            border
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-rose-500" : "border-zinc-300"} 
            ${errors[id] ? "focus:outline-rose-500" : "focus:outline-black"}
        `}
      />
      <label
        className={`
        absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
         ${formatPrice ? "left-9" : "left-4"}
         peer-placeholder-shown:scale-100
         peer-placeholder-shown:translate-y-0
         peer-focus:scale-75
         peer-focus:-translate-y-4
         ${errors[id] ? "text-rose-500" : "text-zinc-400"}  
         `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
