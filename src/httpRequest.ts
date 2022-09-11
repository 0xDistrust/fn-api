import { request } from "undici";

export async function httpRequest(url: string, options?: HttpRequestOpts) {
    const { body, statusCode } = await request(url, {
        method: options?.method ?? "GET",
        headers: {
            "User-Agent": "FortniteGame/++Fortnite+Release-21.50-CL-21657658 Windows/10.0.22000.1.768.64bit",
            ...(() => options?.headers ?? {})() // 💀
        },
        body: options?.body ?? null
    });
    return { body, statusCode };
};

interface HttpRequestOpts {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: string;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";