
function calculo(event){
    alert('I´m working bitch!!')
    // reset();
    var ingreso = document.getElementById('ingreso').value;
    var debPrevio = document.getElementById('dbt-pre').value;
    var debFinal = document.getElementById('dbt-fin').value;
    var ceroPrevio = document.getElementById('cdt-0-pre').value;
    var ceroFinal = document.getElementById('cdt-0-fin').value;
    var quincePrevio = document.getElementById('cdt-15-pre').value;
    var quinceFinal = document.getElementById('cdt-15-fin').value;
    var sixtyPrevio = document.getElementById('cdt-60-pre').value;
    var sixtyFinal = document.getElementById('cdt-60-fin').value;

    debPrevio = ingreso * ((3.29*1.21)/100);
    debFinal = ingreso - debPrevio;
    ceroPrevio = ingreso * ((5.79*1.21)/100);
    ceroFinal = ingreso - ceroPrevio;
    quincePrevio = ingreso * ((3.39*1.21)/100);
    quinceFinal = ingreso - quincePrevio;
    sixtyPrevio = ingreso * ((0*1.21)/100);
    sixtyFinal = ingreso - sixtyPrevio;
    document.getElementById('dbt-pre').value = debPrevio.toFixed(3);
    document.getElementById('dbt-fin').value = debFinal;
    document.getElementById('cdt-0-pre').value = ceroPrevio;
    document.getElementById('cdt-0-fin').value = ceroFinal;
    document.getElementById('cdt-15-pre').value = quincePrevio;
    document.getElementById('cdt-15-fin').value = quinceFinal;
    document.getElementById('cdt-60-pre').value = sixtyPrevio;
    document.getElementById('cdt-60-fin').value = sixtyFinal;


}

function reset(){
    document.getElementById('dbt-pre').value = none;
    document.getElementById('dbt-fin').value = none;
    document.getElementById('cdt-0-pre').value = none;
    document.getElementById('cdt-0-fin').value = none;
    document.getElementById('cdt-15-pre').value = none;
    document.getElementById('cdt-15-fin').value = none;
    document.getElementById('cdt-60-pre').value = none;
    document.getElementById('cdt-60-fin').value = none;
}
