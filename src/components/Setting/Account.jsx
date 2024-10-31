import { IoEye } from "react-icons/io5";
import {auth} from "../../firebase";
import {useEffect, useState} from 'react';

const Account = () => {
  const [profile, setProfile] = useState({
    _id : "Loading..",
    username : "Loading..",
    email : "Loading..",
    displayName : "Loading..",
    profilePicture: "../../assets/Image/per.png",
    title: "Loading..",
    firstName: "Loading..",
    lastName: "Loading..",
    phoneNumber: "Loading....",
  })
  
  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch("https://course-compass-backend-zh7c.onrender.com/api/student/profile-data", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data)
          setProfile(data); // Assuming the response has courses in data.courses
        } else {
          console.error("Failed to fetch purchases:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch purchases:", error);
      }
    };
    fetchProfile();
  },[])

  const handleDisplayName = (e) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      displayName: e.target.value
    }));
  };

  const handleFirstName = (e) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      firstName: e.target.value
    }));
  }

  const handleLastName = (e) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      lastName: e.target.value
    }));
  }

  const handlePhoneNumber = (e) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      phoneNumber: e.target.value.toString(10).replace(/[^0-9]/g,'')
    }));
  }

  const handleEmail = (e) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      email: e.target.value
    }));
  }


  const updateProfile = async () => {
    try {
      console.log(profile)
      const token = await auth.currentUser.getIdToken();
      console.log(profile)
      const response = await fetch("https://course-compass-backend-zh7c.onrender.com/api/student/profile-data", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body : JSON.stringify(profile)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Data updated successfully!");
      }
    } catch (error) {
      console.error("Failed to fetch update data:", error);
    }
  }

  return (
    <>
      <div className="">
        <div className=" ">
          <h3 className="font-inter text-lg">Account</h3>
          <p className="font-inter text-sm text-secondary">
            View and edit personal info below.
          </p>
          <div className="flex py-6  justify-between">
            <div className="flex ">
              <img
                className="rounded-full  size-10 bg-secondary"
                src={profile.profilePicture}
                alt="User"
              />
              <h3 className="ml-4 font-inter my-auto">Profile Picture</h3>
            </div>

            <div className=" justify-end space-x-5 items-end mr-10">
              <button className="px-2 rounded-full text-secondary font-inter border-[0.25px] border-[#656565]">
                {" "}
                Change
              </button>
              <button className="px-2 rounded-full bg-red-500 font-inter text-white ">
                Delete
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-inter text-base">Display Info</h3>
            <p className="font-inter text-sm text-secondary">
              This information will be visible to all members of this site.
            </p>

            <form className="py-3" action="">
              <div className="flex justify-around gap-x-20">
                <div className=" w-1/2">
                  <label className="block py-3 relative" htmlFor="">
                    Display Name *
                    <input
                      type="text"
                      className="p-3 pl-12 relative mt-2 bg-four rounded-lg w-full "
                      placeholder={profile.displayName}
                      onChange = {handleDisplayName}
                    />
                    <IoEye
                      className=" absolute mx-auto top-14 left-4 text-secondary"
                      size={21}
                    />
                  </label>
                </div>
                {/* <div className=" w-1/2">
                  <label className="block py-3 relative" htmlFor="">
                    Title
                    <input
                      type="text"
                      className="p-3 pl-12 relative mt-2 bg-four rounded-lg  w-full"
                      placeholder={profile.title}
                      onChange = {handleDisplayName}
                    />
                    <IoEye
                      className=" absolute mx-auto top-14 left-4 text-secondary"
                      size={21}
                    />
                  </label>
                </div> */}
              </div>
            </form>
          </div>
          {/*Personal Informatiom */}
          <div className="mt-5">
            <h3 className="font-inter text-base">Personal Information</h3>
            <p className="font-inter text-sm text-secondary">
              Update your personal information.
            </p>

            <form className="py-3" action="">
              <div className=" grid grid-cols-2 justify-around gap-x-20">
                <div className=" ">
                  <label className="block py-3 relative" htmlFor="">
                    First Name
                    <input
                      type="text"
                      className="p-3 pl-12 relative mt-2 bg-four rounded-lg w-full "
                      placeholder={profile.firstName}
                      onChange = {handleFirstName}
                    />
                    <IoEye
                      className=" absolute mx-auto top-14 left-4 text-secondary"
                      size={21}
                    />
                  </label>
                </div>
                <div className=" ">
                  <label className="block py-3 relative" htmlFor="">
                    Last Name
                    <input
                      type="text"
                      className="p-3 pl-12 relative mt-2 bg-four rounded-lg  w-full"
                      placeholder={profile.lastName}
                      onChange = {handleLastName}
                    />
                    <IoEye
                      className=" absolute mx-auto top-14 left-4 text-secondary"
                      size={21}
                    />
                  </label>
                </div>
                <div className=" ">
                  <label className="block py-3 relative" htmlFor="">
                    Phone Number
                    <input
                      type="number"
                      className="p-3 pl-12 relative mt-2 bg-four rounded-lg  w-full"
                      placeholder={profile.phoneNumber}
                      onChange = {handlePhoneNumber}
                    />
                    <IoEye
                      className=" absolute mx-auto top-14 left-4 text-secondary"
                      size={21}
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/*login info */}

          <div className="mt-5">
            <h3 className="font-inter text-base">Login Info</h3>
            <p className="font-inter text-sm text-secondary">
              View and update your login email and password.
            </p>

            <form className="py-3" action="">
              <div className=" grid grid-cols-1 justify-around gap-x-20">
                <div className="  relative">
                  <label className="block py-3" htmlFor="">
                    Login Email
                  </label>
                  <input
                    type="email"
                    className="p-2 pl-12 relative mt-2 bg-four rounded-lg  "
                    placeholder={profile.email}
                    onChange = {handleEmail}
                  />
                  <IoEye
                    className=" absolute mx-auto top-16 left-4 text-secondary"
                    size={21}
                  />
                  <button className="ml-5 p-2 bg-black text-sm text-white font-inter rounded-xl">
                  Change Email

                  </button>
                </div>
                <div className=" relative ">
                  <label className="block py-3 " htmlFor="">
                    Login Password
                  </label>
                  <input
                    type="password"
                    className="p-2 pl-12 mx-auto placeholder:size-40  mt-2 bg-four rounded-lg  "
                    placeholder="....."
                  />
                  <IoEye
                    className=" absolute mx-auto top-16 left-4 text-secondary"
                    size={21}
                  />
                  <button className="ml-5 p-2 bg-black text-sm text-white font-inter rounded-xl">
                  Phone Number
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Visibility and Privacy

          <div className="mt-7">
            <h3 className="font-inter text-base">Visibility and Privacy</h3>
            <p className="font-inter text-sm text-secondary">
              Update Visibility and Privacy information.
            </p>

            <form className="py-3" action="">
              <div className=" grid grid-cols-1 justify-around gap-x-20">
                <div className="  relative">
                  <label className="block py-3" htmlFor="">
                    Profile URL
                  </label>
                  <input
                    type="url"
                    className="p-2 pl-12 relative mt-2 bg-four rounded-lg w-96  "
                    placeholder="https://www.app2buildlearning.in/profile/47b28c93-1604-4110-8d07-85f635e8a60f/profile"
                  />
                  <h3 className=" absolute mx-auto top-16 left-4 text-secondary">
                    URL
                  </h3>
                  <button className="ml-5 p-2 bg-black text-sm text-white font-inter rounded-xl">
                    Edit URL
                  </button>
                </div>
              </div>
            </form>
          </div> */}

          {/*Profile Privacy
           */}

          {/* <div className="mt-7">
            <h3 className="font-inter text-base">Profile Privacy</h3>
            <p className="font-inter text-sm text-secondary">
              Hide your profile page, and social aspects of your account.
            </p>
            <button className="mt-5 p-3 bg-black text-sm text-white font-inter rounded-full">
              Make Profile Private
            </button>
          </div> */}
        </div> 

        <div className=" container pr-4 py-5">
          <div className="flex justify-end gap-5">
            <button className="mt-5 p-3 bg-black text-sm text-white font-inter rounded-full" onClick={updateProfile} >
              Update Info
            </button>
            <button className="mt-5 p-3 border-black border-[0.05px] text-sm font-medium text-black font-inter rounded-full">
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
