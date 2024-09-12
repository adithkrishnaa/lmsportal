import pic from "../../assets/Image/per.png";

const Profile = () => {
  return (
    <>
      <div className="px-4 py-4">
        {/* Account Section */}
        <h3 className="font-inter text-lg">Profile</h3>
        <p className="font-inter text-sm text-secondary">
          View and edit personal info below.
        </p>

        {/* Profile Picture Section */}
        <div className="flex py-10 justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full size-14 bg-secondary"
              src={pic}
              alt="User"
            />
            <div className="block">
              <h3 className="ml-4 font-inter text-sm my-auto">
                Profile Picture
              </h3>
              <p className="ml-4 font-inter text-secondary text-sm my-auto">
                Joined on 13 October, 2018.
              </p>
            </div>
          </div>

          <div className="flex space-x-5">
            <button className="px-4 py-1 rounded-lg bg-black font-inter text-white">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Display Info Section */}
        <div>
          <h3 className="font-inter text-base">About</h3>
          <input
            type="textarea"
            className="p-3 pl-12 relative mt-2 bg-four rounded-lg w-full "
            
          />

          <div>
            <div>
              <li className="3"></li>
            </div>
          </div>

          {/* You can add form fields here for displaying and editing the user's personal information */}
        </div>
      </div>
    </>
  );
};

export default Profile;
