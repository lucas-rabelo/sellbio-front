"use client";

import * as React from "react";

import { Controller, type FieldValues } from "react-hook-form";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/presentation/components/ui/button";
import { Calendar } from "@/presentation/components/ui/calendar";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/presentation/components/ui/field";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover";

import { cn } from "@/presentation/lib/utils";

import { Row } from "../Row";

import type { DatePickerControlledProps } from "./types";

export function DatePickerControlled<T extends FieldValues>({
  control,
  name,
  placeholder = "Selecione uma data",
  disabled,
  icon: Icon
}: DatePickerControlledProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <Row>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            className="w-full"
          >
            <Popover
              open={open}
              onOpenChange={setOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  id={name}
                  disabled={disabled}
                  className={cn(
                    "h-14 w-full justify-start rounded-2xl border-border bg-background px-4 font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  <Icon className="mr-2 text-primary" />

                  {field.value ? (
                    new Date(field.value).toLocaleDateString(
                      "pt-BR",
                    )
                  ) : (
                    placeholder
                  )}
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-auto overflow-hidden rounded-2xl p-0"
              >
                <Calendar
                  mode="single"
                  selected={field.value}
                  defaultMonth={field.value}
                  captionLayout="dropdown"
                  disabled={disabled}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>

            {fieldState.invalid ? (
              <FieldError
                errors={[fieldState.error]}
              />
            ) : null}
          </Field>
        )}
      />
    </Row>
  );
}