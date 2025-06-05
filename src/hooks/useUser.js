import { useContext } from "react";
import UserContext from "../contexts/CreateContext";

export const useUser = () => useContext(UserContext);
