import Book from './Book.js'
import EBook from './EBook.js'

try {
	const book1 = new Book('Кобзар', 'Тарас Шевченко', 1840)
	const book2 = new Book('Тигролови', 'Іван Багряний', 1944)
	const book3 = new Book('Заповіт', 'Василь Симоненко', 1965)

	console.log('Інформація про першу книгу:')
	book1.printInfo()
	console.log('\nІнформація про другу книгу:')
	book2.printInfo()
	console.log('\nІнформація про третю книгу:')
	book3.printInfo()


	const ebook1 = new EBook('Лісова пісня', 'Леся Українка', 1911, 'PDF')
	console.log('Інформація про електронну книгу:')
	ebook1.printInfo()

	console.log(`Назва книги до зміни: ${book1.title}`)
	book1.title = 'Кобзар (оновлене видання)'
	console.log(`Назва книги після зміни: ${book1.title}`)

	console.log(`\nФормат електронної книги до зміни: ${ebook1.fileFormat}`)
	ebook1.fileFormat = 'EPUB'
	console.log(`Формат електронної книги після зміни: ${ebook1.fileFormat}`)


	try {
		ebook1.fileFormat = 'DOC' 
	} catch (error) {
		console.log(`\nПомилка валідації: ${error.message}`)
	}


	const bookCollection = [
		book1, // 1840
		book2, // 1944
		book3, // 1965
		ebook1, // 1911
		new Book('Енеїда', 'Іван Котляревський', 1798),
	]

	const oldestBook = Book.findOldestBook(bookCollection)
	console.log('Найдавніша книга в колекції:')
	oldestBook.printInfo()


	const convertedEBook = EBook.convertFromBook(book2, 'MOBI')
	console.log('Інформація про конвертовану електронну книгу:')
	convertedEBook.printInfo()
} catch (error) {
	console.error(`Сталася помилка: ${error.message}`)
}