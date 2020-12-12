import { Loader } from "@remix-run/data";

const loader: Loader = () =>
  new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });

export { loader };
