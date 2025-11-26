import { Search } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  setSearchTerm: (term: string) => void;
}

export default function Header({ setSearchTerm }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 h-16 outline-6 outline-purple-500 outline-offset-[-4px] bg-purple-500">
      <Link href="/">
        <img className="h-14" src="/icon-3.png" alt="Logo" />
      </Link>

      <div className="w-1/4 flex justify-between items-center gap-2">
        <input
          type="search"
          placeholder="Pesquisa"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded h-12 px-2 py-1 w-full bg-white text-black"
        />

        <Search size={20} color="black" />
      </div>
      
      <Link href="/login">Entrar</Link>
    </header>
  );
}