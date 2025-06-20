const Footer = () => {
  return (
    <footer className="py-16 px-8 lg:px-16 border-t border-minimal-border-subtle/50">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-minimal-text-subtle font-light tracking-wide text-sm">
            © 2025 rudra.dev. Crafted with passion.
          </div>
          <div className="text-minimal-text-subtle text-xs font-light tracking-wide">
            Built with React, TypeScript.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
