import {StatusCodes} from 'http-status-codes'

const validateDob = (req, res, next) => {
    const { query: { dob } } = req; //destructure dob from query params

    if(!dob) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: 'error',
            error: 'Date of Birth is missing'
        });
    }

    const convertedDob = new Date(Number(dob));
    if(isNaN(convertedDob.getTime())){
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: 'error',
            error: 'Time stamp is invalid'
        });
       
    }
    req.convertedDob = convertedDob;
    next();
}
export default validateDob;
