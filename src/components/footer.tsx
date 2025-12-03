export default function Footer() {
    return (
        <footer className="footer">
            <p>Telefone para contato: 81 9942429</p>
            <p>Email: Cinelist.com</p>

            <nav className="footer-links">
                <a href="/sobre-nos">Sobre nós</a> | <a href="/contato">Fale conosco</a>
            </nav>

            <p>
                © {new Date().getFullYear()} Todos os direitos autorais reservados  
                <img 
                    src="/icon-3.png" 
                    alt="cine-list" 
                    style={{ width: "60px", marginLeft: "60px" }}
                />
            </p>
        </footer>
    );
}

