exports.getDate = function() {

    let today = new Date()

    let options = {
        weekday: "long",
        day: "numeric",
        month:"long",
    }
    
    return today.toLocaleDateString("pt-BR",options)
}

exports.getDay = function() {
    let today = new Date()
    let options = {
        weekday: "long",
    }
    return today.toLocaleDateString("fr-FR",options)
}