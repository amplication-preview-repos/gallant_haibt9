import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { QuestionUpdateManyWithoutUsersInput } from "./QuestionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  questions?: QuestionUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
