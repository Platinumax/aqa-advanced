// Файл EBook.js - похідний клас для електронної книги (ES модулі)
import Book from './Book.js'

class EBook extends Book {
	#fileFormat
	constructor(title, author, year, fileFormat) {
		super(title, author, year)

		this.fileFormat = fileFormat
	}

	get fileFormat() {
		return this.#fileFormat
	}

	set fileFormat(value) {
		const validFormats = ['PDF', 'EPUB', 'MOBI', 'FB2', 'TXT']

		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Формат файлу повинен бути непорожнім рядком')
		}

		const format = value.toUpperCase()
		if (!validFormats.includes(format)) {
			throw new Error(
				`Непідтримуваний формат файлу. Підтримувані формати: ${validFormats.join(
					', '
				)}`
			)
		}

		this.#fileFormat = format
	}

	printInfo() {
		super.printInfo()
		console.log(`Формат файлу: ${this.fileFormat}`)
	}

	static convertFromBook(book, fileFormat) {
		if (!(book instanceof Book)) {
			throw new Error('Перший аргумент повинен бути екземпляром класу Book')
		}

		if (typeof fileFormat !== 'string' || fileFormat.trim() === '') {
			throw new Error('Формат файлу повинен бути непорожнім рядком')
		}

		return new EBook(book.title, book.author, book.year, fileFormat)
	}
}


export default EBook
