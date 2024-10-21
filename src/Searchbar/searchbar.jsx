import { IoIosSearch } from "react-icons/io";

const Search = ({ onSearch }) => {
  return (
    <div className="sticky z-[5]">
      <div className="fixed right-16 top-24">
        <input
          type="text"
          placeholder="Search"
          className="placeholder-secondary font-inter border-[1px] border-secondary pl-12 focus:outline-none rounded-3xl px-2 py-2 w-52 xl:w-96 text-black"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute text-secondary top-3 left-5">
          <IoIosSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default Search;