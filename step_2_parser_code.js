let products = $('[data-component-type="s-search-result"]')
  .toArray()
  .map((el) => {
    let $el = $(el);
    let desc_el = $(el).children(".sg-col").eq(1);
    let title_el = $(el).find("h2 a.a-text-normal").eq(0);
    let name_el = title_el.find("span").eq(0);
    let rating_el = $(el).find("span[aria-label*=stars]").eq(0).parent();
    let image_el = $(el)
      .find('span[data-component-type="s-product-image"] img')
      .eq(0);
    let price_el = $(el).find(".a-price:not([data-a-strike])").eq(0);
    let previous_price_el = $(el).find(".a-price[data-a-strike]").eq(0);
    let reviews = rating_el.find("span[aria-label]").eq(1).attr("aria-label");
    let parse_price = (el) => {
      let price = $(el).find(".a-offscreen").eq(0).text();
      return parseFloat(price.replace(/^\D+/, "").replace(/,/g, ""));
    };
    let feature_section_el = $(el).find(".a-section").eq(-1);
    let features = $(feature_section_el)
      .find(".a-row")
      .toArray()
      .map((el) => $(el).text().replace("\n", "").trim());
    return {
      search: input.search,
      title: name_el.text().replace("\n", "").trim(),
      url: new URL(
        $el
          .find('[data-component-type="s-product-image"]')
          .find("a")
          .attr("href"),
        location.href
      ),
      sponsored:
        $el
          .find(".s-label-popover .s-label-popover-default")
          .eq(0)
          .text()
          .trim()
          .toLowerCase() == "sponsored",
      rating:
        rating_el.find("span[aria-label]").eq(0).attr("aria-label") || null,
      reviews: reviews ? +reviews.replace(/\D/, "") : null,
      price: parse_price(price_el),
      previous_price: parse_price(previous_price_el),
      features,
      image: image_el.attr("src"),
      imageset: image_el.attr("srcset"),
    };
  });

return { products };
