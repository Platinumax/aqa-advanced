const users = [
	{
		id: 1,
		name: 'Павло Дурич',
		email: 'pavlo@gmail.com',
		age: 28,
		isActive: true,
	},
	{
		id: 2,
		name: 'Олена Сидоренко',
		email: 'olena@gmail.com',
		age: 34,
		isActive: false,
	},
	{
		id: 3,
		name: 'Андрій Мельник',
		email: 'andriy@gmail.com',
		age: 22,
		isActive: true,
	},
]

for (const { id, name, email, age, isActive } of users) {
  console.log(`Користувач №${id}:`);
  console.log(`  Ім'я: ${name}`);
  console.log(`  Email: ${email}`);
  console.log(`  Вік: ${age}`);
  console.log(`  Активний: ${isActive}`);
  console.log("---");
}