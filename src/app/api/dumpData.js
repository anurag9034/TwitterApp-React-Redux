const users = {
  101: {
    id: 101,
    username: 'anuragk',
    email: 'abc@example.com',
    phone: '9876543210',
    name: 'Anurag K',
    tweets: 1,
    followers: 1500,
    following: 5,
    location: 'Vancouver',
    bio: 'Front-End Guy from Canada',
    profile_image: 'https://avatars.githubusercontent.com/u/97899907?v=4',
    cover_url:
      'https://images.unsplash.com/photo-1472190649224-495422e1b602?auto=format&fit=crop&w=1051&q=80',
    joined_at: '01/03/2010',
    password: 'MTIzNDU2',
  },
  1: {
    id: 1,
    username: 'stevejobs',
    email: 'steves@example.com',
    phone: '3563673673',
    name: 'Steve Jobs',
    tweets: 1,
    followers: 15_000_000,
    following: 1,
    location: 'United States of America',
    bio: 'Stay foolish stay hungry',
    profile_image:
      'https://cdn.pixabay.com/photo/2018/04/17/08/52/steve-jobs-3326938_960_720.jpg',
    cover_url:
      'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=1051&q=80',
    joined_at: '13/09/2007',
    password: 'MTIzNDU2',
  },
}

const tweets = [
  {
    id: 1,
    forPost: null,
    content: 'Hello World! from Apple',
    userId: 1,
    date: '9/13/2012, 4:35:45 PM',
  },
  {
    id: 2,
    forPost: 1,
    content: 'Welcome Apple!',
    userId: 101,
    date: '9/13/2018, 6:37:45 PM',
  },
]

// post id key and user object as value
const likes = {
  1: {
    101: {
      date: '9/13/2018, 6:35:45 PM',
    },
  },
}

// from userid as key and to userid as value
const following = {
  101: {
    1: {
      date: '9/13/2018, 6:34:45 PM',
    },
  },
}

export { users, tweets, likes, following }
