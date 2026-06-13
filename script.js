        function toggleMenu() {
            document.getElementById('menu').classList.toggle('active');
        }

        function scrollToSection(sectionId) {
            document.getElementById('menu').classList.remove('active');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        document.addEventListener('click', function(event) {
            const menu = document.getElementById('menu');
            const menuToggle = document.querySelector('.menu-toggle');
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('active');
            }
        });

        function scrollCarrossel(idCarrossel, distancia) {
            const carrossel = document.getElementById(idCarrossel);
            if (carrossel) {
                carrossel.scrollBy({ left: distancia, behavior: 'smooth' });
            }
        }

        const guias = {
            batata: {
                nome: "Batata",
                passos: [
                    "Escolha um vaso grande com pelo menos 40 cm de profundidade e boa drenagem.",
                    "Use terra solta e rica em matéria orgânica, misturada com areia para garantir boa drenagem.",
                    "Plante batatas-semente (batatas com brotos) a 10 cm de profundidade, com os brotos voltados para cima.",
                    "Cubra com terra e regue moderadamente, mantendo o solo úmido mas não encharcado.",
                    "À medida que a planta cresce, vá adicionando mais terra ao redor do caule (amontoa) para proteger os tubérculos.",
                    "Colha após 90-120 dias, quando as folhas começarem a amarelar e secar."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando a própria batata",
                    descricao: "A batata é uma das plantas mais fáceis de propagar! Você pode usar batatas que já tem em casa, inclusive aquelas que começaram a brotar na despensa.",
                    metodos: [
                        "Corte uma batata em pedaços, garantindo que cada pedaço tenha pelo menos 2-3 olhos (brotos).",
                        "Deixe os pedaços secarem por 24 horas em local arejado para cicatrizar os cortes.",
                        "Plante cada pedaço com os brotos voltados para cima, a 10 cm de profundidade.",
                        "Uma única batata pode gerar de 4 a 6 novas plantas!"
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de batata", "Borra de café", "Cascas de ovo trituradas", "Garfos PET como estacas"],
                    dicas: [
                        "Cascas de batata: enterre no fundo do vaso como adubo rico em potássio.",
                        "Borra de café: misture à terra para melhorar a drenagem e adicionar nitrogênio.",
                        "Cascas de ovo trituradas: fornecem cálcio e previnem pragas.",
                        "Garrafa PET cortada: use como vaso profundo para o cultivo de batatas."
                    ]
                }
            },
            salsa: {
                nome: "Salsa",
                passos: [
                    "Use um vaso com pelo menos 20 cm de profundidade e furos de drenagem.",
                    "Prepare terra rica em matéria orgânica, misturada com composto ou húmus de minhoca.",
                    "Semeie as sementes a 0,5 cm de profundidade e mantenha o solo úmido até a germinação.",
                    "Coloque em local com luz solar indireta ou meia-sombra, evitando sol forte o dia todo.",
                    "Regue regularmente para manter o solo úmido, sem encharcar.",
                    "Comece a colher os ramos externos quando a planta atingir 15 cm de altura, cortando na base."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando a própria salsa",
                    descricao: "Você pode propagar salsa facilmente por estaquia usando os talos que normalmente iriam para o lixo!",
                    metodos: [
                        "Corte talos de salsa com cerca de 10-15 cm de comprimento.",
                        "Remova as folhas da parte inferior, deixando apenas 2-3 folhas no topo.",
                        "Coloque os talos em um copo com água, trocando a água a cada 2 dias.",
                        "Após 1-2 semanas, quando surgirem raízes, transplante para a terra.",
                        "Você também pode plantar diretamente na terra úmida, mantendo o solo sempre molhado nos primeiros dias."
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Casca de banana", "Água de cozimento de legumes", "Potes de vidro", "Embalagens tetra pak"],
                    dicas: [
                        "Casca de banana: enterre picada no solo como fonte de potássio.",
                        "Água de cozimento de legumes: use para regar (após esfriar) - rica em nutrientes.",
                        "Potes de vidro: use como mini-estufa para germinação de sementes.",
                        "Embalagens tetra pak: corte e use como vasos pequenos para mudas."
                    ]
                }
            },
            alho: {
                nome: "Alho",
                passos: [
                    "Escolha um vaso com pelo menos 25 cm de profundidade e boa drenagem.",
                    "Use terra bem drenada, misturada com areia e composto orgânico.",
                    "Separe os dentes de alho e plante cada um com a ponta fina para cima, a 5 cm de profundidade.",
                    "Mantenha espaçamento de 10 cm entre os dentes e regue moderadamente.",
                    "Coloque em local com bastante sol direto (pelo menos 5-6 horas por dia).",
                    "Colha após 4-6 meses, quando as folhas começarem a amarelar e secar."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando o próprio alho",
                    descricao: "O alho é extremamente fácil de propagar! Basta usar dentes de alho que você já tem em casa.",
                    metodos: [
                        "Separe os dentes de uma cabeça de alho, escolhendo os maiores e mais saudáveis.",
                        "Não retire a película (casca fina) que protege cada dente.",
                        "Plante cada dente individualmente com a ponta fina para cima.",
                        "Cada dente plantado vai gerar uma nova cabeça de alho completa!",
                        "Guarde sempre os melhores alhos da colheita para replantar na próxima safra."
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de alho", "Cinzas de madeira", "Caixas de ovo", "Garrafas PET"],
                    dicas: [
                        "Cascas de alho: use como cobertura morta (mulching) para reter umidade.",
                        "Cinzas de madeira: misture à terra como fonte de potássio e para corrigir acidez.",
                        "Caixas de ovo: use como sementeiras biodegradáveis para iniciar o cultivo.",
                        "Garrafas PET cortadas: excelentes vasos profundos para o cultivo de alho."
                    ]
                }
            },
            tomate: {
                nome: "Tomate",
                passos: [
                    "Use um vaso grande com pelo menos 35 cm de profundidade e estacas para suporte.",
                    "Plante mudas de variedades determinadas (que crescem até certa altura) em terra rica em composto.",
                    "Coloque em local com sol pleno (mínimo 6-8 horas de sol direto por dia).",
                    "Regue profundamente 3-4 vezes por semana, mantendo o solo úmido mas sem encharcar.",
                    "Adube quinzenalmente com fertilizante rico em potássio e fósforo para estimular a frutificação.",
                    "Colha os tomates quando estiverem completamente vermelhos e firmes, puxando suavemente."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando o próprio tomate",
                    descricao: "Você pode propagar tomates de duas formas: usando sementes do próprio fruto ou por estaquia dos ramos!",
                    metodos: [
                        "Sementes: retire as sementes de um tomate maduro, lave e seque por 2-3 dias antes de plantar.",
                        "Estaquia: corte ramos laterais (chupões) com 15 cm, remova folhas inferiores e plante em terra úmida.",
                        "Coloque as estacas em local com meia-sombra até enraizarem (cerca de 2 semanas).",
                        "Um único tomate pode fornecer dezenas de sementes para novas plantas!",
                        "Os chupões retirados durante a poda são perfeitos para fazer novas mudas."
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de ovo", "Borra de café", "Garfos PET", "Meia-calça velha"],
                    dicas: [
                        "Cascas de ovo trituradas: previnem podridão apical (fundo preto) nos frutos.",
                        "Borra de café: adiciona nitrogênio e melhora a estrutura do solo.",
                        "Garfos PET: use como estacas para amarrar os galhos do tomateiro.",
                        "Meia-calça velha: corte tiras para amarrar os galhos sem machucar a planta."
                    ]
                }
            },
            alface: {
                nome: "Alface",
                passos: [
                    "Escolha um vaso largo (mínimo 25 cm de diâmetro) com boa drenagem.",
                    "Use substrato rico em matéria orgânica; misture terra com um pouco de areia para drenagem.",
                    "Espalhe as sementes finamente sobre a terra e cubra com uma fina camada de substrato.",
                    "Mantenha o solo sempre úmido (regue de manhã cedo ou no final da tarde).",
                    "A alface gosta de luminosidade, mas evite sol forte o dia todo; meia-sombra é ideal em regiões quentes.",
                    "Em cerca de 30 dias as folhas externas já podem ser colhidas; corte apenas as folhas maiores, deixando o centro intacto para continuar produzindo."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando a própria alface",
                    descricao: "A alface pode ser propagada de forma surpreendente usando o talo que normalmente é descartado!",
                    metodos: [
                        "Ao comprar ou colher uma alface, corte as folhas deixando cerca de 5 cm da base (talo).",
                        "Coloque o talo em um prato ou pote raso com água, cobrindo apenas a base.",
                        "Troque a água a cada 2 dias e mantenha em local iluminado.",
                        "Após 5-7 dias, novas folhas começarão a brotar do centro!",
                        "Quando as raízes estiverem com 3-4 cm, transplante para a terra para continuar o cultivo."
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Borra de café", "Cascas de legumes", "Jornal", "Potes de sorvete"],
                    dicas: [
                        "Borra de café: espalhe ao redor das plantas para repelir lesmas e caracóis.",
                        "Cascas de legumes trituradas: use como cobertura morta rica em nutrientes.",
                        "Jornal: forre o fundo do vaso antes de colocar a terra para manter a umidade.",
                        "Potes de sorvete: faça furos no fundo e use como vasos para alface."
                    ]
                }
            },
            tomate_cereja: {
                nome: "Tomate-cereja",
                passos: [
                    "Use um vaso com pelo menos 30 cm de profundidade e estacas para tutoramento.",
                    "Plante mudas já desenvolvidas (compradas ou feitas em sementeira).",
                    "Coloque em local que receba sol pleno (mínimo 6 horas por dia).",
                    "Regue de 3 a 4 vezes por semana, mantendo o solo úmido sem encharcar.",
                    "Adube a cada 15 dias com composto orgânico ou fertilizante rico em potássio.",
                    "Quando os frutos começarem a ficar vermelhos e firmes, colha com cuidado para não danificar os galhos."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando o próprio tomate-cereja",
                    descricao: "O tomate-cereja é muito fácil de multiplicar! Use as sementes dos frutos ou faça mudas por estaquia.",
                    metodos: [
                        "Sementes: esprema um tomate-cereja maduro em uma peneira, lave e seque as sementes.",
                        "Plante as sementes em sementeiras com terra fina, cobrindo levemente.",
                        "Alternativamente, corte ramos laterais (chupões) com 10-15 cm.",
                        "Plante as estacas em terra úmida e mantenha na sombra até enraizar.",
                        "Cada tomate-cereja contém dezenas de sementes viáveis!"
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de ovo", "Borra de café", "Garrafas PET", "Cabos de vassoura"],
                    dicas: [
                        "Cascas de ovo trituradas: fonte de cálcio que previne problemas nos frutos.",
                        "Borra de café: fertilizante natural rico em nitrogênio.",
                        "Garrafas PET: corte o fundo e use como vaso suspenso para tomate-cereja.",
                        "Cabos de vassoura quebrados: use como estacas resistentes para tutoramento."
                    ]
                }
            },
            cebolinha: {
                nome: "Cebolinha",
                passos: [
                    "Pode ser plantada em vasos pequenos (15 cm de profundidade) ou jardineiras.",
                    "Use terra solta e rica em matéria orgânica.",
                    "Plante sementes ou o bulbinho da cebolinha (a parte branca com raiz) diretamente na terra.",
                    "Regue diariamente ou sempre que o solo estiver seco na superfície.",
                    "Aceita sol pleno ou meia-sombra; é muito resistente.",
                    "Corte as folhas a 3 cm da base quando atingirem 20 cm; a planta rebrota várias vezes."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando a própria cebolinha",
                    descricao: "A cebolinha é uma das plantas mais fáceis de propagar usando a parte branca que normalmente vai para o lixo!",
                    metodos: [
                        "Ao usar cebolinha na cozinha, guarde a parte branca com as raízes (cerca de 3-4 cm).",
                        "Plante diretamente na terra, deixando a parte verde para fora do solo.",
                        "Também pode colocar em um copo com água até brotar novas raízes e folhas.",
                        "Após 1 semana, novas folhas já estarão crescendo!",
                        "Você nunca mais precisá comprar cebolinha - é um ciclo infinito!"
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de cebola", "Caixas de leite", "Potes de vidro", "Palitos de picolé"],
                    dicas: [
                        "Cascas de cebola: faça chá de cascas para regar - rico em nutrientes.",
                        "Caixas de leite: corte ao meio e use como jardineira para cebolinha.",
                        "Potes de vidro: use para enraizar as bases de cebolinha na água.",
                        "Palitos de picolé: escreva o nome da planta e use como identificador no vaso."
                    ]
                }
            },
            cenoura: {
                nome: "Cenoura",
                passos: [
                    "Escolha um vaso com pelo menos 30 cm de profundidade (a raiz precisa de espaço).",
                    "Use terra bem solta, sem pedras, misturada com areia e composto orgânico.",
                    "Semeie diretamente no vaso, a 1 cm de profundidade, e depois desbaste deixando 5 cm entre as plantas.",
                    "Regue regularmente para manter o solo úmido, mas evite encharcar para não rachar as raízes.",
                    "A cenoura precisa de pelo menos 4 horas de sol por dia.",
                    "A colheita leva de 80 a 120 dias; puxe suavemente pelas folhas quando a base da raiz estiver com diâmetro de cerca de 2 cm."
                ],
                propagar: {
                    titulo: "🔄 Como propagar usando a própria cenoura",
                    descricao: "A cenoura pode ser propagada de forma diferente: você pode replantar a parte superior para produzir sementes ou usar as folhas!",
                    metodos: [
                        "Corte o topo da cenoura (cerca de 2-3 cm da parte superior) que normalmente é descartado.",
                        "Coloque o topo em um prato raso com água, com a parte cortada para baixo.",
                        "Em poucos dias, novas folhas verdes começarão a brotar do centro.",
                        "Transplante para a terra para cultivar folhas de cenoura (excelentes em saladas e pestos!).",
                        "Se deixar florescer, produzirá sementes que podem ser replantadas."
                    ]
                },
                residuos: {
                    titulo: "♻️ Resíduos que podem ser reutilizados",
                    materiais: ["Cascas de cenoura", "Areia de construção", "Garrafas PET", "Rolos de papel higiênico"],
                    dicas: [
                        "Cascas de cenoura: faça compostagem ou enterre diretamente no solo como adubo.",
                        "Areia de obras: lave bem e misture à terra para garantir solo solto e bem drenado.",
                        "Garrafas PET de 2L: corte o topo e use como vaso profundo ideal para cenouras.",
                        "Rolos de papel higiênico: use como sementeiras biodegradáveis para iniciar o plantio."
                    ]
                }
            }
        };

        const materiais = {
            garrafa_pet: {
                nome: "Garrafa PET",
                descricao: "As garrafas PET são 100% recicláveis e extremamente versáteis para reutilização.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Lave bem a garrafa para remover resíduos de líquidos.",
                        "Retire a tampa e o anel de lacre (são de plástico diferente).",
                        "Amasse a garrafa para reduzir o volume.",
                        "Descarte em lixeiras vermelhas (plástico) ou em pontos de coleta seletiva.",
                        "Se possível, leve a postos de coleta que destinam para reciclagem especializada."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Vaso para plantas: corte ao meio, faça furos no fundo e use como vaso.",
                        "Irrigador por gotejamento: faça pequenos furos na tampa e use para regar plantas.",
                        "Mini-estufa: corte o fundo e use para proteger mudas do frio.",
                        "Pá de jardinagem: corte no formato adequado e use como pá pequena.",
                        "Organizador: corte em tiras para fazer cordas ou amarradores para plantas.",
                        "Comedouro para pássaros: faça aberturas laterais e pendure no jardim."
                    ]
                }
            },
            vidro: {
                nome: "Vidro",
                descricao: "O vidro é 100% reciclável e pode ser reutilizado infinitas vezes sem perder qualidade.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Lave bem potes e garrafas de vidro para remover resíduos.",
                        "Retire tampas metálicas ou plásticas (são materiais diferentes).",
                        "Vidros quebrados devem ser embrulhados em jornal grosso e identificados.",
                        "Nunca misture vidro com lixo orgânico ou recicláveis comuns.",
                        "Descarte em lixeiras verdes específicas para vidro ou em ecopontos."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Vaso decorativo: potes de vidro são ótimos vasos para plantas pequenas.",
                        "Terrário: crie mini-jardins em potes de vidro com plantas suculentas.",
                        "Propagação na água: use para enraizar mudas de plantas na água.",
                        "Luminária de jardim: coloque velas ou luzes LED dentro para iluminar.",
                        "Armazenamento: guarde sementes secas em potes de vidro bem fechados.",
                        "Castiçal: decore e use como suporte para velas em áreas externas."
                    ]
                }
            },
            papelao: {
                nome: "Papelão",
                descricao: "O papelão é biodegradável e reciclável, além de ser excelente para jardinagem.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Remova fitas adesivas, grampos e etiquetas plásticas.",
                        "Desmonte as caixas e achate para reduzir volume.",
                        "Mantenha seco - papelão úmido perde valor para reciclagem.",
                        "Descarte em lixeiras azuis (papel) ou em pontos de coleta seletiva.",
                        "Caixas muito sujas com gordura devem ir para o lixo orgânico."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Forração de canteiros: coloque no fundo para bloquear ervas daninhas.",
                        "Compostagem: pique e adicione à composteira como material seco.",
                        "Sementeiras: use rolos e caixas como recipientes biodegradáveis.",
                        "Cobertura morta: pique e espalhe sobre o solo para reter umidade.",
                        "Proteção contra geada: use para cobrir plantas em noites frias.",
                        "Caminhos de jardim: forre caminhos para evitar crescimento de mato."
                    ]
                }
            },
            lata: {
                nome: "Latas de Alumínio",
                descricao: "O alumínio é infinitamente reciclável e sua reciclagem economiza 95% de energia.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Lave as latas para remover resíduos de alimentos ou bebidas.",
                        "Retire o anel de abertura e empurre para dentro da lata.",
                        "Amasse a lata para reduzir o volume.",
                        "Descarte em lixeiras amarelas (metal) ou em pontos de coleta seletiva.",
                        "Latas de aerossol devem estar completamente vazias antes do descarte."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Vasos pequenos: pinte e use como vasos para ervas e suculentas.",
                        "Porta-ferramentas: use latas maiores para organizar ferramentas de jardim.",
                        "Etiquetas de plantas: corte tiras de alumínio para identificar plantas.",
                        "Mini-churrasqueira: use latas grandes como fogareiro para jardim.",
                        "Luminárias: faça furos decorativos e coloque velas dentro.",
                        "Regador: faça furos na tampa e use como regador improvisado."
                    ]
                }
            },
            jornal: {
                nome: "Jornal",
                descricao: "O jornal é biodegradável e pode ser reciclado ou usado de várias formas na jardinagem.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Separe jornais secos e limpos de outros resíduos.",
                        "Não misture com papéis plastificados ou encerados.",
                        "Dobre ou empilhe para facilitar o transporte.",
                        "Descarte em lixeiras azuis (papel) ou doe para catadores.",
                        "Evite descartar jornais muito sujos ou engordurados."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Forração de vasos: coloque no fundo antes da terra para reter umidade.",
                        "Sementeiras: enrole tiras e faça pequenos vasos biodegradáveis.",
                        "Compostagem: pique e adicione como material seco na composteira.",
                        "Cobertura morta: use folhas inteiras sobre o solo para proteger.",
                        "Embrulho: use para embalar vidros quebrados para descarte seguro.",
                        "Limpeza: use para limpar vidros e ferramentas de jardim."
                    ]
                }
            },
            casca_ovo: {
                nome: "Cascas de Ovo",
                descricao: "Ricas em cálcio, as cascas de ovo são um excelente recurso natural para a horta.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Lave as cascas para remover resíduos de ovo cru.",
                        "Deixe secar completamente ao sol ou em local arejado.",
                        "Triture bem até formar um pó fino.",
                        "Armazene em pote fechado para usar como adubo.",
                        "Se não for reutilizar, descarte no lixo orgânico (compostagem)."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Adubo de cálcio: espalhe o pó na terra para fortalecer plantas.",
                        "Barreira anti-lesmas: espalhe pedaços ao redor das plantas.",
                        "Sementeiras: use meias cascas como mini-vasos para germinação.",
                        "Corretivo de solo: misture ao solo para reduzir acidez.",
                        "Prevenção de podridão: adicione ao plantar tomates e pimentões.",
                        "Compostagem: adicione à composteira como fonte de minerais."
                    ]
                }
            },
            borra_cafe: {
                nome: "Borra de Café",
                descricao: "A borra de café é rica em nitrogênio e outros nutrientes essenciais para as plantas.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Deixe a borra esfriar completamente após o uso.",
                        "Espalhe em um prato e deixe secar para evitar mofo.",
                        "Armazene em pote aberto ou use diretamente nas plantas.",
                        "Nunca descarte borra de café em pias ou ralos.",
                        "Se não for reutilizar, descarte no lixo orgânico (compostagem)."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Fertilizante: misture à terra para adicionar nitrogênio.",
                        "Repelente natural: espalhe ao redor para afastar lesmas e formigas.",
                        "Compostagem: adicione à composteira como material verde.",
                        "Tingimento natural: use para dar aspecto envelhecido a vasos de madeira.",
                        "Desodorizador: coloque na geladeira para absorver odores.",
                        "Esfoliante de solo: misture à terra para melhorar a textura."
                    ]
                }
            },
            tetra_pak: {
                nome: "Tetra Pak",
                descricao: "As embalagens Tetra Pak são recicláveis e podem ser transformadas em diversos objetos úteis.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Lave bem a embalagem para remover resíduos de alimentos.",
                        "Desmonte a caixa, abrindo as abas e achatando completamente.",
                        "Não é necessário separar as camadas de papel, plástico e alumínio.",
                        "Descarte em lixeiras de papel ou em pontos de coleta seletiva.",
                        "Verifique se sua cidade possui coleta específica para Tetra Pak."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Vasos: corte ao meio e use como jardineira para ervas e temperos.",
                        "Sementeiras: use como recipiente para germinação de sementes.",
                        "Isolante térmico: forre paredes de estufas e viveiros.",
                        "Organizadores: use para guardar ferramentas pequenas de jardim.",
                        "Cobertura: use como proteção para mudas contra vento.",
                        "Placas: corte e use como identificadores de plantas."
                    ]
                }
            },
            pneu: {
                nome: "Pneus",
                descricao: "Pneus velhos podem ser reutilizados de forma criativa, mas exigem cuidados no descarte.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Nunca queime pneus - libera gases tóxicos altamente poluentes.",
                        "Entregue em borracharias ou revendedores de pneus.",
                        "Leve a pontos de coleta específicos para pneus inservíveis.",
                        "Muitas prefeituras têm programas de coleta de pneus velhos.",
                        "Consulte o fabricante sobre programas de logística reversa."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Canteiros elevados: empilhe e preencha com terra para hortas.",
                        "Floreiras: pinte e use como vasos grandes para plantas ornamentais.",
                        "Composteira: use como estrutura para compostagem.",
                        "Lago ornamental: use pneus grandes como base para mini-lagos.",
                        "Escadas de jardim: use em terrenos inclinados como degraus.",
                        "Balança: pendure em árvores para criar balanços de jardim."
                    ]
                }
            },
            eletronicos: {
                nome: "Eletrônicos",
                descricao: "O lixo eletrônico contém metais valiosos e tóxicos - seu descarte correto é essencial.",
                descarte: {
                    titulo: "🗑️ Como descartar corretamente",
                    passos: [
                        "Apague todos os dados pessoais dos dispositivos.",
                        "Separe pilhas e baterias (têm descarte especial).",
                        "Não desmonte os aparelhos em casa.",
                        "Leve a pontos de coleta de lixo eletrônico (supermercados, shoppings).",
                        "Verifique programas de logística reversa dos fabricantes.",
                        "Nunca descarte eletrônicos no lixo comum - é crime ambiental."
                    ]
                },
                reutilizacao: {
                    titulo: "💡 Ideias para reutilizar",
                    ideias: [
                        "Doe aparelhos funcionais para instituições de caridade.",
                        "Use peças para consertar outros aparelhos similares.",
                        "Transforme monitores velhos em vasos criativos.",
                        "Use teclados como porta-recados ou decoração de jardim.",
                        "Gabinete de PC: use como estufa para germinação de sementes.",
                        "CDs e DVDs: use como espantalhos brilhantes para pássaros."
                    ]
                }
            }
        };

        const guiaDiv = document.getElementById('guia-plantio');
        const conteudoGuia = document.getElementById('conteudo-guia');
        const nomeAlimento = document.getElementById('nome-alimento');
        const dicaGeral = document.getElementById('dica-geral');
        const cards = document.querySelectorAll('.alimento-card');

        const guiaMaterialDiv = document.getElementById('guia-material');
        const conteudoMaterial = document.getElementById('conteudo-material');
        const nomeMaterial = document.getElementById('nome-material');
        const dicaGeralMateriais = document.getElementById('dica-geral-materiais');
        const cardsMateriais = document.querySelectorAll('.material-card');

        function mostrarGuia(alimento) {
            const dados = guias[alimento];
            if (!dados) return;

            dicaGeral.style.display = 'none';
            guiaDiv.style.display = 'block';
            nomeAlimento.textContent = dados.nome;

            let html = '';
            
            html += '<h4>📋 Passo a passo do plantio</h4>';
            html += '<ol class="passos-plantio">';
            dados.passos.forEach(passo => {
                html += `<li>${passo}</li>`;
            });
            html += '</ol>';

            html += '<div class="secao-propagar">';
            html += `<h4>${dados.propagar.titulo}</h4>`;
            html += `<p style="margin-bottom: 0.8rem;">${dados.propagar.descricao}</p>`;
            html += '<ol class="passos-plantio">';
            dados.propagar.metodos.forEach(metodo => {
                html += `<li>${metodo}</li>`;
            });
            html += '</ol>';
            html += '</div>';

            html += '<div class="secao-residuos">';
            html += `<h4>${dados.residuos.titulo}</h4>`;
            html += '<p style="margin-bottom: 0.8rem;"><strong>Materiais que podem ser reutilizados:</strong></p>';
            html += '<p>';
            dados.residuos.materiais.forEach(material => {
                html += `<span class="material-reutilizado">${material}</span> `;
            });
            html += '</p>';
            html += '<div style="margin-top: 1rem;">';
            dados.residuos.dicas.forEach(dica => {
                html += `<div class="dica-reciclagem">💡 ${dica}</div>`;
            });
            html += '</div>';
            html += '</div>';

            conteudoGuia.innerHTML = html;

            cards.forEach(card => card.classList.remove('ativo'));
            const cardAtivo = document.querySelector(`.alimento-card[data-alimento="${alimento}"]`);
            if (cardAtivo) cardAtivo.classList.add('ativo');

            setTimeout(() => {
                guiaDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function mostrarGuiaMaterial(material) {
            const dados = materiais[material];
            if (!dados) return;

            dicaGeralMateriais.style.display = 'none';
            guiaMaterialDiv.style.display = 'block';
            nomeMaterial.textContent = dados.nome;

            let html = '';
            
            html += `<p style="margin-bottom: 1.5rem;">${dados.descricao}</p>`;

            html += '<div class="secao-descarte">';
            html += `<h4>${dados.descarte.titulo}</h4>`;
            html += '<ol class="passos-material">';
            dados.descarte.passos.forEach(passo => {
                html += `<li>${passo}</li>`;
            });
            html += '</ol>';
            html += '</div>';

            html += '<div class="secao-residuos">';
            html += `<h4>${dados.reutilizacao.titulo}</h4>`;
            html += '<ol class="passos-material">';
            dados.reutilizacao.ideias.forEach(ideia => {
                html += `<li>${ideia}</li>`;
            });
            html += '</ol>';
            html += '</div>';

            conteudoMaterial.innerHTML = html;

            cardsMateriais.forEach(card => card.classList.remove('ativo'));
            const cardAtivo = document.querySelector(`.material-card[data-material="${material}"]`);
            if (cardAtivo) cardAtivo.classList.add('ativo');

            setTimeout(() => {
                guiaMaterialDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function selecionarAlimento(alimento) {
            const cardClicado = document.querySelector(`.alimento-card[data-alimento="${alimento}"]`);
            
            if (cardClicado.classList.contains('ativo')) {
                guiaDiv.style.display = 'none';
                dicaGeral.style.display = 'block';
                cardClicado.classList.remove('ativo');
            } else {
                mostrarGuia(alimento);
            }
        }

        function selecionarMaterial(material) {
            const cardClicado = document.querySelector(`.material-card[data-material="${material}"]`);
            
            if (cardClicado.classList.contains('ativo')) {
                guiaMaterialDiv.style.display = 'none';
                dicaGeralMateriais.style.display = 'block';
                cardClicado.classList.remove('ativo');
            } else {
                mostrarGuiaMaterial(material);
            }
        }

        function adicionarScrollTouch(idCarrossel) {
            const carrossel = document.getElementById(idCarrossel);
            if (!carrossel) return;
            
            let isDown = false;
            let startX;
            let scrollLeft;

            carrossel.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - carrossel.offsetLeft;
                scrollLeft = carrossel.scrollLeft;
            });

            carrossel.addEventListener('mouseleave', () => {
                isDown = false;
            });

            carrossel.addEventListener('mouseup', () => {
                isDown = false;
            });

            carrossel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carrossel.offsetLeft;
                const walk = (x - startX) * 2;
                carrossel.scrollLeft = scrollLeft - walk;
            });
        }

        adicionarScrollTouch('carrossel-alimentos');
        adicionarScrollTouch('carrossel-materiais');