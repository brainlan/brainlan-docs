import { errorJsonParse } from "./error.ts";
async function request<TResponse>(url: string, config?: RequestInit): Promise<TResponse> {
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw errorJsonParse(await response.text());
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Error JSON Format");
    }
  }
}

export const api = {
  get: <TResponse>(url: string, config?: RequestInit) => request<TResponse>(url, config),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => request<TResponse>(url, { method: "POST", body }),

  delete: <TResponse>(url: string) => request<TResponse>(url, { method: "DELETE" }),
};
