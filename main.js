import { normalize, denormalize, schema } from 'normalizr'

const data = [
    {
        _id: "6146009eafb0c4590ca35da3",
        author: {
          id: 'maxi87luc@gmail.com',
          nombre: 'Maximiliano',
          apellido: 'Lucero',
          edad: '35',
          alias: 'maxi87luc',
          avatar: 'asdfasdf'
        },
        content: {
          text: 'Hola soy un mensaje',
          date: { DD: 2, MM: 2, YY: 2023, hh: 11, mm: 4 }
        }
    },
    {
      _id: "6146009eafb0c4590ca35da4",
        author: {
          id: 'berni@gmail.com',
          nombre: 'Berni',
          apellido: 'Posse',
          edad: '20',
          alias: 'maxi87luc',
          avatar: 'asdfasdf'
        },
        content: {
          text: 'Hola soy un mensaje',
          date: { DD: 2, MM: 2, YY: 2023, hh: 11, mm: 4 }
        }
    },
    {
        _id: "6146009eafb0c4590ca35d53",
        author: {
          id: 'berni@gmail.com',
          nombre: 'Berni',
          apellido: 'Posse',
          edad: '20',
          alias: 'maxi87luc',
          avatar: 'asdfasdf'
        },
        content: {
          text: 'Hola soy otro mensaje',
          date: { DD: 2, MM: 2, YY: 2023, hh: 11, mm: 4 }
        }
    },

]


const dataConId = data.map((message)=>{
  
  return {
    id: message._id,
    author: message.author,
    content: message.content,
  }
 

})

console.log(dataConId)

// Define a authors schema
const author = new schema.Entity('authors',);

// Define your message schema
const message = new schema.Entity('messages', {
  author: author,
});

const mensajeria = new schema.Entity('mensajerias', {
  mensajes: [message]
});



const normalizedData = normalize({id: "mensajes", mensajes: dataConId}, mensajeria);

console.log(JSON.stringify(normalizedData, null, 2) )


const denormalizedData = denormalize(normalizedData.result, mensajeria, normalizedData.entities);
console.log('DENORMALIZADA');
console.log(JSON.stringify(denormalizedData, null, 2))


