import { RecoilState, atom } from "recoil";

export const loginState: RecoilState<boolean> = atom<boolean>({
  key: "loginState",
  default: false,
});
