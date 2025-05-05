// Файл Book.js - базовий клас для книги (ES модулі)

class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title; 
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги повинна бути непорожнім рядком');
    }
    this.#title = value;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор книги повинен бути непорожнім рядком');
    }
    this.#author = value;
  }

  set year(value) {
    const yearNum = Number(value);
    if (isNaN(yearNum) || yearNum < 0 || yearNum > new Date().getFullYear()) {
      throw new Error(`Рік видання повинен бути числом від 0 до ${new Date().getFullYear()}`);
    }
    this.#year = yearNum;
  }

  printInfo() {
    console.log(`Книга: "${this.title}"\nАвтор: ${this.author}\nРік видання: ${this.year}`);
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Передайте непорожній масив книг');
    }

    return books.reduce((oldest, currentBook) => {
      if (!(currentBook instanceof Book)) {
        throw new Error('Усі елементи масиву повинні бути екземплярами класу Book або його підкласів');
      }
      
      return currentBook.year < oldest.year ? currentBook : oldest;
    }, books[0]);
  }
}

export default Book;