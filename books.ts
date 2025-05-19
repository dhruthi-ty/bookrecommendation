export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  genre: string[];
  coverImage: string;
  rating: number;
  year: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    genre: ["Fiction", "Fantasy", "Self-Help"],
    coverImage: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.2,
    year: 2020
  },
  {
    id: "2",
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    genre: ["Memoir", "Biography", "Non-Fiction"],
    coverImage: "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    year: 2018
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "A lone astronaut must save the earth from disaster in this cinematic thriller from the author of The Martian.",
    genre: ["Science Fiction", "Adventure", "Space"],
    coverImage: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    year: 2021
  },
  {
    id: "4",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description: "A novel about a young woman who raised herself in the marshes of the deep South, and becomes a suspect in the murder of a man she was involved with.",
    genre: ["Fiction", "Mystery", "Coming-of-age"],
    coverImage: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    year: 2018
  },
  {
    id: "5",
    title: "Atomic Habits",
    author: "James Clear",
    description: "A proven framework for improving every day, no matter what your goals are.",
    genre: ["Self-Help", "Non-Fiction", "Psychology"],
    coverImage: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    year: 2018
  },
  {
    id: "6",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description: "A retelling of the Iliad from the perspective of Patroclus, who falls in love with Achilles.",
    genre: ["Historical Fiction", "Fantasy", "LGBT"],
    coverImage: "https://images.pexels.com/photos/7034644/pexels-photo-7034644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.4,
    year: 2011
  },
  {
    id: "7",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    description: "The lives of twin sisters who drift apart as they choose to live in two very different worlds, one black and one white.",
    genre: ["Fiction", "Historical Fiction", "Contemporary"],
    coverImage: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.3,
    year: 2020
  },
  {
    id: "8",
    title: "A Promised Land",
    author: "Barack Obama",
    description: "In the first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world.",
    genre: ["Memoir", "Politics", "Non-Fiction"],
    coverImage: "https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    year: 2020
  }
];

export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  
  books.forEach(book => {
    book.genre.forEach(genre => {
      genreSet.add(genre);
    });
  });
  
  return Array.from(genreSet).sort();
};