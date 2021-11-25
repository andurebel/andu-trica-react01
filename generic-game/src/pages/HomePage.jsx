import { useAuth } from "../hooks";
import { Spinner } from "../components/ui/";
import ProfilePage from "./ProfilePage";
import { requestSignIn } from "../actions/creators/auth";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-4 container mx-auto">
        {!established ? (
          <Spinner />
        ) : authenticated ? (
          <ProfilePage />
        ) : (
          <div className="text-center">
            <button
              className="w-75 md:max-w-xl w-3/4 py-20 border rounded-md shadow hover:bg-gray-100"
              type="button"
              title="Login"
              onClick={() => dispatch(requestSignIn())}
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
