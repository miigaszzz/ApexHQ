import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="bg-f1-dark min-h-screen text-f1-light-gray font-inter flex flex-col">
      {/* Navbar Provisória */}
      <nav className="bg-black/50 border-b border-f1-red/30 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-orbitron text-f1-red font-bold uppercase italic">
            ApexHQ
          </Link>
          <div className="space-x-6 font-orbitron text-sm tracking-widest">
            <Link to="/" className="hover:text-f1-red transition-colors">Home</Link>
            <Link to="/calendario" className="hover:text-f1-red transition-colors">Calendário</Link>
            <Link to="/pilotos" className="hover:text-f1-red transition-colors">Pilotos</Link>
            <Link to="/classificacoes" className="hover:text-f1-red transition-colors">Classificacões</Link>
          </div>
        </div>
      </nav>
      
      {/* O Outlet é onde as páginas (Home, Pilotos, etc) vão aparecer */}
      <main className="flex-grow container mx-auto">
        <Outlet /> 
      </main>

      {/* Footer Provisório */}
      <footer className="p-6 text-center text-xs text-gray-500 font-orbitron">
        &copy; 2025 APEXHQ - F1 STATS
      </footer>
    </div>
  );
};

export default MainLayout;