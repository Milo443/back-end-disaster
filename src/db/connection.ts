import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('registro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;