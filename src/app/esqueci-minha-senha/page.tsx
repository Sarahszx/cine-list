'use client'
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react';

export default function EsqueciMinhaSenha() {

  const [isVisible, setIsVisible] = useState(true);
  const toggleDisplay = () => {
    setIsVisible(false);

  };

  if (!isVisible) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Link href="/login">
          <div className="bg-gradient-to-r from-purple-800 to-gray-700 w-105 h-45 rounded-2xl items-center flex justify-center"> <h1 className="cursor-default text-center text-white-700 font-serif"><strong>Link de redefinição foi enviado para o seu email</strong>
            <button className="bg-violet-900 rounded-2xl w-55 h-12 mt-6 "> <h1 className="cursor-pointer flex justify-center text-center items-center">voltar a pagina de login</h1></button></h1>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div id='main' className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-violet-300 w-3x1 rounded-2xl P-6 flex flex-col justify-center items-center gap-4 py-6">
        <div className='flex relative w-full justify-center'>
          <Link href="./login">
            <div className='bg-violet-800 hover:bg-violet-700 flex justify-center items-center rounded-full p-1 absolute left-4'>
              <ArrowLeft />
            </div>
          </Link>
          
          <Image src="/icon-3.png" alt="Icone" width={200} height={200} className="mb-4" />
        </div>
        <div className=" text-black flex flex-col justify-center items-center text-5xl font-semibold ">
          <h1>Esqueci minha senha</h1>
        </div>

        <div className="text-gray-500 flex flex-col justify-center items-center text-3xl font-normal italic max-w-2xl mx-auto text-center">
          <p>Para recuperar o acesso, insira o e-mail da sua conta e enviaremos um link para redefinir.</p>
        </div>

        <div>
          <label htmlFor="email:" className="text-black text-2xl ml-auto " >E-mail:</label>
          <input type="email" name="" id="email" placeholder="seu@email.com" className="text-black pl-1 border border-gray-500 w-full rounded-md ml-auto " />
        </div>

        <div>
          <button onClick={toggleDisplay} id='enviar' className="bg-violet-800 text-white p-2 rounded-2xl hover:via-violet-950 transition text-2xl py-2 px-15  ">
            enviar →</button></div>
      </div >

    </div>

  )

}


