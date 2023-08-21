// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')
// const path = require('node:path')

function config (options = {}) {
  // secio-note: @midudev mencionaste que no usemos otro modulo de node en este ejercicio
  // aparte del fs, sin embargo dejo comentado esto para adquirir el hábito de usar el
  // modulo path más seguido 🚀, ya que mencionaste que es una buena practica hacerlo siempre
  // que podamos, solo me gustaria saber si esta bien como lo estoy haciendo, siempre me traigo
  // el __dirname y luego los uno con join, no se si es lo correcto o si hay mejores formas.
  // const envPath = options.path ?? path.join(__dirname, '.env')

  // your code here
  const path = options.path ?? '.env'

  // secio-note: @midudev y una cosita más, fs.exists es un gran descubrimiento para mi
  // me parece genial este método, pero en la doc veo que no le tienen mucho cariño 🥺,
  // cual crees que sea la mejor forma de validar si un archivo existente antes de hacer algo
  // con él, crees que lo mejor sea manejar el error con cb o trycath, o a veces tiene sentido
  // usar metodos como open, stat, access, existsSync,exists(deprecado) y en que casos serían?
  const fileExists = fs.existsSync(path)
  if (!fileExists) return

  const fileContent = fs.readFileSync(path, { encoding: 'utf-8' }).trim()
  if (!fileContent) return

  const envVariables = fileContent.split(/[\r\n]+/)
  envVariables.forEach((variable) => {
    const [key, value] = variable.split(/=/, 2)
    process.env[key] = value.replace(/^(["'])(.*?)(\1)$/g, '$2')
  })
}

module.exports = { config }

// @midudev con respecto a la pregunta que nos formulaste
// "Aunque muchas veces recomendamos usar métodos asíncronos para leer ficheros,
// en este caso seguramente no sea la opción. ¿Te imaginas por qué?"

// Lo primero que me imagine es:
// Porque las variables de entorno desempeñan un papel crítico en nuestra aplicación,
// ya que se utilizan comúnmente para restringir o proporcionar acceso a diferentes
// partes de la misma.
// Por esta razón, es fundamental asegurarnos de que estén configuradas correctamente
// y para lograrlo debemos detener cualquier otro proceso asíncrono y esperar a que
// se establezcan correctamente las variables de entorno.

// Gracias por todo midu te deseo un lindo día !!! ✨
// PSDT: cuando empezé a programar dotenv me parecia un poco a mágia china, nunca me
// imaginé que algún día crearía un dotenv pequeñito 🥳.
