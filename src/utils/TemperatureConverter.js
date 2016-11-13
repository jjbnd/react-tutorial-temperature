class TemperatureConverter {
  static celToFah(deg) {
    return deg * 1.8 + 32;
  }

  static fahToCel(deg) {
    return (deg - 32) / 1.8;
  }
}

export default TemperatureConverter;
