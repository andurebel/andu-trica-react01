import { SiLetterboxd } from "react-icons/si";
import { Link } from "react-router-dom";

export const Header = () => {
  const renderUserControls = () => {
    const authenticated = true;

    if (authenticated) {
      return "user is logged in";
    } else {
      return "user is not logged in";
    }
  };

  return (
    <>
      <header className="shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <header>
            <h1 className="uppercase text-lg font-bold">
              <Link to="/" title="Go home" className="flex items-center">
                <SiLetterboxd className="mr-2"></SiLetterboxd>
              </Link>
            </h1>
          </header>
          {renderUserControls()}
        </div>
      </header>
    </>
  );
};

export default Header;
