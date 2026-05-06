document.querySelector("#btn_Gato").addEventListener('click',
    function(){
        let C = document.querySelector('#loading')
        C.innerText = "Carregando..."
        var arr=[]
        var arr_Prom=[]
        var img_1 =document.querySelector("#img_1")
        var img_2 =document.querySelector("#img_2")
        var img_3 =document.querySelector("#img_3")
        var img_4 =document.querySelector("#img_4")
        var img_5 =document.querySelector("#img_5")
        var img_6 =document.querySelector("#img_6")
        var img_7 =document.querySelector("#img_7")
        var img_8 =document.querySelector("#img_8")
        var img_9 =document.querySelector("#img_9")
        var img_10 =document.querySelector("#img_10")
        var img_11 =document.querySelector("#img_11")
        var img_12 =document.querySelector("#img_12")
        var img_13 =document.querySelector("#img_13")
        var img_14 =document.querySelector("#img_14")
        var img_15 =document.querySelector("#img_15")
        for(let i=1; i<=15; i++){
            var Prom =fetch("https://api.thecatapi.com/v1/images/search")
            .then((A)=>A.json())
            .then((A)=>arr.push(A[0].url))
            arr_Prom.push(Prom)
        }
        Promise.all(arr_Prom).then(function(){
            img_1.setAttribute('src', arr[0])
            img_2.setAttribute('src', arr[1])
            img_3.setAttribute('src', arr[2])
            img_4.setAttribute('src', arr[3])
            img_5.setAttribute('src', arr[4])
            img_6.setAttribute('src', arr[5])
            img_7.setAttribute('src', arr[6])
            img_8.setAttribute('src', arr[7])
            img_9.setAttribute('src', arr[8])
            img_10.setAttribute('src', arr[9])
            img_11.setAttribute('src', arr[10])
            img_12.setAttribute('src', arr[11])
            img_13.setAttribute('src', arr[12])
            img_14.setAttribute('src', arr[13])
            img_15.setAttribute('src', arr[14])
            C.innerText = "Gerar Foto"
        })
    }
)