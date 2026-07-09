function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.85rem',
      borderTop: '1px solid var(--border)',
    }}>
      <p>// hecho con React — {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;