let druidData = {};

druidData["Trunk Data"] = {
	"Básico": {
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
	"Dádivas Espirituais": {
		x: 2500,
		y: 0
	},
};

druidData["Básico"] = {
	"Pico da Terra": {
		connections: [ "Básico", "Pico da Terra Melhorado" ],
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
		description: `Usa um segundo Pico da Terra quando acertar um inimigo Imobilizado ou Atordoado.`,
		id: 164,
		maxPoints: 1,
		x: -741.72,
		y: -341.93
	},
	"Pico da Terra Feroz": {
		baseSkill: "Pico da Terra",
		connections: [ "Pico da Terra Melhorado" ],
		description: `Fortifica por {#}% da sua Vida Base ({#}) sempre que o Pico da Terra acertar inimigos Atordoados, Imobilizados ou Derrubados.`,
		id: 165,
		maxPoints: 1,
		values: [ "", "" ],
		x: -948.965,
		y: -208.475
	},
	"Espancar": {
		connections: [ "Básico", "Espancar Melhorado" ],
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
		connections: [ "Básico", "Corte de Vento Melhorado" ],
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
		connections: [ "Básico", "Ataque de Tempestade Melhorado" ],
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
		connections: [ "Básico", "Garra Melhorada" ],
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
		description: `Quando acertar um inimigo Imobilizado ou Atordoado com Desmoronamento, um pilar de terra adicional é formado.`,
		id: 22,
		maxPoints: 1,
		x: 1121.353,
		y: 85.54
	},
	"Desmoronamento Primitivo": {
		baseSkill: "Desmoronamento",
		connections: [ "Desmoronamento Melhorado" ],
		description: `Quando Imobilizar ou Paralizar um inimigo, você ganha um Terramote. Cada inimigo atingido pelo Desmoronamento consome um Terramote causando um Ataque Crítico garantido com x{#}% de Dano Crítico. Chefes sempre teram até a {#}% de chance para gerar um Terramote quando acertados.`,
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
		description: `Inimigos são Atordoados por {#} segundos quando eles sao Sobrecarregados com Pulverizar.`,
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
		description: `Cada vez que você usar Tornado, você tem {#}% de chance para gerar um Tornado adicional.`,
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
	"Tempestade de Relâmpago": {
		connections: [ "Espírito", "Tempestade de Relâmpago Melhorada" ],
		description: `Custo de Espírito: {#} por golpe
Chande de Golpe de Sorte: {#}%
Conjura uma tempestade de relâmpago crescente que inflige {#}% de dano por golpe e aumenta o número de golpes quanto mais tempo é canalizado até um máximo de {#}.`,
		id: 37,
		maxPoints: 5,
		values: [ "15", "15", "26.25", "5" ],
		x: -452.28,
		y: -268.415
	},
	"Tempestade de Relâmpago Melhorada": {
		baseSkill: "Tempestade de Relâmpago",
		connections: [ "Tempestade de Relâmpago", "Tempestade de Relâmpago Primitiva", "Tempestade de Relâmpago Furiosa" ],
		description: `O tamanho da sua Tempestade de Relâmpago é preservado por {#} segundos depois de canalizar.`,
		id: 38,
		maxPoints: 1,
		values: [ "4" ],
		x: -684.545,
		y: -435.935
	},
	"Tempestade de Relâmpago Primitiva": {
		baseSkill: "Tempestade de Relâmpago",
		connections: [ "Tempestade de Relâmpago Melhorada" ],
		description: `Tempestade de Relâmpago possui {#}% de chance para Imobilizar inimigos atingidos por {#} segundos.`,
		id: 39,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: -956.755,
		y: -443.375
	},
	"Tempestade de Relâmpago Furiosa": {
		baseSkill: "Tempestade de Relâmpago",
		connections: [ "Tempestade de Relâmpago Melhorada" ],
		description: `Tempestade de Relâmpago garante 1 golpe de relâmpago adicional.`,
		id: 40,
		maxPoints: 1,
		x: -700.415,
		y: -572.245
	},
	"Coração Selvagem": {
		connections: [ "Espírito", "Impulso Selvagem", "Abundância" ],
		description: `Espírito máximo é aumentado em {#}.`,
		id: 42,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -2.48,
		y: -269.805
	},
	"Impulso Selvagem": {
		connections: [ "Coração Selvagem" ],
		description: `Suas Habilidades Core consomem x{#}% mais Espírito mas causam x{#}% de dano aumentado.`,
		id: 32,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 140.505,
		y: -403.84
	},
	"Abundância": {
		connections: [ "Coração Selvagem" ],
		description: `Habilidades Básicas geram x{#}% mais Espírito.`,
		id: 41,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -151.965,
		y: -404.925
	},
	"Instinto Predatório": {
		connections: [ "Espírito", "Pele de Ferro", "Marcha Digitígrada" ],
		description: `A Chance de Golpe Crítico contra inimigos Próximos é aumentada em +{#}%.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -4.22,
		y: 274.21
	},
	"Pele de Ferro": {
		connections: [ "Instinto Predatório" ],
		description: `Você ganha {#}% de Redução de dano enquanto estiver na forma de Urso.

Esse bônus persiste por{#} segundos depois de sair da forma de Urso.`,
		id: 137,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 126.735,
		y: 410.19
	},
	"Marcha Digitígrada": {
		connections: [ "Instinto Predatório" ],
		description: `Você ganha +{#}% de Velocidade de Movimento enquanto estier na forma de Lobisomen.

Esse bônus persiste por {#} segundos depoisde sair daforma de Lobisomen.`,
		id: 138,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -145.46,
		y: 412.55
	},
};

druidData["Defensiva"] = {
	"Baluarte de Terra": {
		connections: [ "Defensiva", "Baluarte de Terra Melhorada" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Rochas rodeam você por {#} segundos, garantindo uma Barreira que absorve {#}% da sua Vida Base ({#}) em dano.`,
		id: 43,
		maxPoints: 5,
		values: [ "16.0", "50", "3", "10", "" ],
		x: -2.035,
		y: -310.27
	},
	"Baluarte de Terra Melhorado": {
		baseSkill: "Baluarte de Terra",
		connections: [ "Baluarte de Terra", "Baluarte de Terra Inato", "Baluarte de Terra Preservado" ],
		description: `Baluarte de Terra torna você Imparável enquanto ativo.`,
		id: 44,
		maxPoints: 1,
		x: 5.025,
		y: -529.025
	},
	"Baluarte de Terra Inato": {
		baseSkill: "Baluarte de Terra",
		connections: [ "Baluarte de Terra Melhorado" ],
		description: `Estilhaços de rocha voam para fora quando Baluarte de Terra é destruído ou expira, infligindo  {#}% para os inimigos ao redor. Esse dano é aumentado pelo bonus de Barreira.`,
		id: 45,
		maxPoints: 1,
		values: [ "300" ],
		x: -159.395,
		y: -636.45
	},
	"Baluarte de Terra Preservado": {
		baseSkill: "Baluarte de Terra",
		connections: [ "Baluarte de Terra Melhorado" ],
		description: `Lançar Baluarte de Terra garante {#}% de Vida Base ({#}) como Fortificação.`,
		id: 46,
		maxPoints: 1,
		values: [ "7.2", "" ],
		x: 160.175,
		y: -637.145
	},
	"Rugido Debilitante": {
		connections: [ "Defensiva", "Rugido Debilitante Melhorado" ],
		description: `Cooldown: {#} segundos
Se transforma em Urso e solta um berre rugido poderoso, reduzindo o dano de inimigos Próximosem {#}% por {#} segundos.`,
		id: 47,
		maxPoints: 5,
		values: [ "22.0", "50", "4" ],
		x: 4.69,
		y: 314.825
	},
	"Rugido Debilitante Melhorado": {
		baseSkill: "Rugido Debilitante",
		connections: [ "Rugido Debilitante", "Rugido Debilitante Preservado", "Rugido Debilitante Inato" ],
		description: `Rugido Debilitante também Fortifica você em {#}% da sua Vida Base({#}).`,
		id: 48,
		maxPoints: 1,
		values: [ "8.8", "" ],
		x: 4.11,
		y: 515.641
	},
	"Rugido Debilitante Preservado": {
		baseSkill: "Rugido Debilitante",
		connections: [ "Rugido Debilitante Melhorado" ],
		description: `Rugido Debilitante também Cura você em {#}% da sua Vida Máxima ({#}) cada segundo da sua duração.`,
		id: 49,
		maxPoints: 1,
		values: [ "4", "" ],
		x: 158.01,
		y: 633.444
	},
	"Rugido Debilitante Inato": {
		baseSkill: "Rugido Debilitante",
		connections: [ "Rugido Debilitante Melhorado" ],
		description: `Rugido Debilitante também causa Lentidão nos inimigos em {#}% durante sua duração.`,
		id: 50,
		maxPoints: 1,
		values: [ "40" ],
		x: -150.868,
		y: 633.023
	},
	"Fortaleza Ancestral": {
		connections: [ "Defensiva", "Vigilance" ],
		description: `Aumenta sua Resistência Não Física em {#}%.`,
		id: 51,
		maxPoints: 3,
		values: [ "" ],
		x: -552.215,
		y: 1.025
	},
	"Vigilância": {
		connections: [ "Fortaleza Ancestral" ],
		description: `Você ganha {#}% de Redução de dano em {#} segundos depois de usar uma habilidade Defensiva.`,
		id: 52,
		maxPoints: 3,
		values: [ "", "" ],
		x: -923.905,
		y: 0.39
	},
	"Uivo de Sangue": {
		connections: [ "Defensiva", "Uivo de Sangue Melhorado" ],
		description: `Cooldown: {#} segundos
Se transforma em um Lobisomem e uiva ferosmente, Curando você em {#}% da sua Vida Máxima ({#}).`,
		id: 53,
		maxPoints: 5,
		values: [ "15.0", "20.0", "" ],
		x: 445.755,
		y: 169.805
	},
	"Uivo de Sangue Melhorado": {
		baseSkill: "Uivo de Sangue",
		connections: [ "Uivo de Sangue", "Uivo de Sangue Inato", "Uivo de Sangue Preservado" ],
		description: `Mortes reduzem o Cooldown do Uivo de Sangue em {#} segundo.`,
		id: 54,
		maxPoints: 1,
		values: [ "1" ],
		x: 774.845,
		y: 289.015
	},
	"Uivo de Sangue Inato": {
		baseSkill: "Uivo de Sangue",
		connections: [ "Uivo de Sangue Melhorado" ],
		description: `Uivo de Sangue também gera {#} Espírito.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: 848.495,
		y: 414.8
	},
	"Uivo de Sangue Preservado": {
		baseSkill: "Uivo de Sangue",
		connections: [ "Uivo de Sangue Melhorado" ],
		description: `Uivo de Sangue também aumenta sua Velocidade de Ataque em +{#}% por {#} segundos.`,
		id: 56,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: 1024.25,
		y: 280.42
	},
	"Armadura de Ciclone": {
		connections: [ "Defensiva", "Armadura de Ciclone Melhorada" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passiva: Ventos fortes rodeam você, garantindo {#}% Redução de Dano Não Físico.

Ativa: Esses ventos se expandem rapidamente, Derrubando inimigos e infligindo {#}% de dano.`,
		id: 57,
		maxPoints: 5,
		values: [ "15.0", "25", "20", "15.75" ],
		x: 415.99,
		y: -192.375
	},
	"Armadura de Ciclone Melhorada": {
		baseSkill: "Armadura de Ciclone",
		connections: [ "Armadura de Ciclone", "Armadura de Ciclone Preservada", "Armadura de Ciclone Inata" ],
		description: `Inimigos que forem Derrubados pela Armadura de Ciclone também sofrem Lentidão em {#}% por {#} segundos.`,
		id: 58,
		maxPoints: 1,
		values: [ "40", "3" ],
		x: 726.745,
		y: -326.92
	},
	"Armadura de Ciclone Preservada": {
		baseSkill: "Armadura de Ciclone",
		connections: [ "Armadura de Ciclone Melhorada" ],
		description: `A cada {#} segundos, Armadura de Ciclone se intensfica, causando Redução de {#}% de dano por {#} segundos.`,
		id: 59,
		maxPoints: 1,
		values: [ "10", "40", "" ],
		x: 754.5,
		y: -466.305
	},
	"Armadura de Ciclone Inata": {
		baseSkill: "Armadura de Ciclone",
		connections: [ "Armadura de Ciclone Melhorada" ],
		description: `Inimigos Derrubados pela Armadura de Ciclone se tornam Vulneráveis por {#} segundos.`,
		id: 60,
		maxPoints: 1,
		values: [ "" ],
		x: 995.69,
		y: -331.115
	},
};

druidData["Pet"] = {
	"Corvos": {
		connections: [ "Pet", "Corvos Melhorado" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passiva: {#} Corvos voam sobre você e periodicamente atacam seus inimigos em {#}% de dano a cada {#} segundos.

Ativa: A área alvo é cercada por corvos, infligindo {#}% de dano por {#} segundos.`,
		id: 62,
		maxPoints: 5,
		values: [ "25.0", "33", "", "89.25", "6", "", "" ],
		x: 0.92,
		y: 293.68
	},
	"Corvos Melhorado": {
		baseSkill: "Corvos",
		connections: [ "Corvos", "Corvos Brutais", "Corvos Ferozes" ],
		description: `Você tem +{#}% de aumento de Chance de Acerto Crítico por {#} segundos contra inimigos acertados por Corvos.`,
		id: 63,
		maxPoints: 1,
		values: [ "13.85", "5" ],
		x: 1.905,
		y: 492.536
	},
	"Corvos Brutais": {
		baseSkill: "Corvos",
		connections: [ "Corvos Melhorado" ],
		description: `{#} Corvos adicionais atacam periodicamente inimigos.`,
		id: 64,
		maxPoints: 1,
		values: [ "2" ],
		x: -148.35,
		y: 612.144
	},
	"Corvos Ferozes": {
		baseSkill: "Corvos",
		connections: [ "Corvos Melhorado" ],
		description: `Inimigos dentro do área de Corvos quando é ativado se tornam Vulneráveis por {#} segundos.`,
		id: 65,
		maxPoints: 1,
		values: [ "3" ],
		x: 134.94,
		y: 611.014
	},
	"Chamado Selvagem": {
		connections: [ "Pet" ],
		description: `Seus Pets infligem x{#}% de bonus de dano.`,
		id: 66,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 550.22,
		y: 0.364
	},
	"Trepadeira de Videira": {
		connections: [ "Pet", "Trepadeira de Videira Melhorada" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passiva: Uma trepadeira de videira periodicamente emerge da terra a cada {#} segundos e aplica {#}% de dano em Veneno por {#} segundos para inimigos na área.

Ativa: Trepadeira estrangula todos inimigos ao redor, Imobilizando eles por {#} segundos e envenenando eles em {#}% de dano por segundos.`,
		id: 67,
		maxPoints: 5,
		values: [ "20.0", "40", "7", "37.8", "6", "2", "31.5", "2" ],
		x: -535.155,
		y: -0.594
	},
	"Trepadeira de Videira Melhorada": {
		baseSkill: "Trepadeira de Videira",
		connections: [ "Trepadeira de Videira", "Trepadeira de Videira Feroz", "Trepadeira de Videira Brutal" ],
		description: `A duração da Imobilização da Trepadeira de Videira é aumentada em {#} second.`,
		id: 68,
		maxPoints: 1,
		values: [ "1" ],
		x: -918.845,
		y: 0.299
	},
	"Trepadeira de Videira Feroz": {
		baseSkill: "Trepadeira de Videira",
		connections: [ "Trepadeira de Videira Melhorada" ],
		description: `A duração do Envenenamento da Trepadeira de Videira é aumentada em {#} segundos.`,
		id: 69,
		maxPoints: 1,
		values: [ "3" ],
		x: -1107.645,
		y: 88.49
	},
	"Trepadeira de Videira Brutal": {
		baseSkill: "Trepadeira de Videira",
		connections: [ "Trepadeira de Videira Melhorada" ],
		description: `Sua Chance de Acerto Crítico é aumentada em +{#}% contra inimigos estrangulados pela Trepadeira de Videira.`,
		id: 70,
		maxPoints: 1,
		values: [ "20" ],
		x: -1097.525,
		y: -94.798
	},
	"Lobos": {
		connections: [ "Pet", "Lobos Melhorados" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Passiva: Sumona {#} lobos que mordem os inimigos em {#}% de dano.

Ativa: Direciona seus lobos para focar um inimigo, saltando para eles e golpeando em {#}% de dano.`,
		id: 71,
		maxPoints: 5,
		values: [ "14.0", "50", "2", "8.19", "36.75" ],
		x: 7.69,
		y: -289.968
	},
	"Lobos Melhorados": {
		baseSkill: "Lobos",
		connections: [ "Lobos", "Alcatéia Brutal", "Alcatéia Feroz" ],
		description: `Lobos infligem x{#}% de dano aumentado para inimigos Imobilizados, Atordoados, com Lentidao ou Envenenados.`,
		id: 139,
		maxPoints: 1,
		values: [ "20" ],
		x: 7.025,
		y: -503.006
	},
	"Alcatéia Brutal": {
		baseSkill: "Lobos",
		connections: [ "Lobos Melhorados" ],
		description: `Quando acerta um Golpe Crítico, seus Lobos ganham +{#}% de Velocidade de Ataque por {#} segundos.`,
		id: 74,
		maxPoints: 1,
		values: [ "", "" ],
		x: -161.61,
		y: -605.781
	},
	"Alcatéia Feroz": {
		baseSkill: "Lobos",
		connections: [ "Lobos Melhorados" ],
		description: `Golpe de Sorte: O ataque dos seus Lobos possuem até {#}% de chance para Fortificar você em {#}%  da sua Vida Base ({#}).`,
		id: 73,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: 170.175,
		y: -604.816
	},
	"Alcance da Natureza": {
		connections: [ "Pet" ],
		description: `Inflinge x{#}% de dano amentado em inimigos Distantes. Dobra esse bônus se eles estiverem também con Lentidão, Atordoados, Imobilizado, ou Derrubados.`,
		id: 75,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -372.585,
		y: -196.762
	},
	"Clareza": {
		connections: [ "Pet" ],
		description: `Ganha {#} Espírito quando transformando na forma Humana.`,
		id: 76,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -373.905,
		y: 228.091
	},
};

druidData["Furia"] = {
	"Exposição Elementar": {
		connections: [ "Atmosfera carregada", "Furia", "Tempestade sem Fim" ],
		description: `Golpe de Sorte: Suas Habilidades de Tempestade possuem até {#}% de chance para tornar inimigos Vulneráveis por  {#} segundos.`,
		id: 80,
		maxPoints: 3,
		values: [ "{20/40/60}", "1" ],
		x: -180.95,
		y: -344.481
	},
	"Atmosfera carregada": {
		connections: [ "Exposição Elementar", "Choque Elétrico", "Mau Presságio" ],
		description: `A cada {#} segundos, uma relâmpago atinge os inimigos Próximos infligindo {#}% de dano.`,
		id: 81,
		maxPoints: 3,
		values: [ "{18/13.5/10}", "47.25" ],
		x: -373.152,
		y: -445.477
	},
	"Choque Elétrico": {
		connections: [ "Atmosfera carregada", "Mau Presságio" ],
		description: `Golpe de Sorte: Infligir dano Elétrico em inimigos possui {#}% de chance para Imobilizar eles por {#} segundos.

Se o alvo já estiver Imobilizado, o dano Elétrico é aumentado em x{#}%.`,
		id: 82,
		maxPoints: 3,
		values: [ "{5/10/15}", "3", "" ],
		x: -373.93,
		y: -598.557
	},
	"Mau Presságio": {
		connections: [ "Atmosfera carregada", "Choque Elétrico", "Tempestade sem Fim" ],
		description: `Golpe de Sorte: Até {#}% de chance quando infligir dano para um inimigo Vulnerável, Imobilizado ou Atordoado que um relâmpago acertar, infligindo {#}% de dano.`,
		id: 83,
		maxPoints: 3,
		values: [ "{10/20/30}", "57.25" ],
		x: 3.305,
		y: -597.918
	},
	"Tempestade sem Fim": {
		connections: [ "Exposição Elementar", "Mau Presságio" ],
		description: `Aumenta a duração do Furacão e Cataclisma em x{#}%.`,
		id: 84,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 2.355,
		y: -446.745
	},
	"Pedregulho": {
		connections: [ "Furia", "Pedregulho Melhorado" ],
		description: `Custo de Espírito: {#}
Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Desenterre uma grande pedra rolante que empurrou e esmaga os inimigos, infligindo {#}% de dano a cada golpe.`,
		id: 85,
		maxPoints: 5,
		values: [ "10.0", "20", "34.65", "" ],
		x: 528.095,
		y: -212.19
	},
	"Pedregulho Melhorado": {
		baseSkill: "Pedregulho",
		connections: [ "Pedregulho", "Pedregulho Natural ", "Pedregulho Selvagem" ],
		description: `Quando Pedregulho chega ao fim de seu caminho, os inimigos atingidos são desacelerados em {#}% por {#} segundos. Se Pedregulho Sobrecarregar, os inimigos ficam Atordoados por {#} segundos.`,
		id: 86,
		maxPoints: 1,
		values: [ "30", "2", "" ],
		x: 826.57,
		y: -328.209
	},
	"Pedregulho Natural ": {
		baseSkill: "Pedregulho",
		connections: [ "Pedregulho Melhorado" ],
		description: `Enquanto você tiver qualquer tipo de Fortificação, Pedregulho tem +{#}% de chance de Acerto Crítico Aumentado.`,
		id: 87,
		maxPoints: 1,
		values: [ "75" ],
		x: 892.545,
		y: -454.143
	},
	"Pedregulho Selvagem": {
		baseSkill: "Pedregulho",
		connections: [ "Pedregulho Melhorado" ],
		description: `A Chance de Acerto Crítico do Pedregulho é aumentada em +{#}% cada vez que inflige dano.`,
		id: 88,
		maxPoints: 1,
		values: [ "3" ],
		x: 1067.875,
		y: -321.359
	},
	"Atropelar": {
		connections: [ "Furia", "Atropelar Melhorado" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Se transformar em um Urso, se torna Imparável, e empurra para frente, infligindo {#}% de dano e Derruba Inimigos.

Inimigos que são Derrubados no terreno levam um adicional de {#}% de dano e são Atordoados por {#} segundos.`,
		id: 89,
		maxPoints: 5,
		values: [ "14.0", "33", "26.25", "47.25", "3" ],
		x: -538.268,
		y: 76.5
	},
	"Atropelar Melhorado": {
		baseSkill: "Atropelar",
		connections: [ "Atropelar", "Atropelar Natural", "Atropelar Selvagem" ],
		description: `Atropelar inflinge x{#}% de bônus de dano. Essebônus é reduzido em x{#}% para cada inimigo acertado depois do primeiro.`,
		id: 90,
		maxPoints: 1,
		values: [ "", "" ],
		x: -913.338,
		y: 77.55
	},
	"Atropelar Natural": {
		baseSkill: "Atropelar",
		connections: [ "Atropelar Melhorado" ],
		description: `Lançar Atropelar garante {#}% da sua Vida Base ({#}) como Fortificação.`,
		id: 91,
		maxPoints: 1,
		values: [ "6", "" ],
		x: -1104.485,
		y: 4.955
	},
	"Atropelar Selvagem": {
		baseSkill: "Atropelar",
		connections: [ "Atropelar Melhorado" ],
		description: `Lançar Atropelar garante {#} Espírito.`,
		id: 92,
		maxPoints: 1,
		values: [ "20" ],
		x: -1110.255,
		y: 154.84
	},
	"Terra Esmagadora": {
		connections: [ "Furia", "Salvaguarda", "Guarda de pedra" ],
		description: `Habilidades de terra infligem x{#}% de dano aumentado para inimigos Lentos, Atordoados, Imobilizados ou Derrubados.`,
		id: 93,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 527.13,
		y: 1.665
	},
	"Salvaguarda": {
		connections: [ "Terra Esmagadora" ],
		description: `Acertos Críticos com Habilidades de Terra Fortificam você em {#}% da sua Vida Base ({#}).`,
		id: 94,
		maxPoints: 3,
		values: [ "", "" ],
		x: 827.855,
		y: -81.72
	},
	"Guarda de pedra": {
		connections: [ "Terra Esmagadora" ],
		description: `Enquanto tiver Fortivicar pro mais que {#}% da sua Vida Máxima, suas Habilidades de Terra infligem x{#}% de dano aumentado.`,
		id: 95,
		maxPoints: 3,
		values: [ "50", "{4/8/12}" ],
		x: 824.875,
		y: 86.045
	},
	"Furacão": {
		connections: [ "Furia", "Furacão Melhorado" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Forma um furacão ao redor que inflige {#}% de dano para os inimigos ao redor por {#} segundos.`,
		id: 99,
		maxPoints: 5,
		values: [ "20.0", "33", "102.37", "8" ],
		x: 255.145,
		y: -347.168
	},
	"Furacão Melhorado": {
		baseSkill: "Furacão",
		connections: [ "Furacão", "Furacão Natural", "Furacão Selvagem" ],
		description: `Inimigos acertados pelo Furacão sofrem Lentidão em {#}% por {#} segundos.`,
		id: 100,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: 394.545,
		y: -539.728
	},
	"Furacão Natural": {
		baseSkill: "Furacão",
		connections: [ "Furacão Melhorado" ],
		description: `Furacão tem {#}% de chance para tornar inimigos Vulneráveis por {#} segundos.`,
		id: 101,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 317.175,
		y: -657.602
	},
	"Furacão Selvagem": {
		baseSkill: "Furacão",
		connections: [ "Furacão Melhorado" ],
		description: `Inimigos afetados pelo Furacão infligem {#}% menos dano.`,
		id: 102,
		maxPoints: 1,
		values: [ "20" ],
		x: 615.43,
		y: -591.031
	},
	"Raiva": {
		connections: [ "Furia", "Raiva Melhorada" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Se transforma em um Lobisomem e executa uma mordida infectada no alvo infligindo {#}% de dano, e aplicando {#}% de dano de Envenenamento por {#} segundos.

Inimigos infectados espalham Raiva para os alvos ao redor.`,
		id: 103,
		maxPoints: 5,
		values: [ "12.0", "50", "29.4", "55.65", "6" ],
		x: 522.33,
		y: 283.86
	},
	"Raiva Melhorada": {
		baseSkill: "Raiva",
		connections: [ "Raiva", "Raiva Natural", "Raiva Selvagem" ],
		description: `O dano de Envenenamento da Raiva também aumenta durante a duração da doença, infligindo x{#}%  de bônus de dano na duração máxima.`,
		id: 104,
		maxPoints: 1,
		values: [ "4" ],
		x: 774.63,
		y: 431.475
	},
	"Raiva Natural": {
		baseSkill: "Raiva",
		connections: [ "Raiva Melhorada" ],
		description: `Raiva espalha {#}% mais rápido.`,
		id: 105,
		maxPoints: 1,
		values: [ "10" ],
		x: 791.44,
		y: 566.785
	},
	"Raiva Selvagem": {
		baseSkill: "Raiva",
		connections: [ "Raiva Melhorada" ],
		description: `Raiva inflige seu dano de Envenamaneto total em {#} segundos ao invés de {#}.`,
		id: 106,
		maxPoints: 1,
		values: [ "", "" ],
		x: 1026.475,
		y: 443.83
	},
	"Reparação": {
		connections: [ "Furia", "Provocação" ],
		description: `Enquanto estiver na forma de Urso, você recebe +{#}% de Cura adicional de todas as fontes.`,
		id: 97,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -545.966,
		y: -78.47
	},
	"Provocação": {
		connections: [ "Reparação" ],
		description: `Enquanto permanecer na forma de Urso por pelo menos {#} segundos, sua próxima Habilidade vai Sobrecarregar.`,
		id: 98,
		maxPoints: 3,
		values: [ "30" ],
		x: -906.653,
		y: -78.28
	},
	"Neurotoxina": {
		connections: [ "Furia", "Garras Tóxicas", "Veneno" ],
		description: `Inimigos Envenenados sofrem lentidão em {#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 0.3,
		y: 283.825
	},
	"Garras Tóxicas": {
		connections: [ "Neurotoxina" ],
		description: `Acertos Críticos na forma de Habilidades de Lobisomen infligem {#}% do seu dano Base como Envenenamento por {#} segundos.`,
		id: 78,
		maxPoints: 3,
		values: [ "{8/16/24}", "4" ],
		x: 142.805,
		y: 424.725
	},
	"Veneno": {
		connections: [ "Neurotoxina" ],
		description: `Inimigos Envenenados recebem x{#}% de Dano Crítico adicional.`,
		id: 166,
		maxPoints: 3,
		values: [ "" ],
		x: -150.834,
		y: 424.885
	},
};

druidData["Ultimate"] = {
	"Fúria de Urso": {
		connections: [ "Ultimate", "Fúria de Urso Primal" ],
		description: `Cooldown: {#} segundos
Se transforma em um Urso Medonho por {#} segundos ganhando x{#}% de bônus de dano e {#}% de Redução de Dano. Bônus de dano é aumentado em {#}% para cada segundo nessa forma.

Mortes extendem a duração em {#} segundo até {#} segundos.`,
		id: 107,
		maxPoints: 1,
		values: [ "60.0", "10", "20", "20", "3", "1", "10" ],
		x: 4.395,
		y: 301.055
	},
	"Fúria de Urso Primal": {
		baseSkill: "Fúria de Urso",
		connections: [ "Fúria de Urso Suprema", "Fúria de Urso" ],
		description: `Você se torna Imparável enquanto Fúria de Urso está ativa.`,
		id: 108,
		maxPoints: 1,
		x: 148.47,
		y: 497.15
	},
	"Fúria de Urso Suprema": {
		baseSkill: "Fúria de Urso",
		connections: [ "Fúria de Urso Primal" ],
		description: `Ganha {#}% da sua Vida Base ({#}) como Fortificação por segundo enquanto Fúria de Urso estiver ativa.`,
		id: 109,
		maxPoints: 1,
		values: [ "3.2", "" ],
		x: -1.065,
		y: 641.92
	},
	"Petrificar": {
		connections: [ "Ultimate", "Petrificar Primal" ],
		description: `Cooldown: {#} segundos
Encaixa todos inimigos próximos em pedra, Paralizando eles por {#} segundos. Você inflige x{#}% de Dano Crítico aumentado para inimigos afetados por Petrificar.

Contra Chefes, o bônus de Dano Crítico é aumentado em x{#}% e sua duração é aumentada em {#} segundos.`,
		id: 110,
		maxPoints: 1,
		values: [ "60.0", "3", "25", "", "" ],
		x: 3.895,
		y: -279.14
	},
	"Petrificar Primal": {
		baseSkill: "Petrificar",
		connections: [ "Petrificar Suprema", "Petrificar" ],
		description: `A duração dos efeitos de Petrificar é aumentada em {#} segundo.`,
		id: 111,
		maxPoints: 1,
		values: [ "1" ],
		x: 193.785,
		y: -466.65
	},
	"Petrificar Suprema": {
		baseSkill: "Petrificar",
		connections: [ "Petrificar Primal" ],
		description: `Matar um inimigo afetado por Petrificar garante {#} Espírito.`,
		id: 112,
		maxPoints: 1,
		values: [ "25" ],
		x: -0.87,
		y: -605.175
	},
	"Postura Defensiva": {
		connections: [ "Ultimate", "Couro Grosso", "Resolução da Natureza" ],
		description: `Aumenta a quantidade de Fortificação que você ganha de todas as origens em +{#}%.`,
		id: 113,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 509.67,
		y: 1.205
	},
	"Couro Grosso": {
		connections: [ "Desenfrado", "Postura Defensiva" ],
		description: `Sempre que for Atordoado, Imobilizado ou Derrubado, Fortificam em {#}% da sua Vida Base ({#}).`,
		id: 114,
		maxPoints: 3,
		values: [ "2.56", "" ],
		x: 781.551,
		y: -84.42
	},
	"Desenfrado": {
		connections: [ "Couro Grosso", "Resolução da Natureza" ],
		description: `Reduz a duração dos Efeitos de Controle Prejudiciais em {#}%. Triplica esse efeito enquanto tiver Fortificação acima de {#}% da sua Vida Máxima.`,
		id: 115,
		maxPoints: 3,
		values: [ "{3/6/9}", "20" ],
		x: 1046.071,
		y: -0.59
	},
	"Resolução da Natureza": {
		connections: [ "Desenfrado", "Postura Defensiva" ],
		description: `{#}% de chance ao ser atingido de fortalecê-lo em {#}% da vida base ({#})`,
		id: 116,
		maxPoints: 3,
		values: [ "{5/10/15}", "1.76", "" ],
		x: 782.325,
		y: 91.16
	},
	"Transformação Rápida": {
		connections: [ "Ultimate", "Fortaleza Natural", "Sentidos Aguçados" ],
		description: `Quando uma Habilidade de Transformação muda sua forma, ela inflige x{#}% de dano aumentado.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -406.14,
		y: 294.95
	},
	"Fortaleza Natural": {
		connections: [ "Transformação Rápida" ],
		description: `Transformações Fortifica você com {#}% de vida base ({#}).`,
		id: 118,
		maxPoints: 3,
		values: [ "{0.56/1.12/1.68}", "" ],
		x: -565.17,
		y: 421.475
	},
	"Sentidos Aguçados": {
		connections: [ "Transformação Rápida" ],
		description: `Após se transformar em Lobisomem ou Urso, ganha {#}% de Redução de dano contra Elites por {#} segundos.`,
		id: 119,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -254.14,
		y: 423.295
	},
	"Dilacerar": {
		connections: [ "Ultimate", "Dilacerar Primal" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Se transforma em um Lobisomem, se torna Imune e rapidamente avança {#} vezes entre os inimigos da área infligindo até {#}% de dano.`,
		id: 120,
		maxPoints: 1,
		values: [ "50.0", "15", "10", "420" ],
		x: -581.85,
		y: 142.205
	},
	"Dilacerar Primal": {
		baseSkill: "Dilacerar",
		connections: [ "Dilacerar Supremo", "Dilacerar" ],
		description: `Cada vez que Dilacerar infligem um Acerto Crítico, Cura em {#}% da sua Vida Máxima ({#}).`,
		id: 121,
		maxPoints: 1,
		values: [ "3", "" ],
		x: -953.225,
		y: 146.245
	},
	"Dilacerar Supremo": {
		baseSkill: "Dilacerar",
		connections: [ "Dilacerar Primal" ],
		description: `O acerto inicial do Dilacerar é um Acerto Crítico garantido e inflige x{#}% de dano aumentado.`,
		id: 122,
		maxPoints: 1,
		values: [ "200" ],
		x: -1155.4,
		y: 290.655
	},
	"Cataclisma": {
		connections: [ "Ultimate", "Cataclisma Primal" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Uma tempestade massiva segue você por {#} segundos. Tornados Derrubam inimigos, relâmpagos acertam de forma Selvagem infligindo {#}% de dano.`,
		id: 123,
		maxPoints: 1,
		values: [ "80.0", "82", "8", "54.6" ],
		x: -581.665,
		y: -104.025
	},
	"Cataclisma Primal": {
		baseSkill: "Cataclisma",
		connections: [ "Cataclisma Supremo", "Cataclisma" ],
		description: `A duração de Cataclisma é aumentada em {#} segundos.`,
		id: 124,
		maxPoints: 1,
		values: [ "2" ],
		x: -951.14,
		y: -111.45
	},
	"Cataclisma Supremo": {
		baseSkill: "Cataclisma",
		connections: [ "Cataclisma Primal" ],
		description: `Os relâmpagos do Cataclisma tornam os inimigos Vulneráveis por 2 segundos.`,
		id: 125,
		maxPoints: 1,
		x: -1152.59,
		y: -253.34
	},
	"Desafio": {
		connections: [ "Ultimate", "Círculo da vida", "Desastre natural" ],
		description: `Habilidades de Magia da Natureza infligem x{#}% de dano aumentado em Elites.`,
		id: 126,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -433.135,
		y: -261.99
	},
	"Círculo da vida": {
		connections: [ "Desafio", "Ressonância" ],
		description: `Habilidades de Magia da Natureza que consomem Espírito Curam você em {#}% da sua Vida Máxima ({#}).`,
		id: 127,
		maxPoints: 3,
		values: [ "{1/2/3}", "" ],
		x: -603.125,
		y: -405.69
	},
	"Ressonância": {
		connections: [ "Desastre natural", "Círculo da vida" ],
		description: `Habilidades de Magia da Natureza causam x{#}% de dano aumentado. Triplique este bônus se uma Habilidade de Terra for a próxima Habilidade lançada após uma Habilidade de Tempestade, ou uma Habilidade de Tempestade for a próxima Habilidade lançada após uma Habilidade de Terra.`,
		id: 128,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -425.3,
		y: -549.32
	},
	"Desastre natural": {
		connections: [ "Desafio", "Ressonância" ],
		description: `Suas Habilidades Terrestres infligem x{#}% de dano aumentado em inimigos Vulneráveis.

Suas Habilidades de Raio infligem x{#}% de dano aumentado em inimigos que estiverem Atordoados, Imobilizados ou Derrubados.`,
		id: 129,
		maxPoints: 3,
		values: [ "{4/8/12}", "{4/8/12}" ],
		x: -257.095,
		y: -407.48
	},
};

druidData["Capstone"] = {
	"Fúria da natureza": {
		connections: [ "Capstone" ],
		description: `Conjurar uma Habilidade de Terra tem {#}% de chance de ativar uma Habilidade de Tempestade gratuita da mesma categoria.

Além disso, lançar uma Habilidade de Tempestade tem {#}% de chance de ativar uma Habilidade de Terra gratuita da mesma categoria.`,
		id: 130,
		maxPoints: 1,
		values: [ "20", "20" ],
		x: 551.172,
		y: -296.755
	},
	"Earthen Might": {
		connections: [ "Capstone" ],
		description: `Golpe de Sorte: Causar dano a inimigos com Habilidades da Terra tem até {#}% de chance de:
  Restaurar todo o seu Espírito
  Fazer com que seus ataques sejam Acertos Críticos garantidos por {#} segundos

Esta chance é aumentada por:
  {#}% para acertos críticos
  {#}% se o alvo estiver Atordoado, Imobilizado ou Derrubado.`,
		id: 131,
		maxPoints: 1,
		values: [ "5", "10", "10", "100" ],
		x: 551.997,
		y: -60.41
	},
	"Ferocidade Lupina": {
		connections: [ "Capstone" ],
		description: `Cada 6ª Habilidade de Lobisomem atinge Acertos Críticos e causa x{#}% de dano a mais.`,
		id: 132,
		maxPoints: 1,
		values: [ "60" ],
		x: -87.174,
		y: 309.645
	},
	"Violência Bestial": {
		connections: [ "Capstone" ],
		description: `Depois de se transformar em um Lobisomem por {#} segundos, ganhe +{#}% de Velocidade de Ataque por {#} segundos.

Após se transformar em um Urso por {#} segundos, cause x{#}% de aumento de dano por {#} segundos.`,
		id: 133,
		maxPoints: 1,
		values: [ "2.5", "20", "15", "2.5", "20", "15" ],
		x: -579.178,
		y: 308.825
	},
	"Tempestade Perfeita": {
		connections: [ "Capstone" ],
		description: `Suas Habilidades de Tempestade concedem {#} Espírito e causam x{#}% de aumento de dano ao causar dano a um inimigo Vulnerável, Imobilizado ou Lento.`,
		id: 134,
		maxPoints: 1,
		values: [ "2", "20" ],
		x: 128.936,
		y: -296.355
	},
	"Força Ursina": {
		connections: [ "Capstone" ],
		description: `Ganhe x{#}% de Vida Máxima adicional enquanto estiver na forma de Urso e por {#} segundos depois de sair da forma de Urso.

Enquanto estiver Saudável, inflige x{#}% de dano aumentado.`,
		id: 135,
		maxPoints: 1,
		values: [ "20", "3", "20" ],
		x: -581.903,
		y: 42.4
	},
};

druidData["Dádivas Espirituais"] = {
	"Veado": {
		id: 158,
		"Prickleskin": {
			values: [ "" ],
			description: `Ganha {#} Espinhos.`,
			id: 142
		},
		"Presente do Veado": {
			values: [ "10" ],
			description: `Ganha +{#} de Espírito Máximo.`,
			id: 143
		},
		"Cautela": {
			values: [ "10" ],
			description: `Recebe {#}% de dano reduzido de Elites.`,
			id: 144
		},
		"Besta Vantajosa": {
			values: [ "15" ],
			description: `Reduz a duraçao de Efeitos de Controle Prejudiciais em {#}%.`,
			id: 145
		}
	},
	"Águia": {
		id: 159,
		"Garras de Foice": {
			values: [ "5" ],
			description: `Ganha +{#}% de aumento na Chance de Acerto Crítico.`,
			id: 146
		},
		"Pena de Ferro": {
			values: [ "10" ],
			description: `Ganha x{#}% de Vida Máxima.`,
			id: 147
		},
		"Ataques Arrebatadores": {
			values: [ "10" ],
			description: `Ganha +{#}% de Velocidade de Ataque.`,
			id: 148
		},
		"Fúria Aviária": {
			values: [ "30" ],
			description: `Ganha x{#}% de Dano Crítico.`,
			id: 149
		}
	},
	"Cobra": {
		id: 161,
		"Batida Obisidiana": {
			values: [ "" ],
			description: `A cada {#} mortes vai fazer sua próxima Habilidade Terrestre Sobrecarregar.`,
			id: 154
		},
		"Sobrecarga": {
			values: [ "20", "60" ],
			description: `Golpe de Sorte: Causar dano de Raio tem até {#}% de chance de fazer o alvo emitir uma descarga estática, causando {#}% de dano de Raio para os inimigos ao redor.`,
			id: 155
		},
		"Masoquísta": {
			values: [ "3", "" ],
			description: `Acertos Críticos com Habilidades de Transformação Curam você em {#}% da sua Vida Máxima ({#}).`,
			id: 156
		},
		"Calmaria Antes da Tempestade": {
			values: [ "15", "2" ],
			description: `Golpe de Sorte: As Habilidades de Magia da Natureza têm até {#}% de chance de reduzir o Tempo de Recarga da sua Habilidade Suprema em {#} segundos.`,
			id: 157
		}
	},
	"Lobo": {
		id: 160,
		"Alfa": {
			values: [ "20" ],
			description: `Golpes Críticos têm até {#}% de chance de resetar os Tempos de Recarga de suas Habilidades de Mascote.`,
			id: 150
		},
		"Energizar": {
			values: [ "15", "10" ],
			description: `Golpe de Sorte: Causar dano tem até {#}% de chance de restaurar {#} Espírito.`,
			id: 151
		},
		"Reforçar": {
			values: [ "10" ],
			description: `Fortifica em {#}% de sua Vida Máxima ao usar uma Habilidade Defensiva.`,
			id: 152
		},
		"Calamidade": {
			values: [ "25" ],
			description: `Estenda a duração das suas Habilidades Ultimate em {#}%.`,
			id: 153
		}
	}
};

export { druidData };