let druidData = {};

druidData["Trunk Data"] = {
	"Basico": {
		connections: [ "Espírito" ],
		x: 0,
		y: 0
	},
	"Espírito": {
		connections: [ "Defensiva" ],
		requiredPoints: 2,
		x: -1196.614,
		y: 616.14
	},
	"Defensiva": {
		connections: [ "Pet" ],
		requiredPoints: 6,
		x: 506.001,
		y: 1514.89
	},
	"Pet": {
		connections: [ "Furia" ],
		requiredPoints: 11,
		x: -1199.644,
		y: 2443.636
	},
	"Furia": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 505.396,
		y: 3340.8
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1204.559,
		y: 4247.91
	},
	"Capstone": {
		requiredPoints: 33,
		x: -12.662,
		y: 4864.15
	},
	"Dadivas Espirituais": {
		x: 2500,
		y: 0
	},
};

druidData["Basico"] = {
	"Pico da Terra": {
		connections: [ "Basico", "Pico da Terra Melhorado" ],
		description: `Cooldown: {#} segundos
Espírito Gerado: {#}
Chande de Golpe de Sorte: {#}%
Divida a terra, empalando o primeiro inimigo atingido por {#}% de dano.`,
		id: 162,
		maxPoints: 5,
		values: [ "", "", "", "" ],
		x: -409.637,
		y: -122.635
	},
	"Pico da Terra Melhorado": {
		baseSkill: "Pico da Terra",
		connections: [ "Pico da Terra", "Pico da Terra Selvagem", "Pico da Terra Feroz" ],
		description: `Pico da Terra tem {#}% de chance para Paralizar por {#} segundos.`,
		id: 163,
		maxPoints: 1,
		values: [ "", "" ],
		x: -718.25,
		y: -217.87
	},
	"Pico da Terra Selvagem": {
		baseSkill: "Pico da Terra",
		connections: [ "Pico da Terra Melhorado" ],
		description: `Usa um segundo Pico da Terra quando acertar um inimigo Imobilizado ou Paralizado.`,
		id: 164,
		maxPoints: 1,
		x: -741.72,
		y: -341.93
	},
	"Pico da Terra Feroz": {
		baseSkill: "Pico da Terra",
		connections: [ "Pico da Terra Melhorado" ],
		description: `Fortifica por {#}% da sua Vida Base ({#}) sempre que o Pico da Terra acertar inimigos Paralizados, Imobilizados ou Derrubados.`,
		id: 165,
		maxPoints: 1,
		values: [ "", "" ],
		x: -948.965,
		y: -208.475
	},
	"Espancar": {
		connections: [ "Basico", "Espancar Melhorado" ],
		description: `Espírito Gerado: {#}
Chande de Golpe de Sorte: {#}%
Se transforma em um Urso e ataca os inimos a sua frente, infligindo {#}% de dano.`,
		id: 4,
		maxPoints: 5,
		values: [ "11", "33", "21" ],
		x: 376.573,
		y: 153.87
	},
	"Espancar Melhorado": {
		baseSkill: "Espancar",
		connections: [ "Espancar", "Espancar Selvagem", "Espancar Feroz" ],
		description: `Se um inimigo for atingido por Espancar, Fortifica em {#}% da sua Vida Base({#}).`,
		id: 5,
		maxPoints: 1,
		values: [ "0.64", "" ],
		x: 662.861,
		y: 275.905
	},
	"Espancar Selvagem": {
		baseSkill: "Espancar",
		connections: [ "Espancar Melhorado" ],
		description: `Espancar tem {#}% de chance para Derrubar inimigos por {#} segundos.`,
		id: 6,
		maxPoints: 1,
		values: [ "15", "2" ],
		x: 693.195,
		y: 399.79
	},
	"Espancar Feroz": {
		baseSkill: "Espancar",
		connections: [ "Espancar Melhorado" ],
		description: `Aumenta o alcance de Espancar por {#}%.`,
		id: 7,
		maxPoints: 1,
		values: [ "" ],
		x: 902.52,
		y: 279.665
	},
	"Corte de Vento": {
		connections: [ "Basico", "Corte de Vento Melhorado" ],
		description: `Espírito Gerado: {#}
Chande de Golpe de Sorte: {#}%
Conjura uma espada de vento, infligindo {#}% de dano.`,
		id: 8,
		maxPoints: 5,
		values: [ "12", "33", "17.85" ],
		x: -114.365,
		y: -239.92
	},
	"Corte de Vento Melhorado": {
		baseSkill: "Corte de Vento",
		connections: [ "Corte de Vento", "Corte de Vento Feroz", "Corte de Vento Selvagem" ],
		description: `Corte de VEnto tem {#}% de chance para tornar inimigos Vulneráveis por {#} segundos.`,
		id: 9,
		maxPoints: 1,
		values: [ "35", "4" ],
		x: -198.861,
		y: -426.135
	},
	"Corte de Vento Feroz": {
		baseSkill: "Corte de Vento",
		connections: [ "Corte de Vento Melhorado " ],
		description: `Cada inimigo atingido por Corte de Vento aumenta sua Velocidade de Movimento em +{#}% por {#} segundos, até +{#}%.`,
		id: 10,
		maxPoints: 1,
		values: [ "5", "3", "20" ],
		x: -396.793,
		y: -516.16
	},
	"Corte de Vento Selvagem": {
		baseSkill: "Corte de Vento",
		connections: [ "Melhorado Corte de Vento" ],
		description: `Corte de Vento arante {#} de Espírito adicional para cada inimigo atingido além do primeiro.`,
		id: 11,
		maxPoints: 1,
		values: [ "" ],
		x: -107.221,
		y: -552.75
	},
	"Ataque de Tempestade": {
		connections: [ "Basico", "Ataque de Tempestade Melhorado" ],
		description: `Espírito Gerado: {#}
Chande de Golpe de Sorte: {#}%
Reune eletricinadae na sua arma, infligindo {#}% de dano no seu alvo e encadeando para {#} inimigos ao redor, infligindo {#}% menos dano cada vez que encadeia.

Você ganha {#}% de Reducao de Dano por {#} segundos depois que infligir dano com Ataque de Tempestade.`,
		id: 12,
		maxPoints: 5,
		values: [ "15", "25", "28.35", "", "", "25", "3" ],
		x: 276.665,
		y: -215.355
	},
	"Ataque de Tempestade Melhorado": {
		baseSkill: "Ataque de Tempestade",
		connections: [ "Ataque de Tempestade", "Ataque de Tempestade Feroz", "Ataque de Tempestade Selvagem" ],
		description: `Ataque de Tempestade pussui {#}% de chance para Immobilizar todos inimigos acertados por {#} segundos.`,
		id: 13,
		maxPoints: 1,
		values: [ "", "" ],
		x: 481.829,
		y: -372.805
	},
	"Ataque de Tempestade Feroz": {
		baseSkill: "Ataque de Tempestade",
		connections: [ "Ataque de Tempestade Melhorado" ],
		description: `Ataque de Tempestade possui {#}% de chance para tornar inimigos Vulneráveis por {#} segundos.`,
		id: 14,
		maxPoints: 1,
		values: [ "50", "3" ],
		x: 471.808,
		y: -509.25
	},
	"Ataque de Tempestade Selvagem": {
		baseSkill: "Ataque de Tempestade",
		connections: [ "Melhorado Ataque de Tempestade" ],
		description: `Ataque de Tempestade encadeira para {#} alvos adicionais.`,
		id: 15,
		maxPoints: 1,
		values: [ "" ],
		x: 738.505,
		y: -381.855
	},
	"Garra": {
		connections: [ "Basico", "Garra Melhorada" ],
		description: `Espírito Gerado: {#}
Chande de Golpe de Sorte: {#}%
Se transforma em um lobo e ataca um inimigo com {#}% de dano.`,
		id: 16,
		maxPoints: 5,
		values: [ "9", "50", "21" ],
		x: 499.625,
		y: -41.135
	},
	"Garra Melhorada": {
		baseSkill: "Garra",
		connections: [ "Garra", "Garra Feroz", "Garra Selvagem" ],
		description: `A velocidade de ataque da Garra é aumentada em +{#}%.`,
		id: 17,
		maxPoints: 1,
		values: [ "10" ],
		x: 865.42,
		y: -70.405
	},
	"Garra Feroz": {
		baseSkill: "Garra",
		connections: [ "Garra Melhorada" ],
		description: `Garra aplica {#}% dano de Veneno por {#} segundos.`,
		id: 18,
		maxPoints: 1,
		values: [ "", "3" ],
		x: 1070.101,
		y: -2.05
	},
	"Garra Selvagem": {
		baseSkill: "Garra",
		connections: [ "Garra Melhorada" ],
		description: `Garra tem {#}% de chance para acertar duas vezes.`,
		id: 19,
		maxPoints: 1,
		values: [ "10" ],
		x: 1035.416,
		y: -164.095
	},
};

druidData["Espírito"] = {
	"Desmoronamento": {
		connections: [ "Espírito", "Desmoronamento Melhorado" ],
		description: `Custo de Espírito: {#}
Chande de Golpe de Sorte: {#}%
Esmaga inimigos entre 2 pilares de terra, infligindo até {#}% de dano.`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "20", "78.75" ],
		x: 527.495,
		y: -1.355
	},
	"Desmoronamento Melhorado": {
		baseSkill: "Desmoronamento",
		connections: [ "Desmoronamento", "Desmoronamento Furioso", "Desmoronamento Primitivo" ],
		description: `Depois que Desmoronamento acertar inimigos {#} vezes, o próximo acerto vai Imobilizar os inimigos por {#} segundos.`,
		id: 21,
		maxPoints: 1,
		values: [ "", "3" ],
		x: 925.578,
		y: -2.315
	},
	"Desmoronamento Furioso": {
		baseSkill: "Desmoronamento",
		connections: [ "Desmoronamento Melhorado" ],
		description: `Quando acertar um inimigo Imobilizado ou Paralizado com Desmoronamento, um pilar de terra adicional é formado.`,
		id: 22,
		maxPoints: 1,
		x: 1121.353,
		y: 85.54
	},
	"Desmoronamento Primitivo": {
		baseSkill: "Desmoronamento",
		connections: [ "Desmoronamento Melhorado" ],
		description: `Quando Imobilizar ou Paralizar um inimigo, voce ganha um Terramote. Cada inimigo atingido pelo Desmoronamento consome um Terramote causando um Ataque Crítico garantido com x{#}% de Dano Crítico. Chefes sempre teram até a {#}% de chance para gerar um Terramote quando acertados.`,
		id: 23,
		maxPoints: 1,
		values: [ "10", "30" ],
		x: 1123.278,
		y: -78.075
	},
	"Pulverizar": {
		connections: [ "Espírito", "Pulverizar Melhorado" ],
		description: `Custo de Espírito: {#}
Chande de Golpe de Sorte: {#}%
Se transforma em um Urso e bate no chao, infligindo {#}% de dano para os inimigos ao redor.`,
		id: 24,
		maxPoints: 5,
		values: [ "35", "33", "52.5" ],
		x: -662.09,
		y: 108.51
	},
	"Pulverizar Melhorado": {
		baseSkill: "Pulverizar",
		connections: [ "Pulverizar", "Pulverizar Primitivo", "Pulverizar Furioso" ],
		description: `Seu próximo Pulverizar vai Sobrecarregar por {#} segundos enquanto você estiver Saudável.`,
		id: 25,
		maxPoints: 1,
		values: [ "" ],
		x: -1030.275,
		y: 169.15
	},
	"Pulverizar Primitivo": {
		baseSkill: "Pulverizar",
		connections: [ "Pulverizar Melhorado" ],
		description: `Inimigos atingidos por Pulverizar infligem {#}% de dano reduzido por {#} segundos.`,
		id: 26,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: -1158.38,
		y: 294.075
	},
	"Pulverizar Furioso": {
		baseSkill: "Pulverizar",
		connections: [ "Pulverizar Melhorado" ],
		description: `Inimigos são Paralizados por {#} segundos quando eles sao Sobrecarregados com Pulverizar.`,
		id: 27,
		maxPoints: 1,
		values: [ "" ],
		x: -1271.72,
		y: 125.535
	},
	"Tornado": {
		connections: [ "Espírito", "Tornado Melhorado" ],
		description: `Custo de Espírito: {#}
Chande de Golpe de Sorte: {#}%
Conjura um tornado rodopiante que inflige {#}% de dano.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33", "105" ],
		x: -658.16,
		y: -95.45
	},
	"Tornado Melhorado": {
		baseSkill: "Tornado",
		connections: [ "Tornado", "Tornado Furioso", "Tornado Primitivo" ],
		description: `Cada vez que voce usar Tornado, voce tem {#}% de chance para gerar um Tornado adicional.`,
		id: 29,
		maxPoints: 1,
		values: [ "20" ],
		x: -1022.51,
		y: -146.015
	},
	"Tornado Furioso": {
		baseSkill: "Tornado",
		connections: [ "Tornado Melhorado" ],
		description: `Inimigos atingidos por Tornado possuem {#}% de chance de se tornar Vulneráveis por {#} segundos.`,
		id: 30,
		maxPoints: 1,
		values: [ "5", "3" ],
		x: -1245.89,
		y: -85.1
	},
	"Tornado Primitivo": {
		baseSkill: "Tornado",
		connections: [ "Tornado Melhorado" ],
		description: `Inimigos atingidos por Tornado ficam lentos em {#}% por {#} segundos, estacando até {#}%.`,
		id: 31,
		maxPoints: 1,
		values: [ "8", "3", "" ],
		x: -1165.365,
		y: -263.91
	},
	"Retalhar": {
		connections: [ "Espírito", "Retalhar Melhorado" ],
		description: `Custo de Espírito: {#}
Chande de Golpe de Sorte: {#}%
Se transforma em um Lobisomem e executa um combo de ataque triplo:
1st Ataque: Inflige {#}% de dano.
2nd Ataque: Inflige {#}% de dano.
3rd Ataque: Èxecuta um ataque finalizador infligindo {#}% de dano.`,
		id: 33,
		maxPoints: 5,
		values: [ "35", "20", "", "", "" ],
		x: -446.83,
		y: 275.82
	},
	"Retalhar Melhorado": {
		baseSkill: "Retalhar",
		connections: [ "Retalhar", "Retalhar Furioso", "Retalhar Primitivo" ],
		description: `Retalhar ganha +{#}% de Velocidade de Ataque e Cura em {#}% da sua Vida Maxima ({#}) se um inimigo for atingido.`,
		id: 34,
		maxPoints: 1,
		values: [ "", "2", "" ],
		x: -710.395,
		y: 428.735
	},
	"Retalhar Furioso": {
		baseSkill: "Retalhar",
		connections: [ "Retalhar Melhorado" ],
		description: `O terceiro ataque do Retalhar é mais longo e aplica {#}% de dano de Veneno durante {#} segundos.`,
		id: 36,
		maxPoints: 1,
		values: [ "", "" ],
		x: -968.945,
		y: 450.595
	},
	"Retalhar Primitivo": {
		baseSkill: "Retalhar",
		connections: [ "Retalhar Melhorado" ],
		description: `O segundo e terceiro ataque do Retalhar também executam uma corrida. Em adição, o Dano de Ataque Crítico do Retalhar é aumentado por x{#}%.`,
		id: 35,
		maxPoints: 1,
		values: [ "" ],
		x: -709.735,
		y: 566.865
	},
	"Lightning Storm": {
		connections: [ "Espírito", "Melhorado Lightning Storm" ],
		description: `Custo de Espírito: {#} per strike
Chande de Golpe de Sorte: {#}%
Conjure a growing lightning storm that inflige {#}% de dano per strike and increases the number of strikes the longer it is channeled up to a maximum of {#}.`,
		id: 37,
		maxPoints: 5,
		values: [ "15", "15", "26.25", "5" ],
		x: -452.28,
		y: -268.415
	},
	"Melhorado Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Lightning Storm", "Primitivo Lightning Storm", "Furioso Lightning Storm" ],
		description: `The size of your Lightning Storm is preserved for {#} segundos after channeling.`,
		id: 38,
		maxPoints: 1,
		values: [ "4" ],
		x: -684.545,
		y: -435.935
	},
	"Primitivo Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Melhorado Lightning Storm" ],
		description: `Lightning Storm has a {#}% chance to Immobilize enemies hit for {#} segundos.`,
		id: 39,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: -956.755,
		y: -443.375
	},
	"Furioso Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Melhorado Lightning Storm" ],
		description: `Lightning Storm gains 1 additional lightning strike.`,
		id: 40,
		maxPoints: 1,
		x: -700.415,
		y: -572.245
	},
	"Heart of the Selvagem": {
		connections: [ "Espírito", "Selvagem Impulses", "Abundance" ],
		description: `Maximum Espírito is increased by {#}.`,
		id: 42,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -2.48,
		y: -269.805
	},
	"Selvagem Impulses": {
		connections: [ "Heart of the Selvagem" ],
		description: `Your Core Skills cost x{#}% more Espírito but deal x{#}% increased damage.`,
		id: 32,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 140.505,
		y: -403.84
	},
	"Abundance": {
		connections: [ "Heart of the Selvagem" ],
		description: `Basico Skills generate x{#}% more Espírito.`,
		id: 41,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -151.965,
		y: -404.925
	},
	"Predatory Instinct": {
		connections: [ "Espírito", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by +{#}%.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -4.22,
		y: 274.21
	},
	"Iron Fur": {
		connections: [ "Predatory Instinct" ],
		description: `You gain {#}% de dano Reduction while in Werebear form.

This bonus persists for {#} segundos after leaving Werebear form.`,
		id: 137,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 126.735,
		y: 410.19
	},
	"Digitigrade Gait": {
		connections: [ "Predatory Instinct" ],
		description: `You gain +{#}% Movement Speed while in Werewolf form.

This bonus persists for {#} segundos after leaving Werewolf form.`,
		id: 138,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -145.46,
		y: 412.55
	},
};

druidData["Defensiva"] = {
	"Earthen Bulwark": {
		connections: [ "Defensiva", "Melhorado Earthen Bulwark" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Rocks surround you for {#} segundos, granting a Barrier that absorbs {#}% of your Base Life ({#}) in damage.`,
		id: 43,
		maxPoints: 5,
		values: [ "16.0", "50", "3", "10", "" ],
		x: -2.035,
		y: -310.27
	},
	"Melhorado Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `Earthen Bulwark makes you Unstoppable while active.`,
		id: 44,
		maxPoints: 1,
		x: 5.025,
		y: -529.025
	},
	"Innate Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Melhorado Earthen Bulwark" ],
		description: `Rock shrapnel flies outward when Earthen Bulwark is destroyed or expires, dealing {#}% para os inimigos ao redor. This damage is increased by Barrier bonuses.`,
		id: 45,
		maxPoints: 1,
		values: [ "300" ],
		x: -159.395,
		y: -636.45
	},
	"Preserving Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Melhorado Earthen Bulwark" ],
		description: `Casting Earthen Bulwark grants {#}% Base Life ({#}) as Fortify.`,
		id: 46,
		maxPoints: 1,
		values: [ "7.2", "" ],
		x: 160.175,
		y: -637.145
	},
	"Debilitating Roar": {
		connections: [ "Defensiva", "Melhorado Debilitating Roar" ],
		description: `Cooldown: {#} segundos
Shapeshift into a Werebear and bellow a mighty roar, reducing Nearby enemies' damage dealt by {#}% for {#} segundos.`,
		id: 47,
		maxPoints: 5,
		values: [ "22.0", "50", "4" ],
		x: 4.69,
		y: 314.825
	},
	"Melhorado Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `Debilitating Roar also Fortifies you for {#}% Base Life ({#}).`,
		id: 48,
		maxPoints: 1,
		values: [ "8.8", "" ],
		x: 4.11,
		y: 515.641
	},
	"Preserving Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Melhorado Debilitating Roar" ],
		description: `Debilitating Roar also Heals you for {#}% of your Maximum Life ({#}) each second for its duration.`,
		id: 49,
		maxPoints: 1,
		values: [ "4", "" ],
		x: 158.01,
		y: 633.444
	},
	"Innate Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Melhorado Debilitating Roar" ],
		description: `Debilitating Roar also Slows enemies by {#}% for its duration.`,
		id: 50,
		maxPoints: 1,
		values: [ "40" ],
		x: -150.868,
		y: 633.023
	},
	"Ancestral Fortitude": {
		connections: [ "Defensiva", "Vigilance" ],
		description: `Increase your Non-Physical Resistances by {#}%.`,
		id: 51,
		maxPoints: 3,
		values: [ "" ],
		x: -552.215,
		y: 1.025
	},
	"Vigilance": {
		connections: [ "Ancestral Fortitude" ],
		description: `You gain {#}% de dano Reduction for {#} segundos after using a Defensiva Skill.`,
		id: 52,
		maxPoints: 3,
		values: [ "", "" ],
		x: -923.905,
		y: 0.39
	},
	"Blood Howl": {
		connections: [ "Defensiva", "Melhorado Blood Howl" ],
		description: `Cooldown: {#} segundos
Shapeshift into a Werewolf and howl furiously, Healing you for {#}% of your Maximum Life ({#}).`,
		id: 53,
		maxPoints: 5,
		values: [ "15.0", "20.0", "" ],
		x: 445.755,
		y: 169.805
	},
	"Melhorado Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the Cooldown of Blood Howl by {#} second.`,
		id: 54,
		maxPoints: 1,
		values: [ "1" ],
		x: 774.845,
		y: 289.015
	},
	"Innate Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Melhorado Blood Howl" ],
		description: `Blood Howl also generates {#} Espírito.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: 848.495,
		y: 414.8
	},
	"Preserving Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Melhorado Blood Howl" ],
		description: `Blood Howl also increases your Attack Speed by +{#}% for {#} segundos.`,
		id: 56,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: 1024.25,
		y: 280.42
	},
	"Cyclone Armor": {
		connections: [ "Defensiva", "Melhorado Cyclone Armor" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passive: Powerful winds surround you, granting {#}% Non-Physical Damage Reduction.

Active: The winds rapidly expand, Knocking Back enemies and dealing {#}% de dano.`,
		id: 57,
		maxPoints: 5,
		values: [ "15.0", "25", "20", "15.75" ],
		x: 415.99,
		y: -192.375
	},
	"Melhorado Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by Cyclone Armor are also Slowed by {#}% for {#} segundos.`,
		id: 58,
		maxPoints: 1,
		values: [ "40", "3" ],
		x: 726.745,
		y: -326.92
	},
	"Preserving Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Melhorado Cyclone Armor" ],
		description: `Every {#} segundos, Cyclone Armor intensifies, causing incoming damage to grant you {#}% de dano Reduction for {#} segundos.`,
		id: 59,
		maxPoints: 1,
		values: [ "10", "40", "" ],
		x: 754.5,
		y: -466.305
	},
	"Innate Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Melhorado Cyclone Armor" ],
		description: `Enemies Knocked Back by Cyclone Armor become Vulnerable for {#} segundos.`,
		id: 60,
		maxPoints: 1,
		values: [ "" ],
		x: 995.69,
		y: -331.115
	},
};

druidData["Pet"] = {
	"Ravens": {
		connections: [ "Pet", "Melhorado Ravens" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passive: {#} Ravens fly above you and periodically attack your enemies for {#}% de dano every {#} segundos.

Active: The target area is swarmed with ravens, infligindo {#}% de dano over {#} segundos.`,
		id: 62,
		maxPoints: 5,
		values: [ "25.0", "33", "", "89.25", "6", "", "" ],
		x: 0.92,
		y: 293.68
	},
	"Melhorado Ravens": {
		baseSkill: "Ravens",
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `You have +{#}% increased Critical Strike Chance for {#} segundos against Enemies hit by Ravens.`,
		id: 63,
		maxPoints: 1,
		values: [ "13.85", "5" ],
		x: 1.905,
		y: 492.536
	},
	"Brutal Ravens": {
		baseSkill: "Ravens",
		connections: [ "Melhorado Ravens" ],
		description: `{#} additional Ravens periodically attack enemies.`,
		id: 64,
		maxPoints: 1,
		values: [ "2" ],
		x: -148.35,
		y: 612.144
	},
	"Ferocious Ravens": {
		baseSkill: "Ravens",
		connections: [ "Melhorado Ravens" ],
		description: `Enemies inside the swarm of Ravens when it is activated become Vulnerable for {#} segundos.`,
		id: 65,
		maxPoints: 1,
		values: [ "3" ],
		x: 134.94,
		y: 611.014
	},
	"Call of the Selvagem": {
		connections: [ "Pet" ],
		description: `Your Pets deal x{#}% bonus damage.`,
		id: 66,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 550.22,
		y: 0.364
	},
	"Vine Creeper": {
		connections: [ "Pet", "Melhorado Vine Creeper" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passive: A vine creeper periodically emerges from the ground every {#} segundos and applies {#}% Poisoning damage over {#} segundos to an enemy in the area.

Active: Vines strangle all surrounding enemies, Immobilizing them for {#} segundos and poisoning them for {#}% de dano over {#} segundos.`,
		id: 67,
		maxPoints: 5,
		values: [ "20.0", "40", "7", "37.8", "6", "2", "31.5", "2" ],
		x: -535.155,
		y: -0.594
	},
	"Melhorado Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `Vine Creeper's Immobilize duration is increased by {#} second.`,
		id: 68,
		maxPoints: 1,
		values: [ "1" ],
		x: -918.845,
		y: 0.299
	},
	"Ferocious Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Melhorado Vine Creeper" ],
		description: `Vine Creeper's active Poisoning duration is increased by {#} segundos.`,
		id: 69,
		maxPoints: 1,
		values: [ "3" ],
		x: -1107.645,
		y: 88.49
	},
	"Brutal Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Melhorado Vine Creeper" ],
		description: `Your Critical Strike Chance is increased by +{#}% against enemies strangled by Vine Creeper.`,
		id: 70,
		maxPoints: 1,
		values: [ "20" ],
		x: -1097.525,
		y: -94.798
	},
	"Wolves": {
		connections: [ "Pet", "Melhorado Wolves" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passive: Summon {#} wolf Pets that bite enemies for {#}% de dano.

Active: Direct your wolves to focus an enemy, leaping to them and striking for {#}% de dano.`,
		id: 71,
		maxPoints: 5,
		values: [ "14.0", "50", "2", "8.19", "36.75" ],
		x: 7.69,
		y: -289.968
	},
	"Melhorado Wolves": {
		baseSkill: "Wolves",
		connections: [ "Wolves", "Brutal Wolf Pack", "Ferocious Wolf Pack" ],
		description: `Wolves deal x{#}% increased damage to Immobilized, Stunned, Slowed, or Poisoned enemies.`,
		id: 139,
		maxPoints: 1,
		values: [ "20" ],
		x: 7.025,
		y: -503.006
	},
	"Brutal Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Melhorado Wolves" ],
		description: `When you Critically Strike, your Wolves gain +{#}% Attack Speed for {#} segundos.`,
		id: 74,
		maxPoints: 1,
		values: [ "", "" ],
		x: -161.61,
		y: -605.781
	},
	"Ferocious Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Melhorado Wolves" ],
		description: `Lucky Hit: Your Wolves' attacks have up to a {#}% chance to Fortify you for {#}% Base Life ({#}).`,
		id: 73,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: 170.175,
		y: -604.816
	},
	"Nature's Reach": {
		connections: [ "Pet" ],
		description: `Deal x{#}% increased damage to Distant enemies. Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.`,
		id: 75,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -372.585,
		y: -196.762
	},
	"Clarity": {
		connections: [ "Pet" ],
		description: `Gain {#} Espírito when transforming into Human form.`,
		id: 76,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -373.905,
		y: 228.091
	},
};

druidData["Furia"] = {
	"Elemental Exposure": {
		connections: [ "Charged Atmosphere", "Furia", "Endless Tempest" ],
		description: `Lucky Hit: Your Storm Skills have up to a {#}% chance to make enemies Vulnerable for {#} segundos.`,
		id: 80,
		maxPoints: 3,
		values: [ "{20/40/60}", "1" ],
		x: -180.95,
		y: -344.481
	},
	"Charged Atmosphere": {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {#} segundos, a lightning strike hits a Nearby enemy dealing {#}% de dano.`,
		id: 81,
		maxPoints: 3,
		values: [ "{18/13.5/10}", "47.25" ],
		x: -373.152,
		y: -445.477
	},
	"Electric Shock": {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `Lucky Hit: Dealing Lightning damage to enemies has a {#}% chance to Immobilize them for {#} segundos.

If the target is already Immobilized, the Lightning damage dealt to them is increased by x{#}% instead.`,
		id: 82,
		maxPoints: 3,
		values: [ "{5/10/15}", "3", "" ],
		x: -373.93,
		y: -598.557
	},
	"Bad Omen": {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `Lucky Hit: Up to a {#}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a lightning strike also hits dealing {#}% de dano.`,
		id: 83,
		maxPoints: 3,
		values: [ "{10/20/30}", "57.25" ],
		x: 3.305,
		y: -597.918
	},
	"Endless Tempest": {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of Hurricane and Cataclysm by x{#}%.`,
		id: 84,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 2.355,
		y: -446.745
	},
	"Boulder": {
		connections: [ "Furia", "Melhorado Boulder" ],
		description: `Custo de Espírito: {#}
Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Unearth a large rolling boulder that Knocks Back and crushes enemies, infligindo {#}% de dano with each hit.`,
		id: 85,
		maxPoints: 5,
		values: [ "10.0", "20", "34.65", "" ],
		x: 528.095,
		y: -212.19
	},
	"Melhorado Boulder": {
		baseSkill: "Boulder",
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `When Boulder reaches the end of its path, enemies hit are Slowed by {#}% for {#} segundos. If Boulder Sobrecarregared, enemies are Stunned for {#} segundos instead.`,
		id: 86,
		maxPoints: 1,
		values: [ "30", "2", "" ],
		x: 826.57,
		y: -328.209
	},
	"Natural Boulder": {
		baseSkill: "Boulder",
		connections: [ "Melhorado Boulder" ],
		description: `While you have any Fortify, Boulder has +{#}% increased Critical Strike Chance.`,
		id: 87,
		maxPoints: 1,
		values: [ "75" ],
		x: 892.545,
		y: -454.143
	},
	"Savage Boulder": {
		baseSkill: "Boulder",
		connections: [ "Melhorado Boulder" ],
		description: `Boulder's Critical Strike Chance is increased by +{#}% each time it deals damage.`,
		id: 88,
		maxPoints: 1,
		values: [ "3" ],
		x: 1067.875,
		y: -321.359
	},
	"Trample": {
		connections: [ "Furia", "Melhorado Trample" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Shapeshift into a Werebear, become Unstoppable, and charge forward, infligindo {#}% de dano and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {#}% de dano and are Stunned for {#} segundos.`,
		id: 89,
		maxPoints: 5,
		values: [ "14.0", "33", "26.25", "47.25", "3" ],
		x: -538.268,
		y: 76.5
	},
	"Melhorado Trample": {
		baseSkill: "Trample",
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `Trample deals x{#}% bonus damage. This bonus is reduced by x{#}% for each enemy hit after the first.`,
		id: 90,
		maxPoints: 1,
		values: [ "", "" ],
		x: -913.338,
		y: 77.55
	},
	"Natural Trample": {
		baseSkill: "Trample",
		connections: [ "Melhorado Trample" ],
		description: `Casting Trample grants {#}% Base Life ({#}) as Fortify.`,
		id: 91,
		maxPoints: 1,
		values: [ "6", "" ],
		x: -1104.485,
		y: 4.955
	},
	"Savage Trample": {
		baseSkill: "Trample",
		connections: [ "Melhorado Trample" ],
		description: `Casting Trample grants {#} Espírito.`,
		id: 92,
		maxPoints: 1,
		values: [ "20" ],
		x: -1110.255,
		y: 154.84
	},
	"Crushing Earth": {
		connections: [ "Furia", "Safeguard", "Stone Guard" ],
		description: `Earth Skills deal x{#}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.`,
		id: 93,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 527.13,
		y: 1.665
	},
	"Safeguard": {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with Earth Skills Fortify you for {#}% Base Life ({#}).`,
		id: 94,
		maxPoints: 3,
		values: [ "", "" ],
		x: 827.855,
		y: -81.72
	},
	"Stone Guard": {
		connections: [ "Crushing Earth" ],
		description: `While you have Fortify for over {#}% of your Maximum Life, your Earth Skills deal x{#}% increased damage.`,
		id: 95,
		maxPoints: 3,
		values: [ "50", "{4/8/12}" ],
		x: 824.875,
		y: 86.045
	},
	"Hurricane": {
		connections: [ "Furia", "Melhorado Hurricane" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Form a hurricane around you that inflige {#}% de dano para os inimigos ao redor over {#} segundos.`,
		id: 99,
		maxPoints: 5,
		values: [ "20.0", "33", "102.37", "8" ],
		x: 255.145,
		y: -347.168
	},
	"Melhorado Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by Hurricane are Slowed by {#}% for {#} segundos.`,
		id: 100,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: 394.545,
		y: -539.728
	},
	"Natural Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Melhorado Hurricane" ],
		description: `Hurricane has a {#}% chance to make enemies Vulnerable for {#} segundos.`,
		id: 101,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 317.175,
		y: -657.602
	},
	"Savage Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Melhorado Hurricane" ],
		description: `Enemies affected by Hurricane deal {#}% less damage.`,
		id: 102,
		maxPoints: 1,
		values: [ "20" ],
		x: 615.43,
		y: -591.031
	},
	"Rabies": {
		connections: [ "Furia", "Melhorado Rabies" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Shapeshift into a Werewolf and perform an infectious bite on the target dealing {#}% de dano, and applying an additional {#}% Poisoning damage over {#} segundos.

Infected enemies spread Rabies to other surrounding targets.`,
		id: 103,
		maxPoints: 5,
		values: [ "12.0", "50", "29.4", "55.65", "6" ],
		x: 522.33,
		y: 283.86
	},
	"Melhorado Rabies": {
		baseSkill: "Rabies",
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Rabies' Poisoning damage also increases over the lifetime of the disease, dealing x{#}% bonus damage at max duration.`,
		id: 104,
		maxPoints: 1,
		values: [ "4" ],
		x: 774.63,
		y: 431.475
	},
	"Natural Rabies": {
		baseSkill: "Rabies",
		connections: [ "Melhorado Rabies" ],
		description: `Rabies spreads {#}% faster.`,
		id: 105,
		maxPoints: 1,
		values: [ "10" ],
		x: 791.44,
		y: 566.785
	},
	"Savage Rabies": {
		baseSkill: "Rabies",
		connections: [ "Melhorado Rabies" ],
		description: `Rabies deals its total Poisoning damage in {#} segundos instead of {#}.`,
		id: 106,
		maxPoints: 1,
		values: [ "", "" ],
		x: 1026.475,
		y: 443.83
	},
	"Mending": {
		connections: [ "Furia", "Provocation" ],
		description: `While in Werebear form, you receive +{#}% additional Healing from all sources.`,
		id: 97,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -545.966,
		y: -78.47
	},
	"Provocation": {
		connections: [ "Mending" ],
		description: `When you remain in Werebear form for at least {#} segundos, your next Skill will Sobrecarregar.`,
		id: 98,
		maxPoints: 3,
		values: [ "30" ],
		x: -906.653,
		y: -78.28
	},
	"Neurotoxin": {
		connections: [ "Furia", "Toxic Garras", "Envenom" ],
		description: `Poisoned enemies are slowed by {#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 0.3,
		y: 283.825
	},
	"Toxic Garras": {
		connections: [ "Neurotoxin" ],
		description: `Critical Strikes with Werewolf Skills deal {#}% of their Base damage as Poisoning damage over {#} segundos.`,
		id: 78,
		maxPoints: 3,
		values: [ "{8/16/24}", "4" ],
		x: 142.805,
		y: 424.725
	},
	"Envenom": {
		connections: [ "Neurotoxin" ],
		description: `Poisoned enemies take x{#}% additional Critical Strike Damage.`,
		id: 166,
		maxPoints: 3,
		values: [ "" ],
		x: -150.834,
		y: 424.885
	},
};

druidData["Ultimate"] = {
	"Grizzly Rage": {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `Cooldown: {#} segundos
Shapeshift into  Dire Werebear for {#} segundos gaining x{#}% bonus damage and {#}% de dano Reduction. Damage bonus is increased by {#}% each second while in this form.

Kills extend the duration by {#} second up to {#} additional segundos.`,
		id: 107,
		maxPoints: 1,
		values: [ "60.0", "10", "20", "20", "3", "1", "10" ],
		x: 4.395,
		y: 301.055
	},
	"Prime Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are Unstoppable while Grizzly Rage is active.`,
		id: 108,
		maxPoints: 1,
		x: 148.47,
		y: 497.15
	},
	"Supreme Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain {#}% Base Life ({#}) as Fortify per second while Grizzly Rage is active.`,
		id: 109,
		maxPoints: 1,
		values: [ "3.2", "" ],
		x: -1.065,
		y: 641.92
	},
	"Petrify": {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `Cooldown: {#} segundos
Encase all Nearby enemies in stone, Stunning them for {#} segundos. You deal x{#}% increased Critical Strike Damage to enemies affected by Petrify.

Against Bosses, the Critical Strike Damage bonus is increased to x{#}% and its duration is increased to {#} segundos.`,
		id: 110,
		maxPoints: 1,
		values: [ "60.0", "3", "25", "", "" ],
		x: 3.895,
		y: -279.14
	},
	"Prime Petrify": {
		baseSkill: "Petrify",
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `Petrify's effect durations are increased by {#} second.`,
		id: 111,
		maxPoints: 1,
		values: [ "1" ],
		x: 193.785,
		y: -466.65
	},
	"Supreme Petrify": {
		baseSkill: "Petrify",
		connections: [ "Prime Petrify" ],
		description: `Killing an enemy affected by Petrify grants {#} Espírito.`,
		id: 112,
		maxPoints: 1,
		values: [ "25" ],
		x: -0.87,
		y: -605.175
	},
	"Defensiva Posture": {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of Fortify you gain from all sources by +{#}%.`,
		id: 113,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 509.67,
		y: 1.205
	},
	"Thick Hide": {
		connections: [ "Unrestrained", "Defensiva Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {#}% Base Life ({#}).`,
		id: 114,
		maxPoints: 3,
		values: [ "2.56", "" ],
		x: 781.551,
		y: -84.42
	},
	"Unrestrained": {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of Control Impairing Effects by {#}%. Triple this effect while you have Fortify for over {#}% of your Maximum Life.`,
		id: 115,
		maxPoints: 3,
		values: [ "{3/6/9}", "20" ],
		x: 1046.071,
		y: -0.59
	},
	"Nature's Resolve": {
		connections: [ "Unrestrained", "Defensiva Posture" ],
		description: `{#}% chance when struck to Fortify you for {#}% Base Life ({#}).`,
		id: 116,
		maxPoints: 3,
		values: [ "{5/10/15}", "1.76", "" ],
		x: 782.325,
		y: 91.16
	},
	"Quickshift": {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a Shapeshifting Skill transforms you into a different form, it deals x{#}% increased damage.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -406.14,
		y: 294.95
	},
	"Natural Fortitude": {
		connections: [ "Quickshift" ],
		description: `Shapeshifting Fortifies you for {#}% Base Life ({#}).`,
		id: 118,
		maxPoints: 3,
		values: [ "{0.56/1.12/1.68}", "" ],
		x: -565.17,
		y: 421.475
	},
	"Heightened Senses": {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {#}% de dano Reduction against Elites for {#} segundos.`,
		id: 119,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -254.14,
		y: 423.295
	},
	"Lacerate": {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Shapeshift into a Werewolf, become Immune and quickly dash {#} times between enemies in the area dealing up to {#}% de dano.`,
		id: 120,
		maxPoints: 1,
		values: [ "50.0", "15", "10", "420" ],
		x: -581.85,
		y: 142.205
	},
	"Prime Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time Lacerate deals a Critical Strike, Heal for {#}% Maximum Life ({#}).`,
		id: 121,
		maxPoints: 1,
		values: [ "3", "" ],
		x: -953.225,
		y: 146.245
	},
	"Supreme Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Prime Lacerate" ],
		description: `Lacerate's initial strike is guaranteed to Critically Strike and deals x{#}% increased damage.`,
		id: 122,
		maxPoints: 1,
		values: [ "200" ],
		x: -1155.4,
		y: 290.655
	},
	"Cataclysm": {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
A massive storm follows you for {#} segundos. Tornadoes Knock Back enemies, and lightning strikes Selvagemly dealing {#}% de dano.`,
		id: 123,
		maxPoints: 1,
		values: [ "80.0", "82", "8", "54.6" ],
		x: -581.665,
		y: -104.025
	},
	"Prime Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `Cataclysm's duration is increased by {#} segundos.`,
		id: 124,
		maxPoints: 1,
		values: [ "2" ],
		x: -951.14,
		y: -111.45
	},
	"Supreme Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from Cataclysm make enemies Vulnerable for 2 segundos.`,
		id: 125,
		maxPoints: 1,
		x: -1152.59,
		y: -253.34
	},
	"Defiance": {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `Nature Magic Skills deal x{#}% increased damage to Elites.`,
		id: 126,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -433.135,
		y: -261.99
	},
	"Circle of Life": {
		connections: [ "Defiance", "Resonance" ],
		description: `Nature Magic Skills that consume Espírito Heal you for {#}% of your Maximum Life ({#}).`,
		id: 127,
		maxPoints: 3,
		values: [ "{1/2/3}", "" ],
		x: -603.125,
		y: -405.69
	},
	"Resonance": {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `Nature Magic Skills deal x{#}% increased damage. Triple this bonus if an Earth Skill is the next Skill cast after a Storm Skill, or a  Storm Skill is the next Skill cast after an Earth Skill.`,
		id: 128,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -425.3,
		y: -549.32
	},
	"Natural Disaster": {
		connections: [ "Defiance", "Resonance" ],
		description: `Your Earth Skills deal x{#}% increased damage to Vulnerable enemies.

Your Storm Skills deal x{#}% increased damage to enemies that are Stunned, Immobilized, or Knocked Back.`,
		id: 129,
		maxPoints: 3,
		values: [ "{4/8/12}", "{4/8/12}" ],
		x: -257.095,
		y: -407.48
	},
};

druidData["Capstone"] = {
	"Nature's Fury": {
		connections: [ "Capstone" ],
		description: `Casting an Earth Skill has a {#}% chance to trigger a free Storm Skill of the same category.

In addition, casting a Storm Skill has a {#}% chance to trigger a free Earth Skill of the same category.`,
		id: 130,
		maxPoints: 1,
		values: [ "20", "20" ],
		x: 551.172,
		y: -296.755
	},
	"Earthen Might": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Damaging enemies with Earth Skills has up to a {#}% chance to:
 Restore all of your Espírito
 Cause your attacks to be guaranteed Critical Strikes for {#} segundos

This chance is increased by:
 {#}% for Critical Strikes
 {#}% if the target is Stunned, Immobilized, or Knocked Back.`,
		id: 131,
		maxPoints: 1,
		values: [ "5", "10", "10", "100" ],
		x: 551.997,
		y: -60.41
	},
	"Lupine Ferocity": {
		connections: [ "Capstone" ],
		description: `Every 6th Werewolf Skill hit Critically Strikes and deals x{#}% increased damage.`,
		id: 132,
		maxPoints: 1,
		values: [ "60" ],
		x: -87.174,
		y: 309.645
	},
	"Bestial Rampage": {
		connections: [ "Capstone" ],
		description: `After being a Werewolf for {#} segundos, gain +{#}% Attack Speed for {#} segundos.

After being a Werebear for {#} segundos, deal x{#}% increased damage for {#} segundos.`,
		id: 133,
		maxPoints: 1,
		values: [ "2.5", "20", "15", "2.5", "20", "15" ],
		x: -579.178,
		y: 308.825
	},
	"Perfect Storm": {
		connections: [ "Capstone" ],
		description: `Your Storm Skills grant {#} Espírito and deal x{#}% increased damage when damaging a Vulnerable, Immobilized or Slowed enemy.`,
		id: 134,
		maxPoints: 1,
		values: [ "2", "20" ],
		x: 128.936,
		y: -296.355
	},
	"Ursine Strength": {
		connections: [ "Capstone" ],
		description: `Gain x{#}% additional Maximum Life while in Werebear form and for {#} segundos after leaving Werebear form.

While Healthy, deal x{#}% increased damage.`,
		id: 135,
		maxPoints: 1,
		values: [ "20", "3", "20" ],
		x: -581.903,
		y: 42.4
	},
};

druidData["Dadivas Espirituais"] = {
	"Deer": {
		id: 158,
		"Prickleskin": {
			values: [ "" ],
			description: `Gain {#} Thorns.`,
			id: 142
		},
		"Gift of the Stag": {
			values: [ "10" ],
			description: `Gain +{#} Maximum Espírito.`,
			id: 143
		},
		"Wariness": {
			values: [ "10" ],
			description: `Take {#}% reduced damage from Elites.`,
			id: 144
		},
		"Advantageous Beast": {
			values: [ "15" ],
			description: `Reduce the duration of Control Impairing Effects by {#}%.`,
			id: 145
		}
	},
	"Eagle": {
		id: 159,
		"Scythe Talons": {
			values: [ "5" ],
			description: `Gain +{#}% increased Critical Strike Chance.`,
			id: 146
		},
		"Iron Feather": {
			values: [ "10" ],
			description: `Gain x{#}% Maximum Life.`,
			id: 147
		},
		"Swooping Attacks": {
			values: [ "10" ],
			description: `Gain +{#}% Attack Speed.`,
			id: 148
		},
		"Avian Furia": {
			values: [ "30" ],
			description: `Gain x{#}% Critical Strike Damage.`,
			id: 149
		}
	},
	"Snake": {
		id: 161,
		"Obsidian Slam": {
			values: [ "" ],
			description: `Every {#}th kill will cause your next Earth Skill to Sobrecarregar.`,
			id: 154
		},
		"Overload": {
			values: [ "20", "60" ],
			description: `Lucky Hit: Dealing Lightning damage has up to a {#}% chance to cause the target to emit a static discharge, dealing {#}% Lightning damage para os inimigos ao redor.`,
			id: 155
		},
		"Masochistic": {
			values: [ "3", "" ],
			description: `Critical Strikes with Shapeshifting Skills Heal you for {#}% Maximum Life ({#}).`,
			id: 156
		},
		"Calm Before the Storm": {
			values: [ "15", "2" ],
			description: `Lucky Hit: Nature Magic Skills have up to a {#}% chance to reduce the Cooldown of your Ultimate Skill by {#} segundos.`,
			id: 157
		}
	},
	"Wolf": {
		id: 160,
		"Packleader": {
			values: [ "20" ],
			description: `Lucky Hit: Critical Strikes have up to a {#}% chance to reset the Cooldowns of your Pet Skills.`,
			id: 150
		},
		"Energize": {
			values: [ "15", "10" ],
			description: `Lucky Hit: Dealing damage has up to a {#}% chance to restore {#} Espírito.`,
			id: 151
		},
		"Bolster": {
			values: [ "10" ],
			description: `Fortify for {#}% of your Maximum Life when you use a Defensiva Skill.`,
			id: 152
		},
		"Calamity": {
			values: [ "25" ],
			description: `Extend the duration of Ultimate Skills by {#}%.`,
			id: 153
		}
	}
};

export { druidData };