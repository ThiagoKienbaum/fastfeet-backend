import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            complement: Yup.string(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            zip_code: Yup.number().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const {id, name, street, number, complement, city, state, zip_code } = await Recipients.create(req.body);
        return res.json({
            id,
            name,
            street,
            number,
            complement,
            city,
            state,
            zip_code,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            complement: Yup.string(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            zip_code: Yup.number().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }
        
        const recipient = await Recipients.findByPk(req.body.id)

        if (!recipient) {
            res.status(400).json({ error: 'Recipient does not exists' })
        }
        
        const {id, name, street, number, complement, city, state, zip_code } = await Recipients.update(req.body);
        return res.json({
            id,
            name,
            street,
            number,
            complement,
            city,
            state,
            zip_code,
        });
    }
}

export default new RecipientsController();