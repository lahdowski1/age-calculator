import moment from 'moment';

function getYear(formattedDate){
    return moment(formattedDate).format('YYYY')
}
export default getYear