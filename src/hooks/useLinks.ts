import { useState, useMemo } from 'react';

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
}

const useLinks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Links da categoria Casas
  const allLinks: LinkItem[] = [
    {
      id: '1',
      title: 'Sala de Baús Gigante',
      description: 'Uma sala especial com baús gigantes para armazenamento',
      url: 'https://terabox.app/s/16F0qj3TeDmyS2jhqjHRhKA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051621/1747430361405.png'
    },
    {
      id: '2',
      title: 'vigikin',
      description: 'Casa estilo viking com design único',
      url: 'https://terabox.app/s/1gKcBRwaZZnqVx_KLHCPGQg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050304/1746247142500.png'
    },
    {
      id: '3',
      title: 'Casa dark',
      description: 'Casa com tema escuro e misterioso',
      url: 'https://terabox.app/s/1yLQFP-Do4X0Q4gOmm_oM7g',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050304/1746247448528.png'
    },
    {
      id: '4',
      title: 'CASA GRANDE VERDE',
      description: 'Uma casa grande com temática verde',
      url: 'https://terabox.app/s/1KNLqhCag1y9wMfrsvt6fQg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050304/1746248488196.png'
    },
    {
      id: '5',
      title: 'Japanese House',
      description: 'Casa tradicional japonesa',
      url: 'https://terabox.app/s/1dJmmAG7Yrmnrw2uKdZ18AA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050305/1746253423589.png'
    },
    {
      id: '6',
      title: 'CASA ROXA',
      description: 'Casa com tema roxo vibrante',
      url: 'https://terabox.app/s/1vvwItmjuRAZbjnXMFAjFNA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050314/1746281197860.png'
    },
    {
      id: '7',
      title: 'casa da bruxa',
      description: 'Casa misteriosa da bruxa',
      url: 'https://terabox.app/s/1c9Oe68UoEVhzvprdtYErcw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050314/1746281511350.png'
    },
    {
      id: '8',
      title: 'Brich & Sprucet',
      description: 'Casa construída com madeira brich e spruce',
      url: 'https://terabox.app/s/1O5edzkxd5yTFBUK4L9pRYw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050317/1746293438638.png'
    },
    {
      id: '9',
      title: 'casa de mago',
      description: 'Casa mágica perfeita para magos',
      url: 'https://terabox.app/s/1vt0skqDQD3IfNXDnQ5ywAg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746808520454.png'
    },
    {
      id: '10',
      title: 'Casa media',
      description: 'Casa de tamanho médio',
      url: 'https://terabox.app/s/1F5Ea7xJBNTpuMWoIXCrzMg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746808902588.png'
    },
    {
      id: '11',
      title: 'casa do armoreiro',
      description: 'Casa especializada para armoreiros',
      url: 'https://terabox.app/s/1b4qbt4XH1oRUhujlKGfZ1Q',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746808813052.png'
    },
    {
      id: '12',
      title: 'Casa medieval 6',
      description: 'Casa medieval estilo 6',
      url: 'https://terabox.app/s/1_GQHPpFSLj23ndJC-kmGiQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746809494152.png'
    },
    {
      id: '13',
      title: 'CASA MEDIEVAL 1',
      description: 'Casa medieval clássica',
      url: 'https://terabox.app/s/1XMxlzl6zwjewDvz8-PWy3Q',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050317/1746293526165.png'
    },
    {
      id: '14',
      title: 'casa medieval pequena',
      description: 'Casa medieval de tamanho pequeno',
      url: 'https://terabox.app/s/1B-uvGZJZYFcDUBQiN4B6RQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746808995784.png'
    },
    {
      id: '15',
      title: 'casa medieval 5',
      description: 'Casa medieval estilo 5',
      url: 'https://terabox.app/s/1_o0FvU0oAFHRyw8tqah_Jg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746809408175.png'
    },
    {
      id: '16',
      title: 'Casa Medieval 4',
      description: 'Casa medieval estilo 4',
      url: 'https://terabox.app/s/1LOnv6BoX4WOyBeDye84TxA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746809322408.png'
    },
    {
      id: '17',
      title: 'casa medieval 3',
      description: 'Casa medieval estilo 3',
      url: 'https://terabox.app/s/1cZVDIDzOE7H5CVdSh2Loxw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746809130850.png'
    },
    {
      id: '18',
      title: 'house medieval com',
      description: 'Casa medieval completa',
      url: 'https://terabox.app/s/1TMHOq__L1oOyAw0xHtSu-w',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746810424088.png'
    },
    {
      id: '19',
      title: 'green house',
      description: 'Casa verde ecológica',
      url: 'https://terabox.app/s/10XdhgMMX6FdO5T0J9oRVkA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746810305302.png'
    },
    {
      id: '20',
      title: 'domsdirkoi',
      description: 'Casa com design único domsdirkoi',
      url: 'https://terabox.app/s/1rCxqPU7ttcK6uQVCrH6zQQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746810173429.png'
    },
    {
      id: '21',
      title: 'Cherry house',
      description: 'Casa temática de cerejeira',
      url: 'https://terabox.app/s/1sx6kxU-BxOxuBg1FBBLX3A',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746810084803.png'
    },
    {
      id: '22',
      title: 'Celeiro',
      description: 'Celeiro tradicional para fazenda',
      url: 'https://terabox.app/s/1aSd68MUban6tfcKQ5iGvYg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746810015047.png'
    },
    {
      id: '23',
      title: 'HOUSE',
      description: 'Casa simples e funcional',
      url: 'https://terabox.app/s/1hAUIBo46AunVQaELyeXjhQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811068913.png'
    },
    {
      id: '24',
      title: 'Medieval house',
      description: 'Casa medieval tradicional',
      url: 'https://terabox.app/s/1TV3HPrkI9Ordep60PAtoKg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811187812.png'
    },
    {
      id: '25',
      title: 'Medieval Mansion',
      description: 'Mansão medieval luxuosa',
      url: 'https://terabox.app/s/1NiOVsUO2olzkjeYXS-Ylfw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811260237.png'
    },
    {
      id: '26',
      title: 'monumento',
      description: 'Monumento arquitetônico',
      url: 'https://terabox.app/s/1c_RQ9N1GBh880CVLiEZUFw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811391376.png'
    },
    {
      id: '27',
      title: 'pagoda',
      description: 'Pagoda tradicional asiática',
      url: 'https://terabox.app/s/1RY6EcIpjGl_aZuMx8BfIaQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811478725.png'
    },
    {
      id: '28',
      title: 'smallcastle',
      description: 'Pequeno castelo medieval',
      url: 'https://terabox.app/s/1OFVVewUzyWElHFOL_rHp-Q',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811575742.png'
    },
    {
      id: '29',
      title: 'templo + sala de baus',
      description: 'Templo com sala de baús integrada',
      url: 'https://terabox.app/s/15MpRPaIG_k8Jc_tQXHqbRA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025050916/1746811655122.png'
    },
    {
      id: '30',
      title: 'CASA BAMBU DO GUIZZ..',
      description: 'Casa de bambu especial do Guizz',
      url: 'https://terabox.app/s/133eIWltp6YyvEWfr6OVWRA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052120/1747860522285.png'
    },
    {
      id: '31',
      title: 'CASA JAPONESA',
      description: 'Casa japonesa tradicional',
      url: 'https://terabox.app/s/1X3WKEXxa7MMoerAFL60EGA',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052121/1747862216979.png'
    },
    {
      id: '32',
      title: 'CASTELO MEDIEVAL PEQUENO',
      description: 'Pequeno castelo medieval',
      url: 'https://terabox.app/s/1SWJKKwca_akWYTEe3Z1JKw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052300/1747960407377.png'
    },
    {
      id: '33',
      title: 'casa medieval início de mapa 2',
      description: 'Casa medieval para início de mapa versão 2',
      url: 'https://terabox.app/s/1Dm0xllljkCx-eXCzFfCsBw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749245917416.png'
    },
    {
      id: '34',
      title: 'casa medieval black stone',
      description: 'Casa medieval feita com pedra preta',
      url: 'https://terabox.app/s/1Y8OD8Icjq3CxGa97jb2dDg',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246023482.png'
    },
    {
      id: '35',
      title: 'casa japonesa 5',
      description: 'Casa japonesa estilo 5',
      url: 'https://terabox.app/s/1HKcQFL-hm6oiDWBqTzy26w',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246126403.png'
    },
    {
      id: '36',
      title: 'casa japonesa 4',
      description: 'Casa japonesa estilo 4',
      url: 'https://terabox.app/s/1pv1o8Z3_kuYUn64yZqA61Q',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246195705.png'
    },
    {
      id: '37',
      title: 'casa japonesa 3',
      description: 'Casa japonesa estilo 3',
      url: 'https://terabox.app/s/1JJGfxBY4m7_Tu70AMMK1DQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246291531.png'
    },
    {
      id: '38',
      title: 'casa japonesa 2',
      description: 'Casa japonesa estilo 2',
      url: 'https://terabox.app/s/1NxrN0KM0nnjyzNOJPm6hwQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246569488.png'
    },
    {
      id: '39',
      title: 'casa japonesa 1',
      description: 'Casa japonesa estilo 1',
      url: 'https://terabox.app/s/1sP9meyoOt8xZwP2sU_bliw',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246838454.png'
    },
    {
      id: '40',
      title: 'casa início de mapa 1',
      description: 'Casa perfeita para início de mapa',
      url: 'https://terabox.app/s/1xwUBV2_JHlegOGxqx9qJcQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749246921200.png'
    },
    {
      id: '41',
      title: 'casa fantasygreen',
      description: 'Casa fantasia verde',
      url: 'https://terabox.app/s/1Q4UGhTRe1rBWbBjNjgGCDQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749247009524.png'
    },
    {
      id: '42',
      title: 'Casa bruxa fantasy',
      description: 'Casa da bruxa com tema fantasia',
      url: 'https://terabox.app/s/1K38uWRDvJGTA4RPtCEURIQ',
      category: 'Casas',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060621/1749247059468.png'
    },
    
    // Nova categoria DECORAÇÕES
    {
      id: '43',
      title: 'CENTRO DE TROCAR + FARM FERRO',
      description: 'Centro de trocas com farm de ferro integrado',
      url: 'https://terabox.app/s/1X2exNvrFexPUaKfV1qZsow',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051822/1747606132892.png'
    },
    {
      id: '44',
      title: 'CENTRO DE TROCAS 1',
      description: 'Centro de trocas primeira versão',
      url: 'https://terabox.app/s/1jP72whtcoeLZbdLSG7O8hA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051822/1747606240466.png'
    },
    {
      id: '45',
      title: 'CENTRO DE TROCAS 2',
      description: 'Centro de trocas segunda versão',
      url: 'https://terabox.app/s/1J_HJ-9OU0rKeffdlivlWpw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051822/1747606355390.png'
    },
    {
      id: '46',
      title: 'CENTRO DE TROCAS 3',
      description: 'Centro de trocas terceira versão',
      url: 'https://terabox.app/s/1AcFEI9paSaYVhzU7BlSeTA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051822/1747606436581.png'
    },
    {
      id: '47',
      title: 'PORTAL NETHER 1',
      description: 'Portal para o Nether primeira versão',
      url: 'https://terabox.app/s/1ykr818ryIhfMbU3Q03wsPw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747688973133.png'
    },
    {
      id: '48',
      title: 'PORTAL NETHER 2',
      description: 'Portal para o Nether segunda versão',
      url: 'https://terabox.app/s/1MmJgyY-OEWDeyYcWM-IDAA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689054305.png'
    },
    {
      id: '49',
      title: 'PORTAL NETHER 3',
      description: 'Portal para o Nether terceira versão',
      url: 'https://terabox.app/s/1rSairbAIuFpLzfUEjsrhuA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689168645.png'
    },
    {
      id: '50',
      title: 'PORTAL NETHER 4',
      description: 'Portal para o Nether quarta versão',
      url: 'https://terabox.app/s/1nEBhHYsp-g6ufu5SUAuRMw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689334882.png'
    },
    {
      id: '51',
      title: 'PORTAL NETHER 5',
      description: 'Portal para o Nether quinta versão',
      url: 'https://terabox.app/s/1kBVqmHG5v4B2pLAyt4opyg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689444488.png'
    },
    {
      id: '52',
      title: 'PORTAL NETHER 6',
      description: 'Portal para o Nether sexta versão',
      url: 'https://terabox.app/s/1C8UUn0Wrh57L90Qegh1kuw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689542254.png'
    },
    {
      id: '53',
      title: 'PORTAL NETHER E DRAGON',
      description: 'Portal Nether com decoração de dragão',
      url: 'https://terabox.app/s/1CqklTTN9l3jkuA_mPr4tPA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689625053.png'
    },
    {
      id: '54',
      title: 'PORTAL NETHER PEQUENO',
      description: 'Portal Nether de tamanho pequeno',
      url: 'https://terabox.app/s/1X9XFCAuXyjVZntQHf88S7w',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051921/1747689746854.png'
    },
    {
      id: '55',
      title: 'SALA DE BAUS GIGANTE 2',
      description: 'Sala de baús gigante segunda versão',
      url: 'https://terabox.app/s/1xXqpEyvdJIoQb5OzlsYttw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052021/1747777691361.png'
    },
    {
      id: '56',
      title: 'SALA DE BAUS MEDIA 1',
      description: 'Sala de baús média primeira versão',
      url: 'https://terabox.app/s/1V3L3i0ikiORVSiincQ4Shg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052021/1747777745222.png'
    },
    {
      id: '57',
      title: 'SALA DE BAUS MEDIA 2',
      description: 'Sala de baús média segunda versão',
      url: 'https://terabox.app/s/1UaQBwjO0pef_OKe0JlRh-A',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052021/1747777808114.png'
    },
    {
      id: '58',
      title: 'SALA DE BAUS PEQUENA 1',
      description: 'Sala de baús pequena primeira versão',
      url: 'https://terabox.app/s/1zaeW01nCxYzAVpYGrdBGPA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052021/1747777939040.png'
    },
    {
      id: '59',
      title: 'SALA DE BAUS PEQUENA 2',
      description: 'Sala de baús pequena segunda versão',
      url: 'https://terabox.app/s/1G82rgesZX4X55f3BmBxCwQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052021/1747778005255.png'
    },
    {
      id: '60',
      title: 'CASA BAMBU DO GUIZZ',
      description: 'Casa especial de bambu do Guizz',
      url: 'https://terabox.app/s/133eIWltp6YyvEWfr6OVWRA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052120/1747860391602.png'
    },
    {
      id: '61',
      title: 'CENTRO DE TROCAS CLERIGO',
      description: 'Centro de trocas temático do clérigo',
      url: 'https://terabox.app/s/1v2aqMDNrVrK9ZANAB5yieA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052120/1747860614706.png'
    },
    {
      id: '62',
      title: 'CENTRO DE TROCAS PADARIA',
      description: 'Centro de trocas temático da padaria',
      url: 'https://terabox.app/s/10zR-Db6DyqHTIyH6qRILCw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052120/1747860725204.png'
    },
    {
      id: '63',
      title: 'CENTRO DE TROCAS FERREIRO',
      description: 'Centro de trocas temático do ferreiro',
      url: 'https://terabox.app/s/1wy_rSDiq47J5eYzbZJLRCQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052120/1747861678588.png'
    },
    {
      id: '64',
      title: 'dojo japones',
      description: 'Dojo japonês para treinamento',
      url: 'https://terabox.app/s/16jyxw8CTO4jCh12NFqo_aQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052411/1748088045859.png'
    },
    {
      id: '65',
      title: 'castelo japones 1',
      description: 'Castelo japonês primeira versão',
      url: 'https://terabox.app/s/1y0gDJNZUYtzmpx6WdkKk0A',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052411/1748088586572.png'
    },
    {
      id: '66',
      title: 'mine castelo japones 3',
      description: 'Castelo japonês do mine terceira versão',
      url: 'https://terabox.app/s/1xxmLoFo9xRW8NuHtqvKcRQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052411/1748089027239.png'
    },
    {
      id: '67',
      title: 'mine castelo japones 2',
      description: 'Castelo japonês do mine segunda versão',
      url: 'https://terabox.app/s/1gHMYehhvnsIQj_DlqL7Syg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052411/1748089481362.png'
    },
    {
      id: '68',
      title: 'portao japones',
      description: 'Portão tradicional japonês',
      url: 'https://terabox.app/s/11G_0ivAKc-xbR2LA1khy7A',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052413/1748092194663.png'
    },
    {
      id: '69',
      title: 'castelo japones 2',
      description: 'Castelo japonês segunda versão',
      url: 'https://terabox.app/s/1xKDibUWK7VBbqkwAftoioQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052413/1748093549672.png'
    },
    {
      id: '70',
      title: 'casa japonesa',
      description: 'Casa tradicional japonesa',
      url: 'https://terabox.app/s/1kORYL1_zmrpDqKh7Rf-6tg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052414/1748096233480.png'
    },
    {
      id: '71',
      title: 'Castelo Gigante japones',
      description: 'Castelo japonês de tamanho gigante',
      url: 'https://terabox.app/s/1n94wYDknTgqbr7vme8iiPg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052414/1748097810233.png'
    },
    {
      id: '72',
      title: 'portal japones 2',
      description: 'Portal japonês segunda versão',
      url: 'https://terabox.app/s/1RSKnn31_5yJTdX_9aNIoXg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052414/1748098247603.png'
    },
    {
      id: '73',
      title: 'mine castelo japones',
      description: 'Castelo japonês do mine',
      url: 'https://terabox.app/s/1Fx0RlgHhlo8xNcvDElKYhA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052422/1748124784656.png'
    },
    {
      id: '74',
      title: 'caminho 1',
      description: 'Caminho decorativo primeira versão',
      url: 'https://terabox.app/s/15k_CprNlANuGaJ1dKUwrbA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052614/1748268692711.png'
    },
    {
      id: '75',
      title: 'caminho 2',
      description: 'Caminho decorativo segunda versão',
      url: 'https://terabox.app/s/1bgFP9AuKlPXUGugSbzFKkA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052614/1748269400837.png'
    },
    {
      id: '76',
      title: 'caminhos 3',
      description: 'Caminhos decorativos terceira versão',
      url: 'https://terabox.app/s/1QGTxBMYNYSEsrFLbP8eiLg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052614/1748269993201.png'
    },
    {
      id: '77',
      title: 'caminhos 4',
      description: 'Caminhos decorativos quarta versão',
      url: 'https://terabox.app/s/17wuHXNlvdVAtQGVN4oTJqQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052614/1748270422979.png'
    },
    {
      id: '78',
      title: 'árvore 1',
      description: 'Árvore decorativa primeira versão',
      url: 'https://terabox.app/s/1OniK07t1ZX5SUNQJjJxpJA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052617/1748279410223.png'
    },
    {
      id: '79',
      title: 'árvore 2',
      description: 'Árvore decorativa segunda versão',
      url: 'https://terabox.app/s/1s94fsR5Fz8ownbRfpf6ipQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052617/1748279773896.png'
    },
    {
      id: '80',
      title: 'árvore 3',
      description: 'Árvore decorativa terceira versão',
      url: 'https://terabox.app/s/1gy-YGwp6wBSXnuSTzopKKA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052618/1748284787267.png'
    },
    {
      id: '81',
      title: 'árvore 4',
      description: 'Árvore decorativa quarta versão',
      url: 'https://terabox.app/s/13NzyqnaMfA5flPF-rP3-Dw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052618/1748285267934.png'
    },
    {
      id: '82',
      title: 'árvore 5',
      description: 'Árvore decorativa quinta versão',
      url: 'https://terabox.app/s/1r_5kq2nfqvGa0ACanQhL2Q',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052618/1748285710625.png'
    },
    {
      id: '83',
      title: 'árvore 6',
      description: 'Árvore decorativa sexta versão',
      url: 'https://terabox.app/s/1U23Bga-CPB3ixn1NPw5eEA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748349931504.png'
    },
    {
      id: '84',
      title: 'árvore amarela 1',
      description: 'Árvore amarela decorativa',
      url: 'https://terabox.app/s/1DX-HuUjwWbnd4_S1bVf4lw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748350579012.png'
    },
    {
      id: '85',
      title: 'árvore vermelha 1',
      description: 'Árvore vermelha primeira versão',
      url: 'https://terabox.app/s/1_gWq64_ekt3heBWwMrDoLA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748351057471.png'
    },
    {
      id: '86',
      title: 'árvore vermelha 2',
      description: 'Árvore vermelha segunda versão',
      url: 'https://terabox.app/s/13rDGgg2NeWSYF1JnvH8fEQ',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748351526296.png'
    },
    {
      id: '87',
      title: 'árvore casa',
      description: 'Árvore com casa integrada',
      url: 'https://terabox.app/s/10JQSVPZKcsxpn5ji_FvCdg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748351954138.png'
    },
    {
      id: '88',
      title: 'cerejeira 1',
      description: 'Cerejeira decorativa primeira versão',
      url: 'https://terabox.app/s/1r1J-Vcyux0Gmd196ajf7NA',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748352370902.png'
    },
    {
      id: '89',
      title: 'cerejeira 2',
      description: 'Cerejeira decorativa segunda versão',
      url: 'https://terabox.app/s/13N8nuvMIkiVcT6gxxs5Skg',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052712/1748352807364.png'
    },
    {
      id: '90',
      title: 'Centro de trocas japones',
      description: 'Centro de trocas com temática japonesa',
      url: 'https://terabox.app/s/1lGFUEZcBV30S4O3My2jpdw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025052717/1748368078127.png'
    },
    {
      id: '91',
      title: 'Arvore Monstro',
      description: 'Árvore gigante com aparência monstruosa',
      url: 'https://terabox.app/s/1SKgSjKwjnoZeTzrBB_Rr6A',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060622/1749247268338.png'
    },
    {
      id: '92',
      title: 'bétula pequena',
      description: 'Árvore bétula de tamanho pequeno',
      url: 'https://terabox.app/s/18Sgx83rh2qWltWfeYAppNw',
      category: 'DECORAÇÕES',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060622/1749247517622.png'
    },

    // Nova categoria FARMS
    {
      id: '93',
      title: 'MUNDO COM TODAS AS FARMS',
      description: 'Mundo completo com todas as farms disponíveis',
      url: 'https://terabox.app/s/1KDYYQ7vD0JYmutVz85Ai5w',
      category: 'FARMS',
      imageUrl: 'https://assets.production.linktr.ee/tabler-icons/outline/folder.svg'
    },
    {
      id: '94',
      title: 'FARM DE BAMBU E CANA 10x10',
      description: 'Farm automática de bambu e cana de açúcar',
      url: 'https://terabox.app/s/1VVc3JmFKTMqL1lzHP4DkFQ',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/5befbbdd-6033-4957-a1c6-992abe1094d1_pack-icon--7-.png'
    },
    {
      id: '95',
      title: 'FARM CANA E BAMBU COM FARINHA DE OSSO 10x10',
      description: 'Farm de cana e bambu com sistema de farinha de osso',
      url: 'https://terabox.app/s/1u4C4F_OpmD0_3oFtA6UB5g',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/e27da04f-9a54-4e00-888b-949323686e45_pack-icon--18-.png'
    },
    {
      id: '96',
      title: 'FARM FARINHA DE OSSO 10x10',
      description: 'Farm automática de farinha de osso',
      url: 'https://terabox.app/s/1FPIgktP7M6oFNFdzuQzYKg',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/12094d92-8d57-4dc6-84f5-45d00f2d33a5_pack-icon--19-.png'
    },
    {
      id: '97',
      title: 'FARM DE CARNES 10x10',
      description: 'Farm automática de carnes variadas',
      url: 'https://terabox.app/s/17mKJSmSS_yClUGzPi6UiiQ',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/a05b9b79-336a-4625-b148-fc1cc445747f_pack-icon--43-.png'
    },
    {
      id: '98',
      title: 'FARM CASCO DE TATU 10x10',
      description: 'Farm automática de casco de tatu',
      url: 'https://terabox.app/s/1FGxDPYp2Mx0JycayCoyk4g',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/1ec26761-c4f3-458e-8d0a-9e682a1065e4_pack-icon--48-.png'
    },
    {
      id: '99',
      title: 'FARM DE LÃ 10x10',
      description: 'Farm automática de lã colorida',
      url: 'https://terabox.app/s/1IduIEY_eVoRJhmU68m9k9g',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/c49c2810-49af-4383-bd5f-ddcd56ae30b8_pack-icon--20-.png'
    },
    {
      id: '100',
      title: 'FARM DE FLOR GRANDE 10x10',
      description: 'Farm de flores grandes automática',
      url: 'https://terabox.app/s/1byZHslzkdiTxtxRRJqPLDQ',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/783ace53-7fb6-489e-8861-940e1b982b72_pack-icon--22-.png'
    },
    {
      id: '101',
      title: 'FARM DE FLOR 10x10',
      description: 'Farm automática de flores variadas',
      url: 'https://terabox.app/s/1DDTqAtM-9eoXu9m5oDd_bg',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/7504619f-6785-46a8-abaf-3c39060bc7db_pack-icon--5-.png'
    },
    {
      id: '102',
      title: 'FORNALHA AUTOMÁTICA 10x10',
      description: 'Sistema de fornalhas automáticas',
      url: 'https://terabox.app/s/1rIR-JAYOrKpRPlPl1YJOkw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/7eaacaf7-9cb2-48de-beeb-9b803ddc7c4d_pack-icon--41-.png'
    },
    {
      id: '103',
      title: 'FARM DE GALINHA 10x10',
      description: 'Farm automática de galinhas e ovos',
      url: 'https://terabox.app/s/1sqIxbuuGn_2zV43XT135kQ',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/a8b4efec-4f2c-4112-b44e-7066180e1064_pack-icon--32-.png'
    },
    {
      id: '104',
      title: 'FARM DE LAVA 10x10',
      description: 'Farm automática de lava',
      url: 'https://terabox.app/s/1Vpk62Up_SwtC611umpzEdw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/2e1fac7b-93e4-46c7-9639-a4f89f62b95b_pack-icon--31-.png'
    },
    {
      id: '105',
      title: 'FARM FAVO DE MEL 10x10',
      description: 'Farm automática de favo de mel',
      url: 'https://terabox.app/s/1XDm8erQTmT7WCEcX4p2fKw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/728ce7a1-cb19-4d5a-bebf-3b777dcdea25_pack-icon--17-.png'
    },
    {
      id: '106',
      title: 'FARM DE MELANCIA E ABOBORA 10x10',
      description: 'Farm automática de melancia e abóbora',
      url: 'https://terabox.app/s/1XXKsIHxnPoJv_eRvW-2irg',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/968eb926-721f-47ef-baf5-b15153819670_pack-icon--13-.png'
    },
    {
      id: '107',
      title: 'FARM DE OVO 10x10',
      description: 'Farm automática de ovos',
      url: 'https://terabox.app/s/1ZbYzrGxQVRA8Lffqh9gifg',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/0ffa5dd5-ba61-4414-80c6-c2712c9b7b87_pack-icon--6-.png'
    },
    {
      id: '108',
      title: 'FARM DE PEDRA 10x10',
      description: 'Farm automática de pedra',
      url: 'https://terabox.app/s/1-_khnKUik-HJyKHkIlaiWw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/82ad45b8-97cd-453c-902b-b3a2d1d54078_pack-icon--21-.png'
    },
    {
      id: '109',
      title: 'FARM DE PLANTAÇÃO 10x10',
      description: 'Farm automática de plantações variadas',
      url: 'https://terabox.app/s/1ZF-iOheSQf0TDPTbMOVCjQ',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/68c9b8c4-9297-4a9b-a95c-b5555ce8bd29_pack-icon--9-.png'
    },
    {
      id: '110',
      title: 'FARM DE POÇÃO 10x10',
      description: 'Farm automática de ingredientes para poções',
      url: 'https://terabox.app/s/1Am7-KauU96BHSauTCtty7w',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/2a056100-937f-49a3-835c-63f9f2864396_pack-icon--44-.png'
    },
    {
      id: '111',
      title: 'BAUS COM SEPARADOR 10x10',
      description: 'Sistema de baús com separadores automáticos',
      url: 'https://terabox.app/s/1hP7dUMXVGRwOKFuj5nPERw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/7b0fdb64-9c7d-433d-8ad7-45388fabe4b9_pack-icon--25-.png'
    },
    {
      id: '112',
      title: 'FARM DE ALGA 10x10',
      description: 'Farm automática de algas marinhas',
      url: 'https://terabox.app/s/14S5FxRsNRGbT979TZ2MWLw',
      category: 'FARMS',
      imageUrl: 'https://ugc.production.linktr.ee/d23c4ab5-f3b7-40c9-bea9-f8831d0fa003_pack-icon--1-.png'
    },

    // Nova categoria PACK DE HOLOGRAMA
    {
      id: '113',
      title: 'Pack Holograma Medieval',
      description: 'Pacote completo de hologramas medievais',
      url: 'https://terabox.app/s/1Bxwy-i_Spo4gqwhL4n1wyw',
      category: 'PACK DE HOLOGRAMA',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025051512/1747316933748.jpeg'
    },
    {
      id: '114',
      title: 'Pack Holograma centro de trocas',
      description: 'Pacote de hologramas para centros de trocas',
      url: 'https://terabox.app/s/1euM7GSb5FNVMQzn1sdX5Cg',
      category: 'PACK DE HOLOGRAMA',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025053022/1748645407245.png'
    },
    {
      id: '115',
      title: 'Pack Holograma Casa Pequenas',
      description: 'Pacote de hologramas para casas pequenas',
      url: 'https://terabox.app/s/1QgLHmH4IKyr_XMkCe_M21g',
      category: 'PACK DE HOLOGRAMA',
      imageUrl: 'https://bio.linkcdn.cc/upload/2025060300/1748909613068.png'
    }
  ];

  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    // Filtrar por categoria selecionada
    if (selectedCategory) {
      filtered = filtered.filter(link => link.category === selectedCategory);
    }

    // Filtrar por termo de busca
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(link =>
        link.title.toLowerCase().includes(searchLower) ||
        link.description.toLowerCase().includes(searchLower) ||
        link.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, allLinks]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allLinks.map(link => link.category)));
    return uniqueCategories.sort();
  }, [allLinks]);

  return {
    links: filteredLinks,
    allLinks,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  };
};

export default useLinks;
