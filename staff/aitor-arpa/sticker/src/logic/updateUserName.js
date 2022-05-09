/* Creo funcion donde le pasare por parametros el nombre y el nuevo nombre recogidos por los input 
del formulario de UpdateUserName ( faltara 1 input en su componente).
Condiciones --> -Que el nombre sea diferente al Nuevo nombre 
                -Que el Nuevo nombre sea diferente a los introducidos en la base de datos (OPCIONAL) 
si todo se cumple igualo el nombre al nuevo nomber devuelvo null conforme todo va bien */
function updateUserName (username, newName, callback)  {

    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`Your "${newName}" is the same "${username}"`))
        return
    }

    user.name = newName
    callback(null)
}


