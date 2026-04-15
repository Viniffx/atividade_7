import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div style={styles.container}>{children}</div>;
};

const styles: { container: CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Container;