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
		description: `Cada vez que um inimigo é atingido pela nova de Surto de Sangue, você é fortificado com {#}% de Vida Base ({#}). Enquanto você tem Fortificar por mais de {#}% de sua Vida Máxima, Surto de Sangue causa x{#}% de dano a mais.`,
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
	"Dama de Ferro": {
		connections: [ "Dama de Ferro Melhorada", "Corrupção" ],
		description: `Essência Cost: {#}
Amaldiçoe a área alvo. Inimigos atingidos por Dama de Ferro recebem {#}% de dano toda vez que causam dano direto. Dura {#} segundos.`,
		id: 55,
		maxPoints: 5,
		values: [ "10", "10", "10" ],
		x: -452.675,
		y: -233.982
	},
	"Dama de Ferro Melhorada": {
		baseSkill: "Dama de Ferro",
		connections: [ "Dama de Ferro", "Dama de Ferro Horrível", "Dama de Ferro Abominável" ],
		description: `Dama de Ferro já não custa Essência. Em vez disso, ganhe {#} Essência para cada inimigo Amaldiçoado. Não funciona com inimigos que já estejam Amaldiçoados com Dama de Ferro.`,
		id: 56,
		maxPoints: 1,
		values: [ "5" ],
		x: -771.585,
		y: -385.35
	},
	"Dama de Ferro Horrível": {
		baseSkill: "Dama de Ferro",
		connections: [ "Dama de Ferro Melhorada" ],
		description: `Quando pelo menos {#} inimigos são atingidos por Dama de Ferro, seu dano aumenta em x{#}%.`,
		id: 57,
		maxPoints: 1,
		values: [ "3", "15" ],
		x: -806.375,
		y: -523.514
	},
	"Dama de Ferro Abominável": {
		baseSkill: "Dama de Ferro",
		connections: [ "Dama de Ferro Melhorada" ],
		description: `Cure {#}% de sua Vida Máxima ({#}) quando um inimigo morrer enquanto estiver sob efeito de Dama de Ferro.`,
		id: 58,
		maxPoints: 1,
		values: [ "5", "" ],
		x: -1050.125,
		y: -372.255
	},
	"Maestria Mago Esqueleto": {
		connections: [ "Corrupção" ],
		description: `Aumente o dano e a vida de seus Magos Esqueletos em x{#}%.`,
		id: 59,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -2.93,
		y: 322.683
	},
	"Amplificar Dano": {
		connections: [ "Corrupção" ],
		description: `Você causa x{#}% de dano aumentado a inimigos Amaldiçoados.`,
		id: 60,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -558.415,
		y: 1.584
	},
	"Decrepificar": {
		connections: [ "Decrepificar Melhorado", "Corrupção" ],
		description: `Essência Cost: {#}
Amaldiçoe a área alvo. Inimigos atingidos por Decrepificar são desacelerados em {#}% e causam {#}% menos dano por {#} segundos.`,
		id: 61,
		maxPoints: 5,
		values: [ "10", "50", "25", "10" ],
		x: -457.14,
		y: 240.226
	},
	"Decrepificar Melhorado": {
		baseSkill: "Decrepificar",
		connections: [ "Decrepificar", "Decrepificar Abominável", "Decrepificar Horrível" ],
		description: `Golpe de Sorte: Inimigos atingidos enquanto afetados pelo Decrepificador têm até {#}% de chance de Atordoá-los por {#} segundos.`,
		id: 62,
		maxPoints: 1,
		values: [ "10", "2" ],
		x: -757.225,
		y: 392.89
	},
	"Decrepificar Abominável": {
		baseSkill: "Decrepificar",
		connections: [ "Decrepificar Melhorado" ],
		description: `Golpe de Sorte: Inimigos atingidos enquanto afetados por Decrepificar têm até {#}% de chance de reduzir seus Tempos de Recarga ativos em {#} segundos.`,
		id: 63,
		maxPoints: 1,
		values: [ "15", "1.5" ],
		x: -1026.955,
		y: 390.108
	},
	"Decrepificar Horrível": {
		baseSkill: "Decrepificar",
		connections: [ "Decrepificar Melhorado" ],
		description: `Quando você ou seu Lacaios atingem um inimigo afetado por Decrepificar com menos de {#}% de Vida, eles são mortos instantaneamente. Não funciona em chefes.`,
		id: 64,
		maxPoints: 1,
		values: [ "10" ],
		x: -810.09,
		y: 533.678
	},
	"Abraço da Morte": {
		connections: [ "Corrupção" ],
		description: `Inimigos próximos recebem x{#}% mais dano de você e causam {#}% menos dano a você.`,
		id: 65,
		maxPoints: 3,
		values: [ "{2/4/6}", "{3/6/9}" ],
		x: 1.235,
		y: -289.131
	},
	"Alcance da Morte": {
		connections: [ "Corrupção" ],
		description: `Você causa x{#}% de dano aumentado a inimigos distantes.`,
		id: 66,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 576.795,
		y: 2.084
	},
};

necromancerData["Convocação"] = {
	"Gavinhas de Cadáver": {
		connections: [ "Gavinhas de Cadáver Melhorada", "Convocação" ],
		description: `Cooldown: {#} segundos
Chande de Golpe de Sorte: {#}%
Veias brotam de um Cadáver, Puxando os inimigos, Atordoando-os por {#} segundos e causando {#}% de dano a eles. Não consome o Cadáver.`,
		id: 67,
		maxPoints: 5,
		values: [ "11.0", "20", "3", "20" ],
		x: 444.22,
		y: -228.515
	},
	"Gavinhas de Cadáver Melhorada": {
		baseSkill: "Gavinhas de Cadáver",
		connections: [ "Gavinhas de Cadáver", "Gavinhas de Cadáver Atormentada", "Gavinhas de Cadáver Arruinada" ],
		description: `Inimigos que estiverem ao alcance de Gavinhas de Cadáver são Desacelerados em {#}% antes de serem Puxados.`,
		id: 68,
		maxPoints: 1,
		values: [ "50" ],
		x: 740.58,
		y: -392.601
	},
	"Gavinhas de Cadáver Atormentada": {
		baseSkill: "Gavinhas de Cadáver",
		connections: [ "Gavinhas de Cadáver Melhorada" ],
		description: `Inimigos atingidos por Gavinhas de Cadáver ficam Vulneráveis por {#} segundos.`,
		id: 125,
		maxPoints: 1,
		values: [ "" ],
		x: 999.47,
		y: -388.527
	},
	"Gavinhas de Cadáver Arruinada": {
		baseSkill: "Gavinhas de Cadáver",
		connections: [ "Gavinhas de Cadáver Melhorada" ],
		description: `Gavinhas de Cadáver tem {#}% de chance de causar dano a inimigos para derrubar um Orbe de Sangue.`,
		id: 126,
		maxPoints: 1,
		values: [ "" ],
		x: 762.735,
		y: -532.53
	},
	"Perseguição da Foice": {
		connections: [ "Escuridão", "Escuridão Paralisante", "Convocação" ],
		description: `Causar dano a inimigos com Habilidades de Escuridão aumenta sua Velocidade de Movimento em +{#}% por {#} segundos.`,
		id: 71,
		maxPoints: 3,
		values: [ "{5/10/15}", "3" ],
		x: -539.448,
		y: 0.085
	},
	"Escuridão": {
		connections: [ "Perseguição da Foice", "Terror" ],
		description: `Quando você causa dano a inimigos com Habilidades de Escuridão, eles recebem x{#}% de Dano de Sombra aumentado de você e de seus Lacaios por {#} segundos, acumulando até {#} vezes.`,
		id: 72,
		maxPoints: 3,
		values: [ "{2/4/6}", "2", "3" ],
		x: -812.116,
		y: -96.84
	},
	"Terror": {
		connections: [ "Escuridão", "Escuridão Paralisante" ],
		description: `As Habilidades da Escuridão causam x{#}% de dano adicional a inimigos que estão com Lentidão e x{#}% de dano adicional a inimigos que estão Atordoados ou Imobilizados. Esses bônus se acumulam e se aplicam ao Dano de Sombra causado pelo seu Lacaios.`,
		id: 73,
		maxPoints: 3,
		values: [ "{5/10/15}", "" ],
		x: -1072.725,
		y: 1.175
	},
	"Escuridão Paralisante": {
		connections: [ "Perseguição da Foice", "Terror" ],
		description: `Golpe de Sorte: As habilidades da escuridão têm até {#}% de chance de Atordoar por {#} segundos.`,
		id: 74,
		maxPoints: 3,
		values: [ "15", "{1/2/3}" ],
		x: -812.306,
		y: 96.35
	},
	"Conserto Horrível": {
		connections: [ "Transfusão", "Sangue Coagulado", "Convocação" ],
		description: `Enquanto estiver com menos de 50% de Vida, você recebe +{#}% a mais de Cura de todas as fontes.`,
		id: 127,
		maxPoints: 3,
		values: [ "" ],
		x: 1.18,
		y: -309.335
	},
	"Transfusão": {
		connections: [ "Marés de Sangue", "Conserto Horrível" ],
		description: `Orbs de Sangue também curam seus Lacaios em {#}% do valor.`,
		id: 77,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 191.07,
		y: -457.803
	},
	"Marés de Sangue": {
		connections: [ "Transfusão", "Sangue Coagulado" ],
		description: `Suas Habilidades de Sangue causam x{#}% de aumento de dano de Sobrecarga. Este bônus é dobrado enquanto você estiver Saudável.`,
		id: 78,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 3.55,
		y: -609.869
	},
	"Sangue Coagulado": {
		connections: [ "Drenar Vitalidade", "Marés de Sangue", "Conserto Horrível" ],
		description: `Enquanto estiver Saudável, suas Habilidades de Sangue causam x{#}% de dano aumentado.`,
		id: 76,
		maxPoints: 3,
		values: [ "" ],
		x: -190.339,
		y: -455.995
	},
	"Drenar Vitalidade": {
		connections: [ "Sangue Coagulado" ],
		description: `Golpe de Sorte: Atingir inimigos com Habilidades de Sangue tem até {#}% de chance de Fortificar em {#}% de Vida Base ({#}).`,
		id: 79,
		maxPoints: 3,
		values: [ "{25/50/75}", "1", "" ],
		x: -382.557,
		y: -610.311
	},
	"Espirito de Ossos": {
		connections: [ "Espirito de Ossos Melhorado", "Convocação" ],
		description: `Cooldown: {#} segundos
Custo de Essência: Todo restante de Essência
Chande de Golpe de Sorte: {#}%
Consuma toda a sua Essência para conjurar um Espírito de Osso que busca inimigos. Ao atingir um inimigo, o Espirito explode, causando {#}% de dano ao alvo e a todos os inimigos ao redor. O dano é aumentado em x{#}% para cada ponto de Essência gasto lançando Espírito de Ossos.`,
		id: 80,
		maxPoints: 5,
		values: [ "12.0", "33", "80", "3" ],
		x: 441.425,
		y: 214.93
	},
	"Espirito de Ossos Melhorado": {
		baseSkill: "Espirito de Ossos",
		connections: [ "Espirito de Ossos", "Espirito de Ossos Medonho", "Espirito de Ossos Terrível" ],
		description: `Se o Espirito de Ossos Acertar Criticamente, seu Tempo de Recarga é reduzido em {#} segundos. Este efeito só pode acontecer uma vez por conjuração.`,
		id: 81,
		maxPoints: 1,
		values: [ "6" ],
		x: 737.945,
		y: 347.195
	},
	"Espirito de Ossos Medonho": {
		baseSkill: "Espirito de Ossos",
		connections: [ "Espirito de Ossos Melhorado" ],
		description: `Espírito de Ossos tem +{#}% de Chance de Acerto Crítico adicional.`,
		id: 82,
		maxPoints: 1,
		values: [ "10" ],
		x: 1016.045,
		y: 348.86
	},
	"Espirito de Ossos Terrível": {
		baseSkill: "Espirito de Ossos",
		connections: [ "Espirito de Ossos Melhorado" ],
		description: `Depois que Espírito de Ossos atinge um inimigo, você gera {#} Essência nos próximos {#} segundos.`,
		id: 83,
		maxPoints: 1,
		values: [ "30", "4" ],
		x: 787.835,
		y: 492.635
	},
	"Serração": {
		connections: [ "Ossificação Rápida", "Fratura Exposta", "Convocação" ],
		description: `Suas Habilidades Ósseas têm uma Chance de Acerto Crítico +{#}% aumentada para cada 10 Essências que você tiver ao lançar.`,
		id: 84,
		maxPoints: 3,
		values: [ "{0.5/1/1.5}" ],
		x: -3.41,
		y: 280.62
	},
	"Ossificação Rápida": {
		connections: [ "Serração", "Extração" ],
		description: `Cada {#} Essência que você gasta reduz os cooldowns de suas Habilidades Ósseas em {#} segundos.`,
		id: 85,
		maxPoints: 3,
		values: [ "100", "{0.5/1/1.5}" ],
		x: -187.052,
		y: 416.56
	},
	"Extração": {
		connections: [ "Fratura Exposta", "Ossificação Rápida" ],
		description: `Suas Habilidades Ósseas causam x{#}% de aumento de Dano de Ataque Crítico a inimigos Vulneráveis.`,
		id: 86,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: -3.545,
		y: 558.38
	},
	"Fratura Exposta": {
		connections: [ "Serração", "Extração" ],
		description: `Depois de Acertar Criticamente {#} vezes com Habilidades Ósseas, suas Habilidades Ósseas causam x{#}% de dano a mais por {#} segundos.`,
		id: 87,
		maxPoints: 3,
		values: [ "10", "{6/12/18}", "5" ],
		x: 183.23,
		y: 416.205
	},
	"Carapaça Necrótica": {
		connections: [ "Convocação" ],
		description: `Quando um Cadáver for formado a partir de suas Habilidades ou Lacaios, Fortifica em {#}% de Vida Base ({#}).`,
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