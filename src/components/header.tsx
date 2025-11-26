import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 h-12 outline-6 outline-purple-500 outline-offset-[-4px] bg-purple-500">
      <div>
        <img className="h-14" src="/icon-3.png" alt="Logo" />
      </div>      
      <div> 
        <input 
        type="search"
        placeholder="Pesquisa"
        className="border rounded px-2 py-1 text-black"    
        />
      </div>
        <Link href="/login">Entrar
      </Link>
    </header>
  );
}