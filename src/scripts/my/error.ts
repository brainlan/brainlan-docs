export function errorJsonCreate(message = "", option?: ErrorOptions, debug = false) {
  const error = Error(message, option);
  if (!debug) {
    delete error.stack;
  }
  //delete error.cause;
  return JSON.stringify(error, Object.getOwnPropertyNames(error));
}

export function errorJsonParse(serializedError: string) {
  return Object.assign(new Error(), JSON.parse(serializedError));
}
