import { Creature } from "../components/profile";
import { useState } from "react";
import { Button } from "../components/ui";
import { Authorize } from "../components/auth";

export const GamePage = () => {
  const [gameState, setGameState] = useState({
    playing: false,
  });

  const { playing } = gameState;

  return (
    <div className="p-4 container flex mx-auto ">
      <Authorize>
        <div className="w-full md:8/12 mb-2 flex items-center justify-around">
          {playing ? (
            <>
              <Button title="Win game" type="button" onClick={() => {}}>
                Win game
              </Button>
              <Button
                title="Loose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {}}
              >
                Loose game
              </Button>
              <Button
                title="Quit game"
                type="button"
                skin="danger"
                onClick={() => {}}
              >
                Quit game
              </Button>
            </>
          ) : (
            <Button
              title="Start Game"
              type="button"
              onClick={() => {
                setGameState({
                  playing: true,
                });
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
