import { Message } from "../message/Message";
import { Question } from "../question/Question";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  questions?: Array<Question>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
