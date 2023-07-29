export interface ComicBook {
  id: number;
  title: string;
  issueNumber: number;
  description: string;
  thumbnail: string;
}

export const comicBooks: ComicBook[] = [
  {
    id: 1,
    title: 'Essential Amazing Spider-Man',
    issueNumber: 1,
    description:
      "While attending a demonstration on radiation, high school student Peter Parker was bitten by a spider that had been exposed to radioactive rays. Learning he had gained great arachnid-like abilities, the timid teenager donned a colorful costume of his own design - seeking fame and fortune as the Amazing Spider-Man! But his Uncle Ben's death - tragedy he could have prevented - taught Peter that with great power there must also come great responsibility... and on that day a legend was born!",
    thumbnail:
      'https://m.media-amazon.com/images/I/51yiPRq9TML._SX327_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    title: 'Batman: Year One Deluxe',
    issueNumber: 1,
    description:
      'Batman: Year One stands next to Batman: The Dark Knight Returns on the mantle of greatest Batman graphic novels of all time. Timeless in its appeal, Frank Miller and David Mazzucchelli&rsquo;s masterpiece would stand apart from the crowded comics field even today.',
    thumbnail:
      'https://m.media-amazon.com/images/P/1401207529.01._SCLZZZZZZZ_SX500_.jpg',
  },
];
