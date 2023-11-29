const reviews = [
  {
    id: 1,
    title: "June",
    parent: "Parents",
    image: process.env.PUBLIC_URL + `/images/june.png`,
    altText: "Well-behaved sitting german short-haired pointer trained in obedience",
    description:
      "We had a wonderful experience with Marguerite as our dog trainer. She helped us with our rambunctious, high energy Brittany puppy, and then when our puppy got older helped us refine her training to get her off leash and safely enjoy her freedom. Highly recommended!",
    tools: ["Off-Leash Heel", "Calming", "State of Mind"],
  },
  {
    id: 2,
    title: "Bindy & Calvin",
    parent: "Mom",
    image: process.env.PUBLIC_URL + `/images/bindyandcalvin.png`,
    altText: "Two well-behaved cocker spaniels sitting",
    description:
      "As a Dog Mom who sent her Littles away to Board and Train, I was very leery. Turns out, it was the best thing I ever did, and I would do it again... Marguerite (“M, The Gem”) is a true miracle worker... I highly recommend Marguerite to anyone who wants a better relationship with their pet. Her depth of knowledge and extensive experience shines through with every dog she trains. The only thing you will regret is not doing it sooner, and you will be amazed by the compliments you and your pet receive.",
    tools: ["Off-Leash Heel", "Behavior Modification", "Confidence-Building", "Leash Pulling"],
  },
  {
    id: 3,
    title: "Chico",
    parent: "Mom",
    image: process.env.PUBLIC_URL + `/images/chico.png`,
    altText: "Well-behaved relaxed sleeping chihuaha",
    description:
      "Marguerite was extremely patient, and she knew exactly what she was doing. Her experience and expert guidance was the perfect combination for me and Chico. She trained us both! I highly recommend her as does Chico.",
    tools: ["Behavior Modification", "State of Mind", "Calming", "Place"],
  },
];

export default reviews;
