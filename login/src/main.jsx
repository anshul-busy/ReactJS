import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Welcome back, ${email}!`);
  }

  return (
    <main className="page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to your account</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <div className="password-label">
          <label htmlFor="password">Password</label>
          <a href="#reset">Forgot password?</a>
        </div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <button type="submit">Sign in</button>
        {message && <p className="message" role="status">{message}</p>}

        <p className="create-account">Don't have an account? <a href="#signup">Sign up</a></p>
      </form>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
