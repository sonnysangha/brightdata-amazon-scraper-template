settings({ country: input.country || "us" });
navigate(`https://www.amazon.com/s?k=${input.search}`);
let max_page = parse().max_page;
let final_page = Math.min(input.pages || 0, max_page) || 1;
for (let i = 1; i <= final_page; i++) {
  let url = `https://www.amazon.com/s?k=${input.search}`;
  if (i > 1) url += `&page=${i}`;
  next_collector({ url, country: input.country, search: input.search });
}
