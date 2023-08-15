function InvestmentTable(props) {
  const { tableData } = props;
  console.log(
    "🚀 ~ file: InvestmentTable.js:3 ~ InvestmentTable ~ tableData:",
    tableData
  );
  if(!tableData.length){ return <center> No data </center>}
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>TOTAL SAVINGS END OF YEAR</td>
              <td>INTEREST GAINED IN YEAR</td>
              <td>TOTAL INTEREST GAINED</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvestmentTable;
