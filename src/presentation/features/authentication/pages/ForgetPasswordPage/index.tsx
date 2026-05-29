"use client";

import { ContainerArea } from "../../components/ContainerArea";
import { ContainerCard } from "../../components/ContainerCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { ForgetPasswordForm } from "../../components/forms/ForgetPasswordForm";

import { RegisterForm } from "../../components/forms/RegisterForm";
import { PATH } from "../../constants/path";

export function ForgetPasswordPage() {
  return (
    <ContainerArea>
      <ContainerCard>
        <Logo hasSlogan={false} />

        <Header
          title="Esqueceu sua senha?"
          description="Não se preocupe, vamos te ajudar a recuperar seu acesso."
        />

        <ForgetPasswordForm />

        <Footer
          navigateTo={PATH.LOGIN}
          label="Já tem uma conta?"
          linkLabel="Faça login"
        />
      </ContainerCard>
    </ContainerArea>
  );
}
