import { changeDailyQuestionItem } from "../mutation-types/dailyQuestion";
console.log(changeDailyQuestionItem);
export default {
  [changeDailyQuestionItem](state, params) {
    console.log(state, params, "iiihhh");
    // state.dailyQuestion.pageDetail = params;
    return state;
  }
};
