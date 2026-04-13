
const Container = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Container;