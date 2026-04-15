import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
};

const MainForm = ({ children }: Props) => {
  return <div style={styles.card}>{children}</div>;
};

const styles: { card: CSSProperties } = {
  card: {
    maxWidth: "25rem",
    width: "100%",
    padding: "2.5rem",
    borderRadius: "0.75rem",
    background: "var(--bg-card)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
};

export default MainForm;