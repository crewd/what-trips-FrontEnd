import { RecoilState, atom } from "recoil";

export const loginState: RecoilState<string> = atom<string>({
  key: "loginState",
  default: "",
});
