//import { Container } from 'postcss';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className = {styles.container}>

      {/* Navbar */}
      <nav className = {styles.navbar}>
        <div className = {styles.nav_content}>
          <Link to = "/" className={styles.logo}>
            ApexHQ
          </Link>
          <div className = {styles.nav_links}>
            <Link to="/" className = {styles.link}>Home</Link>
            <Link to="/calendario" className = {styles.link}>Calendário</Link>
            <Link to="/pilotos" className = {styles.link}>Pilotos</Link>
            <Link to="/classificacoes" className = {styles.link}>Classificações</Link>
          </div>
        </div>
      </nav>
      
      {/* Outlet */}
      <main className = {styles.outlet}>
        <Outlet /> 
      </main>

      {/* Footer */}
      <footer className = {styles.footer}>
        &copy; 2025 APEXHQ - F1 STATS
      </footer>
    </div>
  );
};

const styles = {
  container: "bg-f1-dark min-h-screen text-f1-light-gray font-inter flex flex-col",
  navbar: "bg-black/50 border-b border-f1-red/30 p-4",
  nav_content: "container mx-auto flex justify-between items-center",
  logo: "text-2xl font-orbitron text-f1-red font-bold uppercase italic",
  nav_links: "space-x-6 font-orbitron text-sm tracking-widest",
  link: "hover:text-f1-red transition-colors",
  outlet: "flex-grow container mx-auto",
  footer: "p-6 text-center text-xs text-gray-500 font-orbitron",
};  


export default MainLayout;