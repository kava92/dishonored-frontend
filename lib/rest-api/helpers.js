export const apiUrl = "https://dishonored-api-oyugjjmnll.now.sh";

export async function callApi(
  url,
  { body, method = "get", headers = {} } = {}
) {
  let stringifiedBody;
  if (body) {
    stringifiedBody = typeof body === "string" ? body : JSON.stringify(body);
  }
  console.log(apiUrl + url);

  try {
    const response = await fetch(apiUrl + url, {
      // there was apiUrl + url
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: stringifiedBody,
      credentials: "same-origin"
    });

    const responseIsJSON =
      response.headers.get("content-type").indexOf("application/json") !== -1;
    if (responseIsJSON) {
      return response.json();
    }
    return response.text();
  } catch (error) {
    console.error(error);
  }
  return null;
}
