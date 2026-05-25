export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg border-t border-border py-6 text-center">
      <p className="text-sm text-text-muted">
        © {year}{" "}
        <span className="text-accent font-medium">Tonje Schjefstad. </span>
        All Rights Reserved
      </p>
    </footer>
  );
}