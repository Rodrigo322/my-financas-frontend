import "./styles.css";

export const Information = () => {
  return (
    <section>
      <div className="input-date">
        <div className="container-input">
          <label htmlFor="initial-date">Data inicial</label>
          <input type="date" name="initial-date" />
        </div>

        <div className="container-input">
          <label htmlFor="final-date">Data final</label>
          <input type="date" name="final-date" />
        </div>
      </div>

      <div className="info-values">
        <p>Receita</p>
        <span className="span-green">R$ 3500</span>
      </div>

      <div className="info-values">
        <p>Dispesas</p>
        <span className="span-red">R$ 500</span>
      </div>

      <div className="info-values">
        <p>Balanço</p>
        <span className="span-green">R$ 3000</span>
      </div>
    </section>
  );
};
