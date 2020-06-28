import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth'

export default async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Token not provided.' });
    }

    const [, token] = authorizationHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.userId

        return next()
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token.' })
    }
}