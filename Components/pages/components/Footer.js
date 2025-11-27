export default function Footer() {
  return (
    <footer className="bg-neutralGray p-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-neutralDark">&copy; {new Date().getFullYear()} PCEA Center. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
    }
