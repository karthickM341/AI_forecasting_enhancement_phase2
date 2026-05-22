function Analytics() {
  return (
    <div style={{padding:"40px"}}>

      <h1>Analytics Dashboard</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <h2>$120K</h2>
        </div>

        <div style={cardStyle}>
          <h3>Forecast Accuracy</h3>
          <h2>94%</h2>
        </div>

        <div style={cardStyle}>
          <h3>Predictions</h3>
          <h2>1,240</h2>
        </div>

      </div>

    </div>
  );
}

const cardStyle = {
  background:"white",
  padding:"30px",
  borderRadius:"20px",
  boxShadow:"0 5px 20px rgba(0,0,0,0.08)"
};

export default Analytics;