"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import GoogleIconSVG from "@/presentation/assets/icons/google-icon.svg";
import { Button } from "@/presentation/components/ui/button";

import { PATH } from "../../../constants/path";
import { InputControlled } from "../components/InputControlled";

import { loginFormSchema } from "./schema";
import type { LoginFormSchemaProps } from "./types";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormSchemaProps>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = ({ email, password }: LoginFormSchemaProps) => {
    console.log({ email, password });
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputControlled<LoginFormSchemaProps>
          control={control}
          name="email"
          placeholder="E-mail"
          icon={Mail}
        />

        <InputControlled<LoginFormSchemaProps>
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
                <EyeClosed className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          }
        />

        <div className="flex justify-end">
          <Link
            href={PATH.FORGET_PASSWORD}
            className="cursor-pointer text-sm text-primary transition hover:opacity-80"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button
          className="cursor-pointer mt-1 h-14 w-full rounded-2xl bg-accent text-md text-accent-foreground hover:bg-accent/90"
          disabled={!isValid}
        >
          Entrar
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <div className="my-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />

        <span className="text-sm text-muted-foreground">ou continue com</span>

        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          className="cursor-pointer h-14 w-full rounded-2xl border-border bg-background hover:bg-muted flex items-center justify-center gap-4"
        >
          <Image
            src={GoogleIconSVG}
            alt="Logo fo Google"
            width={18}
            height={18}
          />
          Continuar com Google
        </Button>
      </div>
    </>
  );
}
