const MESSAGES = [
  {
    message: "That sounds great. I'd be happy to discuss more.",
    type: 'message',

  },
  {
    message: 'Could you send over some pictures of your dog, please?',
    type: 'message',
  },
  {
    type: 'pictureset',
    pictures: [
      {
        url: 'dog-image-1',
        alt: 'Sparky staring at the sky',
      },
      {
        url: 'dog-image-2',
        alt: 'Autumn Sparky girl',
      },
      {
        url: 'dog-image-3',
        alt: 'Sparky fetching a stick',
      },
    ],
  },
  {
    message: "Here are a few pictures. She's a happy girl!",
    type: 'message-incoming',
    classname: 'incoming',
  },
  {
    message: 'Can you make it?',
    type: 'message-incoming',
    classname: 'incoming',
  },
  {
    type: 'message',
    message: 'She looks so happy! The time we discussed works. How long shall i take her out for?',
  },
  {
    type: 'radio',
    label: '30 minutes walk',
    price: '29',
    value: '30min',
  },
  {
    type: 'radio',
    label: '1 hour walk',
    price: '49',
    value: '1h',
  },
];

export default MESSAGES;
