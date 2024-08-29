/// <reference no-default-lib="true"/>
/* eslint-disable */
import { useAuth } from "@/components/contetxApi.tsx/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from "../assets/login.jpg";

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === 'admin@exemplo.com' && password === 'admin123') {
      login('admin', email);
      navigate('/admin');
    } else if (email === 'cliente@exemplo.com' && password === 'cliente123') {
      login('client', email);
      navigate('/client');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen">
      <div className="hidden bg-muted lg:block">
        <img
          src={loginImage}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Conecte-se</h1>
            <p className="text-balance text-muted-foreground">
              Insira seu e-mail abaixo para fazer login em sua conta
            </p>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-visible:border-primary h-12"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-visible:border-primary h-12"
                required
              />
            </div>
            <Button type="submit" className="w-full text-white h-12">
              Entrar
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com o Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <a href="#" className="underline">
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
