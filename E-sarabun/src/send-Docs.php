<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <title>E-saraban</title>
</head>
<body>

    <div class="head-send">
        <div class="logo shadow-md">
            <img src="../public/png/logo.png" class="logo-img">
            <div class="h-1/2 border-l-2 border-gray-300"></div>
            <div>
                <p class="text-xl">องค์การบริหารระดับชาติ The Nax</p>
                <p class="text-sm text-gray-500">อ.เมืองนครสวรรค์ จ.นครสวรรค์</p>
            </div>
        </div>

        <div class="pers">
            <div class="pers-disp shadow-md">

                <!-- ตรงนี้ใส่ id ขอการรับค่า name -->
                <div class="pers-info">
                    <p>mr.Hello Test</p>
                    <p class="text-sm text-gray-500">เจ้าหน้าที่วิเคราะห์ข้อมูล</p>
                </div>

                <!-- ตรงนี้ใส่ id การ input รูป -->
                <div class="pesr-img"><img src="../public/png/Pic.png" style="width: 40px; height: 40px;"></div>

                <!-- ตรงนี้ log-out -->
                <div class="pers-butt"><i class="fa-solid fa-angle-down"></i></div>
            </div>
            <div id="countdown" class="clock"></div>
        </div>
    </div>
    
    <div class="body-part"></div>


<script src="../script/script.js"></script>
</body>
</html>