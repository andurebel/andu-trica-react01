import { useAuth, useStats } from "../hooks";
import { Spinner, Button } from "../components/ui/";
//import ProfilePage from "./ProfilePage";
import { requestSignIn } from "../actions/creators/auth";
import { useDispatch } from "react-redux";
import { UserStats } from "../components/profile";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const stats = useStats();
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-4 container mx-auto">
        <h1>Welcome to generic game</h1>
        {!established ? (
          <Spinner />
        ) : authenticated ? (
          //<ProfilePage/>
          <>
            <UserStats {...stats} className="mt-8"></UserStats>
            <div className="mt-2 text-center">
              <Link to="/play" element="span">
                <Button title="play now" type="button">
                  Play
                </Button>
              </Link>
            </div>
          </>
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
