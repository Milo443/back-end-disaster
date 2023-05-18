import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Persona', {
    nombre: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.NUMBER
    },
    telefono: {
        type: DataTypes.NUMBER
    },
    lugar: {
        type: DataTypes.STRING
    },
    discapacidad: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Producto;