/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import reducer from '../reducers';

export const HOME_STATE = {
  home: 'home',
  entry: 'entry',
  search: 'search',
  song: 'song',
};

export const SEARCH_SONG = {
  filterBy: {
    all: 'all',
    number: 'number',
    title: 'title',
    content: 'content',
    favorites: 'favorites',
  },
};

export const SETTINGS = {
  fontSize: {
    normal: '62.5%',
    large: '75%',
    extraLarge: '87.5%',
  },
  theme: {
    dark: 'dark',
    light: 'light',
  },
  contributionWithAds: {
    on: 'true',
    off: 'false',
  },
  projectionMode: {
    on: 'true',
    off: 'false',
  },
};

const initialState = {
  homeState: HOME_STATE.home,
  searchSong: {
    entry: '',
    filterBy: SEARCH_SONG.filterBy.all,
  },
  settings: {
    fontSize: SETTINGS.fontSize.normal,
    theme: SETTINGS.theme.dark,
    contributionWithAds: SETTINGS.on,
    projectionMode: SETTINGS.projectionMode.off,
  },
  songs: [
    {
      id: 1,
      title: 'NO HAY MAS TRISTEZA',
      content: '<p>No hay más tristeza en el cielo<br>Ni llanto, ni amargo dolor;<br>No hay corazón angustiado<br>Do reina el Dios de amor<br>Las nubes de nuestro horizonte<br>Jamás aparecen allá;<br>El Señor en su gloria esplendente<br>Derrama su luz celestial.</p><p>Yo voy a la patria del alma<br>Do Cristo prepara mi hogar<br>Do todos los santificados<br>Irán para siempre a morar,<br>El día feliz ya se acerca<br>En que el sol para mí se pondrá;<br>Oh, que gozo será cuando mire al Señor<br>En aquella hermosa ciudad.</p>  <p>No hay aflicción en el cielo<br>Ni pruebas existen allá;<br>El alma que en Cristo reposa<br>Seguro en su seno estará<br>No hay tentación en el cielo<br>Ni sombra de muerte atroz;<br>El árbol de vida florece<br>Do fluye el río de Dios.</p><p>Cuán dulce será en el cielo;<br>Pasando las penas aquí;<br>Volveremos a ser reunidos<br>Con nuestro amado allí.<br>Por todos los siglos eternos<br>Que dicha inefable ha de ser;<br>Estar en presencia de Cristo<br>Gozando de eterno placer.</p>',
      song_url: '...',
    },
    {
      id: 2,
      title: 'FUE PROFUNDA LA PAZ',
      content: '<p>Fue profunda la paz que por fin encontré<br>Santo gozo que el mundo no da;<br> Cuando vine con fe, cuerpo y alma entregué<br>A mi tierno bendito Jesús.</p><p><i>Bendito Jesús, bendito Jesús<br>Loado por célicas huestes en luz;<br>Me postro en amor divino Señor<br>Mi tierno bendito Jesús.</i></p><p>A tus pies mis talentos, gozoso pondré<br>Tu cariño mi premio será;<br>Nada quiero guardar, todo quiero entregar<br>A mi tierno bendito Jesús.</p><p>Eres verbo de vida, Cordero de Dios<br>El anciano de días mi paz;<br>Digno eres Señor de mi honra y loor<br>Mi tierno bendito Jesús.</p>',
      song_url: '...',
    },
    {
      id: 3,
      title: 'SEÑOR MI DIOS',
      content: '<p>Señor mi Dios quiero ser fiel<br>En tu verdad, y en tu amor;<br>Vengo a ti, quiero encontrar,<br>Perfecta paz en tu bondad.</p><p><i>Tú puedes Señor, calmar mi dolor,<br>Calmar la tristeza de mi corazón. (bis)</i></p><p>No seguiré en el pecar,<br>No debo andar en la maldad;<br>Quiero tener dentro mi ser,<br>Dulce expresión de paz y amor.</p><p>Yo encontré tranquilidad<br>Junto a tus pies bendito Dios;<br>Acuérdate de mi Señor,<br>Dame salud calma el dolor.</p><p>Si fui infiel no comprendí<br>En la maldad lejos vagué;<br>Ahora Señor perdóname,<br>Limpia mi ser, quiero ser fiel</p>',
      song_url: '...',
    },
    {
      id: 4,
      title: 'DEL CIENO INMUNDO',
      content: '<p>Del cieno inmundo me levantó<br>En una roca me afirmó;<br>Un canto nuevo por fin me dio<br>Un canto fiel, ialeluya!</p>',
      song_url: '...',
    },
    {
      id: 5,
      title: 'EN CULTO TENEBROSO',
      content: '<p>En culto tenebroso;<br>Mi espíritu yacía;<br>Moribundo y doloroso<br>La iniquidad crecía.</p><p><i>La humanidad entera<br>Está cegada en mal;<br>Es el pecado cual pantera<br>Que acecha con muerte fatal.</i></p><p>Cristo es mi Dios y Salvador<br>Mi bien, mi paz y mi salud;<br>Mostróme su infinito amor<br>Muriendo en la cruenta cruz.</p><p>La deuda de su grande amor<br>Oh, nunca yo podré pagar;<br>Por sus heridas y dolor,<br>Perfecta paz me dio el Señor.</p>',
      song_url: '...',
    },
    {
      id: 6,
      title: 'MI QUERIDO HERMANO',
      content: '<p>Mi querido hermano tendrás que trabajar,<br>En Cristo busca siempre tu amigo y Salvador,<br>Pero nunca tú, desmayes en la obra;<br>Y sigue adelante con Cristo el Señor</p><p><i>Y tendrás, y tendrás, y tendrás<br>La dicha de servir;<br>De servir, de servir, de servir<br>A nuestro Salvador.</i></p> <p>Porque la mies es mucha y poco los obreros<br>Tenemos que luchar y almas rescatar;<br>Cristo nos mandó a predicar a todos<br>A todos los que quieran a Cristo conocer.</p>',
      song_url: '...',
    },
    {
      id: 7,
      title: 'A LA CASA DE JAIRO',
      content: '<p>A la casa de Jairo iba Jesús,<br>Una gran multitud iba tras él,<br>Una pobre mujer llena de fe<br>No miro la multitud más le tocó.</p><p><i>Haz tú, cual la mujer que le tocó,<br>El borde del vestido del Señor;<br>Virtud salió de él, y ella sanó<br> Y si le tocas tú, salvo serás.</i></p><p>Aquel pueblo inmenso le escuchó<br>Una parte creía en el Señor;<br>Pero el resto furioso rechazó<br>A esta mensajera del excelso amor.</p><p>Jesucristo fui yo quien te tocó<br>Y mi mal ningún doctor pudo quitar;<br>Mas tu mano potente me sanó<br>Y mi alma y cuerpo entrego a mi Señor.</p>',
      song_url: '...',
    },
    {
      id: 8,
      title: 'AMÉMONOS DE CORAZÓN',
      content: '<p>Amémonos de corazón<br>Y no de labios fingidos (bis)<br>Para cuando Cristo venga<br>Para cuando Cristo venga<br>Nos encuentre apercibidos... (bis)</p><p>Como puedes tú orar<br>Enojado con tu hermano (bis)<br>Dios no escucha la oración<br>Dios no escucha la oración<br>Si no estás reconciliado... (bis)</p><p>Un mandamiento nuevo os doy<br>Que os améis unos a otros (bis)<br>Como yo os he amado<br>Como yo os he amado<br>Que os améis también vosotros... (bis)</p>',
      song_url: '...',
    },
    {
      id: 9,
      title: 'EN ESTE MUNDO',
      content: '<p>En este mundo lleno de dolor<br>Rodeado estoy de males mil.<br>Soy incapaz, lidiar con Satanás<br>En esta lucha tan hostil.</p><p><i>A quien iré, oh, ¿a quién iré?<br>A quien iré, sino a Jesús;<br>El me salvo, mi alma transformó<br>A quien iré sino a Jesús.</i></p><p>Cristo es el único camino a Dios<br>Mi gozo es caminar con El<br>Él es la vida, y Él es la verdad<br>A mí, más dulce que la miel.</p><p>Hambre y sed en mi alma tengo yo<br>La satisface mi Jesús<br>Y en ningún otro hay salud y paz<br>Cristo es el príncipe de luz.</p>',
      song_url: '...',
    },
    {
      id: 10,
      title: 'VIAJABA EN TRISTE SOLEDAD',
      content: '<p>Viajaba en triste soledad<br>Y nadie me busco;<br>La carga horrible de impiedad<br>Más grande se volvió;<br>Le dije a Jesucristo<br>Que me trataban mal<br>Entonces le oí, así decir.</p><p>Camino del Calvario<br>Mi pie también sufrió;<br>La cruz que yo cargaba<br>Mi cuerpo doblegó.<br>Prosigue peregrino<br>Que el alba ya vendrá,<br>Tu cruz levanta y ven<br>En pos de mí.</p><p>A veces dije que por El<br>Penoso estaba yo:<br>Que mucho ya sacrifiqué<br>Tu senda por andar.<br>Mi fama y mi fortuna<br>Por tí yo abandoné;<br>Entonces le oí, así decir.</p><p>Mi hogar de eterna gloria<br>Por ti yo la dejé;<br>Mis manos enclavadas<br>En cruenta cruz miré.<br>Más hoy caminaremos<br>Unidos Tú y yo<br>Tu cruz levanta y ven;<br>En pos de mí.</p>',
      song_url: '...',
    },
    {
      id: 11,
      title: 'PECADOR INDIGNO SOY',
      content: '<p>Pecador indigno soy en este mundo<br>Lleno de tristezas, lleno de dolor;<br>En mis aflicciones y tribulaciones<br>Mi alma está muy triste líbrame Señor.</p><p><i>Por su senda iremos, hermanos míos<br>Con fe y con calma llenos de amor;<br>A todos los salvados y redimidos<br>Corona de vida él nos ceñirá.</i></p><p>Bienes y riquezas no salvan al hombre<br>La sangre preciosa todo limpiará;<br>Las enfermedades y también la muerte<br>La sangre de Cristo todo quitará.</p>',
      song_url: '...',
    },
    {
      id: 12,
      title: 'SIGO ESCALANDO PELDAÑOS',
      content: '<p>Sigo escalando peldaños<br>Sigo mirando esa cruz;<br>Sigo el camino angosto<br>Con Cristo es mucho mejor</p><p><i>Ya viene la recompensa<br>Ya no voy a llorar;<br>Tengo a Cristo en mi vida<br>Por eso quiero escalar... (bis)</i></p><p>A veces me siento débil<br>Y no puedo escalar;<br>Alzo mis manos en alto<br>Y Cristo fuerzas me da.</p>',
      song_url: '...',
    },
    {
      id: 13,
      title: 'PEREGRINO SERÉ',
      content: '<p>Peregrino seré en esta tierra, solo<br>Viajando al cielo donde vamos a morar;<br>Aunque copioso sea el llanto de un cristiano<br>Muy pronto llegaremos al celeste hogar.</p><p><i>Muy pronto vengo lo dice nuestro amado<br>Sed fieles pues, que el galardón conmigo es<br>Sólo esperad porque tengo unas ovejas,<br>Que pertenecerán al más allá.</i></p><p>La creación con gemidos hoy espera<br>La venida de Cristo el Señor;<br>Espero el día cuando ya los redimidos<br>Estarán cantando a los pies del Salvador.</p>',
      song_url: '...',
    },
    {
      id: 14,
      title: 'SOLO HABRÁ PAZ EN EL CIELO',
      content: '<p>Sólo habrá paz en el cielo<br>Algún día yo lo sé;<br>Sólo habrá paz en el cielo<br>Yo lo sé; para mí.</p><p>No habrá tristeza ni pena<br>Nada de luchas allí;<br>Sólo habrá paz en el cielo<br>Para mí, oh sí.</p><p>Pues cansado estoy;<br>Más tendré que seguir;<br>Hasta que Cristo me llame;<br>Al cielo, oh sí.</p><p>Todo allí resplandece<br>El cordero es la luz;<br>Pero la noche es tan negra<br>Cual la mar, oh sí.</p>',
      song_url: '...',
    },
    {
      id: 15,
      title: 'DICEN QUE NO EXISTES',
      content: '<p>Dicen que no existes<br>Que no eres realidad;<br>Pero estás vibrando<br>Dentro mio una vez más.<br>Obras en tu pueblo<br>Con amor y santidad,<br>Y te siento más y más.</p>',
      song_url: '...',
    },
  ],
};

export const store = createStore(reducer, initialState);

