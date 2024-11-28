export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">CustomsClear</h1>
          <div>
            <a href="#" className="mr-4 hover:underline">Home</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    );
  }