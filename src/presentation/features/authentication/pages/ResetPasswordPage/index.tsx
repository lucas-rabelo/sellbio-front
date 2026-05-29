"use client";

import { ContainerArea } from "../../components/ContainerArea";
import { ContainerCard } from "../../components/ContainerCard";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";

import { ResetPasswordForm } from "../../components/forms/ResetPasswordPage";

export function ResetPasswordPage() {
  return (
    <ContainerArea>
      <ContainerCard>
        <Logo hasSlogan={false} />

        <Header title="Redefinir senha" description="Insira sua nova senha." />

        <ResetPasswordForm />
      </ContainerCard>
    </ContainerArea>
  );
}
