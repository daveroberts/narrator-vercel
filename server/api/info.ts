export default defineEventHandler(async (event) => {
  let result = await fetch("https://ipv4.icanhazip.com");
  let edge_ip = await result.text();
  const cityHeader = getHeader(event, "x-vercel-ip-city");
  const city = cityHeader ? decodeURIComponent(cityHeader) : "-";
  const ipHeader = getHeader(event, "x-forwarded-for");
  const ip = ipHeader ? ipHeader.split(",")[0] : "-";

  return {
    city,
    ip,
    edge_ip,
  };
});
