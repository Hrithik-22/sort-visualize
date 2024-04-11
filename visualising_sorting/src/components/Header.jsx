
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Sorting Visualizer</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Generate Random Array</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Bubble Sort</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Insertion Sort</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Selection Sort</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Merge Sort</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Stop Sorting</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
