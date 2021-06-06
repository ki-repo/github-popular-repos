export function getLastWeekDateFormatted(){
    var today = new Date();
    var lastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
    return lastweek.toISOString().split('T')[0];
}