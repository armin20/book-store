import { combineReducers } from 'redux'

let books = [
  {
    name: "The Great Gatsby",
    price: 12.99,
    description: "A classic novel by F. Scott Fitzgerald that explores themes of wealth, decadence, and the American Dream in the 1920s. It follows the enigmatic millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
    category: "Fiction"
  },
  {
    name: "To Kill a Mockingbird",
    price: 10.99,
    description: "Harper Lee's timeless novel set in the racially charged American South during the 1930s. It tells the story of Scout Finch, her brother Jem, and their father Atticus, who defends an innocent black man accused of rape.",
    category: "Fiction"
  },
  {
    name: "The Hobbit",
    price: 14.99,
    description: "J.R.R. Tolkien's epic fantasy adventure that introduces readers to the world of Middle-earth. Follow Bilbo Baggins as he embarks on a quest to reclaim a dragon's treasure with a group of dwarves and the wizard Gandalf.",
    category: "Fantasy"
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    price: 15.99,
    description: "The first book in J.K. Rowling's beloved series. Join young Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
    category: "Fantasy"
  },
  {
    name: "1984",
    price: 11.99,
    description: "George Orwell's dystopian masterpiece set in a totalitarian society where the government controls every aspect of citizens' lives. It follows Winston Smith's rebellion against the oppressive regime.",
    category: "Science Fiction"
  },
  {
    name: "Pride and Prejudice",
    price: 9.99,
    description: "Jane Austen's classic novel of manners and love in early 19th-century England. The story revolves around the headstrong Elizabeth Bennet and her complex relationship with the enigmatic Mr. Darcy.",
    category: "Fiction"
  },
  {
    name: "The Catcher in the Rye",
    price: 13.99,
    description: "J.D. Salinger's iconic novel narrated by the disenchanted teenager Holden Caulfield. It explores themes of alienation and teenage angst in post-World War II America.",
    category: "Fiction"
  },
  {
    name: "The Lord of the Rings",
    price: 29.99,
    description: "J.R.R. Tolkien's epic fantasy trilogy that continues the story of 'The Hobbit.' Join Frodo Baggins and the Fellowship of the Ring on their quest to destroy the One Ring and save Middle-earth.",
    category: "Fantasy"
  },
  {
    name: "Brave New World",
    price: 12.99,
    description: "Aldous Huxley's dystopian novel set in a futuristic society where citizens are controlled through drugs, technology, and genetic engineering. It follows the journey of Bernard Marx in this seemingly perfect world.",
    category: "Science Fiction"
  },
  {
    name: "The Hunger Games",
    price: 14.99,
    description: "Suzanne Collins' gripping dystopian series begins with this book. Katniss Everdeen volunteers as a tribute in the brutal Hunger Games, where she must fight for her life against other teenagers.",
    category: "Science Fiction"
  },
  {
    name: "Moby-Dick",
    price: 16.99,
    description: "Herman Melville's epic tale of Captain Ahab's obsessive quest for the white whale, Moby-Dick. This novel delves into themes of revenge, obsession, and the power of nature.",
    category: "Fiction"
  },
  {
    name: "The Odyssey",
    price: 11.99,
    description: "Homer's ancient Greek epic tells the adventurous journey of Odysseus as he tries to return home after the Trojan War. He faces gods, monsters, and challenges on his way back to Ithaca.",
    category: "Classics"
  },
  {
    name: "The Shining",
    price: 13.99,
    description: "Stephen King's chilling novel about the Torrance family who becomes the winter caretakers of the haunted Overlook Hotel. As the hotel's supernatural forces take hold, madness ensues.",
    category: "Horror"
  },
  {
    name: "The Alchemist",
    price: 10.99,
    description: "Paulo Coelho's philosophical novel follows Santiago, a shepherd boy, on his journey to find a hidden treasure in the Egyptian desert. Along the way, he discovers the meaning of life and destiny.",
    category: "Fiction"
  },
  {
    name: "The Road",
    price: 11.99,
    description: "Cormac McCarthy's post-apocalyptic novel tells the story of a father and son's harrowing journey through a desolate and dangerous world. Their bond is tested as they struggle to survive.",
    category: "Fiction"
  },
  {
    name: "The Girl with the Dragon Tattoo",
    price: 12.99,
    description: "Stieg Larsson's thriller follows investigative journalist Mikael Blomkvist and computer hacker Lisbeth Salander as they uncover a dark family secret involving murder and corruption.",
    category: "Mystery"
  },
  {
    name: "The Road Less Traveled",
    price: 14.99,
    description: "M. Scott Peck's bestselling self-help book explores the path to spiritual growth and personal fulfillment. It offers insights on love, discipline, and the journey to a more meaningful life.",
    category: "Self-Help"
  },
  {
    name: "The Da Vinci Code",
    price: 15.99,
    description: "Dan Brown's gripping thriller follows Robert Langdon as he unravels a complex web of clues and secrets hidden within famous artworks. The novel delves into religious mysteries and conspiracies.",
    category: "Mystery"
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    price: 9.99,
    description: "Douglas Adams' comedic science fiction series begins with this book. Join Arthur Dent and Ford Prefect as they embark on a hilarious intergalactic adventure with the help of the titular guide.",
    category: "Science Fiction"
  }
];


const booksFunctions = (state = books, action) => {
    switch(action.type) {
        case "ADD_BOOK": 
        return [...state, { name: action.payload.name, 
            price: action.payload.price,  
            category: action.payload.category, 
            description: action.payload.description 
        }];
        case "UPDATE_BOOK": 
          for(let i = 0; i < state.length; i++) {
            if(i === action.payload.id) {
              state[i].name = action.payload.name;
              state[i].category = action.payload.category;
              state[i].price = action.payload.price;
              state[i].description = action.payload.description
            }
          }
          return state;
        case "DELETE_BOOK":
          const updatedItems = state.filter((item) => item.name !== action.payload.name);
          return updatedItems 
        default: 
            return state;
    }
};



const rootReducer = combineReducers({
    data: booksFunctions
});

export default rootReducer;