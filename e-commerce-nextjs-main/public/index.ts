type Hobby = {
	id: number;
	name: string;
};

type Person = {
	id: number;
	name: string;
	hobbies?: Hobby[];
	age: number;
	address: string;
	city: string;
	phone: string;
	price?: number; // Menambahkan properti price
};

let data: Person[] = [
	{
		id: 1,
		name: 'John Doe',
		hobbies: [
			{
				id: 1,
				name: 'playing games',
			},
		],
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
		price: 150, // Menambahkan harga
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
		price: 200, // Menambahkan harga
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
		price: 300, // Menambahkan harga
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
		price: 250, // Menambahkan harga
	},
];

// TODO 1: Dapatkan semua data
const getAllData = () => data;
console.log("Semua Data:", getAllData());

// TODO 2: Dapatkan data dengan nama tertentu
const getDataByName = (name: string) => data.find((person) => person.name === name);
console.log("Data dengan nama 'John Doe':", getDataByName('John Doe'));

// TODO 3: Dapatkan data dengan alamat New York
const getDataByCity = (city: string) => data.filter((person) => person.city === city);
console.log("Data dengan kota 'New York':", getDataByCity('New York'));

// TODO 4: Dapatkan data dengan umur >= 30
const getDataByAge = (minAge: number) => data.filter((person) => person.age >= minAge);
console.log("Data dengan umur >= 30:", getDataByAge(30));

// Fungsi tambahan: Dapatkan data berdasarkan alamat
const getDataByAddress = (address: string) => data.filter((person) => person.address === address);
console.log("Data dengan alamat '123 Main St':", getDataByAddress('123 Main St'));

// Fungsi tambahan: Dapatkan data dengan harga > min_price
const getDataByPrice = (minPrice: number) => data.filter((person) => person.price !== undefined && person.price > minPrice);
console.log("Data dengan harga > 200:", getDataByPrice(200));
