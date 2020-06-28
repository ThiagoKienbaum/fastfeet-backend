import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            street: Sequelize.STRING,
            number: Sequelize.INTEGER,
            complement: Sequelize.STRING,
            city: Sequelize.STRING,
            state: Sequelize.STRING(2),
            zip_code: Sequelize.INTEGER,
        },
        {
            sequelize,
        });
        return this;
    }
}

export default Recipients;