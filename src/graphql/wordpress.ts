interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : "Basic dXNlcjpLTktFIGN6UkcgTENrUCA2TWZoIFc0VWMgVzJNTQ=="

    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();

  return data;
}
