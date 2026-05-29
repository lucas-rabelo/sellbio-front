"use client";

import { ContainerArea } from "../../components/ContainerArea";
import { ContainerCard } from "../../components/ContainerCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";

import { RegisterForm } from "../../components/forms/RegisterForm";
import { PATH } from "../../constants/path";

export function RegisterPage() {
  return (
    <ContainerArea>
      <ContainerCard>
        <Logo hasSlogan={false} />

        <Header
          title="Criar sua conta"
          description="Comece a compartilhar e vender muito mais!"
        />

        <RegisterForm />

        <Footer
          navigateTo={PATH.LOGIN}
          label="Já tem uma conta?"
          linkLabel="Faça login"
        />
      </ContainerCard>
    </ContainerArea>
  );
}
