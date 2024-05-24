function calculateRisk() {
    const gender = parseInt(document.getElementById('gender').value);
    const bloodPressure = parseInt(document.getElementById('bloodPressure').value) || 0;
    const metabolismDisorder = parseInt(document.getElementById('metabolismDisorder').value);
    const ldl = parseInt(document.getElementById('ldl').value) || 0;
    const hdl = parseInt(document.getElementById('hdl').value) || 0;
    const smoking = parseInt(document.getElementById('smoking').value);

    let score = gender;

    if (bloodPressure < 120) score += 0;
    else if (bloodPressure < 130) score += 1;
    else if (bloodPressure < 140) score += 2;
    else if (bloodPressure < 160) score += 3;
    else score += 4;

    score += metabolismDisorder;

    if (ldl < 120) score += 0;
    else if (ldl < 140) score += 1;
    else if (ldl < 160) score += 2;
    else score += 3;

    if (hdl >= 60) score += 0;
    else if (hdl >= 40) score += 1;
    else score += 2;

    score += smoking * 2;

    document.getElementById('riskScore').innerText = score.toString();
}
