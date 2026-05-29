"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/presentation/components/ui/button";
import { InputControlled } from "../components/InputControlled";

import { forgetPasswordFormSchema } from "./schema";
import type { ForgetPasswordFormSchemaProps } from "./types";

export function ForgetPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ForgetPasswordFormSchemaProps>({
    mode: "onChange",
    resolver: zodResolver(forgetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleForgetPasswordSubmit = (
    request: ForgetPasswordFormSchemaProps,
  ) => {
    console.log(request);
  };

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(handleForgetPasswordSubmit)}
      >
        <InputControlled<ForgetPasswordFormSchemaProps>
          control={control}
          name="email"
          placeholder="E-mail"
          icon={Mail}
        />

        <Button
          className="cursor-pointer flex items-center justify-center gap-2 mt-1 h-14 w-full rounded-2xl bg-accent text-md text-accent-foreground hover:bg-accent/90"
          disabled={!isValid}
        >
          Continuar
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </>
  );
}
