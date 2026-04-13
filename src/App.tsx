import Container from "./components/Container";
import MainForm from "./components/MainForm";
import DefaultInput from "./components/DefaultInput";
import DefaultButton from "./components/DefaultButton";
import "./styles/global.css";
import "./styles/themes.css";

export function App() {
  return (
    <Container>
      <MainForm>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <h2 style={{ color: "var(--text-main)", textAlign: "center" }}>
            Login
          </h2>

          <DefaultInput type="email" placeholder="Email" />
          <DefaultInput type="password" placeholder="Senha" />

          <DefaultButton>
            Entrar
          </DefaultButton>

        </form>
      </MainForm>
    </Container>
  );
}