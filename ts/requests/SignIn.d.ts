export type TSingInInput = {
  email: string;
  password: string;
};

export type TSignInResponse = {
  session_id?: string;
  err?: "invalid_params" | "invalid_email_or_password" | "server_error";
};
