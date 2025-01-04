function setupImagePreview(id) {
  const dropZone = document.getElementById(`drop-zone-${id}`);
  const fileInput = document.getElementById(`fileInput-${id}`);
  const imagePreview = document.getElementById(`image-preview-${id}`);
  const placeholderText = document.getElementById(`placeholder-text-${id}`);
  const charCount = document.getElementById(`char-count-${id}`);
  const imageSize = document.getElementById(`image-size-${id}`);
  const deleteBtn = document.getElementById(`delete-${id}`);

  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "cover";
          placeholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("bg-blue-200", "shadow-lg", "border-white");
  });

  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("bg-blue-200", "shadow-lg", "border-white");

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        alert("ไฟล์มีขนาดใหญ่เกิน 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          imagePreview.style.backgroundImage = `url(${e.target.result})`;
          imagePreview.style.backgroundSize = "cover";
          placeholderText.style.display = "none";
          imageSize.textContent = `ขนาดภาพ: ${img.width}px x ${img.height}px`; // แสดงขนาดภาพในพิกเซล
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  deleteBtn.addEventListener("click", () => {
    imagePreview.style.backgroundImage = "";
    placeholderText.style.display = "flex";
    fileInput.value = ''; // ล้างไฟล์ที่เลือก
    charCount.textContent = ''; // ล้างจำนวนตัวอักษร
    imageSize.textContent = ''; // ล้างขนาดของภาพ
  });

  // เพิ่มการนับตัวอักษรในลิงก์
  fileInput.addEventListener("input", (event) => {
    const imageUrl = event.target.value;
    charCount.textContent = `จำนวนตัวอักษร: ${imageUrl.length}`; // นับจำนวนตัวอักษรในลิงก์
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
