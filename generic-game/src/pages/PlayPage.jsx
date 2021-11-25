import { useAuth } from "../hooks";
import { Spinner } from "../components/ui";

export const PlayPage = () => {
  const { established, authenticated } = useAuth();
  return (
    <>
      <div className="p-6 mx-auto">
        {!established ? (
          <Spinner />
        ) : authenticated ? (
          "Let's play the game"
        ) : (
          "Please log in to play the game"
        )}
      </div>
    </>
  );
};

export default PlayPage;
