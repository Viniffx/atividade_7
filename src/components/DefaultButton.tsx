const DefaultButton = ({ children }) => {
  return (
    <button type="submit" style={styles.button}>
      {children}
    </button>
  );
};

const styles = {
  button: {
    width: '100%',
    height: '3rem',
    backgroundColor: 'var(--primary-color)',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default DefaultButton;
