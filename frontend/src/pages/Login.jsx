import "./Login.css";

function Login() {
  return (
    <div className="container">

      <div className="left-panel">

        <div className="content">

          <h1>AI Demand Forecasting</h1>

          <p>
            Smart forecasting platform powered by AI,
            analytics and real-time prediction systems.
          </p>

        </div>

      </div>

      <div className="right-panel">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Login to continue
          </p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button>
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;