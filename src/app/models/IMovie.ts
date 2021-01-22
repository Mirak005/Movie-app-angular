export interface IMovie {
  _id: string;
  title: string;
  rate: number;
  date: string | number;
  imgUrl: string;
  description: string;
  category: string;
}

export const Movies: IMovie[] = [
  {
    _id: '5fedeef47c0ffe00176db1ca',
    title: "Devil's Mile",
    rate: 4,
    date: '2014',
    imgUrl:
      'https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg',
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
    category: 'Action | Crime',
  },
  {
    _id: '5fedefe47c0ffe00176db1cb',
    title: 'Once Upon A Time In The west',
    rate: 5,
    date: '1968',
    imgUrl:
      'https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg',
    description:
      'A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.',
    category: 'Western',
  },
];
