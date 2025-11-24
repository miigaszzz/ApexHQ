import { mockTeams } from '../data/mockData';

const Pilotos = () => {
  return (
    <div className="p-6 space-y-8 pb-20">
      {/* Cabeçalho da Página */}
      <div className="mb-10 border-l-4 border-f1-red pl-4">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase">
          Grelha de Partida
        </h1>
        <p className="text-f1-light-gray mt-2 font-inter text-lg">
          Temporada 2025
        </p>
      </div>

      {/* Grelha de Equipas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mockTeams.map((team) => (
          <div 
            key={team.id} 
            className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden hover:border-f1-red/50 transition-all duration-300 group"
          >
            {/* 1. Cabeçalho da Equipa (Logo e Nome) */}
            <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/5">
              <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                {team.name}
              </h2>
              <img 
                src={team.logo} 
                alt={`${team.name} Logo`} 
                className="h-8 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="p-6 relative">
              {/* 2. Os Pilotos (Lado a Lado) */}
              <div className="flex justify-around items-end mb-12 relative z-10">
                {team.drivers.map((driver) => (
                  <div key={driver.id} className="text-center flex flex-col items-center">
                    {/* Foto do Piloto com efeito hover */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full overflow-hidden border-2 border-transparent group-hover:border-f1-red transition-all bg-gradient-to-b from-white/10 to-transparent">
                      <img 
                        src={driver.image} 
                        alt={driver.name} 
                        className="w-full h-full object-cover object-top pt-2"
                      />
                    </div>
                    
                    {/* Nome e Número */}
                    <div className="font-orbitron font-bold text-2xl text-white/10 absolute top-0 -z-10 scale-150">
                      {driver.number}
                    </div>
                    <h3 className="font-bold text-white text-lg leading-none">
                      {driver.name.split(' ')[0]} <br/>
                      <span className="text-f1-red uppercase">{driver.name.split(' ')[1]}</span>
                    </h3>
                    <span className="text-xs font-bold bg-white/10 px-2 py-0.5 rounded mt-1 text-gray-400">
                      {driver.number}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3. O Carro (Em baixo, centrado) */}
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                <img 
                  src={team.car_image} 
                  alt={`${team.name} Car`} 
                  className="w-[90%] md:w-[80%] object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
            
            {/* Espaço extra transparente para o carro não cortar */}
            <div className="h-12 md:h-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pilotos;