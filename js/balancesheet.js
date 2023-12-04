function hide1(name){
    const madlib = document.getElementById(name);
    madlib.classList.replace("d-grid","d-none");
}

function show1(name){
    const madlib = document.getElementById(name);
    madlib.classList.replace("d-none","d-grid");
}

function calculate(){
    var tCA=0;
    var tCAStr='Total Current Assets: $';
    var tIPE=0;
    var tIPEStr='Total Investment Property & Equipment: $';
    var tIntang=0;
    var tIntangStr='Total Intangibles: $';
    var tCL=0;
    var tCLStr='Total Current Liabilities: $';
    var tLTL=0;
    var tLTLStr='Total Long-Term Liabilites: $';
    var tAsset=0;
    var tAssetStr='Total Assets: $';
    var tLiable=0;
    var tLiableStr='Total Liabilities: $';
    var tPos=0;
    var tPosStr='Position: $';

    tCA+=Number(document.getElementById('cash').value);
    tCA+=Number(document.getElementById('inventory').value);
    tCA+=Number(document.getElementById('supplies').value);
    tCA+=Number(document.getElementById('tempInvestsCA').value);
    tCAStr=tCAStr.concat(tCA.toFixed(2));
    document.getElementById('tCA').innerHTML = tCAStr;

    tIPE+=Number(document.getElementById('land').value);
    tIPE+=Number(document.getElementById('buildImprov').value);
    tIPE+=Number(document.getElementById('equipment').value);
    tIPE+=Number(document.getElementById('tempInvestsIPE').value);
    tIPEStr=tIPEStr.concat(tIPE.toFixed(2));
    document.getElementById('tIPE').innerHTML = tIPEStr;

    tIntang+=Number(document.getElementById('tNames').value);
    tIntang+=Number(document.getElementById('gWill').value);
    tIntangStr=tIntangStr.concat(tIntang.toFixed(2));
    document.getElementById('tIntang').innerHTML = tIntangStr;

    tCL+=Number(document.getElementById('accounts').value);
    tCL+=Number(document.getElementById('notesCL').value);
    tCL+=Number(document.getElementById('interest').value);
    tCL+=Number(document.getElementById('wages').value);
    tCL+=Number(document.getElementById('accExp').value);
    tCLStr=tCLStr.concat(tCL.toFixed(2));
    document.getElementById('tCL').innerHTML = tCLStr;

    tLTL+=Number(document.getElementById('notesLTL').value);
    tLTL+=Number(document.getElementById('bonds').value);
    tLTLStr=tLTLStr.concat(tLTL.toFixed(2));
    document.getElementById('tLTL').innerHTML = tLTLStr;

    tAsset+=Number(tCA);
    tAsset+=Number(tIPE);
    tAsset+=Number(tIntang);
    tAssetStr=tAssetStr.concat(tAsset.toFixed(2));
    document.getElementById('tAsset').innerHTML = tAssetStr;
    document.getElementById('tAsset').className = 'h4';

    tLiable+=Number(tCL);
    tLiable+=Number(tLTL);
    tLiableStr=tLiableStr.concat(tLiable.toFixed(2));
    document.getElementById('tLiable').innerHTML = tLiableStr;

    tPos = Number(tAsset) - Number(tLiable);
    tPosStr=tPosStr.concat(tPos.toFixed(2));
    document.getElementById('pos').innerHTML = tPosStr;

}