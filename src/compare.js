function compare() {

    let deptA = a.department.toUpperCase();
    let deptB = b.department.toUpperCase();

    let comparison = 0;
    if (deptA > deptB) {
        comparison = 1;
    } else if (deptA < deptB) {
        comparison = -1;
    }
    return comparison;

}

export default compare;