
import Image from "next/image"
import Link from "next/link"

export default function EsqueciMinhaSenha() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-violet-300 w-3x1 rounded-2xl P-6 flex flex-col justify-center items-center gap-4 py-6">
        <Link href="/login" > <Image src="/icon-3.png" alt="Icone" width={200} height={200} className="mb-4" /> </Link>
        <div className=" text-black flex flex-col justify-center items-center text-5xl font-semibold ">

          <h1>Esqueci minha senha</h1>

        </div>

        <div className="text-gray-500 flex flex-col justify-center items-center text-3xl font-normal italic max-w-2xl mx-auto text-center">
          <p>para recuperar o acesso, insira o e-mail da sua conta e enviaremos um link para redefinir.</p>
        </div>

        <div>
          <label htmlFor="email:" className="text-black text-2xl ml-auto " >E-mail:</label>
          <input type="email" name="" id="email" placeholder="escreva..." className=" border border-white w-full rounded-md ml-auto " />
        </div>

        <div>
          <button className="bg-violet-800 text-white p-2 rounded-2xl hover:via-violet-950 transition text-2xl py-2 px-15  ">enviar →</button></div>
      </div >

    </div>
  )
}
