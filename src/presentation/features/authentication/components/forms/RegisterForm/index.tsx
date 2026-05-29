"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Calendar,
  Eye,
  EyeClosed,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import GoogleIconSVG from "@/presentation/assets/icons/google-icon.svg";
import { Button } from "@/presentation/components/ui/button";
import { DatePickerControlled } from "../components/DatePickerControlled";
import { InputControlled } from "../components/InputControlled";

import { useToast } from "@/presentation/hooks/useToast";
import { Spinner } from "@/presentation/components/ui/spinner";
import { registerFormSchema } from "./schema";
import type { RegisterFormSchemaProps } from "./types";

export function RegisterForm() {
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterFormSchemaProps>({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      birthDate: undefined,
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = async (request: RegisterFormSchemaProps) => {
    setIsLoading(true);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      toast.error("Erro ao cadastrar usuário");
      setIsLoading(false);
      return;
    }
    
    setIsLoading(false);
    console.log("Cadastrado");
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
        <InputControlled<RegisterFormSchemaProps>
          control={control}
          name="name"
          placeholder="Nome completo"
          icon={User}
        />

        <InputControlled<RegisterFormSchemaProps>
          control={control}
          name="email"
          placeholder="E-mail"
          icon={Mail}
        />

        <DatePickerControlled<RegisterFormSchemaProps>
          control={control}
          name="birthDate"
          placeholder="Data de nascimento"
          icon={Calendar}
        />

        <InputControlled<RegisterFormSchemaProps>
          control={control}
          name="phone"
          placeholder="Telefone"
          icon={Phone}
        />

        <InputControlled<RegisterFormSchemaProps>
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

        <InputControlled<RegisterFormSchemaProps>
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
          className="cursor-pointer mt-1 h-14 w-full rounded-2xl bg-accent text-md text-accent-foreground hover:bg-accent/90"
          disabled={!isValid || isLoading}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
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
