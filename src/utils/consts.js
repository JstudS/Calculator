import { FaMinus, FaPlus, FaEquals} from "react-icons/fa6";
import { LuDivide } from "react-icons/lu";
import { TbLetterX } from "react-icons/tb"

export const signs = ['÷', '*', '-', '+', '.', ' ', '%']
export const numbersFirstRow = [7, 8, 9]
export const numbersSecondRow = [4, 5, 6]
export const numbersThirdRow = [1, 2, 3]
export const numbersFourthRow = [0, '.']
export const buttonsRightArray = [{sign: '÷', component: <LuDivide />}, {sign: '*', component: <TbLetterX />}, {sign: '-', component: <FaMinus />}, {sign: '+', component: <FaPlus />}, {sign: '=', component: <FaEquals />}]
