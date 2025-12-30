const Home = () => {
  return (
    <div className = {styles.container}>
      <h1 className = {styles.page_header}> Grande Prémio Digital</h1>
      <p className = {styles.page_title}> Bem-vindo à ApexHQ. O teu hub de Fórmula 1.</p>
    </div>
  );
};

const styles = {
  container: "p-8",
  page_header: "font-orbitron text-4xl text-f1-red mb-4",
  page_title: "font-inter text-lg",
};

export default Home;