class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = Array.isArray(items) ? items : Array.isArray(items.split('')) ?  items.split('') : [];
    this.pageSize = parseInt(pageSize, 10);
    this.totalPages =
      Math.trunc(items.length / pageSize) < 1
        ? 1
        : items.length > pageSize
        ? Math.trunc(items.length / pageSize) + 1
        : Math.trunc(items.length / pageSize);
    this.currentPage = 1;
  }

  prevPage() {
    if (this.currentPage != 1) {
      this.currentPage--;
      return this;
    } else { return this; }
  }

  nextPage() {
    if (this.currentPage != this.totalPages) {
      this.currentPage++;
      return this;
    } else { return this; }
  }

  firstPage() {
    this.currentPage = 1;
    return this;
  }

  lastPage() {
    this.currentPage = this.totalPages;
    return this;
  }

  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      return this;
    } else if (page > this.totalPages) {
        this.currentPage = this.totalPages;
        return this;
    } else if (page < 1) {
        this.currentPage = 1;
        return this;
    } else { return this; }
  }

  getVisibleItems() {
    const inicio = this.pageSize * this.currentPage - this.pageSize;
    const final = inicio + this.pageSize;

    return this.items.slice(inicio, final);
  }
}

/* const pagination = new Pagination(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 3);

console.log(pagination.getVisibleItems())
pagination.nextPage().nextPage()
console.log(pagination.getVisibleItems()) */