import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="vendas">
          <div className="card-largura">

            <SalesCard />

          </div>
        </section>
      </main>
    </>
  )
}

export default App;
