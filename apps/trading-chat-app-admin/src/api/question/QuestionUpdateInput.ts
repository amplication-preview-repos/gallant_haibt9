import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionUpdateInput = {
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
