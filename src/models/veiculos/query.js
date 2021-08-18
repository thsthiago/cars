module.exports = {
  allVehicles: ` query {
    allVehicles {
      id
      modelo
      versao
      preco
      imageprincipal {
        url
      }
    }

    _allVehiclesMeta {
      count
    }
  }`
}
