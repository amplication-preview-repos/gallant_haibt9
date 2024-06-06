import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { QuestionCreateNestedManyWithoutUsersInput } from "./QuestionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  questions?: QuestionCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
