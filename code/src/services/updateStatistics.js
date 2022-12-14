import statistics from 'src/pages/statistics'

const incrementStatistic = (inputId) => {
    statistics.updateNumbers(inputId)    
}


export default{
    incrementStatistic
}