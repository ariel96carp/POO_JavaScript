 export default class Curso{
    constructor(nombre,poster,clases,inscriptos)
    {
        this.Nombre = nombre,
        this.Poster = poster,
        this.Clases = clases,
        this.Inscriptos = []
    }
    getNombre()
    {
        return this.Nombre
    }
    getPoster()
    {
        return this.Poster
    }
    getClases()
    {
        return this.Clases
    }
    getInscriptos()
    {
        return this.Inscriptos
    }
    setNombre(newName)
    {
        this.Nombre = newName
    }
    setPoster(newPoster)
    {
        this.Poster = newPoster
    }
    setClases(newClases)
    {
        this.Clases = newClases
    }
    setInscriptos(newInscriptos)
    {
        this.Inscriptos.push(newInscriptos)
    }
}

export class Usuario{
    constructor(nombre, apellido, provincia, localidad, domicilio, codigopostal, numero, contacto)
    {
        this.Nombre = nombre,
        this.Apellido = apellido,
        this.Provincia = provincia,
        this.Localidad = localidad,
        this.Domicilio = domicilio,
        this.Codigo_Postal = codigopostal,
        this.Numero = numero,
        this.Contacto = contacto
    }
    getNombre()
    {
        return this.Nombre
    }
    getApellido()
    {
        return this.Apellido
    }
    getProvincia()
    {
        return this.Provincia
    }
    getLocalidad()
    {
        return this.Localidad
    }
    getDomicilio()
    {
        return this.Domicilio
    }
    getCodigo_Postal()
    {
        return this.Codigo_Postal
    }
    getNumero()
    {
        return this.Numero
    }
    getContacto()
    {
        return this.Contacto
    }
    setNombre(newName)
    {
        this.Nombre = newName
    }
    setApellido(newSurname)
    {
        this.Apellido = newSurname
    }
    setProvincia(newProvince)
    {
        this.Provincia = newProvince
    }
    setLocalidad(newLocalidad)
    {
        this.Localidad = newLocalidad
    }
    setDomicilio(newAddress)
    {
        this.Domicilio = newAddress
    }
    setCodigo_Postal(newPostalCode)
    {
        this.Codigo_Postal = newPostalCode
    }
    setNumero(newNumber)
    {
        this.Numero = newNumber
    }
    setContacto(newEmail)
    {
        this.Contacto = newEmail
    }
}

export class Alumno extends Usuario{
    constructor(nombre, apellido, provincia, localidad, domicilio, codigopostal, numero, contacto,curso_alumno)
    {
        super(nombre, apellido, provincia, localidad, domicilio, codigopostal, numero, contacto)
        this.Curso_Tomado = curso_alumno
    }
    getCurso()
    {
        return this.Curso_Tomado
    }
    setCurso(newCourse)
    {
        this.Curso_Tomado = newCourse
    }
}

export class Profesor extends Usuario{
    constructor(nombre, apellido, provincia, localidad, domicilio, codigopostal, numero, contacto,curso_dictado)
    {
        super(nombre, apellido, provincia, localidad, domicilio, codigopostal, numero, contacto)
        this.Curso_Dictado = curso_dictado
    }
    getCurso()
    {
        return this.Curso_Dictado
    }
    setCurso(newCourse){
        this.Curso_Dictado = newCourse
    }
}
