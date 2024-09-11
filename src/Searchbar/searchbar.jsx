import { IoIosSearch } from "react-icons/io";

const searchbar = () => {
  return (
    <div className="sticky">
      <div className=" absolute right-16 top-5 ">
        <input
          type="text"
          placeholder="Search"
          className="placeholder-secondary font-inter border-[1px] border-secondary pl-12 focus:outline-none rounded-3xl px-2 py-2  w-52 xl:w-96  text-black"
        />
        <div className=" absolute text-secondary top-3 left-5">
          <IoIosSearch  size={20}/>
        </div>
      </div>
    </div>
  );
};

export default searchbar;
