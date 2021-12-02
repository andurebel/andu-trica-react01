import { getUsers } from "./../actions/creators/auth/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const RanksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return " ranks page";
};

export default RanksPage;
