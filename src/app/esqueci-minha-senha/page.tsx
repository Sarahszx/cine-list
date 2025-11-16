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
        <div className="bg-violet-300 max-w-82 p-8 rounded-2xl lg:w-2/3 flex flex-col justify-center item-center gap-8">
          <h1 className="cursor-default text-center text-black font-serif  items-center"><strong>Link de redefinição foi enviado para o seu email</strong></h1>
          <Link href="/login">
            <div className='flex justify-center'>
              <button className="bg-violet-900 w-full  rounded-2xl lg:h-2/3 ">
                <h1 className="cursor-pointer flex justify-center text-black ">voltar a pagina de login</h1></button>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat shadow-md">
      <div id='main' className="w-full h-screen flex flex-col justify-center items-center">
        <div className="bg-violet-300 p-8 rounded-2xl w-10/12 lg:w-1/3 flex flex-col gap-8">
          <div className='flex relative w-full justify-center'>
            <Link href="./login">
              <div className='bg-violet-800 hover:bg-violet-700 flex justify-center items-center rounded-full p-1 absolute left-4'>

                <ArrowLeft />
              </div>
            </Link>

            <Image src="/icon-3.png" alt="Icone" width={200} height={200} className="mb-4" />
          </div>
          <div className=" text-black flex flex-col justify-center items-center font-semibold ">
            <h1>Esqueci minha senha</h1>
          </div>

          <div className="text-gray-500 flex flex-col justify-center items-center  font-normal italic max-w-2xl mx-auto text-center">
            <p>Para recuperar o acesso, insira o e-mail da sua conta e enviaremos um link para redefinir.</p>
          </div>
          <form className="text-black flex flex-col gap-4">
          <div className='flex flex-col gap-2'>
            <label htmlFor="email:" className="text-black font-bold ">E-mail:
              <i className="text-red-500">*</i>
            </label>
            <input type="email" name="email" id="email" className="bg-white h-12 px-2 rounded-md border border-gray-500" required />
          </div>
          <a href="../esqueci-minha-senha">
            <div className='flex justify-center'>
              <button onClick={toggleDisplay} id='enviar' className="h-12 text-white cursor-pointer min-w-20 p-2 rounded-sm bg-violet-800 hover:bg-violet-700" type='submit'>
                enviar</button>
            </div>
          </a>
          </form>
        </div >

      </div>
    </div>
  )

}


