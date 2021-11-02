import { CLICKER_CLICK } from "../../types/ui";
import { CLICKER_DECREMENT } from "../../types/ui";

export const clickClicker = (payload = 1) => {
  return {
    type: CLICKER_CLICK,
    payload,
  };
};

export const decrementClicker = (payload = 1) => {
  return {
    type: CLICKER_DECREMENT,
    payload,
  };
};
