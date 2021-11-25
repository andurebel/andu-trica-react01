import classNames from "classnames";
import {
  IoGameController,
  BiHappy,
  RiEmotionUnhappyLine,
} from "react-icons/all";

export const UserStats = ({ gamesWon, gamesLost, gamesPlayed }) => {
  const baseIconClasses = "mr-2 fill-current";
  const playedIconClasses = classNames(baseIconClasses, "text-purple-500");
  const wonIconClasses = classNames(baseIconClasses, "text-green-500");
  const lostIconClasses = classNames(baseIconClasses, "text-red-500");

  return (
    <ul className="border rounded-md shadow mt-4 ">
      <li className="border-b p-3 ">
        <IoGameController className={playedIconClasses} />
        {gamesPlayed} games played
      </li>
      <li className="border-b p-3">
        <BiHappy className={wonIconClasses} />
        {gamesWon} games won
      </li>
      <li className="border-b p-3">
        <RiEmotionUnhappyLine className={lostIconClasses} />
        {gamesLost} games lost
      </li>
    </ul>
  );
};

export default UserStats;
