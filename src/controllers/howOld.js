import getYear from '../utils'
import {StatusCodes} from 'http-status-codes'

const howoldController = (req, res) => {
    const age = getYear() - getYear(req.convertedDob)
    if(age < 0) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: 'error',
            error: 'Invalid date of Birth. You cannot enter a later date than today'
        })
    }else{
        res.status(StatusCodes.OK).json({
            status: 'success', 
            age
        }) 
    }

} 

export default howoldController;
