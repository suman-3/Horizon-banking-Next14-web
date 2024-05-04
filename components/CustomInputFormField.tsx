import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInputFormFieldProps {
  control: Control<z.infer<typeof authFormSchema>>;
  label: string;
  name: FieldPath<z.infer<typeof authFormSchema>>;
}

const CustomInputFormField = ({
  control,
  name,
  label,
}: CustomInputFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={"Enter your " + name}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2 ml-[2px]" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInputFormField;
