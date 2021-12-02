import { useEffect } from "react";
import { Creature } from "../components/profile";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/ui";
import { Authorize } from "../components/auth";
import { gameEnded, gameStarted } from "../actions/creators/game";
import { patchGameLost, patchGameWon } from "../actions/creators/profile";

export const GamePage = () => {
  const dispatch = useDispatch();

  const { playing } = useSelector(({ game }) => {
    return game;
  });

  useEffect(() => {
    return () => {
      if (playing) {
        dispatch(gameEnded());
      }
    };
  }, [dispatch, playing]);

  return (
    <div className="p-4 container flex mx-auto ">
      <Authorize>
        <div className="w-full md:8/12 mb-2 flex items-center justify-around">
          {playing ? (
            <>
              <Button
                title="Win game"
                type="button"
                onClick={() => {
                  dispatch(patchGameWon());
                  dispatch(gameEnded());
                }}
              >
                Win game
              </Button>
              <Button
                title="Loose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Loose game
              </Button>
              <Button
                title="Quit game"
                type="button"
                skin="danger"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Quit game
              </Button>
            </>
          ) : (
            <Button
              title="Start Game"
              type="button"
              onClick={() => {
                dispatch(patchGameLost());
                dispatch(gameStarted());
              }}
            >
              Start Game
            </Button>
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center md:w-4/12">
          <Creature />
        </div>
      </Authorize>
    </div>
  );
};

export default GamePage;
