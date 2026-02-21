function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        backgroundColor: "#F8C008",
        color: "#1a1a1a",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {text}
    </button>
  )
}

export default Button
