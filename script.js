function calculateRisk() {
    const gender = parseInt(document.getElementById('gender').value);
    const bloodPressure = parseInt(document.getElementById('bloodPressure').value);
    const metabolismDisorder = parseInt(document.getElementById('metabolismDisorder').value);
    const ldl = parseInt(document.getElementById('ldl').value);
    const hdl = parseInt(document.getElementById('hdl').value);
    const smoking = parseInt(document.getElementById('smoking').value);
    const ageRange = parseInt(document.getElementById('ageRange').value);

    const riskScoreTo10YRisk = [
        [1, 1, 1.7, 3.4],
        [1, 1, 1.9, 3.9],
        [1, 1, 2.2, 4.5],
        [1, 1.1, 2.6, 5.2],
        [1, 1.3, 3, 6],
        [1, 1.4, 3.4, 6.9],
        [1, 1.7, 3.9, 7.9],
        [1, 1.9, 4.5, 9.1],
        [1.1, 2.2, 5.2, 10.4],
        [1.3, 2.6, 6, 11.9],
        [1.4, 3, 6.9, 13.6],
        [1.7, 3.4, 7.9, 15.5],
        [1.9, 3.9, 9.1, 17.7],
        [2.2, 4.5, 10.4, 20.2],
        [2.6, 5.2, 11.9, 22.9],
        [3, 6, 13.6, 25.9],
        [3.4, 6.9, 15.5, 29.3],
        [3.9, 7.9, 17.7, 33],
        [4.5, 9.1, 20.2, 37],
        [5.2, 10.4, 22.9, 41.1]
    ];

    let riskScore = gender + bloodPressure + metabolismDisorder + ldl + hdl + (smoking * 2);
    let tenYearRisk = riskScoreTo10YRisk[riskScore][ageRange];

    document.getElementById('riskScore').innerText = riskStreamlilink_textnkScore;
    document.getElementById('tenYearRisk').innerText = tenYearRisk.toFixed(1);
}
