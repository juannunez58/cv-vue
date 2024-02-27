module.exports = {
  // Otras configuraciones de ESLint...
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        // Deshabilitar todas las reglas para archivos Vue
        // Puedes ajustar esto según tus necesidades específicas
        "eslint-disable": "off",
      },
    },
  ],
};
