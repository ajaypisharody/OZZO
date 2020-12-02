import bcrypt from 'bcryptjs';
const data={

  users: [
    {
      name: 'Jay',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

	carousel:[
{
			_id:'1',
			name:'Item 1',
			category:'Electronics',
			image:'img/1.webp',

},
{
			_id:'2',
			name:'Item 2',
			category:'Electronics',
			image:'img/2.webp',

},
{
			_id:'3',
			name:'Item 3',
			category:'Electronics',
			image:'img/3.webp',

},
	],


	banner:[
{
			_id:'1',
			name:'Banner 1',
			category:'Electronics',
			image:'img/1.webp',
},
	],

	advert:[
	{
			_id:'1',
			name:'Advert 1',
			category:'Electronics',
			image:'img/furni.jpg',

	},
{
			_id:'2',
			name:'Advert 2',
			category:'Electronics',
			image:'img/2.jpg',

	},
	],
	products:[
		{
			
			name:'Product 1',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:120,
			brand:'Generic',
			rating:3.5,
			numReviews:5,
			description:'description',
			countInStock:10,
		},
		{
			
			name:'Product 2',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:110,
			brand:'Generic',
			rating:4.5,
			numReviews:10,
			description:'description',
			countInStock:10,
		},
		{
			
			name:'Product 3',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:100,
			brand:'Generic',
			rating:4,
			numReviews:40,
			description:'description',
			countInStock:10,
		},
		{
			
			name:'Product 4',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:120,
			brand:'Generic',
			rating:5,
			numReviews:100,
			description:'description',
			countInStock:10,
		},
		{
			
			name:'Product 5',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:120,
			brand:'Generic',
			rating:3,
			numReviews:10,
			description:'description',
			countInStock:0,
		},
		{
			
			name:'Product 6',
			category:'Electronics',
			image:'/img/dummy.jpg',
			price:120,
			brand:'Generic',
			rating:2.5,
			numReviews:10,
			description:'description',
			countInStock:10,
		},
	],
};

export default data;