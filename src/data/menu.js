const menu = {
    empanadas: {
        tradicionales: [
            "Santiagueña",
            "Mendocina",
            "Porteña",
            "Pollo",
            "Jamón y Queso",
            "Choclo",
            "Verdura",
            "Jamón y Roquefort",
        ],
        canastitas: [
            "Jamón y Palmitos",
            "Queso y Cebolla",
            "Queso, Cebolla y Panceta",
            "Cuatro Quesos",
            "Panceta y Ciruela",
            "Ananá y Jamón",
            "Jamón Crudo y Rúcula",
            "Tomates Secos y Rúcula",
            "Anchoas",
            "Pizzita",
            "Champiñones",
            "Muzza, Tomate y Albahaca",
            "Jamón y Provolone",
            "Calabresa",
            "Cheddar y Panceta",
            "Cheddar y Salchicha",
            "Atún",
            "Carbonara",
            "Calabaza y Parmesano",
            "Provolone",
            "Jamón y Huevo",
            "Muzzarella y Huevo",
            "Roquefort y Nuez",
        ],
        valor: 1700,
    },
    pizzas: {
        "Amadeo": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Americana": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Ananá y Jamón": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Anchoas": {
            chica: 8700,
            grande: 10700,
            barrilete: 12700,
        },
        "Calabresa": {
            chica: 11300,
            grande: 13300,
            barrilete: 15300,
        },
        "Completa": {
            chica: 11700,
            grande: 13700,
            barrilete: 15700,
        },
        "Cuatro Quesos": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Fugazza": {
            chica: 9500,
            grande: 11500,
            barrilete: 13500,
        },
        "Fugazza la Jazmina": {
            chica: 10000,
            grande: 12000,
            barrilete: 14000,
        },
        "Fugazzeta": {
            chica: 10800,
            grande: 12800,
            barrilete: 14800,
        },
        "Fugazzeta con Jamón": {
            chica: 11300,
            grande: 13300,
            barrilete: 15300,
        },
        "Fugazzeta la Jazmina": {
            chica: 11300,
            grande: 13300,
            barrilete: 15300,
        },
        "Gran Cuchi": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Infiernillo": {
            chica: 11400,
            grande: 13400,
            barrilete: 15400,
        },
        "Jamón": {
            chica: 10800,
            grande: 12800,
            barrilete: 14800,
        },
        "Jamón Crudo y Rúcula": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Tomates secos, rúcula y parmesano": {
            chica: 11200,
            grande: 13200,
            barrilete: 15200,
        },
        "Fugazzeta Rellena": {
            chica: 11800,
            grande: 13800,
            barrilete: null,
        },
        "Fugazzeta Rellena la Jazmina": {
            chica: 12300,
            grande: 14300,
            barrilete: null,
        },
        "Jamón y Huevo": {
            chica: 11200,
            grande: 13200,
            barrilete: 15200,
        },
        "Jamón y Morrones": {
            chica: 11200,
            grande: 13200,
            barrilete: 15200,
        },
        "Jamón y Provolone": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Panceta y Provolone": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
        "Provolone": {
            chica: 11000,
            grande: 13000,
            barrilete: 15000,
        },
        "Margarita": {
            chica: 8500,
            grande: 10500,
            barrilete: 12500,
        },
        "Muzzarella": {
            chica: 8000,
            grande: 9500,
            barrilete: 11000,
        },
        "Muzzarella con Anchoas": {
            chica: 9700,
            grande: 11700,
            barrilete: 13700,
        },
        "Napolitana": {
            chica: 10800,
            grande: 12800,
            barrilete: 14800,
        },
        "Napolitana con Jamón": {
            chica: 11300,
            grande: 13300,
            barrilete: 15300,
        },
        "Natural": {
            chica: 10900,
            grande: 12900,
            barrilete: 14900,
        },
        "Palmitos": {
            chica: 10900,
            grande: 12900,
            barrilete: 14900,
        },
        "Palmitos con Jamón": {
            chica: 11400,
            grande: 13400,
            barrilete: 15400,
        },
        "Palmitos la Jazmina": {
            chica: 12900,
            grande: 14900,
            barrilete: 16900,
        },
        "Pizzaiola": {
            chica: 10900,
            grande: 12900,
            barrilete: 14900,
        },
        "Roquefort": {
            chica: 11400,
            grande: 13400,
            barrilete: 15400,
        },
        "Siciliana": {
            chica: 10900,
            grande: 12900,
            barrilete: 14900,
        },
        "Siete Colores": {
            chica: 10500,
            grande: 12500,
            barrilete: 14500,
        },
        "SUPER JAZMINA": {
            chica: 11700,
            grande: 13700,
            barrilete: 15700,
        },
        "Vegetariana": {
            chica: 11300,
            grande: 13300,
            barrilete: 15300,
        },
        "Champignones": {
            chica: 12000,
            grande: 14000,
            barrilete: 16000,
        },
        "Cochina": {
            chica: 11500,
            grande: 13500,
            barrilete: 15500,
        },
    },
    calzones: {
        "Tradicional": {
            desc: "Muzzarella, Jamón, Cebolla, Cubitos de Provolone",
            precio: 10500,
        },
        "Napolitano": {
            desc: "Muzzarella, Jamón, Rodajas de Tomate, Morrón Picado",
            precio: 10500,
        },
        "La Jazmina": {
            desc: "Muzzarella, Jamón, Cebolla, Provolone y Panceta",
            precio: 10500,
        },
        "Atún": {
            desc: "Muzzarella, Atún Desmenuzado, Tomate y Huevo Picado",
            precio: 13000,
        },
        "Calabrés": {
            desc: "Muzzarella, Rodajas de Longaniza, Morrón Picado",
            precio: 10500,
        },
        "Palmitos": {
            desc: "Muzzarella, Jamón, Palmitos, Salsa Golf",
            precio: 13000,
        },
    },
    tartas: {
        "Jamón y Queso": {
            desc: "Muzzarella, Jamón Cocido, Huevo Picado y Tomate Picado",
            precio: 5000,
        },
        "Verdura": {
            desc: "Muzzarella, Acelga, Espinaca, Huevo Picado, Cebolla y Morrón",
            precio: 5000,
        },
        "Pollo": {
            desc: "Cebolla, Morrón Picado, Pollo Deshuesado",
            precio: 5000,
        },
        "Calabaza": {
            desc: "Muzzarella, Puré de Calabaza, Queso Parmesano",
            precio: 5000,
        },
        "Atún": {
            desc: "Muzzarella, Atún Desmenuzado, Tomate y Huevo Picado",
            precio: 5700,
        },
        "Caprese": {
            desc: "Muzzarella, Tomate y Albahaca Picada",
            precio: 5000,
        },
        "Queso y Cebolla": {
            desc: "Muzzarella, Cebolla en Juliana y Cebolla de Verdeo",
            precio: 5000,
        },
    },
    fainas: {
        "Tradicional": {
            precio: 1000,
        },
        "Tradicional c/ Verdeo": {
            precio: 1000,
        },
        "Rellena": {
            precio: 1700,
        },
        "Tradicional c/ Muzzarella": {
            precio: 1200,
        },
    },
    bebidas: {
        gaseosas: {
            "CocaCola 1.75l": {
                precio: 3400,
            },
            "CocaCola Zero 1.75l": {
                precio: 3400,
            },
            "CocaCola 750ml": {
                precio: 3400,
            },
            "CocaCola Zero 750ml": {
                precio: 3400,
            },
            "CocaCola Light 750ml": {
                precio: 3400,
            },
            "Sprite 1.75l": {
                precio: 3400,
            },
            "Sprite 750ml": {
                precio: 3400,
            },
            "Fanta 1.75l": {
                precio: 3400,
            },
            "Fanta 750ml": {
                precio: 3400,
            },
        },
        cerveza: {
            "Lata Heineke 473ml": {
                precio: 2200,
            },
            "Lata Stella 473ml": {
                precio: 2200,
            },
            "Lata Schneider 473ml": {
                precio: 1500,
            },
            "Heineken 1l": {
                precio: 3400,
            },
            "Palermo 1l": {
                precio: 3400,
            },
        },
    },
    postres: {
        "Chocotorta": {
            precio: 2200,
        },
        "Oreo": {
            precio: 2200,
        },
    },
    promos: {
        "Promo 1": {
            desc: "2 Gdes Muzzarella",
            precio: 17500,
        },
        "Promo 2": {
            desc: "1 Gde Muzzarella",
            desc2: "1 Gde Jamón",
            precio: 20000,
        },
        "Promo 3": {
            desc: "1 Gde Muzzarella",
            desc2: "1 Gde Jamón",
            desc3: "1 Gde Jamón",
            precio: 32500,
        },
        "Promo 4": {
            desc: "1 Gde Muzzarella",
            desc2: "12 Empanadas a Elección",
            precio: 27500,
        },
        "Promo 5": {
            desc: "1 Barrilete Muzzarella",
            desc2: "12 Empanadas a Elección",
            precio: 29000,
        },
        "Promo 6": {
            desc: "1 Gde Fugazzeta o Jamón",
            desc2: "6 Empanadas a Elección",
            precio: 21000,
        },
        "Promo 7": {
            desc: "24 Empanadas a Elección",
            precio: 38000,
        },
        "Promo 8": {
            desc: "¼ Muzzarella",
            desc2: "¼ Napolitana",
            desc3: "¼ Fugazzeta",
            desc4: "¼ Jamón",
            precio: 13000,
        },
        "Promo 9": {
            desc: "¼ Jamón y Morron",
            desc2: "¼ Palmitos",
            desc3: "¼ Fugazzeta la Jazminas",
            desc4: "¼ Napolitana",
            precio: 14500,
        },
        "Promo 10": {
            desc: "2 Barriletes",
            desc2: "½ Muzzarella",
            desc3: "½ Fugazzeta",
            desc4: "½ Napolitana",
            desc5: "½ Jamón",
            precio: 26000,
        },
    },
};

export default menu;