function setupImagePreview(id) {
  const dropZone = document.getElementById(`drop-zone-${id}`);
  const fileInput = document.getElementById(`fileInput-${id}`);
  const imagePreview = document.getElementById(`image-preview-${id}`);
  const placeholderDropText = document.getElementById(`placeholder-drop-${id}`);
  const placeholderText = document.getElementById(`placeholder-text-${id}`);
  const modalImagePreview = document.getElementById(`image-preview-${id}-modal`);
  const modalPlaceholderText = document.getElementById(`placeholder-text-${id}-modal`);
  const charCount = document.getElementById(`char-count-${id}`);
  const imageSize = document.getElementById(`image-size-${id}`);
  const fileSize = document.getElementById(`file-size-${id}`); // ข้อความแสดงขนาดไฟล์
  const imageUrlInput = document.getElementById(`image-url-${id}`); // input สำหรับ image URL
  const deleteBtn = document.getElementById(`delete-${id}`);
  const checkboxDel = document.getElementById(`check-del-${id}`);

  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2); // แปลงขนาดไฟล์เป็น MB
      fileSize.textContent = `ขนาดไฟล์: ${fileSizeMB} MB`; // แสดงขนาดไฟล์

      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
          imagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
          imagePreview.style.backgroundColor = "white";
          
          modalImagePreview.style.backgroundImage = `url(${e.target.result})`; // แสดงภาพใน modal
          modalImagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
          modalImagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
          modalImagePreview.style.backgroundColor = "white";
          
          placeholderText.style.display = "none";
          modalPlaceholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  imageUrlInput.addEventListener("input", (event) => {
    const imageUrl = event.target.value;
    charCount.textContent = `จำนวนตัวอักษร: ${imageUrl.length}`; // นับจำนวนตัวอักษรในลิงก์

    const img = new Image();
    img.onload = () => {
      imagePreview.style.backgroundImage = `url(${imageUrl})`;
      imagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
      imagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
      imagePreview.style.backgroundColor = "white";

      modalImagePreview.style.backgroundImage = `url(${imageUrl})`; // แสดงภาพใน modal
      modalImagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
      modalImagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
      modalImagePreview.style.backgroundColor = "white";

      placeholderText.style.display = "none";
      modalPlaceholderText.style.display = "none";

      imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
    };
    img.src = imageUrl;
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "ปล่อยไฟล์เพื่ออัปโหลด";
    placeholderDropText.style.color = "white";
  });

  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "วางไฟล์ที่นี่หรือคลิกเพื่อเลือกไฟล์";
    placeholderDropText.style.color = "";
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
    placeholderDropText.textContent = "คลิกเพื่อเลือกไฟล์";
    placeholderDropText.style.color = "";

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2); // แปลงขนาดไฟล์เป็น MB
      fileSize.textContent = `ขนาดไฟล์ ${fileSizeMB} MB`; // แสดงขนาดไฟล์

      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
          imagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
          imagePreview.style.backgroundColor = "white";

          modalImagePreview.style.backgroundImage = `url(${e.target.result})`; // แสดงภาพใน modal
          modalImagePreview.style.backgroundSize = "contain"; // เปลี่ยนเป็น contain
          modalImagePreview.style.backgroundRepeat = "no-repeat"; // ไม่ทำการทำซ้ำ
          modalImagePreview.style.backgroundColor = "white";

          placeholderText.style.display = "none";
          modalPlaceholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  deleteBtn.addEventListener("click", () => {
    imagePreview.style.backgroundImage = "";
    modalImagePreview.style.backgroundImage = ""; // ลบภาพใน modal
    imagePreview.style.backgroundColor = "";
    modalImagePreview.style.backgroundColor = "";
    placeholderText.style.display = "flex";
    modalPlaceholderText.style.display = "flex";
    placeholderDropText.textContent = "คลิกเพื่อเลือกไฟล์";
    fileSize.textContent = ""; // ลบข้อความขนาดไฟล์เมื่อกดลบ
    imageUrlInput.value = "";
    fileInput.value = '';
    charCount.textContent = '0/255 ตัวอักษร';
    imageSize.textContent = '';
    checkboxDel.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkboxDel.style.backgroundColor = "#67a9f8";
  });
}

// เรียกใช้ฟังก์ชันสำหรับแต่ละส่วน
["A", "B", "C", "D", "E"].forEach((id) => setupImagePreview(id));


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalBtn');

  // เปิด Modal
  openModalButton.addEventListener('click', function () {
    modal.classList.remove('hidden-modal');
  });

  // ปิด Modal
  closeModalButton.addEventListener('click', function () {
    modal.classList.add('hidden-modal');
  });

  // ปิด Modal เมื่อคลิกนอกพื้นที่ Modal
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.add('hidden-modal');
    }
  });
});
