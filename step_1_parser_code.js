return {
  max_page:
    +$(".a-pagination .a-disabled").last().text() ||
    +$(".a-pagination .a-normal").last().text(),
};
