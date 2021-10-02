document.getElementById("divListas").style.display = 'none' // Al cargar la pagina, se OCULTARA la seccion(DIV) "divListas". 
const Cursos = [] // Array de objetos en el que se almacenaran los CURSOS creados durante el funcionamiento de la aplicacion.
const Usuarios = [] // Array de objetos en el que se almacenaran los USUARIOS creados durante el funcionamiento de la aplicacion.
const Alumnos = [] // Array de objetos en el que se almacenaran los ALUMNOS creados durante el funcionamiento de la aplicacion.
const Profesores = [] // Array de objetos en el que se almacenaran los PROFESORES creados durante el funcionamiento de la aplicacion.
import Curso,{Alumno,Profesor,Usuario} from "./clases.js" /* Importo las clases CURSO, ALUMNO, PROFESOR y USUARIO desde
"clases.js". */ 

const limpiarSelector = (opciones) =>
{
    for(let i=opciones.options.length; i>=0; i--)
    {
        opciones.remove(i)
    }
} // Funcion que limpia el SELECTOR indicado dentro del archivo "index.html".
const mostrarCurso = (cursos,curso) =>
{
    const hijo = document.createElement("div")
    hijo.innerHTML = `
    <img src = "${curso.getPoster()}"/>
    <h3>${curso.getNombre()}</h3>
    <p>Cantidad de Clases: ${curso.getClases()}</p>
    <p class="alumnos" style="margin-top:20px;color:rgb(47, 51, 47);font-weight:bold;font-size:12px">Total Alumnos: 0</p>`
    cursos.appendChild(hijo)
} // Funcion que imprime en pantalla(DOM) el curso agregado al array "CURSOS".
const agregarCurso = (cursos) =>
{
    const selector = document.getElementById("selectorCurso")
    limpiarSelector(selector)
    cursos.forEach(curso => {
        var opcion = document.createElement("option")
        opcion.text = `${curso.Nombre}`
        opcion.value = `${curso.Nombre}`
        selector.appendChild(opcion)
    })
} // Funcion que agrega al SELECTOR indicado dentro del archivo "index.html", el curso recientemente agregado al array "CURSOS".
const agregarUsuario = (tbody,usuario,tipo) =>
{
    var fila = document.createElement("tr")
    var datos = Object.values(usuario)
    for(let i=0; i<datos.length; i++)
    {
        if (i != datos.length-1)
        {
            var columna = document.createElement("td")
            var texto = document.createTextNode(datos[i])
            columna.appendChild(texto)
            fila.appendChild(columna)
        }
        else
        {
            for(let j=0; j<=1; j++)
            {
                if (j == 0)
                {
                    var columna = document.createElement("td")
                    var texto = document.createTextNode(tipo)
                    columna.appendChild(texto)
                    fila.appendChild(columna)
                }
                else
                {
                    var columna = document.createElement("td")
                    var texto = document.createTextNode(datos[i])
                    columna.appendChild(texto)
                    fila.appendChild(columna)
                }
            }
        }
    }
    tbody.appendChild(fila)
} /* Funcion que agrega una FILA a la TABLA correspondiente. Dentro de la misma se mostraran en pantalla los datos del 
USUARIO recientemente ingresado al array "USUARIOS".*/
const agregarAlumno = (tbody,alumno) => {
    var fila = document.createElement("tr")
    for(let i=0; i<alumno.length; i++)
    {
        var columna = document.createElement("td")
        var texto = document.createTextNode(alumno[i])
        columna.appendChild(texto)
        fila.appendChild(columna)
    }
    tbody.appendChild(fila)
} /* Funcion que agrega una FILA a la TABLA correspondiente. Dentro de la misma se mostraran en pantalla los datos del 
ALUMNO recientemente ingresado al array "ALUMNOS".*/
const agregarProfesor = (tbody,profesor) => {
    var fila = document.createElement("tr")
    for(let i=0; i<profesor.length; i++)
    {
        var columna = document.createElement("td")
        var texto = document.createTextNode(profesor[i])
        columna.appendChild(texto)
        fila.appendChild(columna)
    }
    tbody.appendChild(fila)
} /* Funcion que agrega una FILA a la TABLA correspondiente. Dentro de la misma se mostraran en pantalla los datos del 
PROFESOR recientemente ingresado al array "PROFESORES".*/
const agregarAlumno_Curso = (valorcurso,nombre) => {
    Cursos.forEach(curso => {
        if (curso.getNombre() == valorcurso)
        {
            curso.setInscriptos(nombre)
        }
    })
} // Funcion que agrega al array "CURSOS" el NOMBRE del ALUMNO que se haya inscripto al mismo.
const modificarCurso = (curso,totalAlumnos) => {
    var cursosDatos = document.getElementById("cursos").getElementsByTagName("h3")
    for(let i=0; i<cursosDatos.length; i++)
    {
        if (cursosDatos[i].innerText == curso)
        {
            var cursosTotal = document.getElementById("cursos").getElementsByClassName("alumnos")
            var cantidad = cursosTotal.item(i)
            cantidad.innerText = `Total Alumnos: ${totalAlumnos}`
            break
        }
}} // Funcion que modifica el "TOTAL DE ALUMNOS" que se haya creado al momento de ingresar el CURSO.
const buscarCurso = (cursoAlumno) => {
    for(let i=0; i<Cursos.length; i++)
    {
        if (Cursos[i].getNombre() == cursoAlumno)
        {
            var totalAlumnos = Cursos[i].getInscriptos().length
        }
    }
    return totalAlumnos
} // Funcion que busca el curso que el alumno haya elegido dentro del array "CURSOS".

const cursos = document.getElementById("cursos") /* Variable en la que se almacena la SECCION donde se mostraran en PANTALLA
TODOS los CURSOS que se agreguen durante el funcionamiento de la aplicacion. */
const html = new Curso("HTML DesdeCero", "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png", 12)
mostrarCurso(cursos,html)
const css = new Curso("CSS DesdeCero", "https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png", 20)
mostrarCurso(cursos,css)
const js = new Curso("JavaScript DesdeCero", "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg", 20)
mostrarCurso(cursos,js)
const cssAvanzado = new Curso("CSS Avanzado", "https://edteam-media.s3.amazonaws.com/courses/small/262e68b3-eea2-43f2-9e9a-febc106a8295.png", 22)
mostrarCurso(cursos,cssAvanzado)

const formSubmit = document.getElementById("formulario")
formSubmit.addEventListener("submit", e =>
{
    e.preventDefault()
    const target = e.target
    Cursos.push(new Curso(target.nombreCurso.value,target.direccionPoster.value,target.cantidadClases.value)) /* AGREGO UN NUEVO
    OBJETO AL ARRAY "CURSOS" */
    agregarCurso(Cursos)
    Cursos.forEach(curso => {
        if (Cursos.indexOf(curso) == Cursos.length-1)
        {
            mostrarCurso(cursos,curso)
        }
    })
})

/* Variables en las que se almacenan los "TBODY" donde se crearan las FILAS que mostraran en pantalla TODOS los CURSOS, 
ALUMNOS y PROFESORES que se CREEN durante el funcionamiento de la aplicacion. */
const tbody = document.getElementById("filaUsuario")
const studentbody = document.getElementById("filaAlumno")
const profesorbody = document.getElementById("filaProfesor")
//-----------------------------------------------------------

const userSubmit = document.getElementById("profesor")
userSubmit.addEventListener("submit", e =>
{
    e.preventDefault()
    const target = e.target
    Usuarios.push(new Usuario (target.nombreUsuario.value,target.apellidoUsuario.value,target.provinciaUsuario.value,
    target.localidadUsuario.value,target.domicilioUsuario.value,target.codigoUsuario.value,target.numeroUsuario.value,
    target.emailUsuario.value))
    if (target.tipoUsuario.value == "Profesor")
    {
        Profesores.push(new Profesor(target.nombreUsuario.value,target.apellidoUsuario.value,target.provinciaUsuario.value,
        target.localidadUsuario.value,target.domicilioUsuario.value,target.codigoUsuario.value,target.numeroUsuario.value,
        target.emailUsuario.value,target.cursoUsuario.value)) // AGREGO UN NUEVO OBJETO AL ARRAY "PROFESORES" 
        Profesores.forEach(profesor=> {
            if (Profesores.indexOf(profesor) == Profesores.length-1)
            {
                var tipo = target.tipoUsuario.value
                agregarUsuario(tbody,profesor,tipo)
                const datosProfesor = [] // Creo un ARRAY temporal
                datosProfesor.push(profesor.getNombre(),profesor.getApellido(),profesor.getNumero(),profesor.getContacto(),
                profesor.getCurso())
                agregarProfesor(profesorbody,datosProfesor)
            }
        })
    }
    else
    {
        Alumnos.push(new Alumno(target.nombreUsuario.value,target.apellidoUsuario.value,target.provinciaUsuario.value,
        target.localidadUsuario.value,target.domicilioUsuario.value,target.codigoUsuario.value,target.numeroUsuario.value,
        target.emailUsuario.value,target.cursoUsuario.value)) // AGREGO UN NUEVO OBJETO AL ARRAY "ALUMNOS" 
        Alumnos.forEach(alumno => {
            if (Alumnos.indexOf(alumno) == Alumnos.length-1)
            {
                var tipo = target.tipoUsuario.value
                agregarUsuario(tbody,alumno,tipo)
                agregarAlumno_Curso(alumno.getCurso(),alumno.getNombre())
                modificarCurso(alumno.getCurso(),buscarCurso(alumno.getCurso()))
                const datosAlumno = [] // Creo un array temporal
                datosAlumno.push(alumno.getNombre(),alumno.getApellido(),alumno.getNumero(),alumno.getContacto(),
                alumno.getCurso())
                agregarAlumno(studentbody,datosAlumno)
            }
        })
        
    }
})

const showList = document.getElementById("botonListas")
showList.addEventListener("click", e => {
    if (showList.value.includes("Mostrar"))
    {
        document.getElementById("divListas").style.display = 'block'
        showList.value = "Ocultar Listas"
    }
    else
    {
        document.getElementById("divListas").style.display = 'none'
        showList.value = "Mostrar Listas"
    }
})