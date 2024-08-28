import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen">
      <div className="hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Nome</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="focus-visible:border-primary h-12"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input id="password" type="password" required placeholder="Senha"    className="focus-visible:border-primary h-12"/>
            </div>
            <Button type="submit" className="w-full text-white  h-12">
            Entra
            </Button>
            <Button variant="outline" className="w-full ">
              Entrar com o Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não &apos;tem uma conta?{" "}
            <a href="#" className="underline">
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
