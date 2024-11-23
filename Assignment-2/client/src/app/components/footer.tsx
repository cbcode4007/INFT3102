export default function Footer() {
    return (
      <footer className="bg-dark flex">
        <div className="container mx-auto flex justify-center items-center py-4 bg-dark">
          <div>&copy; {new Date().getFullYear()} Colin Bond</div>
        </div>
      </footer>
    );
  }