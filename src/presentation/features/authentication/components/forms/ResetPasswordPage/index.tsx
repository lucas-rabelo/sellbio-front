"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/presentation/components/ui/button";
import { InputControlled } from "../components/InputControlled";

import { resetPasswordFormSchema } from "./schema";
import type { ResetPasswordFormSchemaProps } from "./types";

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ResetPasswordFormSchemaProps>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleResetPasswordSubmit = (request: ResetPasswordFormSchemaProps) => {
    console.log(request);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(handleResetPasswordSubmit)}
    >
      <InputControlled<ResetPasswordFormSchemaProps>
        control={control}
        name="password"
        placeholder="Senha"
        icon={Lock}
        type={showPassword ? "text" : "password"}
        buttonInput={
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeClosed className="h-4 w-4" />
            )}
          </button>
        }
      />

      <InputControlled<ResetPasswordFormSchemaProps>
        control={control}
        name="confirmPassword"
        placeholder="Confirmar senha"
        icon={Lock}
        type={showConfirmPassword ? "text" : "password"}
        buttonInput={
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeClosed className="h-4 w-4" />
            )}
          </button>
        }
      />

      <Button
        className="cursor-pointer flex items-center justify-center gap-2 mt-1 h-14 w-full rounded-2xl bg-accent text-md text-accent-foreground hover:bg-accent/90"
        disabled={!isValid}
      >
        Continuar
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
