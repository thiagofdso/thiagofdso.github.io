let necromancerData = {};

necromancerData["Trunk Data"] = {
	"Básico": {
		connections: [ "Principais" ],
		x: 0,
		y: 0
	},
	"Principais": {
		connections: [ "Macabras" ],
		requiredPoints: 2,
		x: -1193.775,
		y: 612.52
	},
	"Macabras": {
		connections: [ "Corrupção" ],
		requiredPoints: 6,
		x: 507.47,
		y: 1513.16
	},
	"Corrupção": {
		connections: [ "Convocação" ],
		requiredPoints: 11,
		x: -1200.65,
		y: 2438.479
	},
	"Convocação": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 507.125,
		y: 3343.385
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1201.801,
		y: 4246.085
	},
	"Capstone": {
		requiredPoints: 33,
		x: -10.884,
		y: 4865.98
	},
	"Livro dos Mortos": {
		x: 2500,
		y: 0
	},
};

necromancerData["Básico"] = {
	"Decompor": {
		connections: [ "Decompor Melhorado", "Básico" ],
		description: `Gera Essência: {#} por segundo
Chande de Golpe de Sorte: {#}%
Rasgar a carne de um inimigo, causando {#}% de dano por segundo e formando um Cadáver utilizável com a carne a cada {#} segundos.`,
		id: 0,
		maxPoints: 5,
		values: [ "7", "40", "30", "2.5" ],
		x: -217.817,
		y: -258.02
	},
	"Decompor Melhorado": {
		baseSkill: "Decompor",
		connections: [ "Decompor", "Decompor do Acólito", "Decompor do Iniciado" ],
		description: `Se um inimigo morre enquanto sofre Decompor, você ganha {#} Essência.`,
		id: 1,
		maxPoints: 1,
		values: [ "10" ],
		x: -392.051,
		y: -430.79
	},
	"Decompor do Acólito": {
		baseSkill: "Decompor",
		connections: [ "Decompor Melhorado" ],
		description: `Você e seus Lacaios infligem x{#}% de dano aumentado em inimigos que sofrerem Decompor.`,
		id: 2,
		maxPoints: 1,
		values: [ "10" ],
		x: -632.476,
		y: -478.095
	},
	"Decompor do Iniciado": {
		baseSkill: "Decompor",
		connections: [ "Decompor Melhorado" ],
		description: `Decompor causa Lentidão nos Inimigos em {#}%.`,
		id: 3,
		maxPoints: 1,
		values: [ "30" ],
		x: -371.68,
		y: -569.72
	},
	"Foice": {
		connections: [ "Foice Melhorada", "Básico" ],
		description: `Gera Essência: {#} por inimigo acertado
Chande de Golpe de Sorte: {#}%
Varra uma foice etérea à sua frente, causando {#}% de dano. Atingir um inimigo com Foice aumenta sua Redução de Dano em {#}% por {#} segundos.`,
		id: 4,
		maxPoints: 5,
		values: [ "4", "17", "12", "15", "2" ],
		x: -498.75,
		y: -99.975
	},
	"Foice Melhorada": {
		baseSkill: "Foice",
		connections: [ "Foice", "Foice do Iniciado", "Foice do Acólito" ],
		description: `Se um inimigo acertado pela Foice morre em {#} segundos, você ganha +{#}% de Velocidade de Ataque por {#} segundos.`,
		id: 119,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: -830.87,
		y: -161.91
	},
	"Foice do Iniciado": {
		baseSkill: "Foice",
		connections: [ "Foice Melhorada" ],
		description: `Foice mata instantaneamente inimigos abaixo de {#}% de Vida.

Isso não afeta chefes ou jogadores.`,
		id: 6,
		maxPoints: 1,
		values: [ "5" ],
		x: -921.775,
		y: -287.89
	},
	"Foice do Acólito": {
		baseSkill: "Foice",
		connections: [ "Foice Melhorada" ],
		description: `Foice forma um Cadáver sobre o primeiro inimigo acertado. Pode ocorrer somente a cada {#} segundos.`,
		id: 7,
		maxPoints: 1,
		values: [ "5" ],
		x: -1072.505,
		y: -107.4
	},
	"Hemorragia": {
		connections: [ "Hemorragia Melhorada", "Básico" ],
		description: `Gera Essência: {#}
Chande de Golpe de Sorte: {#}%
Estoura o sangue de um inimigo, causando {#}% de dano. Hemorragia tem {#}% de chance de formar um Orbe de Sangue.`,
		id: 8,
		maxPoints: 5,
		values: [ "7", "40", "25", "20" ],
		x: 214.396,
		y: -265.9
	},
	"Hemorragia Melhorada": {
		baseSkill: "Hemorragia",
		connections: [ "Hemorragia", "Hemorragia do Acólito", "Hemorragia do Iniciado" ],
		description: `Depois de pegar um Orbe de Sangue, sua próxima Hemorragia também causa dano aos inimigos ao redor de seu alvo e concede {#} Essência adicional por inimigo acertado.`,
		id: 9,
		maxPoints: 1,
		values: [ "2" ],
		x: 356.625,
		y: -432.41
	},
	"Hemorragia do Acólito": {
		baseSkill: "Hemorragia",
		connections: [ "Hemorragia Melhorada" ],
		description: `Hemorragia ganha um adicional de +{#}% de Velocidade de Ataque enquanto estiver Saudável.`,
		id: 10,
		maxPoints: 1,
		values: [ "20" ],
		x: 607.455,
		y: -493.645
	},
	"Hemorragia do Iniciado": {
		baseSkill: "Hemorragia",
		connections: [ "Hemorragia Melhorada" ],
		description: `Hemorragia concede {#}% de Vida Base ({#}) como Fortificação cada vez que atinge um inimigo, e tem {#}% de chance por inimigo acertado de Fortificar você por {#}% de Vida Base ({#}).`,
		id: 11,
		maxPoints: 1,
		values: [ "0.64", "", "1.5", "100", "" ],
		x: 328.303,
		y: -569.91
	},
	"Lascas de Osso": {
		connections: [ "Lascas de Osso Melhorado", "Básico" ],
		description: `Gera Essência: {#}
Chande de Golpe de Sorte: {#}%
Dispare 3 lascas de osso, causando {#}% de dano cada. Cada vez que um inimigo for atingido pelo mesmo golpe de Lascas de Osso, você ganha {#} Essência.`,
		id: 12,
		maxPoints: 5,
		values: [ "5", "17", "22.5", "1" ],
		x: 488.405,
		y: -91.8
	},
	"Lascas de Osso Melhorado": {
		baseSkill: "Lascas de Osso",
		connections: [ "Lascas de Osso", "Lascas de Osso do Acólito", "Lascas de Osso do Iniciado" ],
		description: `Lascas de Osso tem {#}% de chance de disparar {#} projéteis adicionais se lançado enquanto você tiver {#} ou mais Essência.`,
		id: 13,
		maxPoints: 1,
		values: [ "30", "2", "50" ],
		x: 877.154,
		y: -161.18
	},
	"Lascas de Osso do Acólito": {
		baseSkill: "Lascas de Osso",
		connections: [ "Lascas de Osso Melhorado" ],
		description: `Atingir o mesmo inimigo pelo menos {#} vezes com o mesmo elenco de Lascas de Osso concede +{#}% de Chance de Acerto Crítico por {#} segundos.`,
		id: 120,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: 1137.875,
		y: -122.755
	},
	"Lascas de Osso do Iniciado": {
		baseSkill: "Lascas de Osso",
		connections: [ "Lascas de Osso Melhorado" ],
		description: `Lascas de Osso tem {#}% de chance por acerto de tornar os inimigos Vulneráveis por {#} segundos.`,
		id: 15,
		maxPoints: 1,
		values: [ "20", "2" ],
		x: 989.495,
		y: -302.135
	},
};

necromancerData["Principais"] = {
	"Praga": {
		connections: [ "Praga Melhorada", "Principais" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Libere uma praga concentrada que causa {#}% de dano e deixa para trás uma área contaminada, causando {#}% de dano em {#} segundos.`,
		id: 16,
		maxPoints: 5,
		values: [ "25", "40", "30", "80", "6" ],
		x: -543.69,
		y: 87.56
	},
	"Praga Melhorada": {
		baseSkill: "Praga",
		connections: [ "Praga", "Praga Paranormal", "Praga Supernatural " ],
		description: `Praga causa Lentidão nos inimigos em {#}%.`,
		id: 17,
		maxPoints: 1,
		values: [ "25" ],
		x: -922.335,
		y: 147.785
	},
	"Praga Paranormal": {
		baseSkill: "Praga",
		connections: [ "Praga Melhorada" ],
		description: `Praga tem {#}% de chance de Imobilizar os inimigos por {#} segundos no impacto.`,
		id: 18,
		maxPoints: 1,
		values: [ "10", "2" ],
		x: -1096.55,
		y: 268.61
	},
	"Praga Supernatural ": {
		baseSkill: "Praga",
		connections: [ "Praga Melhorada" ],
		description: `Você e seus Lacaios causam x{#}% de dano a mais aos inimigos dentro de Praga.`,
		id: 19,
		maxPoints: 1,
		values: [ "10" ],
		x: -1190.43,
		y: 103.745
	},
	"Cortar": {
		connections: [ "Cortar Melhorado", "Principais" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Um espectro seu avança e ataca com sua foice causando {#}% de dano, então retorna para você e ataca novamente causando {#}% de dano.`,
		id: 20,
		maxPoints: 5,
		values: [ "20", "20", "42", "" ],
		x: -281.15,
		y: 258.115
	},
	"Cortar Melhorado": {
		baseSkill: "Cortar",
		connections: [ "Cortar", "Cortar Paranormal", "Cortar Supernatural" ],
		description: `Cortar causa dano aos inimigos ao longo de seu caminho em {#}% de seu dano inicial.`,
		id: 21,
		maxPoints: 1,
		values: [ "" ],
		x: -574.38,
		y: 439.87
	},
	"Cortar Paranormal": {
		baseSkill: "Cortar",
		connections: [ "Cortar Melhorado" ],
		description: `A cada 4 lançamentos de Cortar, os inimigos ficam Vulneráveis por {#} segundos.`,
		id: 22,
		maxPoints: 1,
		values: [ "" ],
		x: -840.68,
		y: 482.04
	},
	"Cortar Supernatural": {
		baseSkill: "Cortar",
		connections: [ "Cortar Melhorado" ],
		description: `Cortar causa x{#}% de dano a mais para cada Lacaio que você possui ao ser lançado.`,
		id: 23,
		maxPoints: 1,
		values: [ "" ],
		x: -597.79,
		y: 590.745
	},
	"Surto de Sangue": {
		connections: [ "Surto de Sangue Melhorado", "Principais" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Extraia sangue dos inimigos, causando {#}% de dano, e expulse uma nova de sangue, causando {#}% de dano. O dano da nova de Surto de Sangue é aumentado em x{#}% por inimigo drenado, até x{#}`,
		id: 24,
		maxPoints: 5,
		values: [ "30", "20", "20", "50", "10", "50" ],
		x: -542.58,
		y: -124.71
	},
	"Surto de Sangue Melhorado": {
		baseSkill: "Surto de Sangue",
		connections: [ "Surto de Sangue", "Surto de Sangue Supernatural", "Surto de Sangue Paranormal" ],
		description: `Surto de Sangue Cura você em {#}% de sua Vida Máxima ({#}) ao tirar sangue de inimigos. Se {#} ou mais inimigos forem retirados, então Cure por mais {#}% de sua Vida Máxima ({#}).`,
		id: 25,
		maxPoints: 1,
		values: [ "1", "", "", "", "" ],
		x: -912.83,
		y: -200.94
	},
	"Surto de Sangue Supernatural": {
		baseSkill: "Surto de Sangue",
		connections: [ "Surto de Sangue Melhorado" ],
		description: `Cada vez que um inimigo é atingido pela nova de Surto de Sangue, você é fortificado com {#}% de vida base ({#}). Enquanto você tem Fortificar por mais de {#}% de sua Vida Máxima, Surto de Sangue causa x{#}% de dano a mais.`,
		id: 26,
		maxPoints: 1,
		values: [ "", "", "", "" ],
		x: -1048.315,
		y: -328.79
	},
	"Surto de Sangue Paranormal": {
		baseSkill: "Surto de Sangue",
		connections: [ "Surto de Sangue Melhorado" ],
		description: `Se um inimigo for danificado pela nova de Surto de Sangue enquanto você estiver Saudável, ganhe 1 acúmulo de Sangue Esmagador. Quando você tiver 5 acúmulos de Sangue Esmagador, seu próximo Surto de Sangue Sobrecarrega.`,
		id: 27,
		maxPoints: 1,
		x: -1170.475,
		y: -160.385
	},
	"Lança de Sangue": {
		connections: [ "Lança de Sangue Melhorada", "Principais" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Lança uma lança de sangue que permanece em um inimigo por {#} segundos, causando {#}% de dano ao inimigo e a todos os outros inimigos lancetados.`,
		id: 28,
		maxPoints: 5,
		values: [ "10", "40", "3", "45" ],
		x: -278.15,
		y: -274.3
	},
	"Lança de Sangue Melhorada": {
		baseSkill: "Lança de Sangue",
		connections: [ "Lança de Sangue", "Lança de Sangue Supernatural", "Lança de Sangue Paranormal " ],
		description: `Lança de Sangue perfura os inimigos que estão atualmente afetados, causando {#}% de dano reduzido aos inimigos subsequentes após o primeiro.`,
		id: 29,
		maxPoints: 1,
		values: [ "15" ],
		x: -470.775,
		y: -466.65
	},
	"Lança de Sangue Supernatural": {
		baseSkill: "Lança de Sangue",
		connections: [ "Lança de Sangue Melhorada" ],
		description: `Depois de lançar Lança de Sangue {#} vezes, seu próximo  Lança de Sangue é garantido para Sobrecarregar e gera uma Orbe de Sangue sob o primeiro inimigo atingido.`,
		id: 30,
		maxPoints: 1,
		values: [ "" ],
		x: -445.5,
		y: -604.16
	},
	"Lança de Sangue Paranormal ": {
		baseSkill: "Lança de Sangue",
		connections: [ "Lança de Sangue Melhorada" ],
		description: `Enquanto pelo menos {#} inimigos ou um Chefe estiverem afetados por Lança de Sangue, você ganha +{#}% de Velocidade de Ataque e o custo de Essência de Lança de Sangue é reduzido em {#}.`,
		id: 31,
		maxPoints: 1,
		values: [ "2", "10", "1" ],
		x: -727.57,
		y: -520.325
	},
	"Lança de Osso": {
		connections: [ "Lança de Osso Melhorado", "Principais" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Conjure uma lança de osso do chão, causando {#}% de dano e perfurando os inimigos.`,
		id: 32,
		maxPoints: 5,
		values: [ "25", "50", "85" ],
		x: 551.14,
		y: -0.17
	},
	"Lança de Osso Melhorado": {
		baseSkill: "Lança de Osso",
		connections: [ "Lança de Osso", "Lança de Osso Paranormal", "Lança de Osso Supernatural" ],
		description: `Lança de Osso quebra em {#} fragmentos quando é destruído, causando {#}% de dano cada.`,
		id: 33,
		maxPoints: 1,
		values: [ "", "10" ],
		x: 968.272,
		y: 0.325
	},
	"Lança de Osso Paranormal": {
		baseSkill: "Lança de Osso",
		connections: [ "Lança de Osso Melhorado" ],
		description: `Lança de Osso tem +{#}% de aumento na Chance de Acerto Crítico. Se o projétil primário de Lança de Osso Acertar Criticamente, ele dispara {#} estilhaços de ossos adicionais ao ser destruído.`,
		id: 34,
		maxPoints: 1,
		values: [ "", "" ],
		x: 1180.912,
		y: 94.56
	},
	"Lança de Osso Supernatural": {
		baseSkill: "Lança de Osso",
		connections: [ "Lança de Osso Melhorado" ],
		description: `Lança de Osso torna o primeiro inimigo atingido Vulnerável por {#} segundos.`,
		id: 35,
		maxPoints: 1,
		values: [ "" ],
		x: 1183.487,
		y: -89.765
	},
	"Energia sem Vida": {
		connections: [ "Principais", "Imperfeitamente Equilibrado" ],
		description: `Sua Essência máxima é aumentada em {#}.`,
		id: 36,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 149.05,
		y: -273.915
	},
	"Imperfeitamente Equilibrado": {
		connections: [ "Energia sem Vida" ],
		description: `Suas Habilidades Principais custam x{#}% a mais de Essência, mas causam x{#}% de aumento de dano.`,
		id: 37,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 150.19,
		y: -449.76
	},
	"Carne Cortada": {
		connections: [ "Principais" ],
		description: `Golpe de Sorte: Seu dano tem até {#}% de chance de criar um Cadáver no local do alvo.

Esta chance é dobrada contra chefes.`,
		id: 121,
		maxPoints: 3,
		values: [ "" ],
		x: 150.135,
		y: 264.425
	},
};

necromancerData["Macabras"] = {
	"Explosão de Cadáver": {
		connections: [ "Explosão de Cadáver Melhorada", "Macabras" ],
		description: `Essência Cost: {#}
Chande de Golpe de Sorte: {#}%
Detone um Cadáver, causando {#}% de dano aos inimigos ao redor.`,
		id: 39,
		maxPoints: 5,
		values: [ "", "40", "75" ],
		x: -570.055,
		y: -2.03
	},
	"Explosão de Cadáver Melhorada": {
		baseSkill: "Explosão de Cadáver",
		connections: [ "Explosão de Cadáver", "Explosão de Cadáver Arruinada", "Explosão de Cadáver Atormentada " ],
		description: `O raio da Explosão de Cadaver é aumentado em {#}%.`,
		id: 40,
		maxPoints: 1,
		values: [ "15" ],
		x: -964.178,
		y: -2.155
	},
	"Explosão de Cadáver Arruinada": {
		baseSkill: "Explosão de Cadáver",
		connections: [ "Explosão de Cadáver Melhorada" ],
		description: `A Explosão de Cadáver torna-se uma Habilidade das Trevas e, em vez de explodir, libera um miasma vil, causando {#}% de Dano de Sombra em {#} segundos.`,
		id: 122,
		maxPoints: 1,
		values: [ "", "" ],
		x: -1186.325,
		y: -102.68
	},
	"Explosão de Cadáver Atormentada ": {
		baseSkill: "Explosão de Cadáver",
		connections: [ "Explosão de Cadáver Melhorada" ],
		description: `Explosão de Cadáver causa x{#}% a mais de dano a inimigos que estão Lentos, Atordoados ou Vulneráveis. Esses bônus de dano podem se acumular.`,
		id: 123,
		maxPoints: 1,
		values: [ "" ],
		x: -1183.965,
		y: 98.81
	},
	"Colheita Terrível": {
		connections: [ "Alimentado pela Morte", "Macabras" ],
		description: `Consumir um Cadáver gera {#} Essência.`,
		id: 43,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -3.265,
		y: 300.7
	},
	"Alimentado pela Morte": {
		connections: [ "Colheita Terrível" ],
		description: `Você causa x{#}% de dano a mais por {#} segundos depois de consumir um Cadáver.`,
		id: 44,
		maxPoints: 3,
		values: [ "{4/8/12}", "4" ],
		x: -0.3,
		y: 530.055
	},
	"Armadura com Espinhos": {
		connections: [ "Macabras" ],
		description: `Ganha {#} Espinhos.`,
		id: 124,
		maxPoints: 3,
		values: [ "" ],
		x: 401.03,
		y: -216.235
	},
	"Névoa de Sangue": {
		connections: [ "Névoa de Sangue Melhorada", "Macabras" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Dispersa-se em uma névoa sangrenta, tornando-se Imune por {#} segundos. Sua Velocidade de Movimento é reduzida em {#}% e você periodicamente causa {#}% de dano aos inimigos e Cura por {#}% de sua Vida Máxima ({#}).`,
		id: 46,
		maxPoints: 5,
		values: [ "", "", "", "", "", "", "" ],
		x: 6.515,
		y: -278.795
	},
	"Névoa de Sangue Melhorada": {
		baseSkill: "Névoa de Sangue",
		connections: [ "Névoa de Sangue", "Névoa de Sangue Medonha", "Névoa de Sangue Terrível" ],
		description: `Lançar uma Skill que Sobrecarrega reduz o cooldown de Névoa de Sangue em {#} segundos.`,
		id: 47,
		maxPoints: 1,
		values: [ "" ],
		x: 4.72,
		y: -504.595
	},
	"Névoa de Sangue Medonha": {
		baseSkill: "Névoa de Sangue",
		connections: [ "Névoa de Sangue Melhorada" ],
		description: `Névoa de Sangue deixa um Cadáver a cada {#} segundo.`,
		id: 48,
		maxPoints: 1,
		values: [ "" ],
		x: -173.752,
		y: -623.38
	},
	"Névoa de Sangue Terrível": {
		baseSkill: "Névoa de Sangue",
		connections: [ "Névoa de Sangue Melhorada" ],
		description: `Névoa de Sangue Fortifica você em {#}% de Vida Base ({#}) cada vez que atinge um inimigo.`,
		id: 49,
		maxPoints: 1,
		values: [ "", "" ],
		x: 195.505,
		y: -624.15
	},
	"Prisão de Ossos": {
		connections: [ "Prisão de Ossos Melhorada", "Macabras" ],
		description: `Cooldown: {#} segundos
Desenterre uma prisão de osso com {#} Vida que circunda a área alvo por {#} segundos.`,
		id: 50,
		maxPoints: 5,
		values: [ "20.0", "12", "6" ],
		x: 411.49,
		y: 218.61
	},
	"Prisão de Ossos Melhorada": {
		baseSkill: "Prisão de Ossos",
		connections: [ "Prisão de Ossos", "Prisão de Ossos Medonha", "Prisão de Ossos Terrível" ],
		description: `Se um inimigo for aprisionado por Prisão de Ossos, ganhe {#} Essência, mais {#} adicionais por inimigo aprisionado.`,
		id: 51,
		maxPoints: 1,
		values: [ "3", "" ],
		x: 725.485,
		y: 358.205
	},
	"Prisão de Ossos Medonha": {
		baseSkill: "Prisão de Ossos",
		connections: [ "Prisão de Ossos Melhorada" ],
		description: `Os inimigos dentro da Prisão de Ossos se tornam Vulneráveis.`,
		id: 52,
		maxPoints: 1,
		x: 769.465,
		y: 494.305
	},
	"Prisão de Ossos Terrível": {
		baseSkill: "Prisão de Ossos",
		connections: [ "Prisão de Ossos Melhorada" ],
		description: `Fortifica em {#}% de Vida Base ({#}) para cada inimigo preso por Prisão de Ossos.`,
		id: 53,
		maxPoints: 1,
		values: [ "1.5", "" ],
		x: 998.005,
		y: 367.725
	},
	"Maestria do Guerreiro Esquelético": {
		connections: [ "Macabras" ],
		description: `Aumente o dano e a Vida de seus Guerreiros Esqueléticos em x{#}%.`,
		id: 54,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 562.475,
		y: -0.165
	},
};

necromancerData["Corrupção"] = {
	"Iron Maiden": {
		connections: [ "Melhorado Iron Maiden", "Corrupção" ],
		description: `Essência Cost: {#}
Curse the target area. Enemies afflicted by Iron Maiden take {#}% damage each time they deal direct damage. Lasts {#} segundos.`,
		id: 55,
		maxPoints: 5,
		values: [ "10", "10", "10" ],
		x: -452.675,
		y: -233.982
	},
	"Melhorado Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Iron Maiden", "Horrid Iron Maiden", "Abhorrent Iron Maiden" ],
		description: `Iron Maiden no longer costs Essência. Instead, gain {#} Essência for each enemy Cursed. Does not work with enemies who are already Cursed with Iron Maiden.`,
		id: 56,
		maxPoints: 1,
		values: [ "5" ],
		x: -771.585,
		y: -385.35
	},
	"Horrid Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Melhorado Iron Maiden" ],
		description: `When at least {#} enemies are afflicted by Iron Maiden, its damage is increased by x{#}%.`,
		id: 57,
		maxPoints: 1,
		values: [ "3", "15" ],
		x: -806.375,
		y: -523.514
	},
	"Abhorrent Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Melhorado Iron Maiden" ],
		description: `Heal for {#}% of your Maximum Life ({#}) when an enemy dies while afflicted with Iron Maiden.`,
		id: 58,
		maxPoints: 1,
		values: [ "5", "" ],
		x: -1050.125,
		y: -372.255
	},
	"Skeletal Mage Mastery": {
		connections: [ "Corrupção" ],
		description: `Increase the damage and Life of your Skeletal Mages by x{#}%.`,
		id: 59,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -2.93,
		y: 322.683
	},
	"Amplify Damage": {
		connections: [ "Corrupção" ],
		description: `You deal x{#}% increased damage to Cursed enemies.`,
		id: 60,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -558.415,
		y: 1.584
	},
	"Decrepify": {
		connections: [ "Melhorado Decrepify", "Corrupção" ],
		description: `Essência Cost: {#}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {#}% and deal {#}% less damage for {#} segundos.`,
		id: 61,
		maxPoints: 5,
		values: [ "10", "50", "25", "10" ],
		x: -457.14,
		y: 240.226
	},
	"Melhorado Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Decrepify", "Abhorrent Decrepify", "Horrid Decrepify" ],
		description: `Golpe de Sorte: Enemies hit while afflicted with Decrepify have up to a {#}% chance to Stun them for {#} segundos.`,
		id: 62,
		maxPoints: 1,
		values: [ "10", "2" ],
		x: -757.225,
		y: 392.89
	},
	"Abhorrent Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Melhorado Decrepify" ],
		description: `Golpe de Sorte: Enemies hit while afflicted with Decrepify have up to a {#}% chance to reduce your active Cooldowns by {#} second.`,
		id: 63,
		maxPoints: 1,
		values: [ "15", "1.5" ],
		x: -1026.955,
		y: 390.108
	},
	"Horrid Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Melhorado Decrepify" ],
		description: `When you or your Lacaios hit an enemy afflicted with Decrepify below {#}% Life, they are instantly killed. Does not work on Bosses.`,
		id: 64,
		maxPoints: 1,
		values: [ "10" ],
		x: -810.09,
		y: 533.678
	},
	"Death's Embrace": {
		connections: [ "Corrupção" ],
		description: `Close enemies take x{#}% more damage from you and deal {#}% less damage to you.`,
		id: 65,
		maxPoints: 3,
		values: [ "{2/4/6}", "{3/6/9}" ],
		x: 1.235,
		y: -289.131
	},
	"Death's Reach": {
		connections: [ "Corrupção" ],
		description: `You deal x{#}% increased damage to Distant enemies.`,
		id: 66,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 576.795,
		y: 2.084
	},
};

necromancerData["Convocação"] = {
	"Corpse Tendrils": {
		connections: [ "Melhorado Corpse Tendrils", "Convocação" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Veins burst out of a Corpse, Pulling in enemies, Stunning them for {#} segundos, and dealing {#}% damage to them. Does not consume the Corpse.`,
		id: 67,
		maxPoints: 5,
		values: [ "11.0", "20", "3", "20" ],
		x: 444.22,
		y: -228.515
	},
	"Melhorado Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Corpse Tendrils", "Atormentada Corpse Tendrils", "Arruinada Corpse Tendrils" ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by {#}% before being Pulled.`,
		id: 68,
		maxPoints: 1,
		values: [ "50" ],
		x: 740.58,
		y: -392.601
	},
	"Atormentada Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Melhorado Corpse Tendrils" ],
		description: `Enemies damaged by Corpse Tendrils are made Vulnerable for {#} segundos.`,
		id: 125,
		maxPoints: 1,
		values: [ "" ],
		x: 999.47,
		y: -388.527
	},
	"Arruinada Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Melhorado Corpse Tendrils" ],
		description: `Corpse Tendrils has a {#}% chance when damaging enemies to drop a Blood Orb.`,
		id: 126,
		maxPoints: 1,
		values: [ "" ],
		x: 762.735,
		y: -532.53
	},
	"Foiceer's Pursuit": {
		connections: [ "Gloom", "Crippling Darkness", "Convocação" ],
		description: `Damaging enemies with Darkness Skills increases your Movement Speed by +{#}% for {#} segundos.`,
		id: 71,
		maxPoints: 3,
		values: [ "{5/10/15}", "3" ],
		x: -539.448,
		y: 0.085
	},
	"Gloom": {
		connections: [ "Foiceer's Pursuit", "Terror" ],
		description: `When you damage enemies with Darkness Skills, they take x{#}% increased Shadow Damage from you and your Lacaios for {#} segundos, stacking up to {#} times.`,
		id: 72,
		maxPoints: 3,
		values: [ "{2/4/6}", "2", "3" ],
		x: -812.116,
		y: -96.84
	},
	"Terror": {
		connections: [ "Gloom", "Crippling Darkness" ],
		description: `Darkness Skills deal x{#}% bonus damage to enemies who are Slowed, and x{#}% bonus damage to enemies who are Stunned or Immobilized. These bonuses stack and apply to Shadow Damage dealt by your Lacaios.`,
		id: 73,
		maxPoints: 3,
		values: [ "{5/10/15}", "" ],
		x: -1072.725,
		y: 1.175
	},
	"Crippling Darkness": {
		connections: [ "Foiceer's Pursuit", "Terror" ],
		description: `Golpe de Sorte: Darkness Skills have up to a {#}% chance to Stun for {#} segundos.`,
		id: 74,
		maxPoints: 3,
		values: [ "15", "{1/2/3}" ],
		x: -812.306,
		y: 96.35
	},
	"Gruesome Mending": {
		connections: [ "Transfusion", "Coalesced Blood", "Convocação" ],
		description: `While below 50% Life, you receive +{#}% more Healing from all sources.`,
		id: 127,
		maxPoints: 3,
		values: [ "" ],
		x: 1.18,
		y: -309.335
	},
	"Transfusion": {
		connections: [ "Tides of Blood", "Gruesome Mending" ],
		description: `Blood Orbs also Heal your Lacaios for {#}% of the amount.`,
		id: 77,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 191.07,
		y: -457.803
	},
	"Tides of Blood": {
		connections: [ "Transfusion", "Coalesced Blood" ],
		description: `Your Blood Skills deal x{#}% increased Overpower damage. This bonus is doubled while you are Healthy.`,
		id: 78,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 3.55,
		y: -609.869
	},
	"Coalesced Blood": {
		connections: [ "Drain Vitality", "Tides of Blood", "Gruesome Mending" ],
		description: `While Healthy your Blood Skills deal x{#}% increased damage.`,
		id: 76,
		maxPoints: 3,
		values: [ "" ],
		x: -190.339,
		y: -455.995
	},
	"Drain Vitality": {
		connections: [ "Coalesced Blood" ],
		description: `Golpe de Sorte: Hitting enemies with Blood Skills has up to a {#}% chance to Fortify you for {#}% Base Life ({#}).`,
		id: 79,
		maxPoints: 3,
		values: [ "{25/50/75}", "1", "" ],
		x: -382.557,
		y: -610.311
	},
	"Bone Espirito": {
		connections: [ "Melhorado Bone Espirito", "Convocação" ],
		description: `Cooldown: {#} segundos
Essência Cost: All Remaining Essência
Chande de Golpe de Sorte: {#}%
Consume all of your Essência to conjure a Espirito of bone that seeks enemies. Upon reaching an enemy, the Espirito explodes, dealing {#}% damage to the target and all surrounding enemies. Damage is increased by x{#}% for each point of Essência spent casting Bone Espirito.`,
		id: 80,
		maxPoints: 5,
		values: [ "12.0", "33", "80", "3" ],
		x: 441.425,
		y: 214.93
	},
	"Melhorado Bone Espirito": {
		baseSkill: "Bone Espirito",
		connections: [ "Bone Espirito", "Medonha Bone Espirito", "Terrível Bone Espirito" ],
		description: `If Bone Espirito Critically Strikes, its Cooldown is reduced by {#} segundos. This effect can only happen once per cast.`,
		id: 81,
		maxPoints: 1,
		values: [ "6" ],
		x: 737.945,
		y: 347.195
	},
	"Medonha Bone Espirito": {
		baseSkill: "Bone Espirito",
		connections: [ "Melhorado Bone Espirito" ],
		description: `Bone Espirito has an additional +{#}% Critical Strike Chance.`,
		id: 82,
		maxPoints: 1,
		values: [ "10" ],
		x: 1016.045,
		y: 348.86
	},
	"Terrível Bone Espirito": {
		baseSkill: "Bone Espirito",
		connections: [ "Melhorado Bone Espirito" ],
		description: `After Bone Espirito hits an enemy, you generate {#} Essência over the next {#} segundos.`,
		id: 83,
		maxPoints: 1,
		values: [ "30", "4" ],
		x: 787.835,
		y: 492.635
	},
	"Serration": {
		connections: [ "Rapid Ossification", "Compound Fracture", "Convocação" ],
		description: `Your Bone Skills have a +{#}% increased Critical Strike Chance for each 10 Essência you have upon cast.`,
		id: 84,
		maxPoints: 3,
		values: [ "{0.5/1/1.5}" ],
		x: -3.41,
		y: 280.62
	},
	"Rapid Ossification": {
		connections: [ "Serration", "Evulsion" ],
		description: `Every {#} Essência you spend reduces the cooldowns of your Bone Skills by {#} segundos.`,
		id: 85,
		maxPoints: 3,
		values: [ "100", "{0.5/1/1.5}" ],
		x: -187.052,
		y: 416.56
	},
	"Evulsion": {
		connections: [ "Compound Fracture", "Rapid Ossification" ],
		description: `Your Bone Skills deal x{#}% increased Critical Strike Damage to Vulnerable enemies.`,
		id: 86,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: -3.545,
		y: 558.38
	},
	"Compound Fracture": {
		connections: [ "Serration", "Evulsion" ],
		description: `After Critically Striking {#} times with Bone Skills, your Bone Skills deal x{#}% increased damage for {#} segundos.`,
		id: 87,
		maxPoints: 3,
		values: [ "10", "{6/12/18}", "5" ],
		x: 183.23,
		y: 416.205
	},
	"Necrotic Carapace": {
		connections: [ "Convocação" ],
		description: `When a Corpse is formed from your Skills or your Lacaios, Fortify for {#}% Base Life ({#}).`,
		id: 128,
		maxPoints: 3,
		values: [ "", "" ],
		x: 541.815,
		y: 2.895
	},
};

necromancerData["Ultimate"] = {
	"Bonded in Essência": {
		connections: [ "Death's Defense", "Ultimate" ],
		description: `Every {#} segundos, your Skeletal Priest's Healing will Heal your skeletons for {#}% of their Maximum Life.`,
		id: 89,
		maxPoints: 3,
		values: [ "{15/30/45}", "" ],
		x: -293.765,
		y: 208.59
	},
	"Death's Defense": {
		connections: [ "Bonded in Essência", "Inspiring Leader" ],
		description: `Your Lacaios cannot lose more than {#}% of their Maximum Life from a single damage instance.`,
		id: 90,
		maxPoints: 3,
		values: [ "{50/35/20}" ],
		x: -451.67,
		y: 328.78
	},
	"Inspiring Leader": {
		connections: [ "Hellbent Commander", "Ultimate", "Death's Defense" ],
		description: `After you have been Healthy for at least {#} segundos, you and your Lacaios gain +{#}% Attack Speed.`,
		id: 129,
		maxPoints: 3,
		values: [ "", "" ],
		x: -606.325,
		y: 83.67
	},
	"Hellbent Commander": {
		connections: [ "Inspiring Leader" ],
		description: `Your Lacaios deal x{#}% increased damage while you are Close to them.`,
		id: 91,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -805.99,
		y: 208.305
	},
	"Army of the Dead": {
		connections: [ "Prime Army of the Dead", "Ultimate" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Call forth the deep buried dead. Volatile Skeletons emerge over the next {#} segundos that explode when around enemies, dealing {#}% damage.`,
		id: 93,
		maxPoints: 1,
		values: [ "90.0", "54", "7", "30" ],
		x: -591.12,
		y: -96.445
	},
	"Prime Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Army of the Dead", "Supreme Army of the Dead" ],
		description: `When Army of the Dead's Volatile Skeletons explode, they have a {#}% chance to leave behind a Corpse.`,
		id: 94,
		maxPoints: 1,
		values: [ "15" ],
		x: -832.855,
		y: -247.695
	},
	"Supreme Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Prime Army of the Dead" ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.`,
		id: 95,
		maxPoints: 1,
		x: -1169.725,
		y: -246.42
	},
	"Blood Wave": {
		connections: [ "Prime Blood Wave", "Ultimate" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Conjure a tidal wave of blood that deals {#}% damage and Knocks Back enemies.`,
		id: 96,
		maxPoints: 1,
		values: [ "50.0", "30", "90" ],
		x: 0.355,
		y: -282.205
	},
	"Prime Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Blood Wave", "Supreme Blood Wave" ],
		description: `Blood Wave Slows enemies by {#}% for {#} segundos.`,
		id: 97,
		maxPoints: 1,
		values: [ "50", "4" ],
		x: -3.18,
		y: -507.345
	},
	"Supreme Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Prime Blood Wave" ],
		description: `Blood Wave leaves behind 3 Blood Orbs as it travels.`,
		id: 98,
		maxPoints: 1,
		x: -377.265,
		y: -506.98
	},
	"Stand Alone": {
		connections: [ "Memento Mori", "Ultimate" ],
		description: `Increases Damage Reduction by {#}%, reduced by {#}% for each active Lacaio.`,
		id: 99,
		maxPoints: 3,
		values: [ "{6/12/18}", "{2/4/6}" ],
		x: 533.97,
		y: 0.78
	},
	"Memento Mori": {
		connections: [ "Stand Alone" ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {#}%.`,
		id: 100,
		maxPoints: 3,
		values: [ "{20/40/60}" ],
		x: 929.458,
		y: 1.63
	},
	"Bone Storm": {
		connections: [ "Prime Bone Storm", "Ultimate" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
A swirling storm of bones appears around you and your Golem, dealing {#}% to surrounding enemies over {#} segundos.`,
		id: 101,
		maxPoints: 1,
		values: [ "60.0", "40", "180", "10" ],
		x: 3.41,
		y: 307.975
	},
	"Prime Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Bone Storm", "Supreme Bone Storm" ],
		description: `Your Damage Reduction is increased by {#}% while Bone Storm is active.`,
		id: 102,
		maxPoints: 1,
		values: [ "15" ],
		x: -4.345,
		y: 506.955
	},
	"Supreme Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Prime Bone Storm" ],
		description: `Your Critical Strike Chance is increased by +{#}% while Bone Storm is active.`,
		id: 103,
		maxPoints: 1,
		values: [ "2" ],
		x: -378.16,
		y: 507.51
	},
	"Golem Mastery": {
		connections: [ "Ultimate" ],
		description: `Increase the damage and Life of your Golem by x{#}%.`,
		id: 104,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -340.515,
		y: -223.78
	},
};

necromancerData["Capstone"] = {
	"Ossified Essência": {
		connections: [ "Capstone" ],
		description: `Your Bone Skills deal x{#}% increased damage for each point of Essência you have above {#} upon cast.`,
		id: 105,
		maxPoints: 1,
		values: [ "1", "50" ],
		x: -4.466,
		y: -320.48
	},
	"Shadowblight": {
		connections: [ "Capstone" ],
		description: `Shadow Damage infects enemies with Shadowblight for {#} segundos. You and your minions deal x{#}% bonus damage to enemies with Shadowblight.

Every {#}th time an enemy receives Shadow Damage from you or your Lacaios while they are affected by Shadowblight, they take additional {#}% Shadow Damage.`,
		id: 106,
		maxPoints: 1,
		values: [ "2", "10", "20", "" ],
		x: -2.974,
		y: 344.505
	},
	"Rathma's Vigor": {
		connections: [ "Capstone" ],
		description: `Increase your Maximum Life by x{#}%. After being Healthy for {#} segundos, your next Blood Skill Overpowers.`,
		id: 107,
		maxPoints: 1,
		values: [ "10", "25" ],
		x: 659.499,
		y: -0.755
	},
	"Kalan's Edict": {
		connections: [ "Capstone" ],
		description: `After you have not taken damage in the last {#} segundos, your Lacaios gain +{#}% Attack Speed. While you have at least {#} Lacaios, this bonus is doubled.`,
		id: 130,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: -685.026,
		y: -1.45
	},
};

necromancerData["Livro dos Mortos"] = {
	"Skeletal Warriors": {
		"Skeletal Skirmishers": {
			description: `Sword-wielding damage dealers that deal 30% increased damage but have 15% reduced Life.`,
			id: 110,
			sacrifice: `Your critical strike chance is increase by 5%, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`You can raise an additional Skirmisher.`,
				`Each time you critically strike, your Skirmishers next attack critically strikes as well. Can only happen every 3 segundos.`
			]
		},
		"Skeletal Defenders": {
			description: `Durable shield-bearers with 15% increased Life.`,
			id: 111,
			sacrifice: `You gain 15% non-physical resistance, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Every 8 segundos your Defenders negate the next instance of direct damage they would take.`,
				`Increase the amount of thorns that Defenders inherit from you from 30% to 50%.`
			]
		},
		"Skeletal Foiceers": {
			description: `Deals area damage with a slow and powerful scythe, and has a special wind-up attack, dealing heavy damage every 10 segundos.`,
			id: 112,
			sacrifice: `You deal x10% increased Shadow Damage but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Foiceer attacks against enemies who are Immobilized, Slowed, Stunned or Vulnerable reduce the cooldown of their powerful wind-up attack by 2 segundos.`,
				`Foiceers have a 10% chance to carve the flesh off enemies, forming a corpse. This cannot happen on the same enemy more than once every 5 segundos.`
			]
		},
	},
	"Skeletal Mages": {
		"Shadow Mages": {
			description: `Deals moderate Shadow Damage.`,
			id: 113,
			sacrifice: `Your maximum essence is increased by 15, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Shadow Mage attacks have a 10% chance to Stun for 2.13 segundos. This cannot happen on the same enemy more than once every 5 segundos.`,
				`Shadow Mages fire an additional shadow bolt every 6th attack.`
			]
		},
		"Cold Mages": {
			description: `Chills and Freezes enemies.`,
			id: 114,
			sacrifice: `You deal x15% increased damage to Vulnerable enemies, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Each time your Cold Mages damage enemies with their primary attack, you gain 2 essence.`,
				`Enemies who are Frozen by or damaged while Frozen by your Cold Mages primary attack are made Vulnerable for 3 segundos.`
			]
		},
		"Bone Mages": {
			description: `Uses its own bones as projectiles, dealing heavy damage for a Life cost.`,
			id: 115,
			sacrifice: `Your Overpower damage is increased by 30%, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Reduce the life cost of your Bone Mages attacks from 15% to 10%. After being alive for 5 segundos, Bone Mages deal 40% increased damage.`,
				`Each time a Bone Mage dies from its own attack, they leave behind a corpse and Fortify you for #.`
			]
		},
	},
	"Golem": {
		"Bone Golem": {
			description: `Taunts enemies in a wide area.`,
			id: 116,
			sacrifice: `You gain 10% increased attack speed, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Each time your Golem takes up to 20% of its maximum Life as damage, it sheds a corpse.`,
				`Your Golem gains 10% maximum Life and the amount of thorns they inherit from you is increased from 30% to 50%.`
			]
		},
		"Blood Golem": {
			description: `Drains Life from nearby enemies.`,
			id: 117,
			sacrifice: `Your maximum Life is increased by 10%, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Your Golem absorbs 15% of the damage you would take.`,
				`While healthy, your Golem gains 25% damage reduction and x25% increased damage.`
			]
		},
		"Iron Golem": {
			description: `Slams the ground and Stuns enemies.`,
			id: 118,
			sacrifice: `You deal x30% increased critical strike damage, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Every 5th Golem attack causes a shockwave, dealing 16% damage to the primary enemy and to enemies behind them.`,
				`Your Golem slam attack also makes enemies Vulnerable for 3 segundos.`
			]
		},
	},
};

export { necromancerData };