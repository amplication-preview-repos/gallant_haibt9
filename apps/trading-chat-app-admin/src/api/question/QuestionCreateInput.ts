import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionCreateInput = {
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
