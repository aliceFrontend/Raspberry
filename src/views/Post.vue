<template>
    <div class="postDetails__wrapper">
        <div class="postDetails">
            <div class="postDetails__title">
                Mengenai benar dan salah pada UI Design
            </div>
            <div class="postDetails__author">
                <div class="postDetails__profile">
                    <div class="postDetails__image">
                    <!-- <img src="" alt=""> -->
                    </div>
                </div>
                <div class="postDetails__info">
                    <div class="postDetails__name">
                        Dwinawan Hariwijaya
                    </div>
                    <div class="postDetails__data">
                        Maret 16, 2021
                    </div>
                </div>
            </div>
            <div class="postDetails__body">
                <p>Sudah beberapa hari ini saya membuat design class. Konsep nya adalah mengerjakan task harian, review dan ngobrol
                Suatu hari ada peserta yang bertanya "Mas saya dulu bikin design dashboard kayak gini, kira2 gimana ya?" sambil menunjukkan design dashboard yang pernah dibuat.
                Setelah melihat design dashboard nya, rasanya saya mau bilang "Ini salah, harusnya seperti ini..."
                Tapi saya langsung berpikir... design ini kan bukan ilmu pasti, siapa yang berhak menentukan apakah design seperti ini salah atau benar?
                </p>
                <div class="postDetails__separation">• • •</div>   
                <p>Setelah berpikir beberapa saat, akhir nya saya menjawab pertanyaan itu dengan memberikan pandangan lain.
                Sebelum menjawab pertanyaan nya, saya menduplikasi dulu design nya, lalu saya ubah beberapa bagian nya.
                "Kalau untuk dashboard seperti ini, saya akan membuat design nya seperti ini" (sambil menunjukkan beberapa perubahan design)
                "Alasan saya membuat design seperti ini karena... bla bla bla..." (menjelaskan alasan dibalik pembuatan design)
                "Design yang kamu bikin enggak salah, user tetep bisa memakai nya. Jika menggunakan design mu, maka cara user memakai nya bakal seperti ini..., Jika menggunakan design saya, maka cara user memakai nya seperti itu..." (menjelaskan bagaimana nanti nya user memakai design yang dia buat dan yang saya buat)
                </p>
                <div class="postDetails__separation">• • •</div>
                <p>Mungkin kalau saya menjawab "Salah" , dia tidak akan menggunakan design itu lagi, padahal bisa jadi design itu akan cocok jika kondisi nya berbeda.
                </p>
                <div class="postDetails__separation">• • •</div>
                <p>Menurut saya design bukan tentang benar atau salah, tapi menyesuaikan dengan konteks dan kebutuhan.</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
    computed: mapState(['posts'])
};
</script>
<style>
.postDetails__wrapper{
    background-image: url('./../assets/images/bgarticle9.svg');
    background-color: #E3E6EC;
    background-repeat: no-repeat;
    background-position: top center;
}
.postDetails{
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.postDetails__title{
    font: 600 100px/110px 'Poppins', sans-serif;
    line-height: 100px;
    letter-spacing: -1px;
    max-width: 667px;
    padding: 77px 0 30px 0;

}
.postDetails__author{
    margin: 0 0 80px 0;
    align-items: center;
    display: flex;
}
.postDetails__profile{
    width: 60px;
    height: 60px;
    /* border: 2px solid red; */
    background: -webkit-linear-gradient(left top, rgb(216,15,233) 0%, rgb( 242 ,36 ,23) 100%);
    transition: all 0.4s ease-in-out;
    border-radius: 50%;
    margin: 0 15px 0 0;
}
.postDetails__name{
    font: 500 15px/15px 'Poppins', sans-serif;
    letter-spacing: 0.3px;
    background: -webkit-linear-gradient(#F03226, #C416D3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 10px 0;
}
.postDetails__data{
    font: 200 12px/12px 'Poppins', sans-serif;
    letter-spacing: 0.5px;
    color: #000000;
    opacity: 0.5;
}
.postDetails__body p{
    font: 200 20px/35px 'Poppins', sans-serif; 
    letter-spacing: 0.3px;
    color: #323947;
}
.postDetails__separation{
    font: 200 16px/35px 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #323947;
    margin: 30px 0px;
    text-align: center;
}
</style>