import { Angry } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EsqueciMinhaSenha() {
  return (
    <>
      <div>Esqueci minha senha</div>
      <Angry className="h-6 w-6" />
      <Image src="/icon-2.png" alt="Icone" width={32} height={32} />
      <Link href="/">
        <div>
          Oi
        </div>
      </Link>
    </>
  )
}
