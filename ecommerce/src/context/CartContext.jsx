import { createContext } from 'react';

const CartContext = createContext(
    [
        {
            id: 0,
            title: 'Javascript',
            profesor: 'Lucas Riera',
            precio: '5000',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xi9SQ54TXdoQiX0ZWWz0AqQV4beciDKLEA&usqp=CAU',
            descripcion: 'Este es un curso de javascript muy bueno',
            url: 'Javascript'
        },
        {
            id: 1,
            title: 'ReactJS',
            profesor: 'Antonio Sánchez',
            precio: '6000',
            imagen: 'https://visual-engin.com/wp-content/uploads/sites/3/2016/06/reactjs-introduccion-workshop-visual-enginerring.png',
            descripcion: 'Este es un curso de react excelente',
            url: 'ReactJS'
        },
        {
            id: 2,
            title: 'PHP',
            profesor: 'Cristina Aguilera',
            precio: '15000',
            imagen: 'http://definicion.de/wp-content/uploads/2010/07/Php.jpg',
            descripcion: 'Este es un curso de php recien salido del horno',
            url: 'PHP'
        },
        {
            id: 3,
            title: 'C++',
            profesor: 'Tom Jones',
            precio: '5500',
            imagen: 'https://i.blogs.es/4a8c41/cpp-logo-dribbble/450_1000.png',
            descripcion: 'Este es un curso de C++ como el que estudiabas en el secundario',
            url: 'C++'
        },
        {
            id: 4,
            title: 'C#',
            profesor: 'Miguel Aquino',
            precio: '9000',
            imagen: 'https://aspnetcoremaster.com/img/csharp.webp',
            descripcion: 'Este es un curso de C# muy parecido a C++',
            url: 'C#'
        },
        {
            id: 5,
            title: 'R',
            profesor: 'Miguel Noyo',
            precio: '10000',
            imagen: 'https://puntodis.com/wp-content/uploads/2015/12/r1.jpg',
            descripcion: 'Este es un curso de R para poder hacer programación estadística',
            url: 'Programacion_en_R'
        }
    ]
);

export default CartContext;
