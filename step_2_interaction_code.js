settings({ country: input.country || "us" });
navigate(input.url);
let products = parse().products;
//for (let product of products)
{
  collect(products);
}
