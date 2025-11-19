'use client'

import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

export default function RedefinirSenha() {
  const router = useRouter()
  const [passwordChanged, setPasswordChanged] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false)

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')

    if (String(password)?.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres!')

      return
    }

    if (password === confirmPassword) {
      setPasswordChanged(true)

      setTimeout(() => {
        router.push('/login')
      }, 3000)
    } else {
      setError('As senhas não coincidem!')
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat shadow-md">
      <div className="bg-violet-300 p-8 rounded-2xl w-10/12 lg:w-1/3 flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <img src="/icon-3.png" alt="Logo" className="h-36" />
        </div>

        {!passwordChanged && (
          <>
            <p className="text-center text-black">Insira a sua nova senha nos campos abaixo.</p>

            <form onSubmit={handleSubmit} className="text-black flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="password">
                  Senha:
                  <i className="text-red-500">*</i>
                </label>
                <div className="relative w-full">
                  <div className="absolute z-50 right-3 top-3.5 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)}>
                    {passwordVisible
                      ? <Eye className="text-black" size={20} />
                      : <EyeOff className="text-black" size={20} />
                    }
                  </div>

                  <input onChange={() => setError('')} className="relative w-full bg-white h-12 px-2 rounded-md border border-gray-500" type={passwordVisible ? 'text' : 'password'} id="password" name="password" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="confirmPassword">
                  Confirmar senha:
                  <i className="text-red-500">*</i>
                </label>
                <div className="relative w-full">
                  <div className="absolute z-50 right-3 top-3.5 cursor-pointer" onClick={() => setConfirmPasswordVisible(prev => !prev)}>
                    {confirmPasswordVisible
                      ? <Eye className="text-black" size={20} />
                      : <EyeOff className="text-black" size={20} />
                    }
                  </div>

                  <input onChange={() => setError('')} className="relative w-full bg-white h-12 px-2 rounded-md border border-gray-500" type={confirmPasswordVisible ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" required />
                </div>
              </div>

              {error && (
                <div className="text-red-600"> {error} </div>
              )}

              <div className="flex justify-center">
                <button className="h-12 text-white cursor-pointer min-w-20 p-2 rounded-sm bg-violet-800 hover:bg-violet-700" type="submit">Continuar</button>
              </div>
            </form>
          </>
        )}

        {passwordChanged && (
          <div className="text-center text-black text-xl font-bold">Senha alterada com sucesso! Estamos redirecionando você. Aguarde!</div>
        )}
      </div>
    </div>
  )
}
