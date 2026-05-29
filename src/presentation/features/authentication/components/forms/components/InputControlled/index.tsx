import { Controller, type FieldValues } from "react-hook-form";

import { Field, FieldError } from "@/presentation/components/ui/field";
import { Input } from "@/presentation/components/ui/input";
import { Row } from "../Row";

import type { InputControlledProps } from "./types";

export function InputControlled<T extends FieldValues>({
  icon: Icon,
  control,
  name,
  buttonInput,
  ...inputProps
}: InputControlledProps<T>) {
  return (
    <Row>
      <Icon className="absolute left-4 top-7 h-4 w-4 -translate-y-1/2 text-primary" />

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field  data-invalid={fieldState.invalid}>
            <Input
              {...field}
              {...inputProps}
              aria-invalid={fieldState.invalid}
              className="h-14 rounded-2xl border-border bg-background pl-11"
            />
            {fieldState.invalid ? (
              <FieldError errors={[fieldState.error]} />
            ) : null}
          </Field>
        )}
      />

      {buttonInput}
    </Row>
  );
}
