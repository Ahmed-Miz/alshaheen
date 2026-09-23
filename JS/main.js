document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        // منع الصفحة من إعادة التحميل عند الضغط على إرسال
        e.preventDefault();

        // استخراج القيم التي كتبها العميل من الحقول
        let name = document.getElementById('clientName').value;
        let contact = document.getElementById('projectType').value;
        let message = document.getElementById('clientMessage').value;

        let whatsappNumber = "05376472395"; 

        // تجهيز نص الرسالة وتنسيقها بشكل جميل ومرتب
        let text = `مرحباً، أرغب في طلب استشارة أو خدمة:%0a` +
                   `*الاسم:* ${name}%0a` +
                   `*وسيلة التواصل:* ${contact}%0a` +
                   `*التفاصيل:* ${message}`;

        // فتح رابط الواتساب في تبويب جديد
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(whatsappURL, '_blank');
    });
// الحصول على عناصر النافذة
    var modal = document.getElementById("universalModal");
    var modalImg = document.getElementById("modalImageDisplay");
    var span = document.getElementsByClassName("close-modal")[0];

    // اختيار كل الصور التي تحمل الكلاس clickable-img
    var images = document.querySelectorAll(".clickable-img");

    // المرور على كل صورة وإعطاؤها أمر الفتح عند الضغط
    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; // وضع رابط الصورة التي تم الضغط عليها داخل النافذة
        }
    });

    // عند الضغط على زر الإغلاق (X)، اغلق النافذة
    span.onclick = function() {
        modal.style.display = "none";
    }

    // عند الضغط في أي مكان خارج الصورة بالخلفية السوداء، اغلق النافذة
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    