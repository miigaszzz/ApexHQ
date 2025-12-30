const Calendario = () => {
  return (
    <div className = {styles.container}>
      <h1 className = {styles.page_header}> Calendário 2025</h1>
      <p className = {styles.page_title}> Grelha de partida a carregar...</p>
    </div>
  );
};

const styles = {
  container : "p-8",
  page_header : "font-orbitron text-4xl text-f1-red mb-4",
  page_title : "font-inter",
};

export default Calendario;