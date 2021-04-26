export type TLogoutInput = {
  session_id: string;
};
export type TLogoutResponse = {
  err?: "invalid_params" | "server_error";
};
