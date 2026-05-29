"use client";

import { ContainerArea } from "../../components/ContainerArea";
import { ContainerCard } from "../../components/ContainerCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";

import { LoginForm } from "../../components/forms/LoginForm";
import { PATH } from "../../constants/path";

export function LoginPage() {
  return (
    <ContainerArea>
      <ContainerCard>
        <Logo />

        <Header
          title="Bem-vindo de volta! 👋"
          description="Faça login para continuar"
        />

        <LoginForm />

        <Footer
          navigateTo={PATH.REGISTER}
          label="Não tem uma conta?"
          linkLabel="Cadastre-se"
        />
      </ContainerCard>
    </ContainerArea>
  );
}
