const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const secret = 'mysecretkey';

exports.login = async (req, res) => {
  // Obtener el email y contraseña del cuerpo de la solicitud
  const { email, password } = req.body;

  try {
    // Buscar al usuario por email
    const user = await User.findOne({ email });

    // Si el usuario no existe, enviar un error
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const match = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide, enviar un error
    if (!match) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Crear un token JWT
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

    // Enviar el token en la respuesta
    res.json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

exports.verifyToken = (req, res, next) => {
  // Obtener el token de la cabecera de la solicitud
  const token = req.headers.authorization;

  try {
    // Verificar el token
    const decoded = jwt.verify(token, secret);

    // Agregar el id del usuario al objeto de solicitud
    req.userId = decoded.userId;

    // Continuar al siguiente controlador
    next();

  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Token inválido' });
  }
};