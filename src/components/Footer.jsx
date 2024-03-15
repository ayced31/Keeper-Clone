export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {currentYear} Ayush Kumar</p>
        </footer>
    )
}