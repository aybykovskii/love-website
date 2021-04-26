export type TCheckSessionInput = {
  session_id: string;
};

export type TCheckSessionResponse = {
  err?: "invalid_params" | "invalid_session" | "server_error";
};
