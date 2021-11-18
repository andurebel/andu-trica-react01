import { useAuth } from "../hooks";
import { CgSpinnerTwo } from "react-icons/cg";
import ProfilePage from "./ProfilePage";

export const HomePage = () => {
  const { authenticated, established } = useAuth();

  return (
    <>
      <div className="p-4 container mx-auto">
        {!established ? (
          <CgSpinnerTwo className="animate-spin mx-auto text-4xl text-green-700" />
        ) : authenticated ? (
          <ProfilePage />
        ) : (
          <div className="text-center">
            <button
              className="w-75 md:max-w-xl w-3/4 py-20 border rounded-md shadow hover:bg-gray-100"
              type="button"
              title="Login"
            >
              Login to get started
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
