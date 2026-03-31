const Footer = () => (
  <footer className="py-8 px-6 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      <span className="font-mono text-primary">{"<"}</span>
      {" Built with passion "}
      <span className="font-mono text-primary">{"/>"}</span>
      {" · © " + new Date().getFullYear() + " John Developer"}
    </p>
  </footer>
);

export default Footer;
