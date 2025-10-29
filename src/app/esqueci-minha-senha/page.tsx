import { Angry } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EsqueciMinhaSenha() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-violet-300 w-1/2 rounded-2xl P-6 flex justify-center items-center">
        <Image src="/icon-3.png" alt="Icone" width={48} height={48} /> 
        <div className=" text-black ">

          Esqueci minha senha
          
          </div>
        <Angry className="h-6 w-6" />
        <Link href="/">
          <div className="text-gray-800"> 
             para recuperar o acesso, insira o e-mail da sua conta e enviaremos um link para redefinir
          </div>  
        </Link>
<div>
    <label htmlFor="email:">E-mail:</label>
    <input type="email" name="" id="email" />
</div>
      </div >

    </div>
  )
}
