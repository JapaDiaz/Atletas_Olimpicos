let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô ouro olimpíada"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Ela já coleciona títulos e é uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica olímpica campeã acrobacias"
    },
    {
        titulo: "Arthur Zanetti",
        descricao: "Arthur Zanetti é um ginasta brasileiro que fez história ao conquistar a primeira medalha de ouro do Brasil na ginástica nas Olimpíadas de Londres 2012.",
        link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        tags: "ginástica anéis ouro olímpico"
    },
    {
        titulo: "Thiago Braz",
        descricao: "Thiago Braz é um atleta brasileiro especializado no salto com vara, medalhista de ouro nas Olimpíadas de 2016 no Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Thiago_Braz",
        tags: "salto vara atletismo olímpico"
    },
    {
        titulo: "Sarah Menezes",
        descricao: "Sarah Menezes é uma judoca brasileira que conquistou a medalha de ouro nas Olimpíadas de Londres 2012, sendo a primeira mulher brasileira a conseguir tal feito no judô.",
        link: "https://pt.wikipedia.org/wiki/Sarah_Menezes",
        tags: "judô olimpíada ouro pioneira"
    },
    {
        titulo: "Maurren Maggi",
        descricao: "Maurren Maggi é uma atleta brasileira, campeã olímpica no salto em distância nas Olimpíadas de Pequim 2008, sendo a primeira mulher brasileira a ganhar uma medalha de ouro em uma prova individual.",
        link: "https://pt.wikipedia.org/wiki/Maurren_Maggi",
        tags: "salto distância atletismo ouro"
    },
    {
        titulo: "Vanderlei Cordeiro de Lima",
        descricao: "Vanderlei Cordeiro de Lima é um maratonista brasileiro famoso por seu heroísmo nas Olimpíadas de Atenas 2004, quando liderava a prova de maratona e foi atacado por um espectador, ainda assim conquistando a medalha de bronze.",
        link: "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        tags: "maratona bronze olimpíada superação"
    },
    {
        titulo: "Felipe Wu",
        descricao: "Felipe Wu é um atirador esportivo brasileiro que conquistou a medalha de prata na prova de tiro com pistola de ar nas Olimpíadas de 2016.",
        link: "https://pt.wikipedia.org/wiki/Felipe_Wu",
        tags: "tiro esportivo prata olimpíada"
    },
    {
        titulo: "Robert Scheidt",
        descricao: "Robert Scheidt é um velejador brasileiro, dono de cinco medalhas olímpicas e um dos maiores atletas da história do esporte brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
        tags: "vela olimpíada medalhista"
    },
    {
        titulo: "Torben Grael",
        descricao: "Torben Grael é um dos maiores velejadores do Brasil, com cinco medalhas olímpicas, incluindo duas de ouro.",
        link: "https://pt.wikipedia.org/wiki/Torben_Grael",
        tags: "vela medalha ouro olimpíada"
    },
    {
        titulo: "Adhemar Ferreira da Silva",
        descricao: "Adhemar Ferreira da Silva foi um atleta do salto triplo, bicampeão olímpico (1952 e 1956) e um dos maiores nomes do atletismo brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        tags: "salto triplo bicampeão olímpico"
    },
    {
        titulo: "João Carlos de Oliveira (João do Pulo)",
        descricao: "João do Pulo foi um saltador brasileiro que deteve o recorde mundial do salto triplo e conquistou duas medalhas de bronze olímpicas.",
        link: "https://pt.wikipedia.org/wiki/João_Carlos_de_Oliveira",
        tags: "salto triplo recorde olímpico"
    },
    {
        titulo: "Gustavo Borges",
        descricao: "Gustavo Borges é um nadador brasileiro, dono de quatro medalhas olímpicas e um dos maiores nomes da natação brasileira.",
        link: "https://pt.wikipedia.org/wiki/Gustavo_Borges",
        tags: "natação medalha olimpíada"
    },
    {
        titulo: "César Cielo",
        descricao: "César Cielo é um nadador brasileiro, campeão olímpico nos 50 metros livres nas Olimpíadas de Pequim 2008.",
        link: "https://pt.wikipedia.org/wiki/César_Cielo",
        tags: "natação ouro 50m olimpíada"
    },
    {
        titulo: "Rafaela Silva",
        descricao: "Rafaela Silva é uma judoca brasileira, campeã olímpica nas Olimpíadas de 2016, sendo um grande exemplo de superação.",
        link: "https://pt.wikipedia.org/wiki/Rafaela_Silva",
        tags: "judô superação ouro olimpíada"
    },
    {
        titulo: "Isaquias Queiroz",
        descricao: "Isaquias Queiroz é um canoísta brasileiro que conquistou três medalhas nas Olimpíadas de 2016 e o ouro em Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tags: "canoagem olimpíada ouro"
    },
    {
        titulo: "Sheila Castro",
        descricao: "Sheilla Castro é uma jogadora de vôlei brasileira, bicampeã olímpica com a seleção feminina de vôlei.",
        link: "https://pt.wikipedia.org/wiki/Sheilla_Castro",
        tags: "vôlei bicampeã olimpíada"
    },
    {
        titulo: "Serginho (Sérgio Dutra Santos)",
        descricao: "Serginho é um dos maiores líberos da história do vôlei, bicampeão olímpico com a seleção brasileira masculina.",
        link: "https://pt.wikipedia.org/wiki/Sérgio_Dutra_Santos",
        tags: "vôlei líbero olimpíada bicampeão"
    },
    {
        titulo: "Zico",
        descricao: "Zico foi um jogador de futebol brasileiro, considerado um dos maiores craques da história do esporte, tendo representado o Brasil em diversas competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Zico",
        tags: "futebol craque ídolo"
    },
    {
        titulo: "Pelé",
        descricao: "Pelé, Edson Arantes do Nascimento, é considerado o maior jogador de futebol de todos os tempos, tricampeão mundial com a seleção brasileira.",
        link: "https://pt.wikipedia.org/wiki/Pelé",
        tags: "futebol tricampeão ícone"
    },
    {
        titulo: "Marta",
        descricao: "Marta é uma jogadora de futebol brasileira, considerada uma das maiores jogadoras da história do futebol feminino.",
        link: "https://pt.wikipedia.org/wiki/Marta",
        tags: "futebol feminino craque"
    },
    {
        titulo: "Adriana Araújo",
        descricao: "Adriana Araújo é uma boxeadora brasileira que conquistou a medalha de bronze nas Olimpíadas de Londres 2012.",
        link: "https://pt.wikipedia.org/wiki/Adriana_Araújo",
        tags: "boxe bronze olimpíada"
    },
    {
        titulo: "Rosângela Santos",
        descricao: "Rosângela Santos é uma velocista brasileira que integrou a equipe que conquistou o bronze no revezamento 4x100 metros nas Olimpíadas de Pequim 2008.",
        link: "https://pt.wikipedia.org/wiki/Rosângela_Santos",
        tags: "velocista revezamento bronze olimpíada"
    },
    {
        titulo: "Fernanda Oliveira",
        descricao: "Fernanda Oliveira é uma velejadora brasileira, que conquistou a primeira medalha olímpica da história da vela feminina do Brasil, nos Jogos de Pequim 2008.",
        link: "https://pt.wikipedia.org/wiki/Fernanda_Oliveira",
        tags: "vela bronze olimpíada pioneira"
    }
];
