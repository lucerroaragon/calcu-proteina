class Cal_proteina {
  Sedentario(peso) {
    return peso * 0.9;
  }

  Poco_activo(peso) {
    return peso * 1.2;
  }

  Activo(peso) {
    return peso * 1.6;
  }

  Muy_activo(peso) {
    return peso * 1.9;
  }
}
