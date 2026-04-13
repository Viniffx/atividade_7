import { Mail, Lock } from "lucide-react";

const icons = {
    email: Mail,
    password: Lock,
};

const DefaultInput = ({ type, placeholder }) => {
    const Icon = icons[type];

    return (
    <div style={styles.wrapper}>
        {Icon && <Icon size="1.25rem" color="var(--text-muted)" />}
        <input
        type={type}
        placeholder={placeholder}
        style={styles.input}
        />
    </div>
    );
};

const styles = {
    wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    height: "3rem",
    border: "0.0625rem solid var(--text-muted)",
    borderRadius: "0.5rem",
    padding: "0 0.75rem",
},
input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "var(--text-main)",
    },
};

export default DefaultInput;