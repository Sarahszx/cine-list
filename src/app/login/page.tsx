import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat shadow-md">
      <div className="bg-violet-300 p-8 rounded-2xl w-10/12 lg:w-1/3 flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <Link href="/">
            <img src="/icon-3.png" alt="Logo" className="h-36" />
          </Link>
        </div>
        
        <p className="text-center text-black">Utilize suas credenciais abaixo para acessar sua conta.</p>

        <form className="text-black flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="email">
              E-mail:
              <i className="text-red-500">*</i>
            </label>
            <input className="bg-white h-12 px-2 rounded-md border border-gray-500" type="email" id="email" name="email" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="password">
              Senha:
              <i className="text-red-500">*</i>
            </label>
            <input className="bg-white h-12 px-2 rounded-md border border-gray-500" type="password" id="password" name="password" required />
          </div>

          <Link href="../esqueci-minha-senha" className="text-violet-800 hover:text-violet-700 underline">Esqueceu a senha?</Link>

          <div className="flex justify-center">
            <button className="w-fit h-12 text-white cursor-pointer py-2 px-4 rounded-sm bg-violet-800 hover:bg-violet-700" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}