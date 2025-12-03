'use client';

import { User } from "@/types";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {'Content-Type' : 'application/json'},
      });

      if(!response.ok) {
        throw new Error('Erro de login');
      }

      const data: User[] = await response.json();
      
      const user = data.find((user: User) => user.email === email);
      
      if (!user) {
        throw new Error('Erro de login');
      }
      
      if (user.password !== password) {
        throw new Error('Erro de login');
      }

      router.push('/');
    } catch (error) {
      console.error(error);

      setMensagem('Erro ao fazer o login!');
    }
};
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat shadow-md">
      <div className="bg-violet-300 p-8 rounded-2xl w-10/12 lg:w-1/3 flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <Link href="/">
            <img src="/icon-3.png" alt="Logo" className="h-36" />
          </Link>
        </div>
        
        <p className="text-center text-black">Utilize suas credenciais abaixo para acessar sua conta.</p>

        <form onSubmit={handleLogin} className="text-black flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="email">
              E-mail:
              <i className="text-red-500">*</i>
            </label>
            <input className="bg-white h-12 px-2 rounded-md border border-gray-500" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="password">
              Senha:
              <i className="text-red-500">*</i>
            </label>

            <div className="relative">
              <input className="w-full bg-white h-12 px-2 rounded-md border border-gray-500" type={passwordVisible ? 'text' : 'password'} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

              <div className="absolute top-3.5 right-3 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)}>
                {passwordVisible
                  ? (
                    <Eye size={20} />
                  ): (
                    <EyeClosed size={20} />
                  )
                }
              </div>
            </div>

          </div>

          <Link href="../esqueci-minha-senha" className="w-fit text-violet-800 hover:text-violet-700 underline">Esqueceu a senha?</Link>

          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-red-600">{mensagem}</p>
            
            <button className="w-fit h-12 text-white cursor-pointer py-2 px-4 rounded-sm bg-violet-800 hover:bg-violet-700" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}