export const COLOR_BY_TYPE: [string,string][] = [ //agregado para asignar valores a cada tipo
    ["steel", "#D3D3D3"],
    ["water", "#67d2f1"],
    ["bug", "#d8e030"],
    ["dragon", "#b8a0f8"],
    ["electric", "#f8f878"],
    ["ghost", "#a890f0"],
    ["fire", "#f8d030"],
    ["fairy", "#F4BDC9"],
    ["ice", "#d0f8e8"],
    ["fighting", "#f08030"],
    ["normal", "#d8d8c0"],
    ["grass", "#c0f860"],
    ["psychic", "#f8c0b0"],
    ["rock", "#e0c068"],
    ["dark", "#a8a878"],
    ["ground", "#F8F878"],
    ["poison", "#6F00C4"],
    ["flying", "#d880b8"]
]

export interface TypeData{
    type: string;
    id: number;
    color: string;
    img: string;
}


export const COLOR_BY_TYPE_WITH_IMG: TypeData[] = [
    {
        type: "steel",
        id: 9,
        color: "#D3D3D3",
        img: "https://static.wikia.nocookie.net/pokemon/images/3/32/Type_Steel_HOME.png"
    },
    {
        type: "water",
        id: 11,
        color: "#67d2f1",
        img: "https://static.wikia.nocookie.net/pokemon/images/f/f7/Type_Water_HOME.png"
    },
    {
        type: "bug",
        id: 7,
        color: "#d8e030",
        img: "https://static.wikia.nocookie.net/pokemon/images/a/a2/Type_Bug_HOME.png"
    },
    {
        type: "dragon",
        id: 16,
        color: "#b8a0f8",
        img: "https://static.wikia.nocookie.net/pokemon/images/1/1d/Type_Dragon_HOME.png"
    },
    {
        type: "electric",
        id: 13,
        color: "#f8f878",
        img: "https://static.wikia.nocookie.net/pokemon/images/1/16/Type_Electric_HOME.png"
    },
    {
        type: "ghost",
        id: 8,
        color: "#a890f0",
        img: "https://static.wikia.nocookie.net/pokemon/images/e/ef/Type_Ghost_HOME.png"
    },
    {
        type: "fire",
        id: 10,
        color: "#f8d030",
        img: "https://static.wikia.nocookie.net/pokemon/images/4/47/Type_Fire_HOME.png"
    },
    {
        type: "fairy",
        id: 18,
        color: "#F4BDC9",
        img: "https://static.wikia.nocookie.net/pokemon/images/e/e4/Type_Fairy_HOME.png"
    },
    {
        type: "ice",
        id: 15,
        color: "#d0f8e8",
        img: "https://static.wikia.nocookie.net/pokemon/images/e/e5/Type_Ice_HOME.png"
    },
    {
        type: "fighting",
        id: 2,
        color: "#f08030",
        img: "https://static.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting_HOME.png"
    },
    {
        type: "normal",
        id: 1,
        color: "#d8d8c0",
        img: "https://static.wikia.nocookie.net/pokemon/images/f/f9/Type_Normal_HOME.png"
    },
    {
        type: "grass",
        id: 12,
        color: "#c0f860",
        img: "https://static.wikia.nocookie.net/pokemon/images/b/b4/Type_Grass_HOME.png"
    },
    {
        type: "psychic",
        id: 14,
        color: "#f8c0b0",
        img: "https://static.wikia.nocookie.net/pokemon/images/e/ed/Type_Psychic_HOME.png"
    },
    {
        type: "rock",
        id: 6,
        color: "#e0c068",
        img: "https://static.wikia.nocookie.net/pokemon/images/f/fc/Type_Rock_HOME.png"
    },
    {
        type: "dark",
        id: 17,
        color: "#a8a878",
        img: "https://static.wikia.nocookie.net/pokemon/images/8/8d/Type_Dark_HOME.png"
    },
    {
        type: "ground",
        id: 5,
        color: "#F8F878",
        img: "https://static.wikia.nocookie.net/pokemon/images/1/10/Type_Ground_HOME.png"
    },
    {
        type: "poison",
        id: 4,
        color: "#6F00C4",
        img: "https://static.wikia.nocookie.net/pokemon/images/a/a9/Type_Poison_HOME.png"
    },
    {
        type: "flying",
        id: 3,
        color: "#d880b8",
        img: "https://static.wikia.nocookie.net/pokemon/images/1/14/Type_Flying_HOME.png"
    }
];
/*export const COLOR_BY_TYPE_WITH_IMG: TypeData[] = [ //agregado para asignar valores a cada tipo con una imagen especifica
    ["steel", "#D3D3D3","https://static.wikia.nocookie.net/pokemon/images/3/32/Type_Steel_HOME.png/revision/latest?cb=20220611142526"],
    ["water", "#67d2f1","https://static.wikia.nocookie.net/pokemon/images/f/f7/Type_Water_HOME.png/revision/latest?cb=20220611142546"],
    ["bug", "#d8e030","https://static.wikia.nocookie.net/pokemon/images/a/a2/Type_Bug_HOME.png/revision/latest?cb=20220611134112"],
    ["dragon", "#b8a0f8","https://static.wikia.nocookie.net/pokemon/images/1/1d/Type_Dragon_HOME.png/revision/latest?cb=20220611134549"],
    ["electric", "#f8f878","https://static.wikia.nocookie.net/pokemon/images/1/16/Type_Electric_HOME.png/revision/latest?cb=20220611135345"],
    ["ghost", "#a890f0","https://static.wikia.nocookie.net/pokemon/images/e/ef/Type_Ghost_HOME.png/revision/latest?cb=20220611140549"],
    ["fire", "#f8d030","https://static.wikia.nocookie.net/pokemon/images/4/47/Type_Fire_HOME.png/revision/latest?cb=20220611140500"],
    ["fairy", "#F4BDC9","https://static.wikia.nocookie.net/pokemon/images/e/e4/Type_Fairy_HOME.png/revision/latest?cb=20220611135413"],
    ["ice", "#d0f8e8","https://static.wikia.nocookie.net/pokemon/images/e/e5/Type_Ice_HOME.png/revision/latest?cb=20220611141858"],
    ["fighting", "#f08030","https://static.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting_HOME.png/revision/latest?cb=20220611135434"],
    ["normal", "#d8d8c0","https://static.wikia.nocookie.net/pokemon/images/f/f9/Type_Normal_HOME.png/revision/latest?cb=20220611141920"],
    ["grass", "#c0f860","https://static.wikia.nocookie.net/pokemon/images/b/b4/Type_Grass_HOME.png/revision/latest?cb=20220611140606"],
    ["psychic", "#f8c0b0","https://static.wikia.nocookie.net/pokemon/images/e/ed/Type_Psychic_HOME.png/revision/latest?cb=20220611142444"],
    ["rock", "#e0c068","https://static.wikia.nocookie.net/pokemon/images/f/fc/Type_Rock_HOME.png/revision/latest?cb=20220611142507"],
    ["dark", "#a8a878","https://static.wikia.nocookie.net/pokemon/images/8/8d/Type_Dark_HOME.png/revision/latest?cb=20220611134517"],
    ["ground", "#F8F878","https://static.wikia.nocookie.net/pokemon/images/1/10/Type_Ground_HOME.png/revision/latest?cb=20220611141828"],
    ["poison", "#d880b8","https://static.wikia.nocookie.net/pokemon/images/a/a9/Type_Poison_HOME.png/revision/latest?cb=20220611141940"],
    ["flying", "#d880b8","https://static.wikia.nocookie.net/pokemon/images/1/14/Type_Flying_HOME.png/revision/latest?cb=20220611140521"]
]*/