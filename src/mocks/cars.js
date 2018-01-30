const cars = {
  items: [
    {
      id: 1,
      car_make: "GMC",
      car_model: "Safari",
      car_year: 1996,
      car_color: "Pink",
      car_image: "http://dummyimage.com/243x224.png/5fa2dd/ffffff"
    },
    {
      id: 2,
      car_make: "Subaru",
      car_model: "Outback",
      car_year: 2002,
      car_color: "Pink",
      car_image: "http://dummyimage.com/159x186.jpg/dddddd/000000"
    },
    {
      id: 3,
      car_make: "GMC",
      car_model: "Savana 2500",
      car_year: 2003,
      car_color: "Crimson",
      car_image: "http://dummyimage.com/223x141.jpg/dddddd/000000"
    },
    {
      id: 4,
      car_make: "Toyota",
      car_model: "Celica",
      car_year: 2003,
      car_color: "Green",
      car_image: "http://dummyimage.com/206x242.bmp/5fa2dd/ffffff"
    },
    {
      id: 5,
      car_make: "Mitsubishi",
      car_model: "Galant",
      car_year: 2005,
      car_color: "Goldenrod",
      car_image: "http://dummyimage.com/229x221.png/ff4444/ffffff"
    },
    {
      id: 6,
      car_make: "Maserati",
      car_model: "Spyder",
      car_year: 2003,
      car_color: "Indigo",
      car_image: "http://dummyimage.com/240x189.jpg/dddddd/000000"
    },
    {
      id: 7,
      car_make: "Mercedes-Benz",
      car_model: "GL-Class",
      car_year: 2007,
      car_color: "Teal",
      car_image: "http://dummyimage.com/106x152.png/dddddd/000000"
    },
    {
      id: 8,
      car_make: "Mazda",
      car_model: "B-Series",
      car_year: 1988,
      car_color: "Aquamarine",
      car_image: "http://dummyimage.com/152x217.png/dddddd/000000"
    },
    {
      id: 9,
      car_make: "Ford",
      car_model: "F350",
      car_year: 1999,
      car_color: "Goldenrod",
      car_image: "http://dummyimage.com/219x246.jpg/5fa2dd/ffffff"
    },
    {
      id: 10,
      car_make: "Jaguar",
      car_model: "XJ Series",
      car_year: 2004,
      car_color: "Turquoise",
      car_image: "http://dummyimage.com/143x150.bmp/cc0000/ffffff"
    },
    {
      id: 11,
      car_make: "Chevrolet",
      car_model: "Silverado",
      car_year: 2002,
      car_color: "Fuscia",
      car_image: "http://dummyimage.com/219x180.bmp/5fa2dd/ffffff"
    },
    {
      id: 12,
      car_make: "Chevrolet",
      car_model: "Astro",
      car_year: 2005,
      car_color: "Green",
      car_image: "http://dummyimage.com/213x125.jpg/dddddd/000000"
    },
    {
      id: 13,
      car_make: "Saab",
      car_model: "900",
      car_year: 1995,
      car_color: "Red",
      car_image: "http://dummyimage.com/103x171.png/ff4444/ffffff"
    },
    {
      id: 14,
      car_make: "Ford",
      car_model: "F150",
      car_year: 1992,
      car_color: "Purple",
      car_image: "http://dummyimage.com/198x235.bmp/5fa2dd/ffffff"
    },
    {
      id: 15,
      car_make: "Toyota",
      car_model: "TundraMax",
      car_year: 2010,
      car_color: "Green",
      car_image: "http://dummyimage.com/104x196.png/5fa2dd/ffffff"
    },
    {
      id: 16,
      car_make: "Mazda",
      car_model: "RX-8",
      car_year: 2009,
      car_color: "Yellow",
      car_image: "http://dummyimage.com/224x216.jpg/dddddd/000000"
    },
    {
      id: 17,
      car_make: "Ford",
      car_model: "F150",
      car_year: 1992,
      car_color: "Maroon",
      car_image: "http://dummyimage.com/110x235.jpg/ff4444/ffffff"
    },
    {
      id: 18,
      car_make: "Dodge",
      car_model: "Dakota",
      car_year: 2002,
      car_color: "Maroon",
      car_image: "http://dummyimage.com/250x148.jpg/5fa2dd/ffffff"
    },
    {
      id: 19,
      car_make: "Eagle",
      car_model: "Vision",
      car_year: 1993,
      car_color: "Pink",
      car_image: "http://dummyimage.com/128x146.jpg/5fa2dd/ffffff"
    },
    {
      id: 20,
      car_make: "Suzuki",
      car_model: "Grand Vitara",
      car_year: 2004,
      car_color: "Maroon",
      car_image: "http://dummyimage.com/105x224.jpg/ff4444/ffffff"
    },
    {
      id: 21,
      car_make: "Porsche",
      car_model: "928",
      car_year: 1995,
      car_color: "Yellow",
      car_image: "http://dummyimage.com/172x140.bmp/5fa2dd/ffffff"
    },
    {
      id: 22,
      car_make: "Toyota",
      car_model: "Highlander",
      car_year: 2011,
      car_color: "Orange",
      car_image: "http://dummyimage.com/148x174.jpg/cc0000/ffffff"
    },
    {
      id: 23,
      car_make: "Porsche",
      car_model: "968",
      car_year: 1994,
      car_color: "Red",
      car_image: "http://dummyimage.com/248x215.jpg/dddddd/000000"
    },
    {
      id: 24,
      car_make: "Suzuki",
      car_model: "Grand Vitara",
      car_year: 2005,
      car_color: "Fuscia",
      car_image: "http://dummyimage.com/135x118.jpg/5fa2dd/ffffff"
    },
    {
      id: 25,
      car_make: "Ford",
      car_model: "LTD Crown Victoria",
      car_year: 1991,
      car_color: "Aquamarine",
      car_image: "http://dummyimage.com/105x225.jpg/dddddd/000000"
    }
  ]
};

export default cars;
