export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 text-white text-sm py-4">
            <img 
                src="/icon-3.png" 
                alt="cine-list" 
               className="w-[73px] h-[49]"
            />
            <p>Telefone para contato: 81 4002-8922</p>
            <p>E-mail: cinelist@fakemail.com</p>
            <p>
                © {new Date().getFullYear()} Todos os direitos autorais reservados  
            </p>
        </footer>
    );
}   

