const CLASSES = {
    DEFENSE: "defense",
    PROSECUTOR: "prosecutor",
    ASSISTANT: "assistant",
    DETECTIVE: "detective",
    WITNESS: "witness",
    CULPRIT: "culprit",
    VICTIM: "victim",
    DEFENDANT: "defendant",
};

export const COLLECTIONS = {
    AAT: "AAT",
    AJT: "AJT",
    AAI: "AAI",
    TGAA: "TGAA"
};

export const GAMES = {
    AA1: "AA1",
    AA2: "AA2",
    AA3: "AA3",
    AA4: "AA4",
    AA5: "AA5",
    AA6: "AA6",
    AAI1: "AAI1",
    AAI2: "AAI2",
    TGAA1: "TGAA1",
    TGAA2: "TGAA2"
};

export const allCharacters = [
    //AAT 1-1
    { name: "Phoenix Wright", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2, GAMES.AA3], className: [CLASSES.DEFENSE, CLASSES.DEFENDANT] },
    { name: "Mia Fey", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2, GAMES.AA3], className: [CLASSES.DEFENSE, CLASSES.ASSISTANT, CLASSES.VICTIM] },
    { name: "Larry Butz", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.DEFENDANT] },
    { name: "Winston Payne", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2], className: [CLASSES.PROSECUTOR] },
    { name: "Cindy Stone", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM] },
    { name: "Frank Sahwit", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },

    //AAT 1-2
    { name: "Maya Fey", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2, GAMES.AA3], className: [CLASSES.ASSISTANT, CLASSES.DEFENDANT, CLASSES.WITNESS] },
    { name: "Miles Edgeworth", collection: [COLLECTIONS.AAT, COLLECTIONS.AAI], game: [GAMES.AA1, GAMES.AA2, GAMES.AA3, GAMES.AAI1, GAMES.AAI2], className: [CLASSES.PROSECUTOR, CLASSES.DEFENDANT, CLASSES.DEFENSE] },
    { name: "Dick Gumshoe", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2, GAMES.AA3, GAMES.AAI1, GAMES.AAI2], className: [CLASSES.DETECTIVE, CLASSES.WITNESS] },
    { name: "April May", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Marvin Grossberg", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.DEFENSE] },
    { name: "Bellboy", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Redd White", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    
    //AAT 1-3
    { name: "Will Powers", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2], className: [CLASSES.DEFENDANT] },
    { name: "Wendy Oldbag", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Jack Hammer", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM] },
    { name: "Penny Nichols", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [] },
    { name: "Sal Manella", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Cody Hackins", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Dee Vasquez", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },

    //AAT 1-4
    { name: "Lotta Hart", collection: [COLLECTIONS.AAT], game: [GAMES.AA1, GAMES.AA2], className: [CLASSES.WITNESS] },
    // Santa Larry??
    { name: "Robert Hammond", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM, CLASSES.DEFENSE] },
    { name: "Gregory Edgeworth", collection: [COLLECTIONS.AAT, COLLECTIONS.AAI], game: [GAMES.AA1, GAMES.AAI2], className: [CLASSES.VICTIM, CLASSES.DEFENSE] },
    { name: "Manfred von Karma", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.PROSECUTOR, CLASSES.CULPRIT] },
    { name: "Yanni Yogi", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    { name: "Polly", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    
    //AAT 1-5
    { name: "Ema Skye", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.ASSISTANT] },
    { name: "Lana Skye", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.DEFENDANT, CLASSES.PROSECUTOR, CLASSES.WITNESS] },
    { name: "Angel Starr", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Jake Marshall", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] }, //COMPLICE
    { name: "Bruce Goodman", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM, CLASSES.DETECTIVE] },
    { name: "Damon Gant", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    { name: "Mike Meekins", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.WITNESS] },
    { name: "Joe Darke", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM, CLASSES.CULPRIT] },
    { name: "Neil Marshall", collection: [COLLECTIONS.AAT], game: [GAMES.AA1], className: [CLASSES.VICTIM, CLASSES.PROSECUTOR] },

    //AAT 2-1
    { name: "Maggey Byrde", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.DEFENDANT, CLASSES.ASSISTANT] },
    { name: "Dustin Prince", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },
    { name: "Richard Wellington", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.CULPRIT, CLASSES.WITNESS] },

    //AAT 2-2
    { name: "Turner Grey", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },
    { name: "Pearl Fey", collection: [COLLECTIONS.AAT], game: [GAMES.AA2, GAMES.AA3], className: [CLASSES.ASSISTANT] },
    { name: "Morgan Fey", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.CULPRIT, CLASSES.WITNESS] },
    { name: "Ini Miney", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },
    { name: "Mimi Miney", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    { name: "Franziska von Karma", collection: [COLLECTIONS.AAT], game: [GAMES.AA2, GAMES.AA3, GAMES.AAI1, GAMES.AAI2], className: [CLASSES.PROSECUTOR] }, //Retocar imagen Franziska
    //AMI FEY????
    { name: "Director Hotti", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [] }, //Hickfield???

    //AAT 2-3
    { name: "Max Galactica", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.DEFENDANT] },
    { name: "Regina Berry", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [] },
    { name: "Russell Berry", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },
    { name: "Benjamin Woodman", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS] },
    { name: "Trilo Quist", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS] },
    { name: "Moe", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS] },
    { name: "Acro", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    { name: "Bat", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },

    //AAT 2-4
    { name: "Wendy Oldbag (2)", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS] },
    { name: "Juan Corrida", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] }, //culpable...? //imagen colgado
    { name: "Matt Engarde", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DEFENDANT] },
    //Matt Engarde True self...?
    { name: "Adrian Andrews", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.WITNESS] },
    // black skin...?
    { name: "Celeste Inpax", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.VICTIM] },
    { name: "Shelly de Killer", collection: [COLLECTIONS.AAT], game: [GAMES.AA2], className: [CLASSES.CULPRIT] }, //culpable...?
    //shelly de killer bellboy, butler, walkie talkie?

    //AAT 3-1
    { name: "Marvin Grossberg (T&T)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.ASSISTANT, CLASSES.DEFENSE] },
    { name: "Phoenix Wright (College)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DEFENDANT, CLASSES.WITNESS] },
    { name: "Doug Swallow", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.VICTIM] },
    { name: "Dahlia Hawthorne", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS, CLASSES.CULPRIT] },
    { name: "Winston Payne (T&T)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.PROSECUTOR] },

    //AAT 3-2
    //adrian andriews? not witness
    { name: "Mask☆DeMasque", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] }, //culprit?
    { name: "Luke Atmey", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DETECTIVE] },
    { name: "Ron DeLite", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS, CLASSES.DEFENDANT] },
    { name: "Desirée DeLite", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] },
    { name: "Larry Butz (Security Guard)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] },
    { name: "Godot", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.PROSECUTOR, CLASSES.CULPRIT] },
    { name: "Kane Bullard", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.VICTIM] },

    //AAT 3-3
    { name: "Maggey Byrde (Waitress)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DEFENDANT] },
    { name: "Jean Armstrong", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS] },
    { name: "Glen Elg", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.VICTIM] },
    { name: "Victor Kudo", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS] },
    { name: "Lisa Basil", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] },
    { name: "Viola Cadaverini", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] },
    { name: "Furio Tigre", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS, CLASSES.CULPRIT] }, //defense?
    { name: "Bruto Cadaverini", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [] },

    //AAT 3-4
    { name: "Terry Fawles", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DEFENDANT, CLASSES.WITNESS, CLASSES.VICTIM] },
    { name: "Valerie Hawthorne", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.VICTIM] },
    { name: "Diego Armando", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DEFENSE, CLASSES.ASSISTANT] },
    { name: "Miles Edgeworth (Rookie)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.PROSECUTOR] },
    { name: "Dick Gumshoe (Young)", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DETECTIVE] },

    //AAT 3-5
    { name: "Bikini", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.WITNESS] },
    { name: "Misty Fey", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.VICTIM] },
    { name: "Iris", collection: [COLLECTIONS.AAT], game: [GAMES.AA3], className: [CLASSES.DEFENDANT] }, //complice
    { name: "Larry Butz (Laurice Deauxnim)", collection: [COLLECTIONS.AAT, COLLECTIONS.AAI], game: [GAMES.AA3], className: [CLASSES.WITNESS] },


    //AJT 4-1
    { name: "Phoenix Wright (Hobo)", collection: [COLLECTIONS.AJT], game: [GAMES.AA4], className: [CLASSES.ASSISTANT, CLASSES.DEFENDANT] },

    //AJT 4-2

    //AJT 4-3

    //AJT 4-4

    //AJT 5-1
    { name: "Phoenix Wright (Age 35)", collection: [COLLECTIONS.AJT], game: [GAMES.AA5, GAMES.AA6], className: [CLASSES.DEFENSE] },

    //AJT 5-2

    //AJT 5-3

    //AJT 5-4

    //AJT 5-5

    //AJT 5-Special

    //AJT 6-1

    //AJT 6-2

    //AJT 6-3

    //AJT 6-4

    //AJT 6-5

    //AJT 6-Special
    { name: "Larry Butz (Age 34)", collection: [COLLECTIONS.AJT], game: [GAMES.AA6], className: [CLASSES.WITNESS] },



    //AAI 1-1

    //AAI 1-2

    //AAI 1-3

    //AAI 1-4

    //AAI 1-5
    { name: "Larry Butz (Steel Samurai)", collection: [COLLECTIONS.AAI], game: [GAMES.AAI1], className: [CLASSES.WITNESS] },

    //AAI 2-1

    //AAI 2-2

    //AAI 2-3

    //AAI 2-4

    //AAI 2-5



    //TGAA 1-1
    { name: "Ryunosuke Naruhodo", collection: [COLLECTIONS.TGAA], game: [GAMES.TGAA1, GAMES.TGAA2], className: [CLASSES.DEFENSE, CLASSES.DEFENDANT] },
    
    //TGAA 1-2

    //TGAA 1-3

    //TGAA 1-4

    //TGAA 1-5

    //TGAA 2-1
    { name: "Ryutaro Naruhodo", collection: [COLLECTIONS.TGAA], game: [GAMES.TGAA2], className: [CLASSES.DEFENSE] },

    //TGAA 2-2

    //TGAA 2-3

    //TGAA 2-4

    //TGAA 2-5


    
];

export const allGames = [ 
    { name: "AA1", collection: [COLLECTIONS.AAT], game: [], className: [] },
    { name: "AA2", collection: [COLLECTIONS.AAT], game: [], className: [] },
    { name: "AA3", collection: [COLLECTIONS.AAT], game: [], className: [] },
    { name: "AA4", collection: [COLLECTIONS.AJT], game: [], className: [] },
    { name: "AA5", collection: [COLLECTIONS.AJT], game: [], className: [] },
    { name: "AA6", collection: [COLLECTIONS.AJT], game: [], className: [] },
    { name: "AAI1", collection: [COLLECTIONS.AAI], game: [], className: [] },
    { name: "AAI2", collection: [COLLECTIONS.AAI], game: [], className: [] },
    { name: "TGAA1", collection: [COLLECTIONS.TGAA], game: [], className: [] },
    { name: "TGAA2", collection: [COLLECTIONS.TGAA], game: [], className: [] },
];